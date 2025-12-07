// ==========================================
// COOKIE CONSENT BANNER - GDPR Compliant
// Studio Legale Fedeli, Macchi & Partners
// ==========================================

(function() {
    'use strict';

    // Verifica se l'utente ha già dato il consenso
    if (localStorage.getItem('fmlex-cookie-consent') === 'accepted') {
        return; // Non mostrare il banner
    }

    // Crea il banner HTML
    const banner = document.createElement('div');
    banner.id = 'cookieConsentBanner';
    banner.innerHTML = `
        <div class="cookie-banner-content">
            <div class="cookie-banner-text">
                <div class="cookie-icon">🍪</div>
                <div class="cookie-text-content">
                    <strong>Informativa sui Cookie</strong>
                    <p>Questo sito utilizza cookie tecnici necessari per il corretto funzionamento del sito. Continuando la navigazione acconsenti al loro utilizzo. <a href="#" id="cookieLearnMore">Maggiori informazioni</a></p>
                </div>
            </div>
            <div class="cookie-banner-buttons">
                <button id="cookieAccept" class="cookie-btn cookie-accept">Accetta</button>
                <button id="cookieReject" class="cookie-btn cookie-reject">Rifiuta</button>
            </div>
        </div>
    `;

    // Aggiungi gli stili CSS
    const style = document.createElement('style');
    style.textContent = `
        #cookieConsentBanner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(30, 58, 95, 0.98);
            color: white;
            padding: 1.5rem 2rem;
            z-index: 10000;
            box-shadow: 0 -5px 30px rgba(0,0,0,0.3);
            animation: slideUp 0.5s ease;
            backdrop-filter: blur(10px);
        }

        @keyframes slideUp {
            from { 
                transform: translateY(100%);
                opacity: 0;
            }
            to { 
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes slideDown {
            from { 
                transform: translateY(0);
                opacity: 1;
            }
            to { 
                transform: translateY(100%);
                opacity: 0;
            }
        }

        .cookie-banner-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .cookie-banner-text {
            flex: 1;
            display: flex;
            gap: 1rem;
            align-items: start;
            min-width: 300px;
        }

        .cookie-icon {
            font-size: 2.5rem;
            line-height: 1;
            flex-shrink: 0;
        }

        .cookie-text-content {
            flex: 1;
        }

        .cookie-text-content strong {
            color: #d4af37;
            font-size: 1.1rem;
            display: block;
            margin-bottom: 0.5rem;
        }

        .cookie-text-content p {
            margin: 0;
            opacity: 0.95;
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .cookie-text-content a {
            color: #d4af37;
            text-decoration: underline;
            cursor: pointer;
        }

        .cookie-text-content a:hover {
            color: white;
        }

        .cookie-banner-buttons {
            display: flex;
            gap: 1rem;
            flex-shrink: 0;
        }

        .cookie-btn {
            padding: 0.8rem 2rem;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
            font-family: inherit;
        }

        .cookie-accept {
            background: #d4af37;
            color: white;
        }

        .cookie-accept:hover {
            background: #c49d2d;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
        }

        .cookie-reject {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        .cookie-reject:hover {
            background: white;
            color: #1e3a5f;
        }

        @media (max-width: 768px) {
            #cookieConsentBanner {
                padding: 1.5rem 1rem;
            }

            .cookie-banner-content {
                flex-direction: column;
                text-align: center;
                gap: 1.5rem;
            }

            .cookie-banner-text {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .cookie-banner-buttons {
                width: 100%;
                flex-direction: column;
            }

            .cookie-btn {
                width: 100%;
            }

            .cookie-icon {
                font-size: 3rem;
            }
        }
    `;

    // Aggiungi stili e banner al DOM quando il documento è pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        document.head.appendChild(style);
        document.body.appendChild(banner);

        // Event listener per il pulsante "Accetta"
        document.getElementById('cookieAccept').addEventListener('click', function() {
            acceptCookies();
        });

        // Event listener per il pulsante "Rifiuta"
        document.getElementById('cookieReject').addEventListener('click', function() {
            rejectCookies();
        });

        // Event listener per "Maggiori informazioni"
        document.getElementById('cookieLearnMore').addEventListener('click', function(e) {
            e.preventDefault();
            showCookieInfo();
        });
    }

    function acceptCookies() {
        localStorage.setItem('fmlex-cookie-consent', 'accepted');
        hideBanner();
        console.log('Cookie consent: Accettato');
    }

    function rejectCookies() {
        localStorage.setItem('fmlex-cookie-consent', 'rejected');
        hideBanner();
        console.log('Cookie consent: Rifiutato');
    }

    function hideBanner() {
        const banner = document.getElementById('cookieConsentBanner');
        banner.style.animation = 'slideDown 0.5s ease';
        setTimeout(() => {
            banner.remove();
        }, 500);
    }

    function showCookieInfo() {
        alert('Cookie Tecnici\n\nQuesto sito utilizza solo cookie tecnici necessari per il corretto funzionamento del sito web. Non utilizziamo cookie di profilazione o tracciamento.\n\nPer maggiori informazioni, consulta la nostra Privacy Policy.');
    }

})();