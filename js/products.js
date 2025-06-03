/**
 * Products page specific JavaScript for T.S ISPAT Private Limited website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product filtering
    initProductFiltering();
    
    // Initialize product details modal
    initProductDetailsModal();
    
    // Check for URL hash to filter products
    checkUrlHash();
});

/**
 * Product data array
 */
const products = [
    {
        id: 'tmt-mill',
        category: 'mills',
        title: 'TMT Bar Mills',
        description: 'High-performance mills for producing TMT bars with precision and efficiency.',
        features: [
            'Production capacity from 15,000 to 200,000 tons per annum',
            'Bar sizes ranging from 8mm to 40mm',
            'Advanced quenching and self-tempering technology',
            'Automated process control systems'
        ],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxW6aKVDiOutlKlsSU4MZO47fGZ6ntXWvnPw&s',
        badge: 'Best Seller'
    },
    {
        id: 'section-mill',
        category: 'mills',
        title: 'Section Mills',
        description: 'Advanced section mills designed for producing various structural shapes with high accuracy.',
        features: [
            'Produces angles, channels, beams, and special sections',
            'Sizes ranging from 20mm to 150mm',
            'Quick change roll system for minimum downtime',
            'Computerized profile control'
        ],
        image: 'https://live.cdn.cms.sms-group.com/_processed_/a/5/csm_MediumSectionMill_HyundaiSteel_SMSgroup_N-SMS2634-010_e68d9a2fdd.jpg'
    },
    {
        id: 'strip-mill',
        category: 'mills',
        title: 'Strip Rolling Mill',
        description: 'Precision-engineered strip rolling mills for thin and ultra-thin strip production.',
        features: [
            'Strip thickness from 0.1mm to 3mm',
            'Width capacity up to 650mm',
            'Advanced gauge control system',
            'High-speed operation up to 800m/min'
        ],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkaCHYJNDaLVnhPvoUsP3BIu1DVGwVkY27A&s'
    },
    {
        id: 'plate-mill',
        category: 'mills',
        title: 'Plate Mill',
        description: 'Heavy-duty plate mills for producing high-quality steel plates for various applications.',
        features: [
            'Plate thickness from 5mm to 50mm',
            'Width capacity up to 2500mm',
            'Automated plate handling system',
            'Advanced leveling technology'
        ],
        image: 'https://5.imimg.com/data5/ED/ID/TU/SELLER-47584055/plate-mills.png'
    },
    {
        id: 'sugar-mill',
        category: 'mills',
        title: 'Sugar Mill',
        description: 'Efficient sugar mills designed for maximum extraction and minimal maintenance.',
        features: [
            'Crushing capacity from 1000 to 5000 TCD',
            'Advanced hydraulic loading system',
            'Optimized roller design for maximum juice extraction',
            'Heavy-duty gearboxes for reliable operation'
        ],
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/421160033/DV/YT/RT/45795/sugar-mill-machinery.jpeg'
    },
    {
        id: 'flour-mill',
        category: 'mills',
        title: 'Flour Mill',
        description: 'Modern flour mills with advanced grinding technology for high-quality flour production.',
        features: [
            'Processing capacity from 30 to 300 tons per day',
            'Advanced sifting and purification systems',
            'Multi-stage grinding process',
            'Hygienic design with easy cleaning access'
        ],
        image: 'https://media.istockphoto.com/id/501796880/photo/flour-milling-plant.jpg?s=612x612&w=0&k=20&c=-lE7A29hUqYtuVnftAJZb28vPDsnqcJPu6oySnqBF7s='
    },
    {
        id: 'shearings',
        category: 'equipment',
        title: 'Shearings',
        description: 'High-strength shearing equipment for precise cutting of bars and billets.',
        features: [
            'Cutting capacity up to 150mm diameter',
            'Hydraulic or mechanical operation',
            'Automatic length measurement system',
            'Quick blade change mechanism'
        ],
        image: 'https://image.made-in-china.com/2f0j00JdEVMCtBAPzl/High-Quality-Hydraulic-Shearing-Machine-Guillotine-Shears-Metal-Sheet-Shear-Price.webp',
        badge: 'New'
    },
    {
        id: 'gearboxes',
        category: 'equipment',
        title: 'Heavy-Duty Gearboxes',
        description: 'Precision-engineered gearboxes built for durability and continuous operation in demanding environments.',
        features: [
            'Torque capacity from 5,000 to 100,000 Nm',
            'Hardened and ground gears for long service life',
            'Advanced sealing system for operation in harsh conditions',
            'Modular design for easy maintenance'
        ],
        image: 'https://pprm.in/wp-content/uploads/2021/07/Gear-box-cum-Pinion-stand-for-horizontal-mill.jpg'
    },
    {
        id: 'stands',
        category: 'equipment',
        title: 'Mill Stands',
        description: 'Robust mill stands designed for stability and precise roll positioning.',
        features: [
            'Load capacity up to 500 tons',
            'Precision roll adjustment system',
            'Rigid housing construction for minimal deflection',
            'Quick roll change capability'
        ],
        image: 'https://pprm.in/wp-content/uploads/2021/02/mill-stands.jpg'
    },
    {
        id: 'cooling-beds',
        category: 'equipment',
        title: 'Cooling Beds',
        description: 'Automated cooling beds for efficient cooling of rolled products.',
        features: [
            'Length up to 60 meters',
            'Capacity up to 100 tons per hour',
            'Automated bar transfer and collection system',
            'Adjustable cooling parameters'
        ],
        image: 'https://pprm.in/wp-content/uploads/2021/02/cooling-beds.jpg'
    },
    {
        id: 'spare-parts',
        category: 'parts',
        title: 'Spare Parts',
        description: 'Genuine spare parts manufactured to original specifications for all types of rolling mills.',
        features: [
            'Rolls for all mill types',
            'Bearings and bearing housings',
            'Guide systems and components',
            'Drive components and couplings'
        ],
        image: 'https://media.istockphoto.com/id/468970703/photo/warehouse-of-spare-parts-in-car-care-center.jpg?s=612x612&w=0&k=20&c=9NSO-913gVbwPQBJESGIqBm7GONGAfcHduo-jCkwtFU='
    }
];

/**
 * Initialize product filtering functionality
 */
function initProductFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productsGrid = document.querySelector('.products-grid');
    
    if (!filterButtons.length || !productsGrid) return;
    
    // Initially populate grid with all products
    populateProductsGrid('all');
    
    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Update products grid
            populateProductsGrid(filter);
        });
    });
}

/**
 * Populate products grid based on filter
 * @param {string} filter - Filter category
 */
function populateProductsGrid(filter) {
    const productsGrid = document.querySelector('.products-grid');
    
    if (!productsGrid) return;
    
    // Filter products
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    // Generate HTML for products
    let productsHTML = '';
    
    filteredProducts.forEach(product => {
        productsHTML += `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-details">
                    <span class="product-category">${getCategoryDisplayName(product.category)}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <ul class="product-features">
                        ${product.features.slice(0, 2).map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <a href="#" class="product-link view-details" data-product-id="${product.id}">View Details <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
    });
    
    // Show message if no products found
    if (filteredProducts.length === 0) {
        productsHTML = `
            <div class="no-products">
                <p>No products found in this category.</p>
            </div>
        `;
    }
    
    // Set products grid content with animation
    productsGrid.style.opacity = '0';
    setTimeout(() => {
        productsGrid.innerHTML = productsHTML;
        productsGrid.style.opacity = '1';
        
        // Add event listeners to view details links
        const detailLinks = document.querySelectorAll('.view-details');
        detailLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const productId = this.getAttribute('data-product-id');
                showProductDetails(productId);
            });
        });
    }, 300);
}

/**
 * Get display name for product category
 * @param {string} category - Category key
 * @returns {string} Display name
 */
function getCategoryDisplayName(category) {
    const categoryNames = {
        'mills': 'Mills',
        'equipment': 'Equipment',
        'parts': 'Parts & Components'
    };
    
    return categoryNames[category] || category;
}

/**
 * Initialize product details modal functionality
 */
function initProductDetailsModal() {
    // Check if product grid exists
    const productsGrid = document.querySelector('.products-grid');
    
    if (!productsGrid) return;
    
    // Add event delegation for product cards
    productsGrid.addEventListener('click', function(e) {
        // Find closest view details link
        const detailLink = e.target.closest('.view-details');
        
        if (detailLink) {
            e.preventDefault();
            const productId = detailLink.getAttribute('data-product-id');
            showProductDetails(productId);
        }
    });
}

/**
 * Show product details in modal
 * @param {string} productId - ID of the product to show
 */
function showProductDetails(productId) {
    // Find product by ID
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Create modal content
    const modalContent = `
        <div class="product-detail-content">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-detail-info">
                <span class="product-detail-category">${getCategoryDisplayName(product.category)}</span>
                <h3>${product.title}</h3>
                <p class="product-detail-description">${product.description}</p>
                <div class="product-detail-features">
                    <h4>Key Features</h4>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-detail-cta">
                    <a href="contact.html?product=${encodeURIComponent(product.title)}" class="btn btn-primary">Request Quote</a>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    showModal(product.title, modalContent);
}

/**
 * Check URL hash for product filtering
 */
function checkUrlHash() {
    // Get hash from URL
    const hash = window.location.hash.substring(1);
    
    if (!hash) return;
    
    // Check if hash corresponds to a product category
    const categories = {
        'mills': 'mills',
        'equipment': 'equipment',
        'parts': 'parts',
        'tmt': 'mills',
        'section': 'mills',
        'strip': 'mills',
        'plate': 'mills',
        'sugar': 'mills',
        'components': 'parts'
    };
    
    // If category exists, click the corresponding filter button
    if (categories[hash]) {
        const filterButton = document.querySelector(`.filter-btn[data-filter="${categories[hash]}"]`);
        if (filterButton) {
            filterButton.click();
        }
    }
    
    // Check if hash corresponds to a product ID
    const product = products.find(p => p.id === hash);
    if (product) {
        // Show product details modal
        setTimeout(() => {
            showProductDetails(hash);
        }, 500);
    }
}