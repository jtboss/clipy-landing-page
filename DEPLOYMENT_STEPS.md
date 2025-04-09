# Clipy Deployment Steps

Follow these steps to deploy your Next.js landing page to Vercel:

## 1. Create a GitHub Repository

1. Go to https://github.com/new
2. Name your repository (e.g., `clipy-landing-page`)
3. Make it Public or Private based on your preference
4. Click 'Create repository'

## 2. Push Your Code to GitHub

```bash
# Add the GitHub repository as a remote
git remote add origin https://github.com/YOUR_USERNAME/clipy-landing-page.git

# Push your code to GitHub
git push -u origin main
```

## 3. Deploy to Vercel

1. Go to [Vercel's New Project page](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will automatically detect Next.js
4. Configure the project settings:
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: (leave as default)
   - Build Command: (leave as default)
   - Output Directory: (leave as default)
5. Add your environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `ADMIN_EMAIL`: Email address to receive contact form submissions
6. Click 'Deploy'

## 4. Verify Deployment

1. Once deployed, Vercel will provide you with a URL for your site (e.g., `https://clipy-landing-page.vercel.app`)
2. Test all functionality on the live site:
   - Sign-up form
   - Contact form
   - Check email delivery through Resend

## 5. Set Up a Custom Domain (Optional)

1. Go to your project on Vercel
2. Click 'Settings' > 'Domains'
3. Add your domain and follow the instructions to configure DNS settings

## 6. Continuous Deployment

Your site is now set up for continuous deployment. Any changes pushed to your GitHub repository will automatically trigger a new deployment on Vercel.

For more detailed information, refer to the `VERCEL_DEPLOYMENT.md` file. 