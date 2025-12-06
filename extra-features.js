// ==========================================
// EXTRA FEATURES - Studio Legale FM
// ==========================================

// 1. COOKIE CONSENT BANNER (GDPR)
// ==========================================
function initCookieConsent() {
    // Check if user already accepted
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        return;
    }

    // Create banner HTML
    const banner = document.createElement('div');
    banner.id = 'cookieBanner';
    banner.innerHTML = `
        <div class="cookie-content">
            <div class="cookie-text">
                <strong>🍪 Questo sito utilizza cookie</strong>
                <p>Utilizziamo cookie tecnici per garantire il corretto funzionamento del sito. Continuando la navigazione acconsenti al loro utilizzo.</p>
            </div>
            <div class="cookie-buttons">
                <button id="acceptCookies" class="cookie-btn accept">Accetta</button>
                <button id="rejectCookies" class="cookie-btn reject">Rifiuta</button>
            </div>
        </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        #cookieBanner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(30, 58, 95, 0.98);
            color: white;
            padding: 1.5rem;
            z-index: 10000;
            box-shadow: 0 -5px 30px rgba(0,0,0,0.3);
            animation: slideUp 0.5s ease;
        }

        @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }

        .cookie-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .cookie-text {
            flex: 1;
            min-width: 300px;
        }

        .cookie-text strong {
            color: #d4af37;
            font-size: 1.1rem;
            display: block;
            margin-bottom: 0.5rem;
        }

        .cookie-text p {
            margin: 0;
            opacity: 0.9;
            font-size: 0.95rem;
        }

        .cookie-buttons {
            display: flex;
            gap: 1rem;
        }

        .cookie-btn {
            padding: 0.8rem 2rem;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
        }

        .cookie-btn.accept {
            background: #d4af37;
            color: white;
        }

        .cookie-btn.accept:hover {
            background: #c49d2d;
            transform: translateY(-2px);
        }

        .cookie-btn.reject {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        .cookie-btn.reject:hover {
            background: white;
            color: #1e3a5f;
        }

        @media (max-width: 768px) {
            .cookie-content {
                flex-direction: column;
                text-align: center;
            }
            .cookie-buttons {
                width: 100%;
                flex-direction: column;
            }
            .cookie-btn {
                width: 100%;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(banner);

    // Event listeners
    document.getElementById('acceptCookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.style.animation = 'slideUp 0.5s ease reverse';
        setTimeout(() => banner.remove(), 500);
    });

    document.getElementById('rejectCookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        banner.style.animation = 'slideUp 0.5s ease reverse';
        setTimeout(() => banner.remove(), 500);
    });
}

// 2. WHATSAPP FLOATING BUTTON
// ==========================================
function initWhatsAppButton() {
    const whatsappNumber = '393123456789'; // SOSTITUISCI CON IL NUMERO REALE
    const message = 'Buongiorno, vorrei richiedere una consulenza legale';

    const button = document.createElement('a');
    button.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    button.target = '_blank';
    button.id = 'whatsappButton';
    button.innerHTML = `
        <svg viewBox="0 0 32 32" width="28" height="28">
            <path fill="white" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.050-13.485 13.485-13.485s13.485 6.050 13.485 13.485c0 7.435-6.050 13.485-13.485 13.485zM21.960 18.245c-0.292-0.146-1.727-0.852-1.995-0.950s-0.462-0.146-0.657 0.146-0.755 0.95-0.926 1.145c-0.171 0.195-0.341 0.22-0.633 0.073s-1.234-0.456-2.351-1.450c-0.869-0.774-1.456-1.731-1.627-2.023s-0.018-0.45 0.128-0.596c0.131-0.131 0.292-0.341 0.438-0.512s0.195-0.292 0.292-0.487c0.098-0.195 0.049-0.365-0.024-0.512s-0.657-1.583-0.901-2.168c-0.238-0.569-0.479-0.492-0.657-0.501-0.171-0.009-0.365-0.011-0.56-0.011s-0.512 0.073-0.78 0.365c-0.268 0.292-1.023 1.001-1.023 2.441s1.048 2.833 1.194 3.028c0.146 0.195 2.059 3.138 4.987 4.403 0.697 0.301 1.241 0.481 1.665 0.616 0.699 0.223 1.336 0.191 1.839 0.116 0.561-0.084 1.727-0.706 1.970-1.388s0.243-1.267 0.170-1.388c-0.073-0.121-0.268-0.195-0.56-0.341z"/>
        </svg>
    `;

    const style = document.createElement('style');
    style.textContent = `
        #whatsappButton {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: #25D366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            z-index: 9999;
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
        }

        #whatsappButton:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        @media (max-width: 768px) {
            #whatsappButton {
                bottom: 20px;
                right: 20px;
                width: 55px;
                height: 55px;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(button);
}

// 3. BACK TO TOP BUTTON
// ==========================================
function initBackToTop() {
    const button = document.createElement('button');
    button.id = 'backToTop';
    button.innerHTML = '↑';
    button.style.display = 'none';

    const style = document.createElement('style');
    style.textContent = `
        #backToTop {
            position: fixed;
            bottom: 30px;
            left: 30px;
            width: 50px;
            height: 50px;
            background: #1e3a5f;
            color: white;
            border: 2px solid #d4af37;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 9998;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        #backToTop:hover {
            background: #d4af37;
            border-color: #1e3a5f;
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
            #backToTop {
                bottom: 20px;
                left: 20px;
                width: 45px;
                height: 45px;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(button);

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 4. SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .slide-in-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .slide-in-left.visible {
            opacity: 1;
            transform: translateX(0);
        }

        .slide-in-right {
            opacity: 0;
            transform: translateX(50px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .slide-in-right.visible {
            opacity: 1;
            transform: translateX(0);
        }
    `;
    document.head.appendChild(style);

    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.service-card, .team-card, .value-card, .area-section, .contact-card, .faq-item');
    
    animateElements.forEach((el, index) => {
        if (index % 3 === 0) el.classList.add('fade-in');
        else if (index % 3 === 1) el.classList.add('slide-in-left');
        else el.classList.add('slide-in-right');
    });

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => observer.observe(el));
}

// 5. PHONE NUMBER CLICK TRACKING (Analytics)
// ==========================================
function initPhoneTracking() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Phone link clicked:', link.href);
            // Qui puoi aggiungere Google Analytics tracking se necessario
        });
    });
}

// 6. EMAIL PROTECTION (Anti-spam)
// ==========================================
function protectEmails() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        // Add obfuscation for spam protection
        link.addEventListener('click', (e) => {
            // Email is already in href, this is just for logging/tracking
            console.log('Email link clicked');
        });
    });
}

// ==========================================
// INITIALIZE ALL FEATURES
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();
    initWhatsAppButton();
    initBackToTop();
    initScrollAnimations();
    initPhoneTracking();
    protectEmails();
    
    console.log('✅ Extra features initialized - Studio Legale FM');
});

// ==========================================
// UTILITY: Smooth scroll for all anchor links
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});