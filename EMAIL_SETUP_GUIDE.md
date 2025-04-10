# Email Setup Guide for Contact Form

The contact form on your portfolio is configured to send emails to `needahmed2@gmail.com` using Nodemailer with Gmail as the transport service. To make this work, you need to set up your Gmail account with an app password. Follow these steps:

## Step 1: Set up 2-Step Verification for Gmail

1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security" from the navigation panel
3. Under "Signing in to Google," select "2-Step Verification"
4. Follow the steps to enable 2-Step Verification

## Step 2: Generate an App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security" from the navigation panel
3. Under "Signing in to Google," select "App passwords" (you'll only see this if 2-Step Verification is enabled)
4. Select "Mail" as the app and "Other" as the device, and name it "Portfolio Contact Form"
5. Click "Generate"
6. Google will display a 16-character password. Copy this password.

## Step 3: Update Environment Variables

1. In your project, update the `.env.local` file with your Gmail credentials:

```
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_16_character_app_password
```

Replace `your_gmail_address@gmail.com` with the Gmail account you want to use to send emails and `your_16_character_app_password` with the app password you generated in Step 2.

## Step 4: Restart Your Development Server

After updating the `.env.local` file, restart your development server:

```
npm run dev
```

## Troubleshooting

If you encounter issues with sending emails:

1. Make sure your Gmail address and app password are correct
2. Check that 2-Step Verification is enabled for your Google account
3. Verify that your Gmail account isn't blocking the app connection (check Gmail's security settings)
4. Check server logs for specific error messages

## Alternative Services

If you prefer not to use Gmail, you can modify the `app/api/contact/route.ts` file to use other email service providers like SendGrid, Mailgun, or AWS SES. 