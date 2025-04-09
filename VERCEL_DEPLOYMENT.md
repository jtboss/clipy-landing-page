# Vercel Deployment Guide

This document provides instructions for deploying the Clipy landing page to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account
3. A Resend account (for email functionality)

## Deployment Steps

### 1. Push the project to GitHub

1. Create a new repository on GitHub: https://github.com/new
2. Connect your local repository to GitHub:
   ```bash
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```

### 2. Deploy to Vercel

1. Log in to your Vercel account: https://vercel.com
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: (leave as default)
   - Build Command: (leave as default)
   - Output Directory: (leave as default)
5. Add Environment Variables:

| Name | Value | Description |
|------|-------|-------------|
| `RESEND_API_KEY` | YOUR_RESEND_API_KEY | Your Resend API key for sending emails |
| `ADMIN_EMAIL` | YOUR_EMAIL_ADDRESS | Email address to receive contact form submissions |

6. Click "Deploy"

### 3. Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain and follow the instructions to configure DNS settings

### 4. Verify Email Functionality

1. After deployment, test the subscription and contact forms to ensure emails are being sent correctly
2. Check your Resend dashboard to verify email delivery

## Environment Variables

Make sure to set up the following environment variables in Vercel:

- `RESEND_API_KEY`: Your Resend API key for sending emails (get one from https://resend.com/api-keys)
- `ADMIN_EMAIL`: The email address where you want to receive contact form submissions

## Troubleshooting

- If emails are not being sent, verify that your Resend API key is correct and that your Resend account is properly configured
- For other issues, check the Vercel deployment logs in your project dashboard

## Useful Links

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Resend Documentation](https://resend.com/docs) 