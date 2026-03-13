// 翻译管理模块
const TranslationManager = {
    // 支持的语言
    supportedLanguages: ['zh', 'en', 'ko'],
    
    // 当前语言
    currentLanguage: 'zh',
    
    // 内置翻译词典
    builtInDictionary: {
        // 系列名称
        '乐福系列': { zh: '乐福系列', en: 'Loafer Series', ko: '로퍼 시리즈' },
        '正装系列': { zh: '正装系列', en: 'Formal Series', ko: '정장 시리즈' },
        '休闲系列': { zh: '休闲系列', en: 'Casual Series', ko: '캐주얼 시리즈' },
        '运动系列': { zh: '运动系列', en: 'Sports Series', ko: '스포츠 시리즈' },
        '商务系列': { zh: '商务系列', en: 'Business Series', ko: '비즈니스 시리즈' },
        '时尚系列': { zh: '时尚系列', en: 'Fashion Series', ko: '패션 시리즈' },
        '儿童系列': { zh: '儿童系列', en: 'Kids Series', ko: '키즈 시리즈' },
        '女鞋系列': { zh: '女鞋系列', en: 'Women\'s Series', ko: '여성 시리즈' },
        '男鞋系列': { zh: '男鞋系列', en: 'Men\'s Series', ko: '남성 시리즈' },
        '新款': { zh: '新款', en: 'New Arrivals', ko: '신상품' },
        '热销款': { zh: '热销款', en: 'Best Sellers', ko: '베스트셀러' },
        '经典款': { zh: '经典款', en: 'Classic', ko: '클식' },
        '限量款': { zh: '限量款', en: 'Limited Edition', ko: '한정판' },
        'PU系列': { zh: 'PU系列', en: 'PU Series', ko: 'PU 시리즈' },
        '短靴系列': { zh: '短靴系列', en: 'Ankle Boots Series', ko: '앵클 부츠 시리즈' },
        '长靴系列': { zh: '长靴系列', en: 'Long Boots Series', ko: '롱 부츠 시리즈' },
        '凉鞋系列': { zh: '凉鞋系列', en: 'Sandals Series', ko: '샌들 시리즈' },
        '拖鞋系列': { zh: '拖鞋系列', en: 'Slippers Series', ko: '슬리퍼 시리즈' },
        '真皮系列': { zh: '真皮系列', en: 'Genuine Leather Series', ko: '천연 가죽 시리즈' },
        '高跟鞋系列': { zh: '高跟鞋系列', en: 'High Heels Series', ko: '하이힐 시리즈' },
        '测试': { zh: '测试', en: 'Test', ko: '테스트' },
        
        // 材质名称
        'PU': { zh: 'PU', en: 'PU', ko: 'PU' },
        '牛皮': { zh: '牛皮', en: 'Cowhide', ko: '소가죽' },
        '发泡': { zh: '发泡', en: 'Foam', ko: '폼' },
        '织物': { zh: '织物', en: 'Fabric', ko: '직물' },
        '橡胶': { zh: '橡胶', en: 'Rubber', ko: '고무' },
        '真皮': { zh: '真皮', en: 'Genuine Leather', ko: '천연 가죽' },
        '人造革': { zh: '人造革', en: 'Synthetic Leather', ko: '인조 가죽' },
        '帆布': { zh: '帆布', en: 'Canvas', ko: '캔버스' },
        '网布': { zh: '网布', en: 'Mesh', ko: '메쉬' },
        'EVA': { zh: 'EVA', en: 'EVA', ko: 'EVA' },
        'TPR': { zh: 'TPR', en: 'TPR', ko: 'TPR' },
        
        // 通用词汇
        '是': { zh: '是', en: 'Yes', ko: '예' },
        '否': { zh: '否', en: 'No', ko: '아니오' },
        '无': { zh: '无', en: 'None', ko: '없음' },
        '面议': { zh: '面议', en: 'Negotiable', ko: '협상 가능' },
        
        // 产品信息
        '鞋面材质': { zh: '鞋面材质', en: 'Upper Material', ko: '어퍼 소재' },
        '内里材质': { zh: '内里材质', en: 'Lining Material', ko: '라이닝 소재' },
        '鞋底材质': { zh: '鞋底材质', en: 'Sole Material', ko: '솔 소재' },
        '产品材质': { zh: '产品材质', en: 'Product Materials', ko: '제품 소재' },
        '产品信息': { zh: '产品信息', en: 'Product Information', ko: '제품 정보' },
        '是否支持定制': { zh: '是否支持定制', en: 'Customizable', ko: '맞춤 제작 가능' },
        '起订量要求': { zh: '起订量要求', en: 'Minimum Order', ko: '최소 주문량' },
        '单价': { zh: '单价', en: 'Unit Price', ko: '단가' }
    },
    
    // 翻译数据
    translations: {
        // 通用词汇
        common: {
            zh: {
                home: '首页',
                contact_us: '联系我们',
                about_us: '关于我们',
                quick_links: '快速链接',
                sns_links: 'SNS链接',
                business_hours: '营业时间',
                email: '邮箱',
                phone: '电话',
                address: '地址',
                copyright: '© 2026 6ft. All rights reserved.',
                yes: '是',
                no: '否',
                none: '无'
            },
            en: {
                home: 'Home',
                contact_us: 'Contact Us',
                about_us: 'About Us',
                quick_links: 'Quick Links',
                sns_links: 'SNS Links',
                business_hours: 'Business Hours',
                email: 'Email',
                phone: 'Phone',
                address: 'Address',
                copyright: '© 2026 6ft. All rights reserved.',
                yes: 'Yes',
                no: 'No',
                none: 'None'
            },
            ko: {
                home: '홈',
                contact_us: '연락처',
                about_us: '회사 소개',
                quick_links: '빠른 링크',
                sns_links: 'SNS 링크',
                business_hours: '영업 시간',
                email: '이메일',
                phone: '전화',
                address: '주소',
                copyright: '© 2026 6ft. All rights reserved.',
                yes: '예',
                no: '아니오',
                none: '없음'
            }
        },
        
        // 首页
        index: {
            zh: {
                hero_title: '6ft - 高品质鞋类品牌',
                hero_subtitle: '舒适、时尚、耐用',
                product_series: '产品系列',
                product_materials: '产品材质',
                upper_material: '鞋面材质',
                lining_material: '内里材质',
                sole_material: '鞋底材质',
                product_info: '产品信息',
                customizable: '是否支持定制',
                min_order: '起订量要求',
                price: '单价',
                negotiable: '面议'
            },
            en: {
                hero_title: '6ft - High Quality Footwear Brand',
                hero_subtitle: 'Comfortable, Stylish, Durable',
                product_series: 'Product Series',
                product_materials: 'Product Materials',
                upper_material: 'Upper Material',
                lining_material: 'Lining Material',
                sole_material: 'Sole Material',
                product_info: 'Product Information',
                customizable: 'Customizable',
                min_order: 'Minimum Order',
                price: 'Unit Price',
                negotiable: 'Negotiable'
            },
            ko: {
                hero_title: '6ft - 고품질 신발 브랜드',
                hero_subtitle: '편안함, 스타일, 내구성',
                product_series: '제품 시리즈',
                product_materials: '제품 소재',
                upper_material: '어퍼 소재',
                lining_material: '라이닝 소재',
                sole_material: '솔 소재',
                product_info: '제품 정보',
                customizable: '맞춤 제작 가능',
                min_order: '최소 주문량',
                price: '단가',
                negotiable: '협상 가능'
            }
        },
        
        // 联系我们页面
        about: {
            zh: {
                contact_title: '联系我们',
                brand_name: '6ft - 高品质鞋类品牌',
                contact_description: '6ft 是一家专注于高品质鞋类设计与销售的品牌，我们致力于为客户提供舒适、时尚、耐用的鞋类产品。',
                contact_section: '联系方式',
                contact_form_title: '联系我们',
                name: '姓名',
                email: '邮箱',
                phone: '电话',
                message: '留言',
                submit: '提交',
                brand_values: '品牌理念',
                value1_title: '品质第一',
                value1_desc: '我们坚持使用高品质材料，严格控制生产工艺，确保每一双鞋子都达到最高标准。',
                value2_title: '创新设计',
                value2_desc: '我们不断探索新的设计理念和技术，为客户带来时尚、舒适的鞋类产品。',
                value3_title: '客户至上',
                value3_desc: '我们以客户需求为中心，提供优质的产品和服务，确保客户满意度。'
            },
            en: {
                contact_title: 'Contact Us',
                brand_name: '6ft - High Quality Footwear Brand',
                contact_description: '6ft is a brand focused on high-quality footwear design and sales, dedicated to providing customers with comfortable, stylish, and durable footwear products.',
                contact_section: 'Contact Information',
                contact_form_title: 'Contact Us',
                name: 'Name',
                email: 'Email',
                phone: 'Phone',
                message: 'Message',
                submit: 'Submit',
                brand_values: 'Brand Values',
                value1_title: 'Quality First',
                value1_desc: 'We insist on using high-quality materials and strictly control the production process to ensure every pair of shoes meets the highest standards.',
                value2_title: 'Innovative Design',
                value2_desc: 'We constantly explore new design concepts and technologies to bring customers stylish and comfortable footwear products.',
                value3_title: 'Customer First',
                value3_desc: 'We center on customer needs, providing high-quality products and services to ensure customer satisfaction.'
            },
            ko: {
                contact_title: '연락처',
                brand_name: '6ft - 고품질 신발 브랜드',
                contact_description: '6ft는 고품질 신발 디자인 및 판매에 중점을 둔 브랜드로, 고객에게 편안하고 스타일리시하며 내구성 있는 신발 제품을 제공하는 것을 목표로 합니다.',
                contact_section: '연락처 정보',
                contact_form_title: '연락처',
                name: '이름',
                email: '이메일',
                phone: '전화',
                message: '메시지',
                submit: '제출',
                brand_values: '브랜드 가치',
                value1_title: '품질 우선',
                value1_desc: '우리는 고품질 재료를 사용하고 생산 공정을 엄격히 통제하여 모든 신발이 최고의 기준을 충족하도록 보장합니다.',
                value2_title: '혁신적인 디자인',
                value2_desc: '우리는 끊임없이 새로운 디자인 개념과 기술을 탐구하여 고객에게 스타일리시하고 편안한 신발 제품을 제공합니다.',
                value3_title: '고객 중심',
                value3_desc: '우리는 고객의 요구를 중심으로 고품질의 제품과 서비스를 제공하여 고객 만족도를 보장합니다.'
            }
        }
    },
    
    // 缓存管理
    cache: {
        dictionary: null,
        timestamp: 0,
        // 缓存有效期（毫秒）
        expiration: 10 * 60 * 1000,
        // 翻译结果缓存
        translationCache: new Map(),
        // 翻译缓存大小限制
        maxCacheSize: 1000
    },
    
    // 初始化语言
    init() {
        // 从localStorage获取保存的语言
        const savedLang = localStorage.getItem('currentLanguage');
        if (savedLang && this.supportedLanguages.includes(savedLang)) {
            this.currentLanguage = savedLang;
        } else {
            // 默认为中文
            this.currentLanguage = 'zh';
            localStorage.setItem('currentLanguage', 'zh');
        }
        
        // 设置页面语言
        document.documentElement.lang = this.currentLanguage;
        
        // 更新语言切换按钮状态
        this.updateLanguageButtons();
        
        // 应用翻译
        this.applyTranslations();
    },
    
    // 切换语言
    switchLanguage(lang) {
        if (this.supportedLanguages.includes(lang)) {
            this.currentLanguage = lang;
            localStorage.setItem('currentLanguage', lang);
            document.documentElement.lang = lang;
            this.updateLanguageButtons();
            this.applyTranslations();
        }
    },
    
    // 更新语言切换按钮状态
    updateLanguageButtons() {
        const languageButtons = document.querySelectorAll('.language-btn');
        languageButtons.forEach(button => {
            if (button.dataset.lang === this.currentLanguage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    },
    
    // 应用翻译
    applyTranslations() {
        try {
            // 翻译带有 data-lang-key 属性的元素
            this.translateElements();
            
            // 翻译页面标题
            this.translatePageTitle();
            
            // 翻译导航栏
            this.translateNavigation();
            
            // 翻译动态生成的系列名称
            this.translateDynamicSeriesNames();
            
            // 翻译页脚
            this.translateFooter();
            
            // 重新加载快速链接以应用翻译
            if (typeof loadQuickLinks === 'function') {
                loadQuickLinks();
            }
            
            // 翻译联系我们页面（如果在about页面）
            this.translateAboutPage();
        } catch (error) {
            console.error('应用翻译失败:', error);
        }
    },
    
    // 翻译页面元素
    translateElements() {
        try {
            const elements = document.querySelectorAll('[data-lang-key]');
            elements.forEach(element => {
                const key = element.dataset.langKey;
                const translation = this.translate(key);
                if (translation) {
                    // 如果是输入框的placeholder，特殊处理
                    if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', translation);
                    } else {
                        element.textContent = translation;
                    }
                }
            });
        } catch (error) {
            console.error('翻译页面元素失败:', error);
        }
    },
    
    // 翻译页面标题
    translatePageTitle() {
        try {
            const pageTitle = document.querySelector('title');
            if (pageTitle) {
                const currentPath = window.location.pathname;
                if (currentPath.includes('about.html')) {
                    pageTitle.textContent = this.translate('contact_title', 'about') + ' - 6ft';
                } else if (currentPath.includes('index.html') || currentPath === '/' || currentPath === '') {
                    pageTitle.textContent = '6ft - ' + this.translate('product_series', 'index');
                }
            }
        } catch (error) {
            console.error('翻译页面标题失败:', error);
        }
    },
    
    // 翻译导航栏
    translateNavigation() {
        try {
            // 导航栏链接已经在HTML中添加了data-lang-key属性，会被自动翻译
            // 这里可以处理动态生成的导航链接
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                const key = link.dataset.langKey;
                if (key) {
                    const translation = this.translate(key);
                    if (translation) {
                        link.textContent = translation;
                    }
                } else {
                    // 处理动态生成的产品系列链接
                    const href = link.getAttribute('href');
                    if (href && href.includes('index.html#')) {
                        // 从 href 中提取系列 ID
                        const seriesId = decodeURIComponent(href.split('#')[1]);
                        if (productsData[seriesId]) {
                            const series = productsData[seriesId];
                            const currentLang = this.getCurrentLanguage();
                            const seriesName = series.nameTranslations && series.nameTranslations[currentLang] 
                                ? series.nameTranslations[currentLang] 
                                : series.name;
                            link.textContent = seriesName;
                        }
                    }
                }
            });
            
            // 翻译动态生成的系列名称（从 productsData 获取）
            this.translateDynamicSeriesNames();
        } catch (error) {
            console.error('翻译导航栏失败:', error);
        }
    },
    
    // 翻译动态生成的系列名称
    translateDynamicSeriesNames() {
        try {
            // 获取当前语言
            const currentLang = this.getCurrentLanguage();
            
            // 翻译导航栏中的系列名称
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.includes('index.html#')) {
                    // 从 href 中提取系列 ID
                    const seriesId = decodeURIComponent(href.split('#')[1]);
                    if (productsData[seriesId]) {
                        const series = productsData[seriesId];
                        const seriesName = series.nameTranslations && series.nameTranslations[currentLang] 
                            ? series.nameTranslations[currentLang] 
                            : series.name;
                        link.textContent = seriesName;
                    }
                }
            });
            
            // 翻译页脚中的系列名称
            const footerLinks = document.querySelectorAll('.footer-links a');
            footerLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.includes('index.html#')) {
                    // 从 href 中提取系列 ID
                    const seriesId = decodeURIComponent(href.split('#')[1]);
                    if (productsData[seriesId]) {
                        const series = productsData[seriesId];
                        const seriesName = series.nameTranslations && series.nameTranslations[currentLang] 
                            ? series.nameTranslations[currentLang] 
                            : series.name;
                        link.textContent = seriesName;
                    }
                }
            });
            
            // 翻译页面中的系列标题
            const seriesSections = document.querySelectorAll('.product-series');
            seriesSections.forEach(section => {
                const seriesId = decodeURIComponent(section.id);
                if (productsData[seriesId]) {
                    const series = productsData[seriesId];
                    const seriesName = series.nameTranslations && series.nameTranslations[currentLang] 
                        ? series.nameTranslations[currentLang] 
                        : series.name;
                    const titleElement = section.querySelector('h2');
                    if (titleElement) {
                        titleElement.textContent = seriesName;
                    }
                }
            });
            
            // 翻译产品卡片中的产品名称
            this.translateProductCards();
        } catch (error) {
            console.error('翻译动态系列名称失败:', error);
        }
    },
    
    // 翻译产品卡片
    translateProductCards() {
        try {
            const currentLang = this.getCurrentLanguage();
            
            // 重新加载产品卡片以应用新语言
            // 首先清空所有产品网格
            const productGrids = document.querySelectorAll('.product-grid');
            productGrids.forEach(grid => {
                const seriesId = decodeURIComponent(grid.id.replace('-products', ''));
                if (productsData[seriesId]) {
                    const series = productsData[seriesId];
                    // 清空网格
                    grid.innerHTML = '';
                    // 重新添加产品卡片
                    if (series.products && series.products.length > 0) {
                        series.products.forEach(product => {
                            const productCard = createProductCard(product, seriesId);
                            grid.appendChild(productCard);
                        });
                    }
                }
            });
            
            // 重新初始化图片懒加载
            initLazyLoading();
        } catch (error) {
            console.error('翻译产品卡片失败:', error);
        }
    },
    
    // 翻译页脚
    translateFooter() {
        try {
            // 页脚标题和标签已经在HTML中添加了data-lang-key属性，会被自动翻译
            // 这里处理动态加载的内容
            const footerAboutTitle = document.getElementById('footerAboutTitle');
            if (footerAboutTitle) {
                const key = footerAboutTitle.dataset.langKey;
                if (key) {
                    const translation = this.translate(key);
                    if (translation) {
                        footerAboutTitle.textContent = translation;
                    }
                }
            }
        } catch (error) {
            console.error('翻译页脚失败:', error);
        }
    },
    
    // 翻译联系我们页面
    translateAboutPage() {
        try {
            // 联系我们页面的元素已经在HTML中添加了data-lang-key属性，会被自动翻译
            // 这里处理可能需要特殊处理的元素
            const contactTitle = document.getElementById('contact-title');
            if (contactTitle) {
                const key = contactTitle.dataset.langKey;
                if (key) {
                    const translation = this.translate(key, 'about');
                    if (translation) {
                        contactTitle.textContent = translation;
                    }
                }
            }
        } catch (error) {
            console.error('翻译联系我们页面失败:', error);
        }
    },
    
    // 翻译文本
    translate(key, namespace = null) {
        // 如果没有指定命名空间，根据当前页面自动选择
        if (!namespace) {
            const currentPath = window.location.pathname;
            if (currentPath.includes('about.html')) {
                namespace = 'about';
            } else if (currentPath.includes('index.html') || currentPath === '/' || currentPath === '') {
                namespace = 'index';
            } else {
                namespace = 'common';
            }
        }
        
        const translations = this.translations[namespace];
        if (translations && translations[this.currentLanguage] && translations[this.currentLanguage][key]) {
            return translations[this.currentLanguage][key];
        }
        
        // 如果在当前命名空间找不到，尝试在common命名空间查找
        if (namespace !== 'common') {
            const commonTranslations = this.translations['common'];
            if (commonTranslations && commonTranslations[this.currentLanguage] && commonTranslations[this.currentLanguage][key]) {
                return commonTranslations[this.currentLanguage][key];
            }
        }
        
        // 如果找不到翻译，返回中文原文
        if (translations && translations['zh'] && translations['zh'][key]) {
            return translations['zh'][key];
        }
        
        // 如果在common中找不到，返回key本身
        return key;
    },
    
    // 获取当前语言
    getCurrentLanguage() {
        return this.currentLanguage;
    },
    
    // 获取合并后的词典
    getDictionary() {
        // 检查缓存是否有效
        const now = Date.now();
        if (this.cache.dictionary && (now - this.cache.timestamp) < this.cache.expiration) {
            return this.cache.dictionary;
        }
        
        // 从配置中加载词典
        let configDictionary = {};
        try {
            const savedConfig = localStorage.getItem('websiteConfig_v2');
            if (savedConfig) {
                const config = JSON.parse(savedConfig);
                configDictionary = config.translationDictionary || {};
            }
        } catch (e) {
            console.error('加载翻译词典失败:', e);
        }
        
        // 如果配置词典为空，将内置词典复制到配置词典
        if (Object.keys(configDictionary).length === 0) {
            this.initializeDictionary();
            // 重新加载配置词典
            try {
                const savedConfig = localStorage.getItem('websiteConfig_v2');
                if (savedConfig) {
                    const config = JSON.parse(savedConfig);
                    configDictionary = config.translationDictionary || {};
                }
            } catch (e) {
                console.error('重新加载翻译词典失败:', e);
            }
        }
        
        // 更新缓存
        this.cache.dictionary = configDictionary;
        this.cache.timestamp = now;
        
        return configDictionary;
    },
    
    // 初始化词典，将内置词典复制到配置词典
    initializeDictionary() {
        try {
            const savedConfig = localStorage.getItem('websiteConfig_v2');
            let config = savedConfig ? JSON.parse(savedConfig) : {};
            
            if (!config.translationDictionary || Object.keys(config.translationDictionary).length === 0) {
                // 将内置词典复制到配置词典
                config.translationDictionary = { ...this.builtInDictionary };
                localStorage.setItem('websiteConfig_v2', JSON.stringify(config));
                console.log('词典初始化完成，内置词典已复制到配置词典');
            }
        } catch (e) {
            console.error('初始化词典失败:', e);
        }
    },
    
    // 清除缓存
    clearCache() {
        this.cache.dictionary = null;
        this.cache.timestamp = 0;
        this.cache.translationCache.clear();
    },
    
    // 从翻译词典获取翻译
    getTranslationsFromDictionary(text) {
        if (!text) return {};
        
        // 获取合并后的词典
        const translations = this.getDictionary();
        
        // 如果文本在词典中，返回对应的翻译
        if (translations[text]) {
            return translations[text];
        }
        
        // 如果文本不在词典中，尝试使用简单的规则进行翻译
        // 对于系列名称，添加 "Series" 后缀
        if (text.includes('系列')) {
            const result = {
                zh: text,
                en: text.replace('系列', ' Series'),
                ko: text.replace('系列', ' 시리즈')
            };
            
            // 自动添加到词典
            this.addToDictionary(text, result);
            return result;
        }
        
        // 对于其他文本，返回原文
        const result = {
            zh: text,
            en: text,
            ko: text
        };
        
        // 自动添加到词典
        this.addToDictionary(text, result);
        return result;
    },
    
    // 添加到翻译词典
    addToDictionary(text, translations) {
        try {
            const savedConfig = localStorage.getItem('websiteConfig_v2');
            let config = savedConfig ? JSON.parse(savedConfig) : {};
            
            if (!config.translationDictionary) {
                config.translationDictionary = {};
            }
            
            // 总是更新词典中的词条，支持AI翻译更新
            config.translationDictionary[text] = translations;
            localStorage.setItem('websiteConfig_v2', JSON.stringify(config));
            
            // 清除缓存，确保下次获取最新词典
            this.clearCache();
        } catch (e) {
            console.error('添加到翻译词典失败:', e);
        }
    },

    // 检查浏览器是否支持内置翻译
    isBrowserTranslationAvailable() {
        return typeof window !== 'undefined' && typeof window.navigator !== 'undefined' && typeof window.navigator.language !== 'undefined';
    },
    
    // 使用浏览器内置翻译
    async translateWithBrowser(text, targetLang) {
        if (!this.isBrowserTranslationAvailable()) {
            throw new Error('浏览器不支持内置翻译');
        }
        
        // 检查用户是否已同意使用浏览器翻译
        const useBrowserTranslation = localStorage.getItem('useBrowserTranslation') === 'true';
        if (!useBrowserTranslation) {
            // 询问用户是否使用浏览器翻译
            const userAgreed = confirm('API翻译失败，是否使用浏览器内置翻译？');
            if (!userAgreed) {
                throw new Error('用户拒绝使用浏览器翻译');
            }
            // 保存用户选择
            localStorage.setItem('useBrowserTranslation', 'true');
        }
        
        // 模拟浏览器翻译（实际项目中可以使用更复杂的实现）
        // 这里使用简单的规则作为示例
        if (targetLang === 'en' && text.includes('系列')) {
            return text.replace('系列', ' Series');
        } else if (targetLang === 'ko' && text.includes('系列')) {
            return text.replace('系列', ' 시리즈');
        }
        
        // 对于其他情况，返回原文
        return text;
    },
    
    // 翻译单个文本到指定语言
    async translateText(text, targetLang, sourceLang = 'auto') {
        // 生成缓存键
        const cacheKey = `${text}_${targetLang}`;
        
        // 检查翻译结果缓存
        if (this.cache.translationCache.has(cacheKey)) {
            return this.cache.translationCache.get(cacheKey);
        }
        
        // 获取合并后的词典
        const translations = this.getDictionary();
        
        // 如果文本在词典中，返回对应的翻译
        let translatedText;
        if (translations[text] && translations[text][targetLang]) {
            translatedText = translations[text][targetLang];
        } else {
            // 尝试使用配置的API进行翻译
            try {
                translatedText = await this.translateWithAPI(text, targetLang, sourceLang);
            } catch (error) {
                console.error('API翻译失败:', error);
                
                // 尝试使用浏览器内置翻译
                try {
                    translatedText = await this.translateWithBrowser(text, targetLang);
                } catch (browserError) {
                    console.error('浏览器翻译失败:', browserError);
                    // 如果所有翻译方法都失败，使用简单的规则进行翻译
                    translatedText = text;
                    
                    // 对于系列名称，添加 "Series" 后缀
                    if (targetLang === 'en' && text.includes('系列')) {
                        translatedText = text.replace('系列', ' Series');
                    } else if (targetLang === 'ko' && text.includes('系列')) {
                        translatedText = text.replace('系列', ' 시리즈');
                    }
                }
            }
            
            // 自动添加到词典
            if (translatedText !== text) {
                const fullTranslations = {
                    zh: text,
                    en: targetLang === 'en' ? translatedText : text,
                    ko: targetLang === 'ko' ? translatedText : text
                };
                this.addToDictionary(text, fullTranslations);
            }
        }
        
        // 缓存翻译结果
        this._cacheTranslationResult(cacheKey, translatedText);
        
        return translatedText;
    },
    
    // 使用API进行翻译
    async translateWithAPI(text, targetLang, sourceLang = 'auto') {
        // 获取翻译设置
        let translationSettings = {};
        try {
            const savedConfig = localStorage.getItem('websiteConfig_v2');
            if (savedConfig) {
                const config = JSON.parse(savedConfig);
                translationSettings = config.translationSettings || {};
            }
        } catch (e) {
            console.error('加载翻译设置失败:', e);
        }
        
        const { api, apiKey, apiUrl } = translationSettings;
        
        if (!api || api === 'none' || !apiKey) {
            throw new Error('未配置翻译API或API密钥');
        }
        
        // 检查API限制
        // 百度翻译API可能只支持中文到英文的翻译
        if (api === 'baidu') {
            // 只尝试中文到英文的翻译
            if (sourceLang === 'zh' && targetLang === 'en') {
                return await this.translateWithBaiduAPI(text, targetLang, sourceLang, apiKey, apiUrl);
            } else {
                throw new Error('百度翻译API只支持中文到英文的翻译');
            }
        }
        
        switch (api) {
            case 'google':
                return await this.translateWithGoogleAPI(text, targetLang, sourceLang, apiKey, apiUrl);
            case 'baidu':
                return await this.translateWithBaiduAPI(text, targetLang, sourceLang, apiKey, apiUrl);
            default:
                throw new Error('不支持的API类型');
        }
    },
    
    // 使用Google Translate API进行翻译
    async translateWithGoogleAPI(text, targetLang, sourceLang, apiKey, apiUrl) {
        const url = apiUrl || 'https://translation.googleapis.com/language/translate/v2';
        
        const response = await fetch(`${url}?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                q: text,
                source: sourceLang === 'auto' ? 'zh' : sourceLang,
                target: targetLang,
                format: 'text'
            })
        });
        
        if (!response.ok) {
            throw new Error(`Google Translate API error: ${response.status}`);
        }
        
        const data = await response.json();
        return data.data.translations[0].translatedText;
    },
    
    // 使用百度翻译API进行翻译
    async translateWithBaiduAPI(text, targetLang, sourceLang, apiKey, apiUrl) {
        // 百度翻译API需要appid和密钥，这里假设apiKey包含appid和密钥，格式为"appid:secret"
        const [appid, secret] = apiKey.split(':');
        if (!appid || !secret) {
            throw new Error('百度翻译API密钥格式错误，应为"appid:secret"');
        }
        
        const url = apiUrl || 'https://fanyi-api.baidu.com/api/trans/vip/translate';
        const salt = Math.floor(Math.random() * 1000000000);
        const sign = this.md5(`${appid}${text}${salt}${secret}`);
        
        const response = await fetch(`${url}?q=${encodeURIComponent(text)}&from=${sourceLang === 'auto' ? 'zh' : sourceLang}&to=${targetLang}&appid=${appid}&salt=${salt}&sign=${sign}`);
        
        if (!response.ok) {
            throw new Error(`百度翻译API error: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.error_code) {
            throw new Error(`百度翻译API error: ${data.error_msg}`);
        }
        
        return data.trans_result[0].dst;
    },
    
    // MD5加密函数（用于百度翻译API签名）
    md5(str) {
        // 简化的MD5实现，实际项目中应使用更完整的实现
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString(16);
    },
    
    // 缓存翻译结果
    _cacheTranslationResult(key, value) {
        // 检查缓存大小
        if (this.cache.translationCache.size >= this.cache.maxCacheSize) {
            // 删除最旧的缓存项
            const firstKey = this.cache.translationCache.keys().next().value;
            this.cache.translationCache.delete(firstKey);
        }
        
        // 添加到缓存
        this.cache.translationCache.set(key, value);
    },
    
    // 自动翻译所有内容
    async autoTranslateContent(content, sourceLang = 'zh') {
        const translations = {};
        
        for (const lang of this.supportedLanguages) {
            if (lang !== sourceLang) {
                translations[lang] = await this.translateText(content, lang, sourceLang);
            } else {
                translations[lang] = content;
            }
        }
        
        // 自动添加到词典
        this.addToDictionary(content, translations);
        
        return translations;
    }
};

// 为了兼容性，保留LanguageManager别名
const LanguageManager = TranslationManager;

// 获取基础路径
function getBasePath() {
    const pathname = window.location.pathname;
    if (pathname.includes('/GH3/')) {
        return '/GH3/';
    }
    if (pathname.includes('/GH/')) {
        return '/GH/';
    }
    return '/';
}

// 异步加载产品数据
async function loadProductsData() {
    const basePath = getBasePath();
    const configUrl = basePath + 'products-config.json';
    console.log('Base path:', basePath);
    console.log('Fetching from:', configUrl);
    
    // 1. 首先尝试从 products-config.json 文件加载
    try {
        const response = await fetch(configUrl);
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        
        if (!response.ok) {
            console.error('Failed to fetch products-config.json:', response.status, response.statusText);
            alert('无法加载产品配置文件，请检查网络连接。URL: ' + configUrl + ', 状态: ' + response.status);
        } else {
            const config = await response.json();
            console.log('Loaded config, products keys:', config.products ? Object.keys(config.products) : 'none');
            
            if (config.products && Object.keys(config.products).length > 0) {
                const productsData = {};
                
                // 遍历所有系列
                for (const key of Object.keys(config.products)) {
                    const series = config.products[key];
                    if (!series) continue;
                    
                    // 为系列名称添加翻译
                    let seriesNameTranslations = {};
                    if (series.name) {
                        seriesNameTranslations = await LanguageManager.autoTranslateContent(series.name);
                    }
                    
                    // 为系列描述添加翻译
                    let seriesDescriptionTranslations = {};
                    if (series.description) {
                        seriesDescriptionTranslations = await LanguageManager.autoTranslateContent(series.description);
                    }
                    
                    // 处理产品
                    const processedProducts = [];
                    for (const p of (series.products || [])) {
                        if (!p) continue;
                        
                        // 为产品名称添加翻译
                        let productNameTranslations = {};
                        if (p.name) {
                            productNameTranslations = await LanguageManager.autoTranslateContent(p.name);
                        }
                        
                        // 为产品描述添加翻译
                        let productDescriptionTranslations = {};
                        if (p.description) {
                            productDescriptionTranslations = await LanguageManager.autoTranslateContent(p.description);
                        }
                        
                        // 为材质添加翻译
                        let materialsTranslations = {};
                        if (p.materials) {
                            materialsTranslations = {
                                upper: await LanguageManager.autoTranslateContent(p.materials.upper || ''),
                                lining: await LanguageManager.autoTranslateContent(p.materials.lining || ''),
                                sole: await LanguageManager.autoTranslateContent(p.materials.sole || '')
                            };
                        }
                        
                        // 修正图片路径
                        const correctedImages = (p.images || []).map(img => {
                            if (img.startsWith('http://') || img.startsWith('https://')) {
                                return img;
                            }
                            return basePath + img;
                        });
                        
                        processedProducts.push({
                            id: p.id || Math.random().toString(36).substr(2, 9),
                            name: p.name || '',
                            nameTranslations: productNameTranslations,
                            images: correctedImages,
                            description: p.description || '',
                            descriptionTranslations: productDescriptionTranslations,
                            materials: p.materials || {},
                            materialsTranslations: materialsTranslations,
                            customizable: p.customizable || false,
                            minOrder: p.minOrder || '',
                            price: p.price || '',
                            order: p.order || 999
                        });
                    }
                    
                    productsData[key] = {
                        name: series.name || '',
                        nameTranslations: seriesNameTranslations,
                        description: series.description || '',
                        descriptionTranslations: seriesDescriptionTranslations,
                        order: series.order || 999,
                        products: processedProducts
                    };
                }
                
                console.log('从 products-config.json 加载产品数据');
                setCache('productsData', productsData, 60);
                return productsData;
            }
        }
    } catch (e) {
        console.log('从 products-config.json 加载失败:', e.message);
    }
    
    // 2. 尝试从 localStorage 加载（备用）
    try {
        const savedConfig = localStorage.getItem('websiteConfig_v2');
        if (savedConfig) {
            const config = JSON.parse(savedConfig);
            if (config.products) {
                const productsData = {};
                
                // 遍历所有系列
                for (const key of Object.keys(config.products)) {
                    const series = config.products[key];
                    if (!series) continue;
                    
                    // 为系列名称添加翻译（总是从词典获取最新翻译）
                    let seriesNameTranslations = {};
                    if (series.name) {
                        seriesNameTranslations = await LanguageManager.autoTranslateContent(series.name);
                    }
                    
                    // 为系列描述添加翻译（总是从词典获取最新翻译）
                    let seriesDescriptionTranslations = {};
                    if (series.description) {
                        seriesDescriptionTranslations = await LanguageManager.autoTranslateContent(series.description);
                    }
                    
                    // 处理产品
                    const processedProducts = [];
                    for (const p of (series.products || [])) {
                        if (!p) continue;
                        
                        // 为产品名称添加翻译（总是从词典获取最新翻译）
                        let productNameTranslations = {};
                        if (p.name) {
                            productNameTranslations = await LanguageManager.autoTranslateContent(p.name);
                        }
                        
                        // 为产品描述添加翻译（总是从词典获取最新翻译）
                        let productDescriptionTranslations = {};
                        if (p.description) {
                            productDescriptionTranslations = await LanguageManager.autoTranslateContent(p.description);
                        }
                        
                        // 为材质添加翻译（总是从词典获取最新翻译）
                        let materialsTranslations = {};
                        if (p.materials) {
                            materialsTranslations = {
                                upper: await LanguageManager.autoTranslateContent(p.materials.upper || ''),
                                lining: await LanguageManager.autoTranslateContent(p.materials.lining || ''),
                                sole: await LanguageManager.autoTranslateContent(p.materials.sole || '')
                            };
                        }
                        
                        // 修正图片路径
                        const correctedImages = (p.images || []).map(img => {
                            // 如果图片路径已经是完整的 URL，保持不变
                            if (img.startsWith('http://') || img.startsWith('https://')) {
                                return img;
                            }
                            // 否则，添加基础路径
                            return basePath + img;
                        });
                        
                        processedProducts.push({
                            id: p.id || Math.random().toString(36).substr(2, 9),
                            name: p.name || '',
                            nameTranslations: productNameTranslations,
                            images: correctedImages,
                            description: p.description || '',
                            descriptionTranslations: productDescriptionTranslations,
                            materials: p.materials || {},
                            materialsTranslations: materialsTranslations,
                            infoTranslations: p.infoTranslations || {},
                            customizable: p.customizable || false,
                            minOrder: p.minOrder || '',
                            price: p.price || '',
                            order: p.order || 999
                        });
                    }
                    
                    productsData[key] = {
                        name: series.name || '',
                        nameTranslations: seriesNameTranslations,
                        description: series.description || '',
                        descriptionTranslations: seriesDescriptionTranslations,
                        order: series.order || 999,
                        products: processedProducts
                    };
                }
                
                console.log('从 localStorage 加载产品数据');
                console.log('产品数据:', productsData);
                // 缓存数据，过期时间为1小时
                setCache('productsData', productsData, 60);
                return productsData;
            }
        }
    } catch (e) {
        console.error('从 localStorage 加载产品数据失败:', e);
    }
    
    // 2. 尝试从 products-config.json 加载
    try {
        const response = await fetch(basePath + 'products-config.json');
        if (response.ok) {
            const config = await response.json();
            if (config.products) {
                const productsData = {};
                
                // 遍历所有系列
                for (const key of Object.keys(config.products)) {
                    const series = config.products[key];
                    if (!series) continue;
                    
                    // 为系列名称添加翻译（总是从词典获取最新翻译）
                    let seriesNameTranslations = {};
                    if (series.name) {
                        seriesNameTranslations = await LanguageManager.autoTranslateContent(series.name);
                    }
                    
                    // 为系列描述添加翻译（总是从词典获取最新翻译）
                    let seriesDescriptionTranslations = {};
                    if (series.description) {
                        seriesDescriptionTranslations = await LanguageManager.autoTranslateContent(series.description);
                    }
                    
                    // 处理产品
                    const processedProducts = [];
                    for (const p of (series.products || [])) {
                        if (!p) continue;
                        
                        // 为产品名称添加翻译（总是从词典获取最新翻译）
                        let productNameTranslations = {};
                        if (p.name) {
                            productNameTranslations = await LanguageManager.autoTranslateContent(p.name);
                        }
                        
                        // 为产品描述添加翻译（总是从词典获取最新翻译）
                        let productDescriptionTranslations = {};
                        if (p.description) {
                            productDescriptionTranslations = await LanguageManager.autoTranslateContent(p.description);
                        }
                        
                        // 为材质添加翻译（总是从词典获取最新翻译）
                        let materialsTranslations = {};
                        if (p.materials) {
                            materialsTranslations = {
                                upper: await LanguageManager.autoTranslateContent(p.materials.upper || ''),
                                lining: await LanguageManager.autoTranslateContent(p.materials.lining || ''),
                                sole: await LanguageManager.autoTranslateContent(p.materials.sole || '')
                            };
                        }
                        
                        // 修正图片路径
                        const correctedImages = (p.images || []).map(img => {
                            // 如果图片路径已经是完整的 URL，保持不变
                            if (img.startsWith('http://') || img.startsWith('https://')) {
                                return img;
                            }
                            // 否则，添加基础路径
                            return basePath + img;
                        });
                        
                        processedProducts.push({
                            id: p.id || Math.random().toString(36).substr(2, 9),
                            name: p.name || '',
                            nameTranslations: productNameTranslations,
                            images: correctedImages,
                            description: p.description || '',
                            descriptionTranslations: productDescriptionTranslations,
                            materials: p.materials || {},
                            materialsTranslations: materialsTranslations,
                            infoTranslations: p.infoTranslations || {},
                            customizable: p.customizable || false,
                            minOrder: p.minOrder || '',
                            price: p.price || '',
                            order: p.order || 999
                        });
                    }
                    
                    productsData[key] = {
                        name: series.name || '',
                        nameTranslations: seriesNameTranslations,
                        description: series.description || '',
                        descriptionTranslations: seriesDescriptionTranslations,
                        order: series.order || 999,
                        products: processedProducts
                    };
                }
                
                console.log('从 products-config.json 加载产品数据');
                // 缓存数据，过期时间为1小时
                setCache('productsData', productsData, 60);
                return productsData;
            }
        }
    } catch (e) {
        console.log('未找到 products-config.json，尝试其他数据源');
    }
    
    // 3. 尝试从缓存加载
    const cachedData = getCache('productsData');
    if (cachedData) {
        console.log('从缓存加载产品数据');
        return cachedData;
    }
    
    // 4. 使用默认数据 - 初始为空，等待扫描产品图文件夹
    console.log('使用默认产品数据（空）');
    return {};
}

// 产品数据
let productsData = {};

// DOM元素
const modal = document.getElementById('product-modal');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.querySelector('.close');

// 图片大图模态框元素
const imageModal = document.getElementById('image-modal');
const modalLargeImage = document.getElementById('modal-large-image');
const prevImageBtn = document.querySelector('.prev-btn');
const nextImageBtn = document.querySelector('.next-btn');
const imageCounter = document.querySelector('.image-counter');
const closeImageModal = imageModal ? imageModal.querySelector('.close') : null;

// 当前产品数据
let currentProduct = null;
let currentImageIndex = 0;

// 图片轮播功能
function initSlider() {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentIndex = 0;
    
    function showSlide(index) {
        sliderItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    }
    
    // 自动轮播
    setInterval(nextSlide, 3000);
}

// 动态更新导航栏
function updateNavigation(products) {
    try {
        // 如果没有传递products参数，则从localStorage加载
        if (!products) {
            try {
                const savedConfig = localStorage.getItem('websiteConfig_v2');
                if (savedConfig) {
                    const config = JSON.parse(savedConfig);
                    // 转换数据结构以兼容新的格式
                    const rawProducts = config.products || {};
                    products = {};
                    Object.keys(rawProducts).forEach(key => {
                        const series = rawProducts[key];
                        products[key] = {
                            name: series.name,
                            nameTranslations: series.nameTranslations || {},
                            description: series.description || '',
                            descriptionTranslations: series.descriptionTranslations || {},
                            order: series.order || 999,
                            products: series.products || []
                        };
                    });
                }
            } catch (e) {
                console.error('获取产品配置失败:', e);
                products = {};
            }
        }
        
        const navLinks = document.querySelector('.nav-links');
        const footerLinks = document.querySelector('.footer-links ul');
        const currentLang = LanguageManager.getCurrentLanguage();
        
        // 获取翻译后的文本
        const homeText = LanguageManager.translate('home');
        const contactUsText = LanguageManager.translate('contact_us');
        const aboutUsText = LanguageManager.translate('about_us');
        
        // 将产品系列转换为数组并按 order 属性排序
        const sortedSeries = Object.keys(products).map(key => ({
            id: key,
            ...products[key]
        })).sort((a, b) => (a.order || 999) - (b.order || 999));
        
        if (navLinks) {
            // 创建文档片段以减少DOM操作
            const navFragment = document.createDocumentFragment();
            
            // 添加首页链接
            const homeLi = document.createElement('li');
            const homeA = document.createElement('a');
            homeA.href = 'index.html';
            homeA.textContent = homeText;
            homeA.setAttribute('data-lang-key', 'home');
            homeLi.appendChild(homeA);
            navFragment.appendChild(homeLi);
            
            // 添加产品系列链接（仅当存在产品时）
            sortedSeries.forEach(series => {
                const key = series.id;
                console.log('导航栏 - 系列:', key, '翻译:', series.nameTranslations, '当前语言:', currentLang);
                const seriesName = series.nameTranslations && series.nameTranslations[currentLang] ? series.nameTranslations[currentLang] : series.name;
                console.log('导航栏 - 最终系列名称:', seriesName);
                
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `index.html#${encodeURIComponent(key)}`;
                a.textContent = seriesName;
                // 添加点击事件监听器
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    // 使用replace方法跳转到首页，避免历史记录问题
                    window.location.replace(`index.html#${encodeURIComponent(key)}`);
                });
                li.appendChild(a);
                navFragment.appendChild(li);
            });
            
            // 添加联系我们链接
            const contactLi = document.createElement('li');
            const contactA = document.createElement('a');
            contactA.href = 'about.html';
            contactA.textContent = contactUsText;
            contactA.setAttribute('data-lang-key', 'contact_us');
            contactLi.appendChild(contactA);
            navFragment.appendChild(contactLi);
            
            // 清空导航栏并添加新内容
            navLinks.innerHTML = '';
            navLinks.appendChild(navFragment);
        }
        
        // 更新页脚链接（如果存在页脚）
        if (footerLinks) {
            // 创建文档片段以减少DOM操作
            const footerFragment = document.createDocumentFragment();
            
            // 添加首页链接
            const homeLi = document.createElement('li');
            homeLi.innerHTML = `<a href="index.html">${homeText}</a>`;
            footerFragment.appendChild(homeLi);
            
            // 添加产品系列链接（仅当存在产品时）
            sortedSeries.forEach(series => {
                const key = series.id;
                const seriesName = series.nameTranslations && series.nameTranslations[currentLang] ? series.nameTranslations[currentLang] : series.name;
                
                const li = document.createElement('li');
                li.innerHTML = `<a href="index.html#${encodeURIComponent(key)}">${seriesName}</a>`;
                footerFragment.appendChild(li);
            });
            
            // 添加关于我们和联系方式
            const aboutLi = document.createElement('li');
            aboutLi.innerHTML = `<a href="about.html">${aboutUsText}</a>`;
            footerFragment.appendChild(aboutLi);
            
            const contactLi = document.createElement('li');
            contactLi.innerHTML = `<a href="about.html#contact">${contactUsText}</a>`;
            footerFragment.appendChild(contactLi);
            
            // 清空页脚链接并添加新内容
            footerLinks.innerHTML = '';
            footerLinks.appendChild(footerFragment);
        }
    } catch (e) {
        console.error('更新导航栏失败:', e);
    }
}

// 动态生成产品系列section
function generateProductSections(products) {
    console.log('generateProductSections 被调用');
    console.log('products:', products);
    
    try {
        const container = document.getElementById('product-series-container');
        console.log('container:', container);
        
        if (container) {
            // 清空容器
            container.innerHTML = '';
            console.log('容器已清空');
            
            // 将产品系列转换为数组并按 order 属性排序
            const sortedSeries = Object.keys(products).map(key => ({
                id: key,
                ...products[key]
            })).sort((a, b) => (a.order || 999) - (b.order || 999));
            
            console.log('排序后的系列:', sortedSeries);
            
            // 为每个产品系列创建section
            sortedSeries.forEach(series => {
                const key = series.id;
                console.log('创建系列 section:', key);
                console.log('系列数据:', series);
                console.log('系列名称翻译:', series.nameTranslations);
                const currentLang = LanguageManager.getCurrentLanguage();
                console.log('当前语言:', currentLang);
                console.log('翻译后的名称:', series.nameTranslations ? series.nameTranslations[currentLang] : '无翻译');
                const seriesName = series.nameTranslations && series.nameTranslations[currentLang] ? series.nameTranslations[currentLang] : series.name;
                console.log('最终系列名称:', seriesName);
                
                const section = document.createElement('section');
                section.className = 'product-series';
                // 使用 encodeURIComponent 来编码包含中文字符的 ID
                section.id = encodeURIComponent(key);
                section.setAttribute('data-series-id', key);
                section.innerHTML = `
                    <div class="container">
                        <h2>${seriesName}</h2>
                        <div class="product-section-wrapper">
                            <button class="scroll-btn scroll-btn-left" onclick="scrollProducts('${encodeURIComponent(key)}-products', -400)" aria-label="向左滚动">
                                ◀
                            </button>
                            <div class="product-grid" id="${encodeURIComponent(key)}-products">
                                <!-- 产品将通过JS动态加载 -->
                            </div>
                            <button class="scroll-btn scroll-btn-right" onclick="scrollProducts('${encodeURIComponent(key)}-products', 400)" aria-label="向右滚动">
                                ▶
                            </button>
                        </div>
                    </div>
                `;
                container.appendChild(section);
            });
        }
    } catch (e) {
        console.error('生成产品系列section失败:', e);
    }
}

// 滚动产品网格
function scrollProducts(gridId, scrollAmount) {
    const grid = document.getElementById(gridId);
    if (grid) {
        grid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// 加载产品数据
function loadProducts() {
    console.log('loadProducts 被调用');
    console.log('productsData:', productsData);
    
    // 检查是否有产品数据（使用全局 productsData）
    const hasProducts = Object.keys(productsData).length > 0;
    
    console.log('hasProducts:', hasProducts);
    
    if (!hasProducts) {
        // 显示提示信息
        console.log('显示空状态');
        showEmptyState();
    } else {
        // 动态更新导航栏
        updateNavigation(productsData);
        
        // 动态生成产品系列section
        generateProductSections(productsData);
        
        // 生成产品系列section后立即检查哈希值并滚动到对应系列
        checkHashAndScroll();
        
        // 加载产品卡片
        console.log('开始加载产品卡片');
        Object.keys(productsData).forEach(category => {
            console.log('加载系列:', category);
            const container = document.getElementById(`${encodeURIComponent(category)}-products`);
            console.log('容器:', container);
            if (container) {
                const series = productsData[category];
                console.log('系列产品:', series.products);
                if (series.products && series.products.length > 0) {
                    // 对产品进行排序（按order字段排序）
                    const sortedProducts = [...series.products].sort((a, b) => {
                        return (a.order || 999) - (b.order || 999);
                    });
                    
                    // 使用文档片段减少DOM操作
                    const fragment = document.createDocumentFragment();
                    sortedProducts.forEach(product => {
                        console.log('创建产品卡片:', product.name);
                        const productCard = createProductCard(product, category);
                        fragment.appendChild(productCard);
                    });
                    // 一次性添加所有卡片
                    container.appendChild(fragment);
                } else {
                    console.log('系列没有产品:', category);
                }
            } else {
                console.log('找不到容器:', `${encodeURIComponent(category)}-products`);
            }
        });
        
        // 产品卡片生成后初始化图片懒加载
        initLazyLoading();
    }
}

// 缓存管理函数
function setCache(key, value, expirationMinutes = 60) {
    const item = {
        value: value,
        expiry: new Date().getTime() + (expirationMinutes * 60 * 1000)
    };
    localStorage.setItem(key, JSON.stringify(item));
}

function getCache(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    
    const item = JSON.parse(itemStr);
    if (new Date().getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

// 显示空状态提示
function showEmptyState() {
    const container = document.getElementById('product-series-container');
    
    if (container) {
        // 清空容器
        container.innerHTML = '';
        
        // 创建提示section
        const emptySection = document.createElement('section');
        emptySection.className = 'product-series empty-state';
        emptySection.innerHTML = `
            <div class="container" style="text-align: center; padding: 4rem 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">📁</div>
                <h2 style="margin-bottom: 1rem; color: var(--primary-color);">暂无产品数据</h2>
                <p style="margin-bottom: 2rem; color: #666; max-width: 600px; margin-left: auto; margin-right: auto;">
                    系统尚未配置产品数据。请使用配置页面扫描产品图文件夹，
                    系统会自动识别产品图文件夹中的系列和产品。
                </p>
                <a href="config.html" class="btn btn-primary" style="display: inline-block; padding: 1rem 2rem; background: var(--primary-color); color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">
                    前往配置页面
                </a>
                <div style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; text-align: left; max-width: 600px; margin-left: auto; margin-right: auto;">
                    <h4 style="margin-bottom: 0.5rem;">📋 操作步骤：</h4>
                    <ol style="margin-left: 1.5rem; color: #666;">
                        <li style="margin-bottom: 0.5rem;">打开配置页面 (config.html)</li>
                        <li style="margin-bottom: 0.5rem;">点击左侧菜单的「扫描产品图」按钮</li>
                        <li style="margin-bottom: 0.5rem;">选择产品图文件夹进行扫描</li>
                        <li style="margin-bottom: 0.5rem;">确认扫描结果并保存配置</li>
                        <li>返回首页查看产品展示</li>
                    </ol>
                </div>
            </div>
        `;
        container.appendChild(emptySection);
    }
}

// 创建产品卡片
function createProductCard(product, category) {
    console.log('createProductCard 被调用:', product.name);
    console.log('完整产品数据:', JSON.stringify(product, null, 2));
    const currentLang = LanguageManager.getCurrentLanguage();
    console.log('当前语言:', currentLang);
    console.log('产品名称翻译对象:', product.nameTranslations);
    console.log('产品名称翻译类型:', typeof product.nameTranslations);
    if (product.nameTranslations) {
        console.log('产品名称翻译键:', Object.keys(product.nameTranslations));
        console.log('当前语言翻译:', product.nameTranslations[currentLang]);
    }
    const productName = product.nameTranslations && product.nameTranslations[currentLang] ? product.nameTranslations[currentLang] : product.name;
    console.log('最终产品名称:', productName);
    
    const card = document.createElement('div');
    card.className = 'product-card';
    const firstImage = product.images && product.images.length > 0 ? product.images[0] : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23f5f5f5"/%3E%3Ctext x="50%25" y="50%25" font-size="14" text-anchor="middle" dominant-baseline="middle" fill="%23999"%3E无图片%3C/text%3E%3C/svg%3E"';
    card.innerHTML = `
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3E加载中...%3C/text%3E%3C/svg%3E" data-src="${firstImage}" alt="${productName}">
        <div class="product-info">
            <h3>${productName}</h3>
        </div>
    `;
    
    card.addEventListener('click', () => {
        openProductModal(product);
    });
    
    return card;
}

// 实现图片懒加载
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// 打开产品详情模态框
function openProductModal(product) {
    currentProduct = product;
    currentImageIndex = 0;
    
    const currentLang = LanguageManager.getCurrentLanguage();
    const productName = product.nameTranslations && product.nameTranslations[currentLang] ? product.nameTranslations[currentLang] : product.name;
    const productDescription = product.descriptionTranslations && product.descriptionTranslations[currentLang] ? product.descriptionTranslations[currentLang] : product.description || '';
    
    // 翻译产品材质和信息标签
    const materialsTitle = LanguageManager.translate('product_materials', 'index');
    const upperMaterial = LanguageManager.translate('upper_material', 'index');
    const liningMaterial = LanguageManager.translate('lining_material', 'index');
    const soleMaterial = LanguageManager.translate('sole_material', 'index');
    
    const infoTitle = LanguageManager.translate('product_info', 'index');
    const customizable = LanguageManager.translate('customizable', 'index');
    const minOrder = LanguageManager.translate('min_order', 'index');
    const price = LanguageManager.translate('price', 'index');
    const yes = LanguageManager.translate('yes', 'common');
    const no = LanguageManager.translate('no', 'common');
    const none = LanguageManager.translate('none', 'common');
    const negotiable = LanguageManager.translate('negotiable', 'index');
    
    // 获取材质翻译
    const materialsTranslations = product.materialsTranslations || {};
    console.log('材质翻译数据:', materialsTranslations);
    console.log('当前语言:', currentLang);
    console.log('产品材质:', product.materials);
    
    const upperValue = materialsTranslations.upper && materialsTranslations.upper[currentLang] 
        ? materialsTranslations.upper[currentLang] 
        : (product.materials && product.materials.upper) || none;
    const liningValue = materialsTranslations.lining && materialsTranslations.lining[currentLang] 
        ? materialsTranslations.lining[currentLang] 
        : (product.materials && product.materials.lining) || none;
    const soleValue = materialsTranslations.sole && materialsTranslations.sole[currentLang] 
        ? materialsTranslations.sole[currentLang] 
        : (product.materials && product.materials.sole) || none;
    
    console.log('upperValue:', upperValue);
    console.log('liningValue:', liningValue);
    console.log('soleValue:', soleValue);
    
    const mainImageSrc = product.images && product.images.length > 0 ? product.images[0] : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%23f5f5f5"/%3E%3Ctext x="50%25" y="50%25" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="%23999"%3E无图片%3C/text%3E%3C/svg%3E"';
    const galleryHtml = product.images && product.images.length > 0 
        ? product.images.map((img, index) => `
            <div class="gallery-item" data-index="${index}">
                <img src="${img}" alt="${productName} ${index + 1}">
            </div>
        `).join('')
        : '';
    
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${mainImageSrc}" alt="${productName}" id="modal-main-image">
            <div class="image-gallery">
                ${galleryHtml}
            </div>
        </div>
        <div class="modal-details">
            <h3>${productName}</h3>
            <p>${productDescription}</p>
            <div class="product-materials">
                <h4>${materialsTitle}</h4>
                <ul>
                    <li><strong>${upperMaterial}:</strong> <span>${upperValue}</span></li>
                    <li><strong>${liningMaterial}:</strong> <span>${liningValue}</span></li>
                    <li><strong>${soleMaterial}:</strong> <span>${soleValue}</span></li>
                </ul>
            </div>
            <div class="product-info">
                <h4>${infoTitle}</h4>
                <ul>
                    <li><strong>${customizable}:</strong> <span>${product.customizable ? yes : no}</span></li>
                    <li><strong>${minOrder}:</strong> <span>${product.minOrder || none}</span></li>
                    <li><strong>${price}:</strong> <span>${product.price || negotiable}</span></li>
                </ul>
            </div>
        </div>
    `;
    
    // 绑定画廊图片点击事件
    const galleryItems = modalBody.querySelectorAll('.gallery-item');
    const mainImage = document.getElementById('modal-main-image');
    
    // 记录当前显示的图片索引
    let currentDisplayedImageIndex = 0;
    
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                if (product.images && product.images[index]) {
                    mainImage.src = product.images[index];
                    currentDisplayedImageIndex = index;
                }
            });
        });
    }
    
    // 绑定主图片点击事件，打开大图模态框
    if (mainImage && (product.images && product.images.length > 0)) {
        mainImage.addEventListener('click', () => {
            // 使用当前显示的图片索引
            currentImageIndex = currentDisplayedImageIndex;
            openImageModal();
        });
    }
    
    modal.classList.add('show');
}

// 打开图片大图模态框
function openImageModal() {
    if (!currentProduct || !imageModal || !currentProduct.images || currentProduct.images.length === 0) return;
    
    updateLargeImage();
    imageModal.classList.add('show');
}

// 更新大图模态框中的图片
function updateLargeImage() {
    if (!currentProduct || !modalLargeImage || !imageCounter || !currentProduct.images || currentProduct.images.length === 0) return;
    
    // 确保索引在有效范围内
    currentImageIndex = Math.max(0, Math.min(currentImageIndex, currentProduct.images.length - 1));
    modalLargeImage.src = currentProduct.images[currentImageIndex];
    imageCounter.textContent = `${currentImageIndex + 1}/${currentProduct.images.length}`;
}

// 切换到上一张图片
function prevImage() {
    if (!currentProduct) return;
    
    currentImageIndex = (currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
    updateLargeImage();
}

// 切换到下一张图片
function nextImage() {
    if (!currentProduct) return;
    
    currentImageIndex = (currentImageIndex + 1) % currentProduct.images.length;
    updateLargeImage();
}

// 关闭图片大图模态框
function closeImageModalFunc() {
    if (imageModal) {
        imageModal.classList.remove('show');
    }
}

// 关闭模态框
function closeProductModal() {
    if (modal) {
        modal.classList.remove('show');
    }
}

// 初始化函数
async function init() {
    initSlider();
    
    // 清除缓存以确保加载最新数据
    localStorage.removeItem('productsData');
    
    console.log('正在加载产品数据...');
    
    // 异步加载产品数据
    productsData = await loadProductsData();
    
    console.log('加载的产品数据:', productsData);
    console.log('产品数据键数:', Object.keys(productsData).length);
    
    // 为现有数据添加翻译（如果没有翻译）
    for (const key of Object.keys(productsData)) {
        const series = productsData[key];
        if (!series) continue;
        
        // 为系列名称添加翻译
        if (!series.nameTranslations || Object.keys(series.nameTranslations).length === 0) {
            series.nameTranslations = await LanguageManager.autoTranslateContent(series.name);
            console.log('为系列添加翻译:', series.name, series.nameTranslations);
        }
        
        // 为系列描述添加翻译
        if (!series.descriptionTranslations || Object.keys(series.descriptionTranslations).length === 0) {
            series.descriptionTranslations = await LanguageManager.autoTranslateContent(series.description);
            console.log('为系列描述添加翻译:', series.description, series.descriptionTranslations);
        }
        
        // 为产品添加翻译
        if (series.products) {
            for (const product of series.products) {
                if (!product) continue;
                
                // 为产品名称添加翻译
                if (!product.nameTranslations || Object.keys(product.nameTranslations).length === 0) {
                    product.nameTranslations = await LanguageManager.autoTranslateContent(product.name);
                    console.log('为产品添加翻译:', product.name, product.nameTranslations);
                }
                
                // 为产品描述添加翻译
                if (!product.descriptionTranslations || Object.keys(product.descriptionTranslations).length === 0) {
                    product.descriptionTranslations = await LanguageManager.autoTranslateContent(product.description);
                    console.log('为产品描述添加翻译:', product.description, product.descriptionTranslations);
                }
                
                // 为材质添加翻译
                if (!product.materialsTranslations || Object.keys(product.materialsTranslations).length === 0) {
                    if (product.materials) {
                        product.materialsTranslations = {
                            upper: await LanguageManager.autoTranslateContent(product.materials.upper || ''),
                            lining: await LanguageManager.autoTranslateContent(product.materials.lining || ''),
                            sole: await LanguageManager.autoTranslateContent(product.materials.sole || '')
                        };
                        console.log('为材质添加翻译:', product.materials, product.materialsTranslations);
                    }
                }
            }
        }
    }
    
    // 加载产品并等待完成
    loadProducts();
    
    // 绑定关闭模态框事件
    if (closeModal) {
        closeModal.addEventListener('click', closeProductModal);
    }
    
    // 点击模态框外部关闭
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProductModal();
            }
        });
    }
    
    // 键盘ESC关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            closeProductModal();
        } else if (e.key === 'Escape' && imageModal && imageModal.classList.contains('show')) {
            closeImageModalFunc();
        } else if (e.key === 'ArrowLeft' && imageModal && imageModal.classList.contains('show')) {
            prevImage();
        } else if (e.key === 'ArrowRight' && imageModal && imageModal.classList.contains('show')) {
            nextImage();
        }
    });
    
    // 图片大图模态框事件绑定
    if (imageModal) {
        // 关闭按钮
        if (closeImageModal) {
            closeImageModal.addEventListener('click', closeImageModalFunc);
        }
        
        // 点击模态框外部关闭
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeImageModalFunc();
            }
        });
        
        // 左右切换按钮
        if (prevImageBtn) {
            prevImageBtn.addEventListener('click', prevImage);
        }
        if (nextImageBtn) {
            nextImageBtn.addEventListener('click', nextImage);
        }
    }
}

// 处理联系表单提交
function handleContactFormSubmit() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // 简单验证
            if (!name || !email || !phone || !message) {
                alert('请填写所有必填字段');
                return;
            }
            
            // 模拟表单提交
            alert('表单提交成功！我们会尽快与您联系。');
            contactForm.reset();
        });
    }
}

// 加载快速链接
function loadQuickLinks() {
    try {
        const currentLang = LanguageManager.getCurrentLanguage();
        const saved = localStorage.getItem('websiteConfig_v2');
        if (saved) {
            const config = JSON.parse(saved);
            const quickLinks = config.quickLinks;
            
            if (quickLinks) {
                // 加载左列
                const leftContainer = document.getElementById('quickLinksLeft');
                if (leftContainer && quickLinks.leftColumn) {
                    leftContainer.innerHTML = quickLinks.leftColumn.map(link => {
                        // 应用翻译
                        const translatedName = LanguageManager.getTranslationsFromDictionary(link.name)[currentLang] || link.name;
                        // 确保链接路径正确
                        let url = link.url;
                        if (link.id === 'contact') {
                            // 确保联系我们链接正确
                            url = 'about.html';
                        } else if (url === 'about.html' && !url.startsWith('http') && !url.startsWith('/')) {
                            // 确保其他可能的about.html链接正确
                            url = 'about.html';
                        }
                        return `<a href="${url}">${translatedName}</a>`;
                    }).join('');
                }
                
                // 加载右列
                const rightContainer = document.getElementById('quickLinksRight');
                if (rightContainer && quickLinks.rightColumn) {
                    rightContainer.innerHTML = quickLinks.rightColumn.map(link => {
                        // 应用翻译
                        const translatedName = LanguageManager.getTranslationsFromDictionary(link.name)[currentLang] || link.name;
                        // 确保链接路径正确
                        let url = link.url;
                        if (link.id === 'contact') {
                            // 确保联系我们链接正确
                            url = 'about.html';
                        } else if (url === 'about.html' && !url.startsWith('http') && !url.startsWith('/')) {
                            // 确保其他可能的about.html链接正确
                            url = 'about.html';
                        }
                        return `<a href="${url}">${translatedName}</a>`;
                    }).join('');
                }
            } else {
                // 如果没有快速链接配置，使用默认值
                loadDefaultQuickLinks();
            }
        } else {
            // 如果没有保存的配置，使用默认值
            loadDefaultQuickLinks();
        }
    } catch (e) {
        console.error('加载快速链接失败:', e);
        // 出错时使用默认值
        loadDefaultQuickLinks();
    }
}

// 加载默认快速链接并应用翻译
function loadDefaultQuickLinks() {
    const leftContainer = document.getElementById('quickLinksLeft');
    const rightContainer = document.getElementById('quickLinksRight');
    const currentLang = LanguageManager.getCurrentLanguage();
    
    // 获取翻译后的文本
    const contactUsText = LanguageManager.translate('contact_us');
    
    if (leftContainer) {
        leftContainer.innerHTML = `
            <a href="index.html#pu">${LanguageManager.getTranslationsFromDictionary('PU系列')[currentLang] || 'PU系列'}</a>
            <a href="index.html#真皮">${LanguageManager.getTranslationsFromDictionary('真皮系列')[currentLang] || '真皮系列'}</a>
            <a href="index.html#短靴">${LanguageManager.getTranslationsFromDictionary('短靴系列')[currentLang] || '短靴系列'}</a>
        `;
    }
    
    if (rightContainer) {
        rightContainer.innerHTML = `
            <a href="index.html#乐福">${LanguageManager.getTranslationsFromDictionary('乐福系列')[currentLang] || '乐福系列'}</a>
            <a href="index.html#春季">${LanguageManager.getTranslationsFromDictionary('春季系列')[currentLang] || '春季系列'}</a>
            <a href="about.html">${contactUsText}</a>
        `;
    }
}

// 加载页脚信息
function loadFooterInfo() {
    try {
        const saved = localStorage.getItem('websiteConfig_v2');
        if (saved) {
            const config = JSON.parse(saved);
            
            // 加载页脚设置
            if (config.footerSettings) {
                const settings = config.footerSettings;
                document.documentElement.style.setProperty('--footer-contact-gap', settings.contactGap + 'rem');
                document.documentElement.style.setProperty('--footer-content-margin', settings.contentMargin + 'rem');
                document.documentElement.style.setProperty('--footer-bottom-padding', settings.bottomPadding + 'rem');
                document.documentElement.style.setProperty('--footer-link-gap', settings.linkGap + 'rem');
                document.documentElement.style.setProperty('--footer-social-gap', settings.socialGap + 'rem');
                document.documentElement.style.setProperty('--footer-padding', settings.padding + 'rem');
            } else if (config.footerContactGap !== undefined) {
                // 兼容旧的设置
                document.documentElement.style.setProperty('--footer-contact-gap', config.footerContactGap + 'rem');
            }
            
            // 加载模态框设置
            if (config.modalSettings) {
                const modalSettings = config.modalSettings;
                document.documentElement.style.setProperty('--modal-width', modalSettings.width + '%');
                document.documentElement.style.setProperty('--modal-max-width', modalSettings.maxWidth + 'px');
                document.documentElement.style.setProperty('--modal-max-height', modalSettings.maxHeight + 'vh');
                document.documentElement.style.setProperty('--modal-padding', modalSettings.padding + 'rem');
                document.documentElement.style.setProperty('--modal-label-width', modalSettings.labelWidth + 'px');
                document.documentElement.style.setProperty('--modal-label-gap', modalSettings.labelGap + 'rem');
            }
            
            const footerInfo = config.footerInfo;
            
            if (footerInfo) {
                // 加载关于我们标题
                const aboutTitle = document.getElementById('footerAboutTitle');
                if (aboutTitle && footerInfo.aboutTitle) {
                    aboutTitle.textContent = footerInfo.aboutTitle;
                }
                
                // 加载关于我们描述
                const aboutText = document.getElementById('footerAboutText');
                if (aboutText && footerInfo.aboutText) {
                    aboutText.textContent = footerInfo.aboutText;
                }
                
                // 加载邮箱
                const emailEl = document.getElementById('footerEmail');
                const emailContainer = document.getElementById('footerEmailContainer');
                if (emailEl && emailContainer && footerInfo.email) {
                    emailEl.textContent = footerInfo.email;
                    emailContainer.style.display = 'block';
                }
                
                // 加载电话
                const phoneEl = document.getElementById('footerPhone');
                const phoneContainer = document.getElementById('footerPhoneContainer');
                if (phoneEl && phoneContainer && footerInfo.phone) {
                    phoneEl.textContent = footerInfo.phone;
                    phoneContainer.style.display = 'block';
                }
                
                // 加载地址
                const addressEl = document.getElementById('footerAddress');
                const addressContainer = document.getElementById('footerAddressContainer');
                if (addressEl && addressContainer && footerInfo.address) {
                    addressEl.textContent = footerInfo.address;
                    addressContainer.style.display = 'block';
                }
                
                // 加载营业时间
                const hoursEl = document.getElementById('footerBusinessHours');
                const hoursContainer = document.getElementById('footerHoursContainer');
                if (hoursEl && hoursContainer && footerInfo.businessHours) {
                    hoursEl.textContent = footerInfo.businessHours;
                    hoursContainer.style.display = 'block';
                }
                
                // 加载社交媒体链接
                const socialContainer = document.getElementById('socialLinksContainer');
                if (socialContainer && footerInfo.socialLinks && footerInfo.socialLinks.length > 0) {
                    socialContainer.innerHTML = footerInfo.socialLinks.map(link => 
                        `<a href="${link.url}" target="_blank" title="${link.name}">
                            <img src="${link.icon}" alt="${link.name}">
                        </a>`
                    ).join('');
                }
            }
        }
    } catch (e) {
        console.error('加载页脚信息失败:', e);
    }
}

// 应用主题函数
function applyTheme() {
    try {
        const saved = localStorage.getItem('websiteConfig_v2');
        if (saved) {
            const config = JSON.parse(saved);
            if (config.theme) {
                const theme = config.theme;
                // 应用主题颜色
                if (theme.colors) {
                    Object.keys(theme.colors).forEach(key => {
                        document.documentElement.style.setProperty(`--${key}`, theme.colors[key]);
                    });
                }
            }
        }
    } catch (e) {
        console.error('应用主题失败:', e);
    }
}

// 加载网站配置
function loadSiteConfig() {
    try {
        const saved = localStorage.getItem('websiteConfig_v2');
        if (saved) {
            const config = JSON.parse(saved);
            
            // 更新页面标题
            if (config.siteTitle) {
                document.title = `${config.siteTitle} - 产品展示`;
            }
            
            // 更新网站描述（如果有meta标签）
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc && config.siteDescription) {
                metaDesc.content = config.siteDescription;
            }
        }
    } catch (e) {
        console.error('加载网站配置失败:', e);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('DOMContentLoaded 事件触发');
        console.log('当前路径:', window.location.pathname);
        
        applyTheme();
        loadSiteConfig();
        loadQuickLinks();
        loadFooterInfo();
        handleContactFormSubmit();
        
        // 加载产品数据（所有页面都需要）
        console.log('正在加载产品数据...');
        try {
            productsData = await loadProductsData();
            console.log('加载的产品数据:', productsData);
        } catch (error) {
            console.error('加载产品数据失败:', error);
            productsData = {};
        }
        
        // 初始化语言管理
        try {
            LanguageManager.init();
        } catch (error) {
            console.error('初始化语言管理失败:', error);
        }
        
        // 绑定语言切换按钮事件
        try {
            const languageButtons = document.querySelectorAll('.language-btn');
            languageButtons.forEach(button => {
                button.addEventListener('click', () => {
                    try {
                        LanguageManager.switchLanguage(button.dataset.lang);
                    } catch (error) {
                        console.error('切换语言失败:', error);
                    }
                });
            });
        } catch (error) {
            console.error('绑定语言切换按钮事件失败:', error);
        }
        
        // 只在首页执行 init 函数
        const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
        console.log('是否是首页:', isIndexPage);
        
        if (isIndexPage) {
            console.log('执行 init 函数');
            try {
                init();
            } catch (error) {
                console.error('执行 init 函数失败:', error);
                // 显示错误信息，确保页面不会空白
                const container = document.getElementById('product-series-container');
                if (container) {
                    container.innerHTML = `
                        <div style="text-align: center; padding: 4rem 2rem;">
                            <div style="font-size: 4rem; margin-bottom: 1rem;">⚠️</div>
                            <h2 style="margin-bottom: 1rem; color: var(--primary-color);">页面加载出错</h2>
                            <p style="margin-bottom: 2rem; color: #666; max-width: 600px; margin-left: auto; margin-right: auto;">
                                页面加载过程中出现错误，请刷新页面重试。
                            </p>
                            <button onclick="window.location.reload()" style="display: inline-block; padding: 1rem 2rem; background: var(--primary-color); color: white; text-decoration: none; border-radius: 8px; font-weight: 500; border: none; cursor: pointer;">
                                刷新页面
                            </button>
                        </div>
                    `;
                }
            }
        } else {
            // 在其他页面（如联系页面）执行 updateNavigation 函数
            console.log('执行 updateNavigation 函数');
            try {
                updateNavigation(productsData);
            } catch (error) {
                console.error('执行 updateNavigation 函数失败:', error);
            }
        }
        
        // 监听哈希值变化
        window.onhashchange = function() {
            try {
                checkHash(10);
            } catch (error) {
                console.error('处理哈希值变化失败:', error);
            }
        };
    } catch (error) {
        console.error('页面初始化失败:', error);
        // 显示错误信息，确保页面不会空白
        const container = document.querySelector('main');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 4rem 2rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">⚠️</div>
                    <h2 style="margin-bottom: 1rem; color: var(--primary-color);">页面加载出错</h2>
                    <p style="margin-bottom: 2rem; color: #666; max-width: 600px; margin-left: auto; margin-right: auto;">
                        页面加载过程中出现错误，请刷新页面重试。
                    </p>
                    <button onclick="window.location.reload()" style="display: inline-block; padding: 1rem 2rem; background: var(--primary-color); color: white; text-decoration: none; border-radius: 8px; font-weight: 500; border: none; cursor: pointer;">
                        刷新页面
                    </button>
                </div>
            `;
        }
    }
});

// 所有资源加载完成后执行
window.onload = function() {
    // 检查哈希值并滚动到对应系列
    checkHash(10);
};

// 检查URL哈希值并滚动到对应系列
function checkHashAndScroll() {
    // 立即检查一次，设置最大尝试次数为10
    checkHash(10);
}

// 实际执行哈希检查和滚动的函数
function checkHash(maxAttempts, attempt = 0) {
    if (attempt >= maxAttempts) {
        return;
    }
    
    const hash = window.location.hash;
    if (hash) {
        try {
            const seriesId = hash.substring(1); // 移除 # 符号
            // 先解码哈希值，然后再编码它来查找对应的系列元素
            const decodedSeriesId = decodeURIComponent(seriesId);
            const encodedSeriesId = encodeURIComponent(decodedSeriesId);
            const seriesElement = document.getElementById(encodedSeriesId);
            
            if (seriesElement) {
                // 滚动到系列位置，添加偏移量以避免被导航栏遮挡
                const offsetTop = seriesElement.offsetTop - 80; // 增加偏移量以确保不被导航栏遮挡
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else {
                // 等待一段时间后再次尝试
                setTimeout(() => {
                    checkHash(maxAttempts, attempt + 1);
                }, 200);
            }
        } catch (e) {
            console.error('处理哈希值时出错:', e);
        }
    }
}

// 加载网站配置
function loadSiteConfig() {
    try {
        const saved = localStorage.getItem('websiteConfig_v2');
        if (saved) {
            const config = JSON.parse(saved);
            
            // 更新页面标题
            if (config.siteTitle) {
                document.title = `${config.siteTitle} - 产品展示`;
            }
            
            // 更新网站描述（如果有meta标签）
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc && config.siteDescription) {
                metaDesc.content = config.siteDescription;
            }
        }
    } catch (e) {
        console.error('加载网站配置失败:', e);
    }
}

// 应用主题
function applyTheme() {
    const themes = {
        retro: {
            primary: '#8B4513',
            secondary: '#D2B48C',
            accent: '#A0522D',
            background: '#F5F5DC',
            text: '#3E2723'
        },
        spring: {
            primary: '#4CAF50',
            secondary: '#81C784',
            accent: '#2E7D32',
            background: '#E8F5E8',
            text: '#1B5E20'
        }
    };
    
    // 从 localStorage 获取主题设置
    let theme = 'retro';
    try {
        const saved = localStorage.getItem('websiteConfig_v2');
        if (saved) {
            const config = JSON.parse(saved);
            if (config.theme && themes[config.theme]) {
                theme = config.theme;
            }
        }
    } catch (e) {
        console.error('获取主题设置失败:', e);
    }
    
    // 应用主题CSS变量
    const root = document.documentElement;
    const themeColors = themes[theme];
    
    root.style.setProperty('--primary-color', themeColors.primary);
    root.style.setProperty('--secondary-color', themeColors.secondary);
    root.style.setProperty('--accent-color', themeColors.accent);
    root.style.setProperty('--background-color', themeColors.background);
    root.style.setProperty('--text-color', themeColors.text);
}
