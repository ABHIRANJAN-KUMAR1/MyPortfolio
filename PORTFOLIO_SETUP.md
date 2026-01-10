# Abhiranjan Kumar's Portfolio - Setup Guide

This is a modern, production-ready personal portfolio website built with React, Vite, Framer Motion, and EmailJS.

## 📋 Prerequisites

- Node.js (v16 or higher)
- pnpm (or npm/yarn)
- An EmailJS account (for contact form)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure EmailJS

The contact form uses EmailJS to send emails. To set it up:

1. **Create an EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Complete the email verification

2. **Get Your Credentials**
   - In the EmailJS dashboard, go to "Account" → "API Keys"
   - Copy your **Public Key**
   - Create a new **Email Service** (e.g., Gmail)
   - Create a new **Email Template** with the following variables:
     - `from_name` (sender name)
     - `reply_to` (sender email)
     - `message` (message content)
     - `to_email` (your email to receive messages)

3. **Update Contact Form Configuration**
   - Open `client/components/Contact.tsx`
   - Replace the placeholder values:
     ```typescript
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // e.g., service_xxxxxxx
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g., template_xxxxxxx
     const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Your public key
     ```
   - Also update the `to_email` to your email address

### 3. Customize Portfolio Content

Update the following files with your information:

- **Hero Section** (`client/components/Hero.tsx`)
  - Name
  - Roles (typing animation texts)
  - Professional tagline
  - Profile image path (replace `/placeholder.svg` with your image)
  - Resume PDF path

- **About Section** (`client/components/About.tsx`)
  - Personal introduction
  - Education details
  - Career objectives

- **Skills Section** (`client/components/Skills.tsx`)
  - Update skill categories and individual skills

- **Projects Section** (`client/components/Projects.tsx`)
  - Add your project details
  - Update project images
  - Add GitHub and live demo links

- **Certificates Section** (`client/components/Certificates.tsx`)
  - Add your certificates
  - Update certificate images
  - Update issuer names

- **Contact Section** (`client/components/Contact.tsx`)
  - Update contact information (email, phone, location)
  - Update social media links

### 4. Add Static Assets

Place the following files in the `public/` folder:

- `profile.png` - Your profile picture (recommend: 400x400px)
- `resume.pdf` - Your resume for download

### 5. Run Development Server

```bash
pnpm dev
```

The app will run at `http://localhost:5173`

## 🎨 Theme Customization

The portfolio supports light and dark themes with automatic system preference detection. Theme preference is saved in localStorage.

### Update Colors

Edit `client/global.css` to modify the CSS variables:

```css
:root {
  --primary: 222.2 47.4% 11.2%; /* Change primary color */
  --secondary: 210 40% 96.1%; /* Change secondary color */
  /* ... other colors ... */
}
```

## 🛠️ Building for Production

```bash
pnpm build
```

This creates optimized builds in:
- `dist/spa/` - Frontend (static files)
- `dist/server/` - Backend (if applicable)

## 📦 Project Structure

```
client/
├── components/
│   ├── Navbar.tsx           # Navigation bar with theme toggle
│   ├── Hero.tsx             # Hero section with typing animation
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills with categories
│   ├── Projects.tsx         # Projects showcase
│   ├── Certificates.tsx     # Certificates grid
│   ├── CertificateModal.tsx # Modal for certificate view
│   ├── Contact.tsx          # Contact form with EmailJS
│   ├── Footer.tsx           # Footer section
│   └── TypingAnimation.tsx  # Typing animation component
├── pages/
│   ├── Index.tsx            # Main portfolio page
│   └── NotFound.tsx         # 404 page
├── App.tsx                  # App entry point
└── global.css              # Global styles
```

## ✨ Features

- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Dark/Light Theme** - Theme toggle with localStorage persistence
- ✅ **Smooth Animations** - Framer Motion for beautiful transitions
- ✅ **Typing Animation** - Animated role carousel in hero section
- ✅ **Sticky Navigation** - Fixed navbar with smooth scrolling
- ✅ **Contact Form** - EmailJS integration for real email sending
- ✅ **Certificate Modal** - Click to view certificate images
- ✅ **SEO Optimized** - Proper semantic HTML and metadata
- ✅ **Performance** - Optimized with Vite and code splitting

## 🔐 Security Notes

- Never commit EmailJS credentials to public repositories
- Keep your EmailJS public key and service credentials secure
- For production, consider using environment variables (see next section)

## 🌍 Environment Variables (Optional)

For production deployments, create a `.env` file:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=your@email.com
```

Then update `Contact.tsx` to use these variables:

```typescript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## 📱 Social Media Links

Update social media links in:
- **Navbar** - Footer social links
- **Hero** - Social icons in hero section
- **Footer** - Social media links

Replace `https://github.com`, `https://linkedin.com`, and `https://twitter.com` with your actual profiles.

## 🚀 Deployment

### Netlify
The portfolio is ready for Netlify deployment. Connect your GitHub repository and Netlify will automatically build and deploy on every push.

### Vercel
Similarly, you can deploy to Vercel for faster performance with global CDN.

## 📖 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Email sending service
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## 🐛 Troubleshooting

### Contact form not sending?
- Verify EmailJS credentials are correct
- Check browser console for errors
- Ensure EmailJS service and template are properly configured

### Styling issues?
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (`pnpm dev`)
- Check Tailwind CSS configuration

### Dark mode not working?
- Check if localStorage is enabled in browser
- Verify system prefers-color-scheme setting

## 📄 License

This portfolio template is free to use and customize for your needs.

## 💡 Tips

1. **Optimize Images** - Use optimized image formats (WebP) for better performance
2. **Add Analytics** - Consider adding Google Analytics for traffic tracking
3. **SEO** - Update meta tags in `index.html` with your information
4. **Custom Domain** - Configure custom domain in Netlify/Vercel settings

---

**Built with ❤️ using React + Vite + Framer Motion**
