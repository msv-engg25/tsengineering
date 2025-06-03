/**
 * Home page specific JavaScript for T.S ISPAT Private Limited website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize products section
    initProductsSection();
    
    // Initialize leadership preview section
    initLeadershipPreview();
    
    // Initialize testimonials section
    initTestimonials();
    
    // Add fade-in animations for hero content
    initHeroAnimations();
});

/**
 * Initialize the products section with featured products
 */
function initProductsSection() {
    const productsGrid = document.querySelector('.products-grid');
    
    if (!productsGrid) return;
    
    // Featured products data
    const featuredProducts = [
        {
            id: 'tmt-mill',
            category: 'Mills',
            title: 'TMT Bar Mills',
            description: 'High-performance mills for producing TMT bars with precision and efficiency.',
            image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/JB/DZ/JS/57505699/tmt-bar-steel-rolling-mill.jpg'
        },
        {
            id: 'section-mill',
            category: 'Mills',
            title: 'Section Mills',
            description: 'Advanced section mills designed for producing various structural shapes with high accuracy.',
            image: 'https://i0.wp.com/www.tsroll.com/wp-content/uploads/2018/08/DSC00270.jpg?resize=600%2C360&ssl=1'
        },
        {
            id: 'gearboxes',
            category: 'Equipment',
            title: 'Heavy-Duty Gearboxes',
            description: 'Precision-engineered gearboxes built for durability and continuous operation in demanding environments.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgWjPhYca4JfypLqLFwkHteAilbKqk27N_Q&s'
        }
    ];
    
    // Generate HTML for featured products
    let productsHTML = '';
    
    featuredProducts.forEach(product => {
        productsHTML += `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-details">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <a href="products.html#${product.id}" class="product-link">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
    });
    
    // Set products grid content
    productsGrid.innerHTML = productsHTML;
}

/**
 * Initialize the leadership preview section
 */
function initLeadershipPreview() {
    const leadershipGrid = document.querySelector('.leadership-grid');
    
    if (!leadershipGrid) return;
    
    // Leadership data
    const leadershipData = [
        {
            name: 'Narinder Pal Singh',
            title: 'Chairman',
            image: 'Chairman.jpg'
        },
        {
            name: 'Jasdeep Kaur',
            title: 'Director',
            image: 'Director.jpg'
        }
    ];
    
    // Generate HTML for leadership cards
    let leadershipHTML = '';
    
    leadershipData.forEach(leader => {
        leadershipHTML += `
            <div class="leadership-card">
                <div class="leadership-image">
                    <img src="${leader.image}" alt="${leader.name}">
                </div>
                <div class="leadership-details">
                    <h3 class="leadership-name">${leader.name}</h3>
                    <p class="leadership-title">${leader.title}</p>
                </div>
            </div>
        `;
    });
    
    // Set leadership grid content
    leadershipGrid.innerHTML = leadershipHTML;
}

/**
 * Initialize the testimonials section with slider functionality
 */
function initTestimonials() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    
    if (!testimonialContainer || !prevButton || !nextButton) return;
    
    // Testimonial data
    const testimonials = [
        {
            text: "T.S ISPAT's TMT Bar Mill has significantly improved our production efficiency. The quality of the equipment and the after-sales support have been exceptional.",
            author: "Rajiv Kumar",
            company: "Skyline Steel Industries",
            image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            text: "We've been using T.S ISPAT's Section Mills for over five years now. Their durability and precision are unmatched in the industry. Highly recommended!",
            author: "Amit Sharma",
            company: "Pioneer Metal Works",
            image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            text: "The technical expertise and customer service provided by T.S ISPAT team are outstanding. They worked closely with us to customize solutions for our specific requirements.",
            author: "Priya Malhotra",
            company: "Everest Steel Corporation",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];
    
    // Generate HTML for testimonials
    let testimonialsHTML = '';
    
    testimonials.forEach(testimonial => {
        testimonialsHTML += `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p class="testimonial-text">${testimonial.text}</p>
                </div>
                <div class="testimonial-author">
                    <div class="testimonial-author-image">
                        <img src="${testimonial.image}" alt="${testimonial.author}">
                    </div>
                    <div class="testimonial-author-details">
                        <h4>${testimonial.author}</h4>
                        <p class="testimonial-author-company">${testimonial.company}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Set testimonial container content
    testimonialContainer.innerHTML = testimonialsHTML;
    
    // Current slide index
    let currentSlide = 0;
    const totalSlides = testimonials.length;
    
    // Update slide position
    function updateSlidePosition() {
        testimonialContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    // Initialize slide position
    updateSlidePosition();
    
    // Next button click handler
    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    });
    
    // Previous button click handler
    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });
    
    // Auto slide change every 5 seconds
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    }, 5000);
}

/**
 * Initialize hero section animations
 */
function initHeroAnimations() {
    // Add fade-in animations with delays
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta');
    
    heroElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.2}s`;
    });
}
