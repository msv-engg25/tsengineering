/**
 * About page specific JavaScript for T.S ISPAT Private Limited website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize timeline animation
    initTimelineAnimation();
});

/**
 * Initialize timeline animation on scroll
 */
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (!timelineItems.length) return;
    
    // Function to check if an element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to handle scroll event
    function handleScroll() {
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('fade-in');
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial state
    handleScroll();
    
    // Add staggered animation delay to timeline items
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
}