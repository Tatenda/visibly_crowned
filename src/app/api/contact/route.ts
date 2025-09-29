import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, ContactFormData } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare form data for email
    const formData: ContactFormData = {
      firstName,
      lastName,
      email,
      subject,
      message
    };

    // Send email notification
    const emailSent = await sendContactEmail(formData);
    
    if (!emailSent) {
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please try again later.',
          success: false 
        },
        { status: 500 }
      );
    }

    // Log the contact request
    console.log('Contact form submission received:', { 
      name: `${firstName} ${lastName}`, 
      email, 
      subject, 
      message: message.substring(0, 100) + '...' 
    });

    return NextResponse.json(
      { 
        message: 'Thank you for your message! We will get back to you soon.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Something went wrong. Please try again later.',
        success: false 
      },
      { status: 500 }
    );
  }
}
