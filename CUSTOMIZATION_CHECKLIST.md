# 📝 Customization Checklist

A quick checklist of all the places you need to update to personalize your portfolio.

## 🎯 **Hero Section** (`client/components/Hero.tsx`)

- [ ] Update name: `Abhiranjan Kumar` → Your name
- [ ] Update roles in typing animation:
  - [ ] `'Python Developer'`
  - [ ] `'React Developer'`
  - [ ] `'Frontend Developer'`
- [ ] Update tagline: `Passionate fresher building beautiful, responsive web applications...`
- [ ] Update GitHub link: `https://github.com` → Your GitHub
- [ ] Update LinkedIn link: `https://linkedin.com` → Your LinkedIn
- [ ] Update Twitter link: `https://twitter.com` → Your Twitter
- [ ] Replace profile image: `/placeholder.svg` → `/profile.png`
- [ ] Ensure resume file exists: `public/resume.pdf`

## 📝 **About Section** (`client/components/About.tsx`)

- [ ] Update introduction paragraph
- [ ] Update education details:
  - [ ] Degree name
  - [ ] Field of study
  - [ ] Expected graduation year
- [ ] Update career objective

## 🛠️ **Skills Section** (`client/components/Skills.tsx`)

- [ ] Update Frontend skills (or replace with your skills)
- [ ] Update Backend skills (or replace with your skills)
- [ ] Update Tools skills (or replace with your skills)
- [ ] Add/remove skill categories if needed

## 💼 **Projects Section** (`client/components/Projects.tsx`)

For each of the 3 projects:
- [ ] Update project title
- [ ] Update project description
- [ ] Update project image path
- [ ] Update technologies used
- [ ] Update GitHub link
- [ ] Update live demo link (if available)

**Current placeholder projects:**
1. E-Commerce Platform
2. Task Management App
3. Weather Forecast App

## 🏆 **Certificates Section** (`client/components/Certificates.tsx`)

For each of the 4 certificates:
- [ ] Update certificate title
- [ ] Update issuer name
- [ ] Update certificate image path

**Current placeholder certificates:**
1. React Advanced Patterns - Udemy
2. Python Programming Masterclass - Coursera
3. Web Development Bootcamp - Udemy
4. JavaScript ES6+ Fundamentals - Codecademy

## 📧 **Contact Section** (`client/components/Contact.tsx`)

- [ ] Configure EmailJS:
  - [ ] `const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'`
  - [ ] `const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'`
  - [ ] `const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'`
- [ ] Update contact email: `'your-email@example.com'`
- [ ] Update phone number: `'+91 (000) 000-0000'`
- [ ] Update location: `'India'`
- [ ] Update GitHub link
- [ ] Update LinkedIn link
- [ ] Update Twitter link

## 🧭 **Navbar** (`client/components/Navbar.tsx`)

- [ ] Logo text: `AK` → Your initials (optional)
- [ ] Update GitHub link
- [ ] Update LinkedIn link
- [ ] Update Twitter link

## 👣 **Footer** (`client/components/Footer.tsx`)

- [ ] Update name: `Abhiranjan Kumar` → Your name
- [ ] Update GitHub link
- [ ] Update LinkedIn link
- [ ] Update Twitter link

## 🎨 **Public Assets** (`public/`)

- [ ] Replace `placeholder.svg` or add `profile.png` (400x400px recommended)
- [ ] Add `resume.pdf`
- [ ] Add project images
- [ ] Add certificate images

## 🎨 **Theme Customization** (`client/global.css` & `tailwind.config.ts`)

Optional - Only if you want to change colors:

- [ ] Update primary color in CSS variables
- [ ] Update secondary color in CSS variables
- [ ] Update accent colors
- [ ] Test in both light and dark modes

## 🌐 **Meta Tags** (`index.html`)

For SEO:

- [ ] Update `<title>` tag
- [ ] Update `<meta name="description">`
- [ ] Update Open Graph tags if needed
- [ ] Update any other meta tags

## 📱 **Testing Checklist**

- [ ] Test on desktop (1920x1080)
- [ ] Test on tablet (768x1024)
- [ ] Test on mobile (375x667)
- [ ] Test dark theme toggle
- [ ] Test light theme toggle
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test resume download
- [ ] Test all external links
- [ ] Test smooth scrolling
- [ ] Test hamburger menu on mobile
- [ ] Test animations on different devices

## 🚀 **Deployment Checklist**

Before deploying:

- [ ] All content customized
- [ ] All images added
- [ ] Resume file added
- [ ] EmailJS configured
- [ ] All links tested
- [ ] TypeScript compiles (`pnpm typecheck`)
- [ ] No console errors
- [ ] Mobile responsive verified
- [ ] Theme switching works
- [ ] Contact form works

## 📚 **File Location Reference**

```
Hero Section Details:        client/components/Hero.tsx (lines 10, 22-25, etc.)
About Section Details:       client/components/About.tsx
Skills Details:              client/components/Skills.tsx
Projects Details:            client/components/Projects.tsx
Certificates Details:        client/components/Certificates.tsx
Contact Form Setup:          client/components/Contact.tsx (lines 53-55)
Contact Information:         client/components/Contact.tsx (lines 167-189)
Navbar Branding:             client/components/Navbar.tsx (lines 21-26)
Footer Information:          client/components/Footer.tsx
Theme Colors:                client/global.css (lines 7-107)
Meta Tags:                   index.html
Public Assets:               public/
```

## 💡 **Quick Tips**

1. **Find and Replace**: Use your IDE's find/replace to quickly update common items like your name
2. **Bulk Updates**: Update all social links at once using find/replace for the domain
3. **Image Optimization**: Compress images before adding them for better performance
4. **Testing**: Use DevTools mobile preview to test responsive design
5. **Version Control**: Commit your changes as you go

## ✨ **Going the Extra Mile**

Consider also:

- [ ] Add a custom favicon (replace the default one in `public/`)
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Add a sitemap for SEO
- [ ] Add Open Graph images for social sharing
- [ ] Set up a custom domain name
- [ ] Enable HTTPS/SSL
- [ ] Add a Blog section (if desired)
- [ ] Add more projects as you build them
- [ ] Update with new skills regularly

---

**Once you complete all items above, your portfolio is ready to showcase to employers! 🎉**
