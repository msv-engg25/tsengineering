/**
 * Leadership page specific JavaScript for T.S ISPAT Private Limited website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize profile animations
    initProfileAnimations();
});

/**
 * Initialize profile animations on scroll
 */
function initProfileAnimations() {
    const leadershipProfiles = document.querySelectorAll('.leadership-profile');
    
    if (!leadershipProfiles.length) return;
    
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
        leadershipProfiles.forEach(profile => {
            if (isElementInViewport(profile)) {
                profile.classList.add('fade-in');
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial state
    handleScroll();
    
    // Add staggered animation delay to profiles
    leadershipProfiles.forEach((profile, index) => {
        profile.style.animationDelay = `${index * 0.3}s`;
    });
}