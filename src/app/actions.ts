"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL || 'hey.jjedwards@gmail.com';

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    if (!name || !email || !message) {
      return { success: false, error: "All fields are required" };
    }
    
    // Send email to admin
    await resend.emails.send({
      from: "Clipy Contact Form <onboarding@resend.dev>",
      to: adminEmail,
      subject: `Clipy Contact Form: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; font-size: 24px;">New Contact Form Submission</h2>
          <p style="color: #555; font-size: 16px;"><strong>Name:</strong> ${name}</p>
          <p style="color: #555; font-size: 16px;"><strong>Email:</strong> ${email}</p>
          <p style="color: #555; font-size: 16px;"><strong>Message:</strong></p>
          <p style="color: #555; font-size: 16px; line-height: 1.5;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
      replyTo: email
    });
    
    // Send confirmation email to the user
    await resend.emails.send({
      from: "Clipy <onboarding@resend.dev>",
      to: email,
      subject: "Your message to Clipy has been received",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; font-size: 24px;">Thanks for reaching out!</h2>
          <p style="color: #555; font-size: 16px; line-height: 1.5;">
            We've received your message and will get back to you as soon as possible.
          </p>
          <p style="color: #555; font-size: 16px; line-height: 1.5;">
            Here's a copy of your message:
          </p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin: 0;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
          <p style="color: #555; font-size: 16px; line-height: 1.5;">
            Best regards,<br/>
            The Clipy Team
          </p>
        </div>
      `
    });
    
    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { 
      success: false, 
      error: "Failed to send message. Please try again later." 
    };
  }
} 