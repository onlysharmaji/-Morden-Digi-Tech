🖥️ Morden Digi Tech — Official Website

Fast & Reliable Computer, Laptop & OS Solutions — Aligarh, UP

A fully responsive, futuristic dark-theme website for Morden Digi Tech, a professional computer and laptop service business in Aligarh, Uttar Pradesh.

🌐 Live Demo

Deploy to GitHub Pages and paste your URL here.


📁 Folder Structure
morden-digi-tech/
├── index.html       → Main HTML page (all sections)
├── style.css        → All styles, variables, responsive rules
├── script.js        → Canvas animation, slider, counters, reveal
├── assets/          → Place your images, logo, icons here
│   └── (your-logo.png, og-image.jpg, etc.)
└── README.md        → This file

✅ Features

🎨 Futuristic dark tech theme with neon blue accents
🌐 Fully responsive (mobile, tablet, desktop)
⚡ Animated circuit canvas background (hero)
🔢 Animated stats counters
🃏 19-service cards with hover glow
📋 Google Form embed (booking)
💬 Testimonial slider with swipe support
🗺️ Google Maps embed (Aligarh, UP)
🟢 Floating WhatsApp button
📜 Scroll reveal animations
🍔 Mobile hamburger menu
🔡 SEO meta tags


🚀 Deploy on GitHub Pages
Step 1 — Create a GitHub Repository

Go to github.com and click New Repository
Name it morden-digi-tech (or anything you like)
Set visibility to Public
Click Create repository

Step 2 — Upload Files
Option A — Drag & Drop (easiest):

Open your new repository
Click "uploading an existing file"
Drag all files (index.html, style.css, script.js, assets/) into the window
Click Commit changes

Option B — Git CLI:
bashgit init
git add .
git commit -m "Initial commit — Morden Digi Tech website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/morden-digi-tech.git
git push -u origin main
Step 3 — Enable GitHub Pages

Go to your repository → Settings → Pages
Under Source, select Deploy from a branch
Choose Branch: main, folder: / (root)
Click Save
Wait ~2 minutes — your site will be live at:
https://YOUR_USERNAME.github.io/morden-digi-tech/


✏️ How to Customize
🔗 Replace Google Form Link
Open index.html and find:
htmlsrc="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_LINK/viewform?embedded=true"
Replace YOUR_GOOGLE_FORM_LINK with your actual Google Form ID.
How to get the embed link:

Open your Google Form
Click ⋮ (three dots) → Embed
Copy the src="..." URL from the iframe code

🖼️ Replace Logo
In index.html, find the nav logo section (marked with <!-- REPLACE -->):
html<span class="logo-icon"><i class="fas fa-microchip"></i></span>
Replace with:
html<img src="assets/your-logo.png" alt="Morden Digi Tech Logo" width="38" height="38" style="border-radius:8px;" />
📸 Replace About Section Image
Find the about-illustration div in index.html and replace the icon with an <img> tag:
html<img src="assets/technician.jpg" alt="Expert Technician" style="max-width:100%;border-radius:12px;" />
📱 Update Social Links
Search for mordendigitech and 7599913980 in index.html to update phone, WhatsApp, Instagram, and email links.
🎨 Change Colors
Open style.css and edit the CSS variables at the top:
css:root {
  --neon:  #00f0ff;   /* Main neon color */
  --neon2: #7b2fff;   /* Secondary gradient */
  --accent:#ff2d78;   /* Accent color */
  --dark:  #030a12;   /* Background */
}

📞 Business Contact
DetailInfo📱 Phone7599913980📧 Emailmordendigitechmail@gmail.com📍 LocationAligarh, Uttar Pradesh – 202122📸 Instagram@mordendigitech

🛠️ Built With

HTML5 (Semantic)
CSS3 (Variables, Flexbox, Grid, Animations)
Vanilla JavaScript (no frameworks)
Google Fonts: Orbitron, Rajdhani, Share Tech Mono
Font Awesome 6 (icons)


📄 License
© 2025 Morden Digi Tech. All rights reserved.
