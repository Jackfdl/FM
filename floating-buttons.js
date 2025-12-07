// ==========================================
// FLOATING BUTTONS - WhatsApp + Back to Top
// Studio Legale Fedeli, Macchi & Partners
// ==========================================

(function() {
    'use strict';

    // ========================================
    // CONFIGURAZIONE
    // ========================================
    
    const CONFIG = {
        whatsapp: {
            enabled: true,
            number: '393123456789', // ⚠️ SOSTITUISCI CON NUMERO REALE
            message: 'Buongiorno, vorrei richiedere una consulenza legale presso lo Studio Fedeli, Macchi & Partners.',
        },
        backToTop: {
            enabled: true,
            showAfterScroll: 300 // pixel
        }
    };

    // ========================================
    // WHATSAPP FLOATING BUTTON
    // ========================================
    
    if (CONFIG.whatsapp.enabled) {
        const whatsappBtn = document.createElement('a');
        whatsappBtn.id = 'whatsappButton';
        whatsappBtn.href = `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(CONFIG.whatsapp.message)}`;
        whatsappBtn.target = '_blank';
        whatsappBtn.rel = 'noopener noreferrer';
        whatsappBtn.title = 'Contattaci su WhatsApp';
        whatsappBtn.innerHTML = `
            <svg viewBox="0 0 32 32" width="28" height="28">
                <path fill="white" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.050-13.485 13.485-13.485s13.485 6.050 13.485 13.485c0 7.435-6.050 13.485-13.485 13.485zM21.960 18.245c-0.292-0.146-1.727-0.852-1.995-0.950s-0.462-0.146-0.657 0.146-0.755 0.95-0.926 1.145c-0.171 0.195-0.341 0.22-0.633 0.073s-1.234-0.456-2.351-1.450c-0.869-0.774-1.456-1.731-1.627-2.023s-0.018-0.45 0.128-0.596c0.131-0.131 0.292-0.341 0.438-0.512s0.195-0.292 0.292-0.487c0.098-0.195 0.049-0.365-0.024-0.512s-0.657-1.583-0.901-2.168c-0.238-0.569-0.479-0.492-0.657-0.501-0.171-0.009-0.365-0.011-0.56-0.011s-0.512 0.073-0.78 0.365c-0.268 0.292-1.023 1.001-1.023 2.441s1.048 2.833 1.194 3.028c0.146 0.195 2.059 3.138 4.987 4.403 0.697 0.301 1.241 0.481 1.665 0.616 0.699 0.223 1.336 0.191 1.839 0.116 0.561-0.084 1.727-0.706 1.970-1.388s0.243-1.267 0.170-1.388c-0.073-0.121-0.268-0.195-0.56-0.341z"/>
            </svg>
        `;

        document.body.appendChild(whatsappBtn);
    }

    // ========================================
    // BACK TO TOP BUTTON
    // ========================================
    
    if (CONFIG.backToTop.enabled) {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'backToTop';
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.title = 'Torna su';
        backToTopBtn.style.display = 'none';
        backToTopBtn.setAttribute('aria-label', 'Torna all\'inizio della pagina');

        document.body.appendChild(backToTopBtn);

        // Mostra/nascondi in base allo scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > CONFIG.backToTop.showAfterScroll) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        // Scroll smooth al click
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // STYLES
    // ========================================
    
    const style = document.createElement('style');
    style.textContent = `
        /* WhatsApp Button */
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
            text-decoration: none;
            cursor: pointer;
        }

        #whatsappButton:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
        }

        #whatsappButton:active {
            transform: scale(0.95);
        }

        /* Animation pulse */
        @keyframes pulse {
            0%, 100% { 
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
            50% { 
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.8), 0 0 0 10px rgba(37, 211, 102, 0.1);
            }
        }

        #whatsappButton {
            animation: pulse 2s infinite;
        }

        /* Back to Top Button */
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
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #backToTop:hover {
            background: #d4af37;
            border-color: #1e3a5f;
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        #backToTop:active {
            transform: translateY(-2px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            #whatsappButton {
                bottom: 20px;
                right: 20px;
                width: 55px;
                height: 55px;
            }

            #backToTop {
                bottom: 85px;
                left: 20px;
                width: 45px;
                height: 45px;
                font-size: 1.3rem;
            }
        }

        /* Accessibility */
        #whatsappButton:focus,
        #backToTop:focus {
            outline: 3px solid #d4af37;
            outline-offset: 2px;
        }

        /* Print - Nascondi bottoni */
        @media print {
            #whatsappButton,
            #backToTop {
                display: none !important;
            }
        }
    `;

    document.head.appendChild(style);

    // ========================================
    // ANALYTICS TRACKING (opzionale)
    // ========================================
    
    if (CONFIG.whatsapp.enabled) {
        document.getElementById('whatsappButton').addEventListener('click', function() {
            console.log('WhatsApp button clicked');
            // Qui puoi aggiungere Google Analytics tracking se necessario
            // gtag('event', 'click', { 'event_category': 'WhatsApp', 'event_label': 'Floating Button' });
        });
    }

})();