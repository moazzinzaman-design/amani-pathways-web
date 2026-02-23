import { Resend } from 'resend';

// Initialize the Resend client. 
// Uses a placeholder key during build if the environment variable is missing.
const resendApiKey = process.env.RESEND_API_KEY || 're_placeholder';
export const resend = new Resend(resendApiKey);

// This is the HTML template for the email sent to the person making the referral
export const getReferralEmailHtml = (name: string, isEnquiry: boolean = false) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Amani Pathways Received</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background-color: #f8fafc;
        margin: 0;
        padding: 0;
      }
      .container {
        max-w-xl;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border: 1px solid #e2e8f0;
      }
      .header {
        background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%);
        padding: 32px 24px;
        text-align: center;
      }
      .header h1 {
        color: #ffffff;
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.025em;
      }
      .content {
        padding: 32px 24px;
        color: #334155;
        font-size: 16px;
        line-height: 1.6;
      }
      .content p {
        margin-top: 0;
        margin-bottom: 20px;
      }
      .greeting {
        font-size: 18px;
        font-weight: 600;
        color: #0f172a;
        margin-bottom: 16px;
      }
      .footer {
        background-color: #f1f5f9;
        padding: 24px;
        text-align: center;
        font-size: 14px;
        color: #64748b;
        border-top: 1px solid #e2e8f0;
      }
      .highlight {
        color: #4f46e5;
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Amani Pathways</h1>
      </div>
      <div class="content">
        <p class="greeting">Hello ${name},</p>
        <p>Thank you for submitting ${isEnquiry ? "an enquiry" : "a referral"} to Amani Pathways. We have successfully received your information.</p>
        <p>Our placement team is currently reviewing the details you provided. We understand the importance of timely communication, especially regarding placements, and aim to respond to all ${isEnquiry ? "enquiries" : "referrals"} within <span class="highlight">24 hours</span>.</p>
        <p>If you have any immediate questions or require an urgent response, please reply directly to this email or call our team.</p>
        <p>Best regards,<br>The Placement Team<br><strong>Amani Pathways</strong></p>
      </div>
      <div class="footer">
        <p>Amani Pathways Ltd &copy; ${new Date().getFullYear()}</p>
        <p>Registered Office: Halifax, West Yorkshire</p>
      </div>
    </div>
  </body>
</html>
`;
