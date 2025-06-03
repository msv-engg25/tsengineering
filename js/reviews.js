/**
 * Reviews page specific JavaScript for T.S ISPAT Private Limited website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize reviews grid
    initReviewsGrid();

    // Initialize review form submission
    initReviewForm();

    // Also fetch real reviews from backend
    fetchReviews(); // optional, if you want to load reviews dynamically from backend
});

/**
 * Initialize reviews grid with sample reviews (or from backend)
 */
function initReviewsGrid() {
    const reviewsGrid = document.querySelector('.reviews-grid');

    if (!reviewsGrid) return;

    // Sample reviews data (static fallback or initial)
    const reviews = [
        {
            id: 1,
            name: 'Rajiv Kumar',
            company: 'Skyline Steel Industries',
            image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            rating: 5,
            product: 'TMT Bar Mills',
            content: "T.S ISPAT's TMT Bar Mill has significantly improved our production efficiency. The quality of the equipment and the after-sales support have been exceptional. We've seen a 20% increase in output since implementation.",
            date: '15 Mar 2024'
        },
        {
            id: 2,
            name: 'Amit Sharma',
            company: 'Pioneer Metal Works',
            image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            rating: 5,
            product: 'Section Mills',
            content: "We've been using T.S ISPAT's Section Mills for over five years now. Their durability and precision are unmatched in the industry. Highly recommended for anyone looking for reliable equipment!",
            date: '02 Feb 2024'
        },
        {
            id: 3,
            name: 'Priya Malhotra',
            company: 'Everest Steel Corporation',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            rating: 4,
            product: 'Gearboxes',
            content: "The technical expertise and customer service provided by T.S ISPAT team are outstanding. They worked closely with us to customize solutions for our specific requirements. Their gearboxes have performed exceptionally well under heavy loads.",
            date: '20 Jan 2024'
        },
        {
            id: 4,
            name: 'Vikram Singh',
            company: 'Shree Metal Industries',
            image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            rating: 5,
            product: 'Plate Mill',
            content: "Our plate mill from T.S ISPAT has been running flawlessly for the past 3 years. The precision and consistency in plate thickness have helped us maintain high quality standards. Their service team is prompt and professional.",
            date: '05 Dec 2023'
        },
        {
            id: 5,
            name: 'Sunita Patel',
            company: 'Global Steel Processors',
            image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            rating: 4,
            product: 'Cooling Beds',
            content: "The cooling bed we purchased from T.S ISPAT has improved our production flow significantly. Installation was quick and the training provided was thorough. Only suggestion would be to improve the documentation.",
            date: '18 Nov 2023'
        },
        {
            id: 6,
            name: 'Karan Ahuja',
            company: 'Modern Mills Ltd',
            image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            rating: 5,
            product: 'Strip Rolling Mill',
            content: "T.S ISPAT's strip rolling mill has exceeded our expectations in terms of performance and reliability. The strip thickness consistency is remarkable. Their after-sales service and spare parts availability are excellent.",
            date: '03 Oct 2023'
        }
    ];

    let reviewsHTML = '';

    reviews.forEach(review => {
        reviewsHTML += `
            <div class="review-card">
                <div class="review-rating">
                    ${generateStarRating(review.rating)}
                </div>
                <p class="review-content">${review.content}</p>
                <div class="review-product">
                    <strong>Product:</strong> ${review.product}
                </div>
                <div class="review-author">
                    <div class="review-author-image">
                        <img src="${review.image}" alt="${review.name}">
                    </div>
                    <div class="review-author-details">
                        <h4>${review.name}</h4>
                        <p class="review-author-company">${review.company}</p>
                        <p class="review-date">${review.date}</p>
                    </div>
                </div>
            </div>
        `;
    });

    reviewsGrid.innerHTML = reviewsHTML;

    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.15}s`;
    });
}

function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
}

function initReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    if (!reviewForm) return;

    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const ratingChecked = document.querySelector('input[name="rating"]:checked');
        if (!ratingChecked) {
            alert('Please select a rating.');
            return;
        }

        const formData = {
            name: document.getElementById('name').value.trim(),
            company: document.getElementById('company').value.trim(),
            email: document.getElementById('email').value.trim(),
            product: document.getElementById('productUsed').value.trim(),
            rating: parseInt(ratingChecked.value),
            content: document.getElementById('review').value.trim(),
            consent: document.getElementById('consent').checked,
        };

        submitReview(formData);
    });
}

function submitReview(formData) {
    const submitButton = document.querySelector('.submit-review-btn');
    const originalButtonText = submitButton.innerHTML;

    submitButton.innerHTML = '<div class="spinner"></div>';
    submitButton.disabled = true;

    fetch('https://reviewsdb.onrender.com/api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to submit review');
        }
        return response.json();
    })
    .then(data => {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        document.getElementById('reviewForm').reset();
        showSuccessMessage('Thank you for your review! It will be published after moderation.');
        document.querySelector('.review-form-container').scrollIntoView({ behavior: 'smooth' });
        // fetchReviews(); // Optionally refresh
    })
    .catch(error => {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        alert('An error occurred while submitting your review.');
        console.error(error);
    });
}

function showSuccessMessage(message) {
    alert(message);
}

function fetchReviews() {
    fetch('https://reviewsdb.onrender.com/api/reviews')
        .then(res => res.json())
        .then(data => {
            if (data && data.length) {
                renderReviews(data);
            }
        })
        .catch(err => {
            console.error('Error fetching reviews:', err);
        });
}
