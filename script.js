// CraftAI - Interactive JavaScript

// State Management
let isGenerating = false;
let mobileMenuOpen = false;

// Sample data for AI demo
const sampleInput = "I've been making pottery for 15 years. I learned from my grandmother who taught me traditional techniques. I use clay from our local river and fire my pieces in a wood kiln that I built myself.";

const sampleOutput = `Meet Sarah, a master potter whose hands carry the wisdom of generations. For fifteen years, she has been shaping more than clay—she's been molding a legacy. Under her grandmother's patient guidance, Sarah learned techniques passed down through time, each lesson a bridge between past and present.

Every piece begins with clay from the local river, where Sarah carefully selects materials that have witnessed the history of her land. Her wood-fired kiln, built stone by stone with her own hands, breathes life into each creation with flames that dance between tradition and artistry.

When you hold one of Sarah's pieces, you're not just holding pottery—you're holding a story, a tradition, and a piece of the earth transformed by passionate hands.`;

// Navigation Functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileMenu.classList.add('active');
    } else {
        mobileMenu.classList.remove('active');
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
    mobileMenuOpen = false;
}

// Smooth scrolling for navigation links
function scrollToHowItWorks() {
    document.getElementById('how-it-works').scrollIntoView({
        behavior: 'smooth'
    });
}

// AI Demo Functions
function generateStory() {
    const inputElement = document.getElementById('storyInput');
    const outputElement = document.getElementById('storyOutput');
    const generateBtn = document.getElementById('generateBtn');
    
    if (isGenerating) return;
    
    const inputValue = inputElement.value.trim();
    
    // Start generating
    isGenerating = true;
    generateBtn.disabled = true;
    generateBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-pulse">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        </svg>
        Generating...
    `;
    
    outputElement.innerHTML = '<div class="placeholder loading">AI is crafting your story...</div>';
    
    // Simulate AI processing time
    setTimeout(() => {
        let result;
        if (inputValue) {
            result = generateCustomStory(inputValue);
        } else {
            result = "Please enter your story first so our AI can work its magic!";
        }
        
        displayGeneratedStory(result);
        
        // Reset button
        isGenerating = false;
        generateBtn.disabled = false;
        generateBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
            </svg>
            Generate Story
        `;
    }, 2000);
}

function generateCustomStory(input) {
    // Simple AI simulation - in a real app, this would call an actual AI API
    const templates = [
        sampleOutput,
        `Discover the artistry of a craftsperson whose journey began with curiosity and blossomed into mastery. Every creation tells a story of dedication, tradition, and the endless pursuit of perfection. Through years of practice and patience, what started as simple materials transforms into works of art that capture the heart and imagination.`,
        `Behind every handcrafted piece lies a story of passion, skill, and unwavering dedication. This artisan's journey represents the beautiful intersection of tradition and innovation, where time-honored techniques meet contemporary vision. Each creation is not just an object, but a testament to the power of human creativity and the magic that happens when passion meets purpose.`
    ];
    
    // Return a random template or the sample output
    return input.toLowerCase().includes('pottery') || input.toLowerCase().includes('ceramic') ? 
           sampleOutput : 
           templates[Math.floor(Math.random() * templates.length)];
}

function displayGeneratedStory(story) {
    const outputElement = document.getElementById('storyOutput');
    const paragraphs = story.split('\n\n');
    
    let html = '<div class="content">';
    paragraphs.forEach(paragraph => {
        if (paragraph.trim()) {
            html += `<p>${paragraph.trim()}</p>`;
        }
    });
    html += '</div>';
    
    outputElement.innerHTML = html;
}

function loadSample() {
    const inputElement = document.getElementById('storyInput');
    const outputElement = document.getElementById('storyOutput');
    
    inputElement.value = sampleInput;
    outputElement.innerHTML = '<div class="placeholder">Click "Generate Story" to see the AI magic!</div>';
}

// Modal Functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form if it's the contact modal
    if (modalId === 'contactModal') {
        document.getElementById('contactForm').reset();
    }
}

// Button Action Functions
function showSignIn() {
    alert('Sign in functionality would redirect to the login page.');
}

function showGetStarted() {
    showModal('contactModal');
}

function startJourney() {
    showModal('contactModal');
}

function startFreeTrial() {
    showModal('contactModal');
}

function scheduleDemo() {
    alert('Demo scheduling would open a calendar booking system.');
}

function getFullAccess() {
    showModal('contactModal');
}

function showHelp() {
    alert('Help Center would open a comprehensive FAQ and support section.');
}

function showContact() {
    showModal('contactModal');
}

function showPrivacy() {
    alert('Privacy Policy would open in a new window or modal.');
}

function showTerms() {
    alert('Terms of Service would open in a new window or modal.');
}

// Form Submission
function submitContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validate required fields
    if (!data.name || !data.email || !data.goals) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Submitting...';
    
    // Simulate form submission
    setTimeout(() => {
        console.log('Form submitted:', data);
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Close contact modal and show success modal
        closeModal('contactModal');
        showModal('successModal');
        
        // In a real application, you would send this data to your server
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        
    }, 1500);
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        const modalId = event.target.id;
        closeModal(modalId);
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenuOpen && 
        !mobileMenu.contains(event.target) && 
        !mobileMenuBtn.contains(event.target)) {
        closeMobileMenu();
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenuOpen) {
                    closeMobileMenu();
                }
            }
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'hsla(35, 20%, 98%, 0.95)';
    } else {
        navbar.style.backgroundColor = 'hsla(35, 20%, 98%, 0.8)';
    }
});

// Add intersection observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.step-card, .artisan-card, .demo-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('CraftAI application initialized');
    
    // Set initial focus for better accessibility
    const firstFocusableElement = document.querySelector('button, a, input, select, textarea');
    if (firstFocusableElement) {
        // Don't auto-focus to avoid jumping on page load
        // firstFocusableElement.focus();
    }
});