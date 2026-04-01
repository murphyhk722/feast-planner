# Feast Planner — Event Meal Planning Platform

A professional marketing website for Feast Planner, built with HTML, CSS, and vanilla JavaScript.

## 📁 File Structure

```
feast-planner/
├── index.html          # Homepage
├── about.html          # About + founder pitch video
├── how-it-works.html   # Feature walkthrough + interactive demo
├── contact.html        # Contact form + waitlist signup
├── vercel.json         # Deployment config
├── css/
│   ├── styles.css      # Shared styles (nav, footer, utilities)
│   ├── index.css       # Homepage-specific styles
│   ├── about.css       # About page styles
│   ├── how-it-works.css
│   └── contact.css
├── js/
│   ├── main.js         # Shared JS (nav, animations)
│   └── demo.js         # Interactive portion scaling demo
└── images/
    ├── founder-1.jpg   # ← ADD YOUR PHOTO HERE (main/large)
    ├── founder-2.jpg   # ← ADD YOUR PHOTO HERE (medium)
    └── founder-3.jpg   # ← ADD YOUR PHOTO HERE (small)
```

## 🚀 Deploy to Vercel

### Option 1: Via GitHub (Recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repo
5. Leave all settings as default — Vercel auto-detects static HTML
6. Click "Deploy" → You'll get a live URL in ~60 seconds

### Option 2: Vercel CLI
```bash
npm i -g vercel
cd feast-planner
vercel
```

## ✏️ Customization Checklist

### Must Do Before Launch:
- [ ] **Add your photos** → Put 3 photos in `images/` folder:
  - `founder-1.jpg` — large/main photo (event or professional)
  - `founder-2.jpg` — medium photo (planning, cooking, etc.)
  - `founder-3.jpg` — small photo (graduation, headshot, etc.)
- [ ] **Add your pitch video** → In `about.html`, find the `video-placeholder` div and replace with:
  ```html
  <iframe 
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
    title="Feast Planner Pitch"
    frameborder="0" 
    allowfullscreen>
  </iframe>
  ```
- [ ] **Update your name** → In `about.html`, replace `[Your Name]` and `[Your Major]`
- [ ] **Update email** → Replace `hello@feastplanner.co` in `contact.html` with your real email

### Optional Improvements:
- [ ] Connect the email form to a real service like [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com)
- [ ] Add your own logo image (SVG or PNG) to the `images/` folder
- [ ] Update pricing if needed
- [ ] Add Google Analytics or Vercel Analytics

## 📧 Connect the Email Form (Free - Formspree)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → get your Form ID
3. In `contact.html`, change:
   ```html
   <form class="contact-form" id="contactForm" onsubmit="handleContactSubmit(event)">
   ```
   To:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onsubmit="handleContactSubmit(event)">
   ```

## 🎨 Design Details
- **Typography:** Playfair Display (headings) + DM Sans (body)
- **Color Palette:** Warm cream, charcoal, gold (#C9973A), sage green
- **Style:** Refined editorial, warm luxury — not cold/corporate
