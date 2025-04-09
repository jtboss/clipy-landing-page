import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with your API key
// Replace this with your actual API key in production
// Using a placeholder for now - you'll need to set up environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 'test_api_key');

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

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

    // In a production app, you might want to store this in a database
    console.log(`New subscription: ${name} (${email})`);
    
    // Send confirmation email
    // In development, this might not work without a real API key
    if (process.env.RESEND_API_KEY) {
      try {
        const data = await resend.emails.send({
          from: 'Clipy <onboarding@resend.dev>',
          to: email,
          subject: 'Welcome to Clipy! You\'re on the list for early access.',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #333; font-size: 24px;">Hi ${name},</h1>
              <p style="color: #555; font-size: 16px; line-height: 1.5;">
                Thanks for signing up for early access to Clipy. We'll notify you when we launch.
              </p>
              <p style="color: #555; font-size: 16px; line-height: 1.5;">
                Stay tuned!
              </p>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 14px;">
                <p>The Clipy Team</p>
              </div>
            </div>
          `,
        });
        
        console.log('Email sent:', data);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        return NextResponse.json(
          { error: 'There was an issue sending the confirmation email. Please try again later.' },
          { status: 500 }
        );
      }
    } else {
      // Log if we're in development mode without an API key
      console.log('Development mode: Email would be sent to', email);
    }

    return NextResponse.json({ 
      success: true,
      message: "Thanks for signing up! You'll be the first to know when Clipy is available." 
    });
  } catch (error) {
    console.error('Error handling subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again later.' },
      { status: 500 }
    );
  }
} 