// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    });

    // Animate feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(step);
    });
});

// Registration Modal Functions
function openRegistrationModal(userType = '') {
    const modal = document.getElementById('registrationModal');
    const userTypeSelect = document.getElementById('userType');
    
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        if (userType && userTypeSelect) {
            userTypeSelect.value = userType;
        }
    }
}

function closeRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Reset form
        const form = document.getElementById('registrationForm');
        if (form) {
            form.reset();
        }

        // Reset to first step
        currentStep = 1;

        // Hide all steps except first
        for (let i = 1; i <= totalSteps; i++) {
            const step = document.getElementById(`step${i}`);
            if (step) {
                step.style.display = i === 1 ? 'block' : 'none';
            }
        }

        // Clear file previews
        const previews = document.querySelectorAll('.image-preview');
        previews.forEach(preview => {
            preview.innerHTML = '';
        });

        // Reset navigation buttons
        updateNavigationButtons();
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('registrationModal');
    if (event.target === modal) {
        closeRegistrationModal();
    }
});

// Multi-step registration form
let currentStep = 1;
const totalSteps = 3;

function changeStep(direction) {
    const currentStepElement = document.getElementById(`step${currentStep}`);

    // Validate current step before proceeding
    if (direction === 1 && !validateCurrentStep()) {
        return;
    }

    // Hide current step
    currentStepElement.style.display = 'none';

    // Update step number
    currentStep += direction;

    // Show new step
    const newStepElement = document.getElementById(`step${currentStep}`);
    newStepElement.style.display = 'block';

    // Update navigation buttons
    updateNavigationButtons();
}

function validateCurrentStep() {
    const step = document.getElementById(`step${currentStep}`);
    const requiredFields = step.querySelectorAll('input[required], select[required]');

    for (let field of requiredFields) {
        if (!field.value.trim()) {
            field.focus();
            alert(`Please fill in the required field: ${field.previousElementSibling.textContent}`);
            return false;
        }

        // Validate mobile number format
        if (field.type === 'tel' && field.value) {
            const mobileRegex = /^\+91[0-9]{10}$/;
            if (!mobileRegex.test(field.value)) {
                field.focus();
                alert('Please enter a valid mobile number in format: +91XXXXXXXXXX');
                return false;
            }
        }

        // Validate age
        if (field.type === 'number' && field.id === 'age') {
            const age = parseInt(field.value);
            if (age < 18 || age > 60) {
                field.focus();
                alert('Age must be between 18 and 60 years');
                return false;
            }
        }
    }

    // Validate file uploads in step 2
    if (currentStep === 2) {
        const selfiePhoto = document.getElementById('selfiePhoto');
        const govId = document.getElementById('govId');
        const idType = document.getElementById('idType');

        if (!selfiePhoto.files.length) {
            alert('Please upload your selfie photo');
            return false;
        }

        if (!idType.value) {
            alert('Please select your ID type');
            return false;
        }

        if (!govId.files.length) {
            alert('Please upload your government ID');
            return false;
        }
    }

    // Validate checkboxes in step 3
    if (currentStep === 3) {
        const checkboxes = document.querySelectorAll('#step3 input[type="checkbox"][required]');
        for (let checkbox of checkboxes) {
            if (!checkbox.checked) {
                checkbox.focus();
                alert('Please accept all required terms and conditions');
                return false;
            }
        }
    }

    return true;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    // Show/hide previous button
    prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-block';

    // Show/hide next/submit buttons
    if (currentStep === totalSteps) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// File upload handlers
function setupFileUploads() {
    const selfiePhoto = document.getElementById('selfiePhoto');
    const govId = document.getElementById('govId');

    if (selfiePhoto) {
        selfiePhoto.addEventListener('change', function(e) {
            handleFileUpload(e, 'selfiePreview', 'Selfie uploaded successfully');
        });
    }

    if (govId) {
        govId.addEventListener('change', function(e) {
            handleFileUpload(e, 'idPreview', 'ID document uploaded successfully');
        });
    }
}

function handleFileUpload(event, previewId, successMessage) {
    const file = event.target.files[0];
    const preview = document.getElementById(previewId);

    if (file) {
        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB');
            event.target.value = '';
            return;
        }

        // Validate file type
        if (!file.type.match('image.*')) {
            alert('Please upload only image files (JPG, PNG)');
            event.target.value = '';
            return;
        }

        // Show preview
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `
                <img src="${e.target.result}" alt="Preview">
                <div class="file-info">${successMessage}</div>
            `;
        };
        reader.readAsDataURL(file);
    }
}

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! We will contact you soon.\n\nContact us directly:\n📞 Phone: +91 9208438126\n📧 Email: pk9208438126@gmail.com\n\nWe are available 24/7 for immediate assistance.');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Registration form submission
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Final validation
            if (!validateCurrentStep()) {
                return;
            }

            // Collect all form data
            const formData = {
                userType: document.getElementById('userType').value,
                fullName: document.getElementById('fullName').value,
                mobileNumber: document.getElementById('mobileNumber').value,
                emailAddress: document.getElementById('emailAddress').value,
                age: document.getElementById('age').value,
                idType: document.getElementById('idType').value,
                selfiePhoto: document.getElementById('selfiePhoto').files[0],
                govId: document.getElementById('govId').files[0],
                agreeTerms: document.getElementById('agreeTerms').checked,
                verifyInfo: document.getElementById('verifyInfo').checked,
                ageConfirm: document.getElementById('ageConfirm').checked
            };

            // Simulate registration process
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Registration...';
            submitBtn.disabled = true;

            setTimeout(() => {
                const fee = formData.userType === 'men' ? '₹1,200' : '₹2,600';
                alert(`Registration Submitted Successfully! 🎉\n\n` +
                      `📋 Registration Details:\n` +
                      `• Name: ${formData.fullName}\n` +
                      `• Type: ${formData.userType === 'men' ? 'Men' : 'Women'}\n` +
                      `• Mobile: ${formData.mobileNumber}\n` +
                      `• ID Type: ${formData.idType}\n` +
                      `• Registration Fee: ${fee}\n\n` +
                      `✅ Next Steps:\n` +
                      `1. Complete payment of ${fee}\n` +
                      `2. Document verification (within 24 hours)\n` +
                      `3. Receive your unique connection code\n\n` +
                      `📞 Contact: +91 9208438126\n` +
                      `📧 Email: pk9208438126@gmail.com`);

                closeRegistrationModal();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }

    // Initialize file uploads and form
    setupFileUploads();
    updateNavigationButtons();
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effect to cards
    const cards = document.querySelectorAll('.feature-card, .pricing-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
}

// Add floating hearts animation
function createFloatingHearts() {
    const features = document.querySelector('.features');
    if (!features) return;

    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.cssText = `
            position: absolute;
            font-size: 20px;
            left: ${Math.random() * 100}%;
            top: 100%;
            pointer-events: none;
            animation: floatUp 4s ease-out forwards;
            z-index: 1;
        `;

        features.style.position = 'relative';
        features.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 4000);
    }, 3000);
}

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-200px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add interactive cursor effect
function createCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.3), rgba(236, 72, 153, 0.3));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(1.5)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
}

// Add phone number and email click tracking
function trackContactClicks() {
    // Track phone clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // Show confirmation message
            const phoneNumber = this.textContent.trim();
            console.log(`Calling ${phoneNumber}...`);
        });
    });

    // Track email clicks
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // Show confirmation message
            const email = this.href.replace('mailto:', '');
            console.log(`Opening email to ${email}...`);
        });
    });
}

// Add contact section animations
function animateContactCards() {
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.animationDelay = `${index * 0.2}s`;

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 200));
    });
}

// Add floating button animation on scroll
function handleFloatingButton() {
    const floatingBtn = document.querySelector('.floating-btn');
    if (!floatingBtn) return;

    let isVisible = false;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 300 && !isVisible) {
            floatingBtn.style.opacity = '1';
            floatingBtn.style.transform = 'scale(1)';
            isVisible = true;
        } else if (scrollTop <= 300 && isVisible) {
            floatingBtn.style.opacity = '0.8';
            floatingBtn.style.transform = 'scale(0.9)';
            isVisible = false;
        }
    });

    // Initial state
    floatingBtn.style.opacity = '0.8';
    floatingBtn.style.transform = 'scale(0.9)';
    floatingBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    createFloatingHearts();
    createCursorEffect();
    trackContactClicks();
    animateContactCards();
    handleFloatingButton();
});
