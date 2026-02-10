# 🚀 Naveen M - Portfolio Website

A modern, responsive portfolio website featuring a unique **Terminal-Hacker × Dark Anime × Minimalist** hybrid theme. Built with pure HTML, CSS, and JavaScript.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design
- **Hybrid Theme**: Combines Terminal/Hacker aesthetics with Dark Anime tech vibes and minimalist design
- **Particle Background**: Interactive particle.js animation
- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Smooth Animations**: CSS and JavaScript-powered transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)

### 🛠️ Functionality
- **Dynamic Typing Effect**: Terminal-style command typing animation
- **Smooth Scrolling**: Seamless navigation between sections
- **Animated Skill Bars**: Progress bars with smooth animations
- **Project Cards**: 3D tilt effect on hover
- **Contact Form**: Integrated email functionality
- **Scroll Progress**: Auto-highlighting navigation based on scroll position
- **Easter Egg**: Hidden Konami Code surprise 🎮
- **Back to Top Button**: Smooth scroll to top functionality

### 📱 Sections
1. **Hero**: Terminal window with typing effect and glitch text
2. **About**: Code-style biography with animated statistics
3. **Education**: Timeline visualization
4. **Projects**: 4 featured projects with tech stack tags
5. **Skills**: Animated progress bars for technical skills
6. **Certifications**: Achievement showcase
7. **Contact**: Interactive form with multiple contact methods

## 🚀 Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) Local web server for development

### Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`
   
   **Using Node.js:**
   ```bash
   npx http-server
   ```

3. **Or Use VS Code Live Server**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

## 📝 Customization

### Update Personal Information

1. **Contact Details** (in `index.html`):
   - Search for `naveen2992005@gmail.com` and replace with your email
   - Search for `+91-9514589719` and replace with your phone
   - Update GitHub and LinkedIn URLs

2. **Projects** (in `index.html`):
   - Locate the `.project-card` sections
   - Update project names, descriptions, tech stacks, and links

3. **Skills** (in `index.html`):
   - Find `.skill-item` sections
   - Modify skill names and adjust `data-progress` values (0-100)

4. **Theme Colors** (in `styles.css`):
   - Modify CSS variables in `:root` section:
   ```css
   :root {
       --purple-primary: #9d4edd;  /* Change primary color */
       --cyan-accent: #00f5ff;      /* Change accent color */
       /* ... more colors ... */
   }
   ```

5. **Profile Image**:
   - Replace `.profile-placeholder` in HTML with:
   ```html
   <img src="your-image.jpg" alt="Your Name">
   ```

### Add New Sections

Add new sections between existing ones:
```html
<section id="your-section" class="your-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">
                <span class="terminal-cmd">$ cat</span> section-name.txt
            </h2>
            <div class="title-underline"></div>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

Don't forget to add navigation link:
```html
<li><a href="#your-section" class="nav-link">
    <span class="nav-cmd">$</span> section-name
</a></li>
```

## 🎨 Theme Customization

### Change Color Scheme

Edit the CSS variables in `styles.css`:

```css
:root {
    /* Terminal Colors */
    --terminal-green: #00ff41;      /* Matrix green */
    
    /* Anime Dark Colors */
    --purple-primary: #9d4edd;      /* Main purple */
    --cyan-accent: #00f5ff;         /* Neon cyan */
    
    /* Backgrounds */
    --blue-dark: #0a0e27;
    --blue-darker: #05070f;
}
```

### Disable Particle Background

In `script.js`, comment out or remove the particle.js initialization:
```javascript
// particlesJS('particles-js', { ... });
```

## 📦 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── NAVEEN RESUME.pdf   # Your resume (optional)
```

## 🌐 Deployment

### GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to repository **Settings** → **Pages**
4. Select **main** branch → **Save**
5. Your site will be live at: `https://yourusername.github.io/portfolio`

### Netlify (Free)

1. Go to [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Done! You'll get a URL like: `https://random-name.netlify.app`

### Vercel (Free)

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be deployed instantly

## 🎮 Easter Eggs

Try the **Konami Code** on your keyboard:
```
↑ ↑ ↓ ↓ ← → ← → B A
```

Check the browser console for hidden messages! 👀

## 🛠️ Built With

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript** - Interactivity
- **Particles.js** - Background particle effects
- **Font Awesome** - Icons

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source 

## 👨‍💻 Author

**Naveen M**
- Email: naveen2992005@gmail.com
- GitHub: [@naveen-yonko](https://github.com/naveen-yonko)
- LinkedIn: [Naveen M](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Inspired by terminal/hacker aesthetics
- Anime tech UI design elements
- Minimalist design principles
- Particle.js for amazing background effects

---

### 📝 Quick Checklist Before Deployment

- [ ] Update all personal information (name, email, phone)
- [ ] Add your GitHub and LinkedIn URLs
- [ ] Update project details and links
- [ ] Add your profile image
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Test contact form
- [ ] Review all content for accuracy
- [ ] Optimize images (if added)
- [ ] Test in different browsers

---

Made with 💜 and lots of ☕ | © 2026 Naveen M
