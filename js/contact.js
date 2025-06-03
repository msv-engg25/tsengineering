/**
 * Contact page specific JavaScript for T.S ISPAT Private Limited website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact form
    initContactForm();
    
    // Check URL parameters for pre-filling form
    checkUrlParameters();
});

/**
 * Initialize contact form submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Add submit event listener
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Get form data
        const formData = {
            fullName: document.getElementById('fullName').value,
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            inquiry: document.getElementById('inquiry').value,
            message: document.getElementById('message').value
        };
        
        // Submit form to backend
        submitContactForm(formData);
    });
}

/**
 * Validate contact form
 * @returns {boolean} True if form is valid, false otherwise
 */
function validateForm() {
    let isValid = true;
    
    // Reset previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
    
    // Get form fields
    const requiredFields = [
        { id: 'fullName', name: 'Full Name' },
        { id: 'company', name: 'Company Name' },
        { id: 'email', name: 'Email Address' },
        { id: 'phone', name: 'Phone Number' },
        { id: 'subject', name: 'Subject' },
        { id: 'inquiry', name: 'Inquiry Type' },
        { id: 'message', name: 'Message' }
    ];
    
    // Check required fields
    requiredFields.forEach(field => {
        const input = document.getElementById(field.id);
        const value = input.value.trim();
        
        if (!value) {
            showFieldError(input, `${field.name} is required`);
            isValid = false;
        }
    });
    
    // Validate email format
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    
    if (emailValue && !isValidEmail(emailValue)) {
        showFieldError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone number format
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value.trim();
    
    if (phoneValue && !isValidPhone(phoneValue)) {
        showFieldError(phoneInput, 'Please enter a valid phone number');
        isValid = false;
    }
    
    return isValid;
}

/**
 * Check if email is valid
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email is valid, false otherwise
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Check if phone number is valid
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if phone is valid, false otherwise
 */
function isValidPhone(phone) {
    // Allow for various phone formats with optional country code
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
}

/**
 * Show error message for form field
 * @param {HTMLElement} input - Form input element
 * @param {string} message - Error message
 */
function showFieldError(input, message) {
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'var(--error-color)';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.textContent = message;

    input.style.borderColor = 'var(--error-color)';
    input.parentElement.appendChild(errorElement);

    input.addEventListener('focus', function() {
        input.style.borderColor = '';
        const error = input.parentElement.querySelector('.error-message');
        if (error) {
            error.remove();
        }
    }, { once: true });
}

/**
 * Submit contact form to backend
 * @param {Object} formData - Contact form data
 */
function submitContactForm(formData) {
    const submitButton = document.querySelector('.submit-btn');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<div class="spinner"></div>';
    submitButton.disabled = true;

    fetch('https://contactdb-75w3.onrender.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send message.');
        }
        return response.json();
    })
    .then(() => {
        document.getElementById('contactForm').reset();
        showModal('Message Sent', `
            <div class="message-success">
                <p>Thank you for contacting us, ${formData.fullName}!</p>
                <p>Your message has been sent successfully. Our team will get back to you within 24 hours.</p>
            </div>
        `);
    })
    .catch(error => {
        showModal('Error', `
            <div class="message-error">
                <p>There was an error sending your message. Please try again later.</p>
                <p>Error: ${error.message}</p>
            </div>
        `);
    })
    .finally(() => {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    });
}

/**
 * Check URL parameters for pre-filling form
 */
function checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    
    if (product) {
        const subjectField = document.getElementById('subject');
        const inquiryField = document.getElementById('inquiry');
        const messageField = document.getElementById('message');
        
        if (subjectField) {
            subjectField.value = `Inquiry about ${product}`;
        }
        
        if (inquiryField) {
            inquiryField.value = 'product';
        }
        
        if (messageField) {
            messageField.value = `I would like to request more information about the ${product}.`;
        }
    }
}
