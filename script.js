// ===========================
// PARTICLE.JS CONFIGURATION
// ===========================
particlesJS('particles-js', {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: '#9d4edd'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.3,
            random: false
        },
        size: {
            value: 2,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#9d4edd',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            },
            resize: true
        }
    },
    retina_detect: true
});

// ===========================
// NAVBAR FUNCTIONALITY
// ===========================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// TERMINAL TYPING EFFECT
// ===========================
const commands = [
    'cat projects.txt',
    'ls -la skills/',
    'git status',
    'npm run dev',
    'python main.py'
];

let commandIndex = 0;
let charIndex = 0;
const typingText = document.querySelector('.typing-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenCommands = 2000;

function typeCommand() {
    if (charIndex < commands[commandIndex].length) {
        typingText.textContent += commands[commandIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeCommand, typingSpeed);
    } else {
        setTimeout(deleteCommand, delayBetweenCommands);
    }
}

function deleteCommand() {
    if (charIndex > 0) {
        typingText.textContent = commands[commandIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteCommand, deletingSpeed);
    } else {
        commandIndex = (commandIndex + 1) % commands.length;
        setTimeout(typeCommand, 500);
    }
}

// Start typing effect
setTimeout(typeCommand, 1000);

// ===========================
// SCROLL ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate stats
            if (entry.target.classList.contains('about-stats')) {
                animateStats();
            }
        }
    });
}, observerOptions);

// Observe sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Don't animate hero section
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}

// ===========================
// ANIMATE STATISTICS
// ===========================
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        // Show value immediately for clean appearance
        stat.textContent = target % 1 === 0 ? target : target.toFixed(1);
    });
}

// Skill bars removed - using badge style instead

// ===========================
// SCROLL TO TOP BUTTON
// ===========================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// CONTACT FORM HANDLING
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    
    // Create mailto link as fallback
    const mailtoLink = `mailto:naveen2992005@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Message sent! Opening your email client...', 'success');
    
    // Reset form
    contactForm.reset();
});

// ===========================
// NOTIFICATION SYSTEM
// ===========================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #9d4edd, #7209b7);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(157, 78, 221, 0.5);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-family: 'Courier New', monospace;
        border: 2px solid #00f5ff;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// ACTIVE NAV LINK HIGHLIGHT
// ===========================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Cursor trail removed for cleaner appearance

// Easter egg removed for professional appearance

// Project card tilt effect removed for more formal appearance

// ===========================
// LOADING ANIMATION
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// LOG CONSOLE MESSAGE
// ===========================
console.log('%cNaveen M - Portfolio', 'color: #00f5ff; font-size: 18px; font-weight: bold;');
console.log('%cFull Stack Developer | B.Tech IT Student', 'color: #9d4edd; font-size: 12px;');

// ===========================
// CERTIFICATE MODAL FUNCTIONS
// ===========================
function openCertificateModal(element) {
    const certPath = element.getAttribute('data-cert');
    const certTitle = element.querySelector('h4').textContent;
    
    const modal = document.getElementById('certificateModal');
    const iframeViewer = document.getElementById('certPdfViewer');
    const downloadBtn = document.getElementById('certDownloadBtn');
    const titleElement = document.getElementById('certModalTitle');
    
    // Set modal title
    titleElement.textContent = certTitle;
    
    // Set iframe src to display PDF
    iframeViewer.src = certPath;
    
    // Set download button
    downloadBtn.href = certPath;
    downloadBtn.download = certTitle + '.pdf';
    
    // Show modal with animation
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById('certPdfViewer').src = '';
    }, 300);
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeCertificateModal();
    }
});
