// Language Toggle Logic
function toggleLanguage() {
    document.body.classList.toggle('zh-mode');
    // Save preference to localStorage
    const isZh = document.body.classList.contains('zh-mode');
    localStorage.setItem('language', isZh ? 'zh' : 'en');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('hamburger-btn');
    
    if (menu && button) {
        menu.classList.toggle('open');
        button.classList.toggle('active');
        button.setAttribute('aria-expanded', menu.classList.contains('open'));
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('hamburger-btn');
    
    if (menu && button) {
        menu.classList.remove('open');
        button.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('mobile-menu');
        const button = document.getElementById('hamburger-btn');
        
        if (menu && button && menu.classList.contains('open')) {
            if (!menu.contains(e.target) && !button.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
});

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'zh') {
        document.body.classList.add('zh-mode');
    }
});

// Sakura Animation
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('sakura-container');
    if (!container) return;
    
    const petalCount = 15;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = Math.random() * 5 + 5 + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.opacity = Math.random() * 0.5 + 0.3;
        const size = Math.random() * 10 + 10;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        container.appendChild(petal);
    }
});

// PDF Download Function
function downloadPDF() {
    // Check if html2pdf is loaded
    if (typeof html2pdf === 'undefined') {
        alert('PDF library not loaded. Please wait a moment and try again.');
        return;
    }

    const element = document.getElementById('content-to-print') || document.body;
    const body = document.body;
    const loading = document.getElementById('pdf-loading');

    if (loading) {
        loading.style.display = 'flex';
    }
    body.classList.add('generating-pdf');

    const opt = {
        margin: [0.1, 0.1, 0.1, 0.1],
        filename: 'Japan_Trip_2026.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    setTimeout(() => {
        html2pdf().set(opt).from(element).save().then(() => {
            body.classList.remove('generating-pdf');
            if (loading) {
                loading.style.display = 'none';
            }
        }).catch(err => {
            console.error(err);
            alert('Error generating PDF. Please try taking a screenshot instead.');
            body.classList.remove('generating-pdf');
            if (loading) {
                loading.style.display = 'none';
            }
        });
    }, 500);
}

// Intersection Observer for Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
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

    // Observe all cards and sections
    document.querySelectorAll('.schedule-card, .glass-card, .quick-link-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Smooth Scroll for Anchor Links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add hover effect to timeline dots
document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.timeline-dot');
    dots.forEach(dot => {
        dot.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3)';
            this.style.boxShadow = '0 0 10px rgba(244, 114, 182, 0.5)';
        });
        dot.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});

// Checkbox Progress Tracker (for packing list)
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checkbox-item');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Add visual feedback
            if (this.checked) {
                this.parentElement.style.opacity = '0.6';
                this.parentElement.style.textDecoration = 'line-through';
            } else {
                this.parentElement.style.opacity = '1';
                this.parentElement.style.textDecoration = 'none';
            }
        });
    });
});

// Add parallax effect to hero section (if exists)
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.bg-gradient-to-br');
    if (hero && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }
});

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    button, .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Page transition effect
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Countdown Timer for Homepage
function updateCountdown() {
    const targetDate = new Date('2026-03-18T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        // Trip has started or passed
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = '0';
        if (hoursEl) hoursEl.textContent = '0';
        if (minutesEl) minutesEl.textContent = '0';
        if (secondsEl) secondsEl.textContent = '0';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = hours;
    if (minutesEl) minutesEl.textContent = minutes;
    if (secondsEl) secondsEl.textContent = seconds;
}

// Initialize countdown if on homepage
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('countdown')) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});

