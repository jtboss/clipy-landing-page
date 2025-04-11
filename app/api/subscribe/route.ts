import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with your API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

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
    try {
      // 1. Send confirmation email to the user
      await resend.emails.send({
        from: 'Clipy <onboarding@resend.dev>',
        to: email,
        subject: 'Welcome to Clipy! You\'re on the list for early access.',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333; font-size: 24px;">Hi ${name},</h1>
            <p style="color: #555; font-size: 16px; line-height: 1.5;">
              Thank you for joining the Clipy waitlist! We're thrilled to have you on board.
            </p>
            <p style="color: #555; font-size: 16px; line-height: 1.5;">
              We're working hard to build a clipboard manager that will change the way you work. 
              You'll be among the first to know when Clipy launches.
            </p>
            <p style="color: #555; font-size: 16px; line-height: 1.5;">
              Stay tuned for updates!
            </p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 14px;">
              <p>The Clipy Team</p>
            </div>
          </div>
        `,
      });
      
      // 2. Send notification email to the admin
      await resend.emails.send({
        from: 'Clipy <onboarding@resend.dev>',
        to: process.env.ADMIN_EMAIL || 'hey.jjedwards@gmail.com',
        subject: 'New Clipy Waitlist Signup',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333; font-size: 24px;">New Waitlist Signup</h1>
            <p style="color: #555; font-size: 16px;"><strong>Name:</strong> ${name}</p>
            <p style="color: #555; font-size: 16px;"><strong>Email:</strong> ${email}</p>
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-top: 20px;">
              A new user has joined the Clipy waitlist.
            </p>
          </div>
        `,
      });
      
      console.log('Emails sent successfully to user and admin');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { error: 'There was an issue sending the confirmation email. Please try again later.' },
        { status: 500 }
      );
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