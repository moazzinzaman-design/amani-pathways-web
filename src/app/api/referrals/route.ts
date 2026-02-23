import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { resend, getReferralEmailHtml } from "@/lib/resend";

interface ReferralBody {
    referrerName?: string;
    localAuthority?: string;
    referrerEmail?: string;
    phoneNumber?: string;
    message?: string;
    turnstileToken?: string;
}

// Basic in-memory rate limit store (Note: In a serverless environment like Vercel, 
// this resets per instance/deployment. For true global rate limiting, use Redis/KV).
const rateLimitStore = new Map<string, { count: number; expiresAt: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 referrals
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // per hour

export async function POST(request: NextRequest) {
    try {
        // --- Rate Limiting ---
        // Get IP directly from headers (Vercel/Cloudflare aware)
        const ip = request.headers.get("x-forwarded-for") || '127.0.0.1';
        const now = Date.now();

        const currentLimit = rateLimitStore.get(ip);
        if (currentLimit && currentLimit.expiresAt > now) {
            if (currentLimit.count >= RATE_LIMIT_MAX) {
                return NextResponse.json(
                    { success: false, error: "Too many referrals submitted from this IP. Please try again later." },
                    { status: 429 }
                );
            }
            rateLimitStore.set(ip, { ...currentLimit, count: currentLimit.count + 1 });
        } else {
            rateLimitStore.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
        }

        const body: ReferralBody = await request.json();

        const { referrerName, localAuthority, referrerEmail, phoneNumber, message, turnstileToken } =
            body;

        // --- Validation ---
        const errors: string[] = [];

        if (!turnstileToken) {
            return NextResponse.json(
                { success: false, error: "Security check failed. Please refresh and try again." },
                { status: 400 }
            );
        }

        // Verify Turnstile Token
        const turnstileVerifyRes = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA'}&response=${turnstileToken}`,
            }
        );

        const turnstileData = await turnstileVerifyRes.json();

        if (!turnstileData.success) {
            return NextResponse.json(
                { success: false, error: "Security verification failed." },
                { status: 400 }
            );
        }

        if (!referrerName || referrerName.trim().length < 2) {
            errors.push("Referrer name is required (minimum 2 characters).");
        }

        if (!localAuthority || localAuthority.trim().length < 2) {
            errors.push("Local authority is required.");
        }

        if (!referrerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(referrerEmail)) {
            errors.push("A valid email address is required.");
        }

        if (!phoneNumber || !/^[\d\s+()-]{7,20}$/.test(phoneNumber.trim())) {
            errors.push("A valid phone number is required.");
        }

        if (!message || message.trim().length < 10) {
            errors.push("Message must be at least 10 characters.");
        }

        if (errors.length > 0) {
            return NextResponse.json(
                { success: false, error: errors.join(" ") },
                { status: 400 }
            );
        }

        // In production, insert into Supabase Database
        const { error: dbError } = await supabaseAdmin
            .from('referrals')
            .insert({
                referrer_name: referrerName!.trim(),
                referrer_email: referrerEmail!.trim(),
                referrer_phone: phoneNumber!.trim(),
                referrer_organization: localAuthority!.trim(),
                referrer_role: 'Quick Referral', // From basic form
                yp_first_name: 'Pending', // From basic form
                yp_last_name: 'Pending',
                yp_dob: '2010-01-01', // Dummy data for required fields from basic form
                placement_type: 'Supported Accommodation',
                funding_authority: localAuthority!.trim(),
                expected_start_date: new Date().toISOString().split('T')[0],
                additional_info: message!.trim()
            });

        if (dbError) {
            console.error("Supabase Error:", dbError);
            return NextResponse.json(
                { success: false, error: "Database error. Failed to save referral. Please try again." },
                { status: 500 }
            );
        }

        // Send Confirmation Email
        try {
            const isEnquiry = body.message && body.message.toLowerCase().includes("enquiry"); // Rough heuristic 

            await resend.emails.send({
                from: "Amani Pathways <onboarding@resend.dev>", // Must use onboarding domain until amanipathways.co.uk is verified on Resend
                to: referrerEmail!.trim(),
                replyTo: "amanipathways@outlook.com",
                subject: isEnquiry ? "Enquiry Received - Amani Pathways" : "Referral Received - Amani Pathways",
                html: getReferralEmailHtml(referrerName!.trim(), !!isEnquiry)
            });
        } catch (emailError) {
            console.error("Failed to send confirmation email:", emailError);
            // We do not fail the whole request if the email fails, since the database insert succeeded.
        }

        return NextResponse.json(
            {
                success: true,
                message:
                    "Referral received successfully. Our team will respond within 24 hours.",
            },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { success: false, error: "Invalid request. Please try again." },
            { status: 400 }
        );
    }
}
