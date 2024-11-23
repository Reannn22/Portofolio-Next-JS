import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    // Get the JSON data from the request
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    // Send email using Resend API
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: `<!DOCTYPE html>
        <html lang="en">
          <head><meta charset="UTF-8"></head>
          <body>
            <h1>${subject}</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted:</p>
            <p>${message}</p>
          </body>
        </html>`, // HTML content for the email
    });

    // Return response with the result from the Resend API
    return NextResponse.json(data);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error sending email:", error);

    // Return error response
    return NextResponse.json({ error: error.message || "Failed to send email" });
  }
}
