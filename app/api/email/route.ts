import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	const { firstName, lastName, email, phone, message } = await req.json();

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	const text = `
    Hi ${firstName},
    
    Thanks for contacting me! I’ll connect with you shortly.
    
    —
    Submission details:
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone}
    
    Message:
    ${message}
    
    Thanks,
    Rahul Agarwal
    `;

	const html = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Submission</title>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
      /* Reset styles */
      body, table, td, p, a, li, blockquote {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      
      table, td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      
      img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }
      
      /* Basic styles */
      body {
        margin: 0 !important;
        padding: 0 !important;
        background-color: #050709 !important;
        font-family: Arial, sans-serif !important;
        font-size: 16px;
        line-height: 1.6;
        color: #747779;
      }
      
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #0f0715;
      }
      
      .header-bg {
        background-color: #8750f7;
      }
      
      .body-bg {
        background-color: #140c1c;
      }
      
      .footer-bg {
        background-color: #050709;
      }
      
      .details-card {
        background-color: #22272c;
        border-left: 4px solid #8750f7;
      }
      
      .message-box {
        background-color: #0f0715;
        border: 1px solid #2a1454;
      }
      
      .button-bg {
        background-color: #8750f7;
      }
      
      .purple-text {
        color: #8750f7 !important;
      }
      
      .white-text {
        color: #ffffff !important;
      }
      
      .grey-text {
        color: #747779 !important;
      }
      
      .light-grey-text {
        color: #636363 !important;
      }
      
      /* Mobile responsive - using media queries with fallbacks */
      @media only screen and (max-width: 600px) {
        .email-container {
          width: 100% !important;
          max-width: 100% !important;
        }
        
        .mobile-padding {
          padding: 20px !important;
        }
        
        .mobile-font {
          font-size: 14px !important;
        }
        
        .mobile-button {
          padding: 12px 20px !important;
          font-size: 14px !important;
        }
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0; background-color: #050709; font-family: Arial, sans-serif;">
    
    <!-- Wrapper table for full width background -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #050709;">
      <tr>
        <td align="center" style="padding: 20px 0;">
          
          <!-- Main email container -->
          <table class="email-container" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #0f0715;">
            
            <!-- Header Section -->
            <tr>
              <td class="header-bg" style="background-color: #8750f7; padding: 40px 30px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #ffffff; font-family: Arial, sans-serif;">
                  Thank You for Reaching Out!
                </h1>
                <p style="margin: 15px 0 0 0; font-size: 16px; color: #ffffff; opacity: 0.9;">
                  Your message has been received
                </p>
              </td>
            </tr>
            
            <!-- Body Section -->
            <tr>
              <td class="body-bg mobile-padding" style="background-color: #140c1c; padding: 40px 30px;">
                
                <!-- Greeting -->
                <p style="margin: 0 0 20px 0; font-size: 16px; color: #747779; font-family: Arial, sans-serif;">
                  Hi <strong style="color: #8750f7;">${firstName}</strong>,
                </p>
                
                <p style="margin: 0 0 20px 0; font-size: 16px; color: #747779; font-family: Arial, sans-serif;">
                  Thank you for taking the time to contact me! I've received your message and truly appreciate your interest. I'll review your inquiry and get back to you within 24-48 hours.
                </p>
                
                <!-- Divider -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 30px 0;">
                  <tr>
                    <td style="border-top: 1px solid #8750f7; height: 1px; font-size: 1px; line-height: 1px;">&nbsp;</td>
                  </tr>
                </table>
                
                <!-- Section Title -->
                <h2 style="margin: 0 0 25px 0; font-size: 20px; font-weight: bold; color: #8750f7; font-family: Arial, sans-serif;">
                  📋 Your Submission Details
                </h2>
                
                <!-- Details Card -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="details-card" style="background-color: #22272c; border-left: 4px solid #8750f7;">
                  <tr>
                    <td style="padding: 25px;">
                      
                      <!-- Name -->
                      <p style="margin: 0 0 15px 0; font-size: 15px; color: #747779; font-family: Arial, sans-serif;">
                        <strong style="color: #8750f7; min-width: 80px; display: inline-block;">Name:</strong>
                        ${firstName} ${lastName}
                      </p>
                      
                      <!-- Email -->
                      <p style="margin: 0 0 15px 0; font-size: 15px; color: #747779; font-family: Arial, sans-serif;">
                        <strong style="color: #8750f7; min-width: 80px; display: inline-block;">Email:</strong>
                        ${email}
                      </p>
                      
                      <!-- Phone -->
                      <p style="margin: 0 0 15px 0; font-size: 15px; color: #747779; font-family: Arial, sans-serif;">
                        <strong style="color: #8750f7; min-width: 80px; display: inline-block;">Phone:</strong>
                        ${phone}
                      </p>
                      
                      <!-- Message -->
                      <p style="margin: 0 0 10px 0; font-size: 15px; color: #747779; font-family: Arial, sans-serif;">
                        <strong style="color: #8750f7;">Message:</strong>
                      </p>
                      
                      <!-- Message Content Box -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="message-box" style="background-color: #0f0715; border: 1px solid #2a1454;">
                        <tr>
                          <td style="padding: 15px; font-size: 15px; color: #747779; font-style: italic; font-family: Arial, sans-serif;">
                            ${message}
                          </td>
                        </tr>
                      </table>
                      
                    </td>
                  </tr>
                </table>
                
                <!-- Additional Text -->
                <p style="margin: 30px 0 35px 0; font-size: 16px; color: #747779; font-family: Arial, sans-serif;">
                  In the meantime, feel free to explore my portfolio or connect with me on social media. If you have any urgent questions, don't hesitate to reach out directly.
                </p>
                
                <!-- CTA Button -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td align="center" style="padding: 0;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" class="button-bg" style="background-color: #8750f7;">
                        <tr>
                          <td style="padding: 15px 30px; text-align: center;">
                            <a href="mailto:${process.env.MY_EMAIL}" style="display: inline-block; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #ffffff; text-decoration: none;">
                              Reply to Rahul
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                
              </td>
            </tr>
            
            <!-- Footer Section -->
            <tr>
              <td class="footer-bg" style="background-color: #050709; padding: 30px 20px; text-align: center; border-top: 1px solid #22272c;">
                <p style="margin: 0; font-size: 14px; color: #636363; font-family: Arial, sans-serif;">
                  Rahul Agarwal • Portfolio Contact Form
                </p>
              </td>
            </tr>
            
          </table>
          
        </td>
      </tr>
    </table>
    
  </body>
</html>
    `;

	await transporter.sendMail({
		from: `Rahul Agarwal <${process.env.MY_EMAIL}>`,
		to: [email, process.env.MY_EMAIL],
		subject: "I will connect with you shortly!",
		text,
		html,
	});

	return NextResponse.json({ success: true });
}
