// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (body.hasAttribute('data-theme') && body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
        // Update header background immediately for dark theme
        updateHeaderBackground('dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
        // Update header background immediately for light theme
        updateHeaderBackground('light');
    }
}

// Function to update header background
function updateHeaderBackground(theme) {
    const header = document.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 10) {
        if (theme === 'light') {
            header.style.background = 'rgba(254, 254, 254, 0.9)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.9)';
        }
    } else {
        if (theme === 'light') {
            header.style.background = 'rgba(254, 254, 254, 0.8)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    }
    header.style.backdropFilter = 'blur(20px)';
}

// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.querySelector('.theme-icon');
    
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️';
        updateHeaderBackground('light');
    } else {
        themeIcon.textContent = '🌙';
        updateHeaderBackground('dark');
    }
});

// Smooth scrolling for any internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Header background blur effect on scroll
window.addEventListener('scroll', () => {
    const isLight = document.body.getAttribute('data-theme') === 'light';
    const theme = isLight ? 'light' : 'dark';
    updateHeaderBackground(theme);
});

// Add subtle animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section, .profile');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Wallet connection functionality (placeholder)
document.addEventListener('DOMContentLoaded', function() {
    const walletButton = document.querySelector('.wallet-connect');
    
    if (walletButton) {
        walletButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // This is a placeholder for actual wallet connection logic
            console.log('Wallet connection clicked');
            
            // You would implement actual Web3 wallet connection here
            // For now, it just logs to console
        });
    }
});

// Add hover effects to project images
document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add subtle parallax effect to profile image
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image');
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (profileImage && !isMobile) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            profileImage.style.transform = `translateY(${rate}px)`;
        });
    }
});

// Preload images for better performance
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'assets/icon.png',
        'assets/profile.png',
        'assets/note.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});
