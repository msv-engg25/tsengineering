/**
 * Common JavaScript functionality for T.S ISPAT Private Limited website
 * Contains shared functionality used across all pages
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize header
    initHeader();
    
    // Initialize footer
    initFooter();
    
    // Initialize mobile menu functionality
    initMobileMenu();
    
    // Initialize scroll behavior
    initScrollBehavior();
});

/**
 * Initialize the website header
 */
function initHeader() {
    const headerElement = document.getElementById('header');
    
    if (!headerElement) return;
    
    // Get current page URL to highlight active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Create header HTML content
    const headerHTML = `
        <div class="container header-container">
            <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 0.5rem;">
                <img src="logo3.png" alt="Logo" style="height: 40px; width: auto;" />
                <div class="logo-text">
                    T.S ISPAT
                    <span>Private Limited</span>
                </div>
            </a>
            <button class="mobile-toggle" aria-label="Toggle Menu">
                <i class="fas fa-bars"></i>
            </button>
            <nav class="nav-menu">
                <ul class="nav-list">
                    <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                    <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About Us</a></li>
                    <li><a href="products.html" class="${currentPage === 'products.html' ? 'active' : ''}">Products</a></li>
                    <li><a href="leadership.html" class="${currentPage === 'leadership.html' ? 'active' : ''}">Leadership</a></li>
                    <li><a href="reviews.html" class="${currentPage === 'reviews.html' ? 'active' : ''}">Reviews</a></li>
                </ul>
                <div class="contact-cta">
                    <a href="contact.html" class="btn btn-primary">Contact Us</a>
                </div>
            </nav>
        </div>
    `;
    
    // Set header content
    headerElement.innerHTML = headerHTML;
}

/**
 * Initialize the website footer
 */
function initFooter() {
    const footerElement = document.getElementById('footer');
    
    if (!footerElement) return;
    
    // Create footer HTML content
    const footerHTML = `
        <div class="container">
            <div class="footer-container">
                <div class="footer-col">
                    <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 0.5rem;">
                <img src="logo3.png" alt="Logo" style="height: 40px; width: auto;" />
                        <div class="logo-text" style="color: white;">
                            T.S ISPAT
                            <span>Private Limited</span>
                        </div>
                    </a>
                    <p>Leading manufacturer of high-quality rolling mill equipment since 1986. Our products are designed for durability, efficiency, and performance.</p>
                    <div class="footer-social">
                        <a href="https://www.linkedin.com/company/tsispat/" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/tsispatpvtltd/" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/tsengineeringwork/" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="leadership.html">Leadership</a></li>
                        <li><a href="reviews.html">Reviews</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Products</h3>
                    <ul class="footer-links">
                        <li><a href="products.html#tmt">TMT Bar Mills</a></li>
                        <li><a href="products.html#section">Section Mills</a></li>
                        <li><a href="products.html#strip">Strip Rolling Mill</a></li>
                        <li><a href="products.html#plate">Plate Mill</a></li>
                        <li><a href="products.html#sugar">Sugar Mill</a></li>
                        <li><a href="products.html#components">Mill Components</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Contact Us</h3>
                    <div class="footer-contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>
                        <a href="https://www.google.com/maps?q=E-20+South+Side+G.T+Rd,+Industrial+Area,+Ghaziabad,+Uttar+Pradesh+201009,+India" target="_blank" style="color: white; text-decoration: none;">
                        E-20 South Side G.T Rd, Industrial Area<br>
                        Ghaziabad, Uttar Pradesh 201009<br>
                        India
                        </a>
                        </p>
                    </div>
                    <div class="footer-contact-item">
                        <i class="fas fa-phone-alt"></i>
                         <p>
                         <a href="tel:+919810338686"style="color: white;">+91 98103 38686</a><br>
                         <a href="tel:+919810743439"style="color: white;">+91 98107 43439</a>
                         </p>
                    </div>
                    <div class="footer-contact-item">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:sales@tsengineering.in" style="color: white;">sales@tsengineering.in</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} T.S ISPAT Private Limited. All Rights Reserved.</p>
            </div>
        </div>
    `;
    
    // Set footer content
    footerElement.innerHTML = footerHTML;
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!mobileToggle || !navMenu) return;
    
    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Toggle icon between bars and times
        const icon = mobileToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

/**
 * Initialize scroll behavior functionality
 */
function initScrollBehavior() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Check initial scroll position
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    }
}

/**
 * Create and show a modal with custom content
 * @param {string} title - Modal title
 * @param {string} content - Modal content HTML
 * @param {Function} onClose - Optional callback function to execute when modal is closed
 */
function showModal(title, content, onClose = null) {
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Create modal HTML
    modalContent.innerHTML = `
        <button class="modal-close" aria-label="Close Modal">
            <i class="fas fa-times"></i>
        </button>
        <h3>${title}</h3>
        <div class="modal-body">
            ${content}
        </div>
    `;
    
    // Append modal to DOM
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Show modal with animation
    setTimeout(() => {
        modalOverlay.classList.add('active');
    }, 10);
    
    // Handle close button click
    const closeButton = modalContent.querySelector('.modal-close');
    closeButton.addEventListener('click', closeModal);
    
    // Handle click outside modal content to close
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close modal function
    function closeModal() {
        modalOverlay.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(modalOverlay);
            if (onClose && typeof onClose === 'function') {
                onClose();
            }
        }, 300);
    }
}

/**
 * Display a success message
 * @param {string} message - Success message text
 * @param {number} duration - Duration in milliseconds to show message
 */
function showSuccessMessage(message, duration = 3000) {
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = 'message message-success';
    messageElement.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    // Add to DOM
    document.body.appendChild(messageElement);
    
    // Show with animation
    setTimeout(() => {
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after duration
    setTimeout(() => {
        messageElement.style.opacity = '0';
        messageElement.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, 300);
    }, duration);
}

/**
 * Display an error message
 * @param {string} message - Error message text
 * @param {number} duration - Duration in milliseconds to show message
 */
function showErrorMessage(message, duration = 3000) {
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = 'message message-error';
    messageElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    // Add to DOM
    document.body.appendChild(messageElement);
    
    // Show with animation
    setTimeout(() => {
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after duration
    setTimeout(() => {
        messageElement.style.opacity = '0';
        messageElement.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, 300);
    }, duration);
}