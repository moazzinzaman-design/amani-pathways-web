import { NextRequest, NextResponse } from "next/server";

interface ReferralBody {
    referrerName?: string;
    localAuthority?: string;
    referrerEmail?: string;
    phoneNumber?: string;
    message?: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ReferralBody = await request.json();

        const { referrerName, localAuthority, referrerEmail, phoneNumber, message } =
            body;

        // --- Validation ---
        const errors: string[] = [];

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

        // In production, this would send an email, write to a database, etc.
        console.log("📩 New referral received:", {
            referrerName: referrerName!.trim(),
            localAuthority: localAuthority!.trim(),
            referrerEmail: referrerEmail!.trim(),
            phoneNumber: phoneNumber!.trim(),
            messageLength: message!.trim().length,
            timestamp: new Date().toISOString(),
        });

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
