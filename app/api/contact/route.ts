import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key - should be configured in .env.local
const resend = new Resend(process.env.RESEND_API_KEY || 'test_api_key');

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate the request data
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Log the contact submission for debugging
    console.log(`New contact form submission: ${name} (${email}): ${message}`);
    
    // Send confirmation email
    if (process.env.RESEND_API_KEY) {
      try {
        // 1. Send confirmation to the user
        await resend.emails.send({
          from: 'Clipy <onboarding@resend.dev>',
          to: email,
          subject: 'Thank you for contacting Clipy',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #333; font-size: 24px;">Hello ${name},</h1>
              <p style="color: #555; font-size: 16px; line-height: 1.5;">
                Thank you for reaching out to us. We've received your message and will get back to you as soon as possible.
              </p>
              <p style="color: #555; font-size: 16px; line-height: 1.5;">
                Here's a copy of your message:
              </p>
              <div style="border-left: 3px solid #ccc; padding-left: 15px; margin: 20px 0; color: #666;">
                ${message}
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 14px;">
                <p>The Clipy Team</p>
              </div>
            </div>
          `,
        });

        // 2. Send notification to the owner/admin
        await resend.emails.send({
          from: 'Clipy <onboarding@resend.dev>',
          to: process.env.ADMIN_EMAIL || 'owner@example.com', // Use env variable or fallback
          subject: 'New Contact Form Submission',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #333; font-size: 24px;">New contact form submission</h1>
              <p style="color: #555; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="color: #555; font-size: 16px;"><strong>Email:</strong> ${email}</p>
              <p style="color: #555; font-size: 16px;"><strong>Message:</strong></p>
              <div style="border-left: 3px solid #ccc; padding-left: 15px; margin: 20px 0; color: #666;">
                ${message}
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        return NextResponse.json(
          { error: 'There was an issue sending the confirmation email. Please try again later.' },
          { status: 500 }
        );
      }
    } else {
      // Log if we're in development mode without an API key
      console.log('Development mode: Email notification would be sent');
    }

    return NextResponse.json({ 
      success: true,
      message: "Thank you for your message! We'll get back to you soon."
    });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again later.' },
      { status: 500 }
    );
  }
} 