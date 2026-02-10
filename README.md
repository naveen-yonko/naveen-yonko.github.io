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
- **Certificate Viewer Modal**: Click on certificates to view and download PDFs
- **Back to Top Button**: Smooth scroll to top functionality

### 📱 Sections
1. **Hero**: Terminal window with typing effect and glitch text
2. **About**: Code-style biography with animated statistics
3. **Education**: Timeline visualization
4. **Projects**: 4 featured projects with tech stack tags
5. **Skills**: Animated progress bars for technical skills
6. **Certificates**: Interactive certificate cards with modal viewer (click to view PDFs)
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

4. **Certificates** (in `index.html`):
   - Add your certificate PDFs to the `certificates/` folder
   - Update certificate cards with your certificate names
   - Update the `data-cert` attribute with the correct file path
   ```html
   <div class="cert-card" data-cert="certificates/your-certificate.pdf" onclick="openCertificateModal(this)">
       <h4>Your Certificate Name</h4>
   </div>
   ```

5. **Theme Colors** (in `styles.css`):
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
├── index.html                    # Main HTML file
├── styles.css                    # All styles and animations
├── script.js                     # JavaScript functionality
├── README.md                     # This file
├── NAVEEN RESUME.pdf             # Your resume
└── certificates/                 # Certificate PDFs folder
    ├── AWS Certified AI Practitioner certificate.pdf
    ├── Data Analytics with Python.pdf
    └── Foundations of R Software.pdf
```

## 🌐 Deployment

### GitHub Pages (Free & Already Live!)

This portfolio is already deployed at: **https://naveen-yonko.github.io**

**To deploy your own version:**

1. Create a GitHub repository named `yourusername.github.io`
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Your site will be live in 1-2 minutes at: `https://yourusername.github.io`

### Vercel (Alternative - Also Free!)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Deploy with one click




## 🛠️ Built With

- **HTML5** - Semantic structure and modern markup
- **CSS3** - Advanced animations, gradients, and responsive design
- **JavaScript** - DOM manipulation and interactivity
- **Particles.js** - Stunning background particle effects
- **Font Awesome** - Beautiful icon library

## 📋 Features Checklist

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ No dependencies required (pure HTML/CSS/JS + CDN libraries)
- ✅ Interactive certificate viewer with PDF support
- ✅ Smooth animations and transitions
- ✅ Terminal/Hacker aesthetic theme
- ✅ Dark mode by default (modern design)
- ✅ Fast loading and performance optimized
- ✅ SEO friendly with meta tags

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source 

## 👨‍💻 Author

**Naveen M** - Full Stack Developer
- 🎓 B.Tech IT Student
- 📧 Email: naveen2992005@gmail.com
- 🐙 GitHub: [@naveen-yonko](https://github.com/naveen-yonko)
- 💼 LinkedIn: [Naveen M](https://linkedin.com/in/naveen m)
- 🎯 LeetCode: [@naveenyonko](https://leetcode.com/u/naveenyonko/)

## 📞 Support & Contact

For questions, suggestions, or collaboration opportunities:
- **Email**: naveen2992005@gmail.com
- **GitHub**: [github.com/naveen-yonko](https://github.com/naveen-yonko)

## ⭐ Show Your Support

If you find this portfolio template useful, please consider:
- ⭐ Starring this repository
- 🔄 Sharing it with others
- 🐛 Reporting issues or suggesting improvements

---

**Inspired by terminal/hacker aesthetics, anime tech UI design, and minimalist principles**

**Made with 💜 and lots of ☕**  
© 2026 Naveen M | Full Stack Developer
