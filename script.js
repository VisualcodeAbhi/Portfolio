/**
 * Abhi Web Developer - Portfolio Interactive Core
 * Features: High-performance Canvas Particle System, Smooth Scroll, 
 * Scroll-Reveal, Active Nav Highlighting, Dynamic Intake Form Validation.
 * Safe for Multi-page (index.html & portfolio.html).
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. LIGHTWEIGHT DYNAMIC CANVAS PARTICLE BACKGROUND
    // -------------------------------------------------------------
    initParticleBackground();

    // -------------------------------------------------------------
    // 2. MOBILE NAVIGATION CONTROLLER
    // -------------------------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-btn');

    if (mobileToggle && mobileOverlay) {
        function toggleMobileMenu() {
            mobileToggle.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            
            // Prevent background scrolling when menu is active
            if (mobileOverlay.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        mobileToggle.addEventListener('click', toggleMobileMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileOverlay.classList.contains('active')) {
                    toggleMobileMenu();
                }
            });
        });
    }

    // -------------------------------------------------------------
    // 3. HEADER GLASSMORPHIC SCROLL CONTROLLER & BACK TO TOP BUTTON
    // -------------------------------------------------------------
    const header = document.getElementById('main-header');
    const toTopBtn = document.getElementById('to-top-btn');

    if (header) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;

            // Header styles on scroll
            if (scrollPos > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Back to top button visibility
            if (toTopBtn) {
                if (scrollPos > 600) {
                    toTopBtn.style.opacity = '1';
                    toTopBtn.style.pointerEvents = 'all';
                    toTopBtn.style.transform = 'translateY(0)';
                } else {
                    toTopBtn.style.opacity = '0';
                    toTopBtn.style.pointerEvents = 'none';
                    toTopBtn.style.transform = 'translateY(10px)';
                }
            }
        });
    }

    // -------------------------------------------------------------
    // 4. SCROLL REVEAL TRIGGERS (INTERSECTION OBSERVER)
    // -------------------------------------------------------------
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Once revealed, we don't need to track it anymore
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // -------------------------------------------------------------
    // 5. ACTIVE NAV HIGHLIGHTING ON SCROLL (MULTI-PAGE COMPATIBLE)
    // -------------------------------------------------------------
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const isPortfolioPage = window.location.pathname.includes('portfolio.html');

    if (isPortfolioPage) {
        // Set Portfolio active permanently on portfolio.html page
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes('portfolio.html')) {
                link.classList.add('active');
            }
        });
    } else if (sections.length > 0) {
        // Normal scroll tracking on index.html
        window.addEventListener('scroll', () => {
            let currentSection = '';
            const scrollPos = window.scrollY + 200; // Offset for headers

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    link.classList.remove('active');
                    if (href.slice(1) === currentSection) {
                        link.classList.add('active');
                    }
                }
            });
        });
    }

    // -------------------------------------------------------------
    // 6. CLIENT INQUIRY FORM MANAGEMENT & REAL-TIME VALIDATION
    // -------------------------------------------------------------
    const projectForm = document.getElementById('project-form');
    const formSuccess = document.getElementById('form-success');

    if (projectForm && formSuccess) {
        const inputs = projectForm.querySelectorAll('.form-input');
        const submitBtn = document.getElementById('form-submit-btn');
        const resetBtn = document.getElementById('reset-form-btn');

        // Real-time input checking
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateInput(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('invalid')) {
                    validateInput(input);
                }
            });
        });

        function validateInput(input) {
            let isValid = true;

            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
            }

            if (isValid && input.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    isValid = false;
                }
            }

            if (isValid) {
                input.classList.remove('invalid');
            } else {
                input.classList.add('invalid');
            }

            return isValid;
        }

        projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isFormValid = true;

            // Validate all required inputs
            inputs.forEach(input => {
                if (!validateInput(input)) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Animate submission
                const origText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <span>Submitting Vision...</span>
                    <span class="submit-spinner"></span>
                `;

                // Simulate server network ping delay
                setTimeout(() => {
                    // Collect Form details for review
                    const selectedServices = Array.from(projectForm.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value);
                    const selectedBudget = projectForm.querySelector('input[name="budget"]:checked').value;
                    const clientName = document.getElementById('client-name').value;
                    const clientEmail = document.getElementById('client-email').value;
                    const projectDesc = document.getElementById('project-desc').value;

                    console.group('=== New Client Inquiry Captured ===');
                    console.log('Client Name:', clientName);
                    console.log('Client Email:', clientEmail);
                    console.log('Services Selected:', selectedServices.join(', '));
                    console.log('Budget Range:', selectedBudget);
                    console.log('Project Details:', projectDesc);
                    console.groupEnd();

                    // Fade out form and present customized Success message
                    projectForm.style.display = 'none';
                    formSuccess.style.display = 'flex';
                    
                    // Scroll to form area smoothly
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    
                    // Restore button for potential next triggers
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origText;
                }, 1800);
            }
        });

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                projectForm.reset();
                formSuccess.style.display = 'none';
                projectForm.style.display = 'block';
            });
        }
    }
});

/**
 * High-performance Canvas Particle Background system
 */
function initParticleBackground() {
    const bgContainer = document.getElementById('particle-bg');
    if (!bgContainer) return;

    // Create canvas
    const canvas = document.createElement('canvas');
    bgContainer.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let particles = [];
    const maxParticles = 65;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.reset();
            // Stagger initial distribution across viewport height
            this.y = Math.random() * canvas.height;
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -10;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedY = Math.random() * 0.4 + 0.1;
            this.speedX = (Math.random() - 0.5) * 0.2;
            // Muted, premium Indigo/Teal glow hues
            const colorChoices = [
                'rgba(99, 102, 241, 0.25)', // Indigo
                'rgba(20, 184, 166, 0.2)',  // Teal
                'rgba(139, 92, 246, 0.25)'  // Violet
            ];
            this.color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;

            // Loop back to top if offscreen
            if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = this.size * 2;
            ctx.shadowColor = this.color;
            ctx.fill();
        }
    }

    // Populate particles
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.shadowBlur = 0; // Reset canvas wide shadow blur for performance
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        // High performance framerate looping
        requestAnimationFrame(animate);
    }

    animate();
}
