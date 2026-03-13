// 6ft 产品展示网站脚本

const LanguageManager = {
    supportedLanguages: ['zh', 'en', 'ko'],
    currentLanguage: 'zh',
    
    init() {
        const savedLang = localStorage.getItem('currentLanguage');
        if (savedLang && this.supportedLanguages.includes(savedLang)) {
            this.currentLanguage = savedLang;
        } else {
            this.currentLanguage = 'zh';
            localStorage.setItem('currentLanguage', 'zh');
        }
        document.documentElement.lang = this.currentLanguage;
        this.bindLanguageButtons();
    },
    
    bindLanguageButtons() {
        const buttons = document.querySelectorAll('.language-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.switchLanguage(lang);
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                if (typeof loadProducts === 'function') {
                    loadProducts();
                }
                if (typeof updateFooterLanguage === 'function') {
                    updateFooterLanguage();
                }
            });
        });
        
        const activeLang = this.currentLanguage;
        buttons.forEach(btn => {
            if (btn.dataset.lang === activeLang) {
                btn.classList.add('active');
            }
        });
    },
    
    switchLanguage(lang) {
        if (this.supportedLanguages.includes(lang)) {
            this.currentLanguage = lang;
            localStorage.setItem('currentLanguage', lang);
            document.documentElement.lang = lang;
        }
    },
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
};

function getBasePath() {
    const pathname = window.location.pathname;
    if (pathname.includes('/GH3/')) return '/GH3/';
    if (pathname.includes('/GH/')) return '/GH/';
    return './';
}

let productsData = {};

async function loadProductsData() {
    const basePath = getBasePath();
    const configUrl = basePath + 'products-config.json';
    
    const createTranslation = (text) => {
        if (!text) return {};
        return { zh: text, en: text, ko: text };
    };
    
    const processProductData = (config) => {
        if (!config.products || Object.keys(config.products).length === 0) return {};
        
        const productsData = {};
        
        for (const key of Object.keys(config.products)) {
            const series = config.products[key];
            if (!series) continue;
            
            const processedProducts = [];
            for (const p of (series.products || [])) {
                if (!p) continue;
                
                const correctedImages = (p.images || []).map(img => {
                    if (img.startsWith('http://') || img.startsWith('https://')) return img;
                    return basePath + img;
                });
                
                processedProducts.push({
                    id: p.id || Math.random().toString(36).substr(2, 9),
                    name: p.name || '',
                    nameTranslations: createTranslation(p.name),
                    images: correctedImages,
                    description: p.description || '',
                    materials: p.materials || {},
                    customizable: p.customizable || false,
                    minOrder: p.minOrder || '',
                    price: p.price || '',
                    order: p.order || 999
                });
            }
            
            productsData[key] = {
                name: series.name || '',
                nameTranslations: createTranslation(series.name),
                description: series.description || '',
                order: series.order || 999,
                products: processedProducts
            };
        }
        
        return productsData;
    };
    
    try {
        const response = await fetch(configUrl);
        
        if (response.ok) {
            const config = await response.json();
            
            if (config.products && Object.keys(config.products).length > 0) {
                return processProductData(config);
            }
        }
    } catch (e) {
        console.error('加载产品数据失败:', e);
    }
    
    return {};
}

function updateNavigation(products) {
    try {
        if (!products || Object.keys(products).length === 0) return;
        
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;
        
        const currentLang = LanguageManager.getCurrentLanguage();
        
        const sortedSeries = Object.keys(products).map(key => ({
            id: key,
            ...products[key]
        })).sort((a, b) => (a.order || 999) - (b.order || 999));
        
        let html = '<li><a href="index.html">首页</a></li>';
        
        sortedSeries.forEach(series => {
            const key = series.id;
            const seriesName = series.nameTranslations && series.nameTranslations[currentLang] 
                ? series.nameTranslations[currentLang] 
                : series.name;
            
            html += `<li><a href="index.html#${encodeURIComponent(key)}">${seriesName}</a></li>`;
        });
        
        html += '<li><a href="about.html">联系我们</a></li>';
        
        navLinks.innerHTML = html;
    } catch (e) {
        console.error('更新导航栏失败:', e);
    }
}

function generateProductSections(products) {
    try {
        const container = document.getElementById('product-series-container');
        if (!container) {
            return;
        }
        
        container.innerHTML = '';
        
        const currentLang = LanguageManager.getCurrentLanguage();
        
        const sortedSeries = Object.keys(products).map(key => ({
            id: key,
            ...products[key]
        })).sort((a, b) => (a.order || 999) - (b.order || 999));
        
        sortedSeries.forEach(series => {
            const key = series.id;
            const seriesName = series.nameTranslations && series.nameTranslations[currentLang] 
                ? series.nameTranslations[currentLang] 
                : series.name;
            
            const section = document.createElement('section');
            section.className = 'product-series';
            section.id = encodeURIComponent(key);
            section.innerHTML = `
                <div class="container">
                    <h2>${seriesName}</h2>
                    <div class="product-section-wrapper">
                        <button class="scroll-btn scroll-btn-left" onclick="scrollProducts('${encodeURIComponent(key)}-products', -400)">❮</button>
                        <div class="product-grid" id="${encodeURIComponent(key)}-products"></div>
                        <button class="scroll-btn scroll-btn-right" onclick="scrollProducts('${encodeURIComponent(key)}-products', 400)">❯</button>
                    </div>
                </div>
            `;
            container.appendChild(section);
        });
    } catch (e) {
        console.error('生成产品系列失败:', e);
    }
}

function scrollProducts(gridId, scrollAmount) {
    const grid = document.getElementById(gridId);
    if (grid) {
        grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

function createProductCard(product, category) {
    const currentLang = LanguageManager.getCurrentLanguage();
    const productName = product.nameTranslations && product.nameTranslations[currentLang] 
        ? product.nameTranslations[currentLang] 
        : product.name;
    
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const firstImage = product.images && product.images.length > 0 
        ? product.images[0] 
        : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%23f5f5f5"/%3E%3Ctext x="50%25" y="50%25" font-size="14" text-anchor="middle" fill="%23999"%3E%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87%3C/text%3E%3C/svg%3E';
    
    card.innerHTML = `
        <img src="${firstImage}" alt="${productName}" loading="lazy">
        <div class="product-info">
            <h3>${productName}</h3>
        </div>
    `;
    
    return card;
}

function loadProducts() {
    if (!productsData || Object.keys(productsData).length === 0) {
        const container = document.getElementById('product-series-container');
        if (container) {
            container.innerHTML = '<div class="container" style="text-align:center;padding:4rem;"><h2>暂无产品</h2></div>';
        }
        return;
    }
    
    updateNavigation(productsData);
    generateProductSections(productsData);
    
    Object.keys(productsData).forEach(category => {
        const containerId = `${encodeURIComponent(category)}-products`;
        const container = document.getElementById(containerId);
        
        if (container) {
            const series = productsData[category];
            if (series.products && series.products.length > 0) {
                const sortedProducts = [...series.products].sort((a, b) => {
                    return (a.order || 999) - (b.order || 999);
                });
                
                const fragment = document.createDocumentFragment();
                sortedProducts.forEach(product => {
                    const productCard = createProductCard(product, category);
                    fragment.appendChild(productCard);
                });
                container.appendChild(fragment);
            }
        }
    });
    
    const productContainer = document.getElementById('product-series-container');
    if (productContainer) {
        setTimeout(() => {
            productContainer.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    }
    
    const hash = window.location.hash;
    if (hash) {
        const seriesId = hash.substring(1);
        setTimeout(() => {
            const seriesElement = document.getElementById(encodeURIComponent(seriesId));
            if (seriesElement) {
                window.scrollTo({ top: seriesElement.offsetTop - 80, behavior: 'smooth' });
            }
        }, 600);
    }
}

function loadWebsiteConfig() {
    try {
        const saved = localStorage.getItem('websiteConfig_v2');
        if (!saved) return null;
        return JSON.parse(saved);
    } catch (e) {
        console.error('加载配置失败:', e);
        return null;
    }
}

function applyFooterConfig(config) {
    if (!config || !config.footerInfo) return;
    
    const footerInfo = config.footerInfo;
    
    const aboutTitle = document.getElementById('footerAboutTitle');
    if (aboutTitle && footerInfo.aboutTitle) {
        aboutTitle.textContent = footerInfo.aboutTitle;
    }
    
    const aboutText = document.getElementById('footerAboutText');
    if (aboutText && footerInfo.aboutText) {
        aboutText.textContent = footerInfo.aboutText;
    }
    
    const emailContainer = document.getElementById('footerEmailContainer');
    const emailSpan = document.getElementById('footerEmail');
    if (emailContainer && emailSpan && footerInfo.email) {
        emailSpan.textContent = footerInfo.email;
        emailContainer.style.display = 'flex';
    }
    
    const phoneContainer = document.getElementById('footerPhoneContainer');
    const phoneSpan = document.getElementById('footerPhone');
    if (phoneContainer && phoneSpan && footerInfo.phone) {
        phoneSpan.textContent = footerInfo.phone;
        phoneContainer.style.display = 'flex';
    }
    
    const addressContainer = document.getElementById('footerAddressContainer');
    const addressSpan = document.getElementById('footerAddress');
    if (addressContainer && addressSpan && footerInfo.address) {
        addressSpan.textContent = footerInfo.address;
        addressContainer.style.display = 'flex';
    }
    
    const hoursContainer = document.getElementById('footerHoursContainer');
    const hoursSpan = document.getElementById('footerBusinessHours');
    if (hoursContainer && hoursSpan && footerInfo.businessHours) {
        hoursSpan.textContent = footerInfo.businessHours;
        hoursContainer.style.display = 'flex';
    }
    
    if (footerInfo.socialLinks && footerInfo.socialLinks.length > 0) {
        const container = document.getElementById('socialLinksContainer');
        if (container) {
            container.innerHTML = footerInfo.socialLinks.map(link => `
                <a href="${link.url || '#'}" target="_blank" rel="noopener noreferrer">
                    <img src="${link.icon || ''}" alt="${link.name || 'Social'}">
                </a>
            `).join('');
        }
    }
}

function initSlider() {
    const sliderItems = document.querySelectorAll('.slider-item');
    if (sliderItems.length <= 1) return;
    
    let currentIndex = 0;
    
    function showSlide(index) {
        sliderItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    }, 5000);
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const websiteConfig = loadWebsiteConfig();
        
        initSlider();
        
        productsData = await loadProductsData();
        
        LanguageManager.init();
        
        const pathname = window.location.pathname;
        const isIndexPage = pathname.endsWith('index.html') || pathname === '/' || pathname === '' || pathname.endsWith('/');
        
        if (isIndexPage) {
            loadProducts();
            if (websiteConfig) {
                applyFooterConfig(websiteConfig);
            }
        } else {
            updateNavigation(productsData);
            if (websiteConfig) {
                applyFooterConfig(websiteConfig);
            }
        }
        
        window.onhashchange = () => {
            const hash = window.location.hash;
            if (hash) {
                const seriesId = hash.substring(1);
                const seriesElement = document.getElementById(encodeURIComponent(seriesId));
                if (seriesElement) {
                    window.scrollTo({ top: seriesElement.offsetTop - 80, behavior: 'smooth' });
                }
            }
        };
    } catch (e) {
        console.error('初始化失败:', e);
    }
});
