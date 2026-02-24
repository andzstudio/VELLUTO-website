document.addEventListener('DOMContentLoaded', () => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        smoothWheel: true,
        wheelMultiplier: 1,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0, 0);
    window.vellutoLenis = lenis; 
});

document.addEventListener('DOMContentLoaded', () => {
    
    const menuData = [
        {
            id: 'signature', name: 'Signature Dishes', isSignature: true, bgImg: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop',
            items: [
                { id: 'sig1', name: 'Hot Stone Tenderloin', img: 'img/food/signature/sign-1.png', desc: 'Premium beef tenderloin (250g) ready to be cooked to your preference, wedges, broccoli, baby carrots, fine cheese sauce, and Chimichurri sauce.', cal: '850 kcal', weight: '750g', prepTime: '20 Min', serveStyle: 'Interactive cooking on volcanic stone', badge: 'Crown Jewel', bestFor: 'Unique Experience', price: '149 Lei' },
                { id: 'sig2', name: 'Pera Gurmand', img: 'img/food/signature/sign-2.png', desc: 'Fine beef ragout (70g) hidden in silky mashed potatoes (150g), melted cheeses, sautéed vegetables, and a spectacular sesame crust.', cal: '620 kcal', weight: '420g', prepTime: '25 Min', serveStyle: '', badge: 'Culinary Art', bestFor: 'Gourmet', price: '59 Lei' },
                { id: 'sig3', name: 'Gold Leaf Tenderloin', img: 'img/food/signature/sign-3.png', desc: 'Luxurious beef tenderloin, accompanied by finely scalloped potatoes, crisp iceberg lettuce, bold chocolate and chili sauce, wrapped in 24k edible gold leaf.', cal: '710 kcal', weight: '550g', prepTime: '35 Min', serveStyle: 'VIP Serving', badge: 'Absolute 24K Luxury', bestFor: 'Impressive', price: '159 Lei' }
            ]
        },
        {
            id: 'bauturi', name: 'Special Drinks', isSignature: false, bgImg: 'img/food/drinks/drink-3.png',
            items: [
        { 
        id: 'dr1',
        name: 'Heaven Wings',
        img: 'img/food/drinks/drink-1.png',
        desc: 'A refined champagne-based cocktail infused with elderflower essence, white peach nectar and a whisper of Tahitian vanilla. Finished with edible gold dust and a delicate citrus mist for a luminous, celebratory experience.',
        cal: '210 kcal',
        weight: '180 ml',
        prepTime: '4 Min',
        serveStyle: 'Crystal flute, table-side citrus vapor finish',
        badge: 'Signature',
        bestFor: 'Celebrations & First Impressions',
        price: '95 Lei'
        },

        { 
        id: 'dr2',
        name: 'Purple Midnight',
        img: 'img/food/drinks/drink-2.png',
        desc: 'A seductive blend of premium gin, handcrafted blackberry reduction, violet liqueur and fresh lime. Silky, floral and intriguingly smooth, balanced with a subtle botanical depth.',
        cal: '230 kcal',
        weight: '170 ml',
        prepTime: '5 Min',
        serveStyle: 'Coupe glass with smoked rosemary aroma',
        badge: 'Classic Reinvented',
        bestFor: 'Wine Lovers & Elegant Evenings',
        price: '85 Lei'
        },

        { 
        id: 'dr3',
        name: 'Ruby Diamond',
        img: 'img/food/drinks/drink-3.png',
        desc: 'An opulent fusion of aged rum, ruby port reduction, fresh pomegranate juice and dark cherry bitters. Velvety texture, layered sweetness and a refined oak finish.',
        cal: '260 kcal',
        weight: '190 ml',
        prepTime: '6 Min',
        serveStyle: 'Crystal rocks glass with hand-cut ice sphere',
        badge: 'Premium Selection',
        bestFor: 'After Dinner Indulgence',
        price: '105 Lei'
        },

        { 
        id: 'dr4',
        name: 'Safari Forest',
        img: 'img/food/drinks/drink-4.png',
        desc: 'A bold composition of single malt whisky, forest honey infusion, fresh thyme and a drop of black truffle essence. Deep, earthy and luxuriously aromatic.',
        cal: '280 kcal',
        weight: '180 ml',
        prepTime: '7 Min',
        serveStyle: 'Smoked glass dome reveal at the table',
        badge: 'Exclusive',
        bestFor: 'Connoisseurs',
        price: '120 Lei'
        },

        { 
        id: 'dr5',
        name: 'Ice on Fire',
        img: 'img/food/drinks/drink-5.png',
        desc: 'A dramatic contrast of ultra-premium vodka, fresh passion fruit, chili infusion and clarified citrus. Served chilled yet ignited with a brief blue flame ritual.',
        cal: '240 kcal',
        weight: '175 ml',
        prepTime: '6 Min',
        serveStyle: 'Flamed presentation with caramelized citrus zest',
        badge: 'Show Experience',
        bestFor: 'VIP Tables',
        price: '110 Lei'
        }
            ]
        },
        {
            id: 'aperitiv', name: 'Appetizers', isSignature: false, bgImg: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
            items: [
                { id: 'ap1', name: 'Imperial Salmon Tartare', img: 'img/food/aperitiv/aperitiv-1.png', desc: 'Fresh wild-caught salmon, creamy avocado, capers, fine citrus dressing, served with microgreens. An explosion of freshness.', cal: '320 kcal', weight: '200g', prepTime: '15 Min', serveStyle: 'Cold smoke infusion at the table', badge: 'Bestseller', bestFor: 'Fresh Start', price: '65 Lei' },
                { id: 'ap2', name: 'Beef Carpaccio', img: 'img/food/aperitiv/aperitiv-2.png', desc: 'Finely sliced beef tenderloin, wild arugula, 24-month aged parmesan, drizzled with white truffle oil.', cal: '250 kcal', weight: '150g', prepTime: '10 Min', serveStyle: '', badge: 'Classic', bestFor: 'Wine Pairing', price: '75 Lei' },
                { id: 'ap3', name: 'Velluto Mixed Bruschetta', img: 'img/food/aperitiv/aperitiv-3.png', desc: 'Artisanal selection of bruschetta with cherry tomatoes, aged prosciutto crudo, fine cream cheese, and smoked salmon.', cal: '380 kcal', weight: '220g', prepTime: '12 Min', serveStyle: '', badge: 'Sharing', bestFor: 'For Two', price: '50 Lei' }
            ]
        },
        {
            id: 'supe', name: 'Soups & Creams', isSignature: false, bgImg: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1600&auto=format&fit=crop',
            items: [
                { id: 'sp1', name: 'Truffle Cream Soup', img: 'img/food/supe/supa-1.png', desc: 'Velvety forest porcini and black truffle cream, served with aromatic croutons and extra virgin olive oil.', cal: '290 kcal', weight: '350ml', prepTime: '25 Min', serveStyle: 'Truffle oil drizzled at the table', badge: 'Most Complicated', bestFor: 'Cold Days', price: '45 Lei' },
                { id: 'sp2', name: 'Seafood Soup', img: 'img/food/supe/supa-2.png', desc: 'Mussels, tiger prawns, and calamari in a rich tomato broth with dry white wine and roasted garlic.', cal: '340 kcal', weight: '400ml', prepTime: '20 Min', serveStyle: '', badge: 'Authentic', bestFor: 'Mediterranean Experience', price: '60 Lei' },
                { id: 'sp3', name: 'Duck Consommé', img: 'img/food/supe/supa-3.png', desc: 'Clear duck soup slow-cooked for 8 hours, with julienne vegetables and fine homemade noodles.', cal: '210 kcal', weight: '350ml', prepTime: '15 Min', serveStyle: '', badge: 'Delicate', bestFor: 'Elegant Lunch', price: '40 Lei' }
            ]
        },
        {
            id: 'paste', name: 'Pasta & Risotto', isSignature: false, bgImg: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1600&auto=format&fit=crop',
            items: [
                { id: 'ps1', name: 'Saffron Risotto', img: 'img/food/paste/paste-1.png', desc: 'Premium Arborio rice, pure saffron, juicy tiger prawns, parmesan, and butter.', cal: '520 kcal', weight: '350g', prepTime: '30 Min', serveStyle: 'Parmesan grated at the table', badge: 'Bestseller', bestFor: 'Romantic Dinner', price: '70 Lei' },
                { id: 'ps2', name: 'Truffle Tagliatelle', img: 'img/food/paste/paste-2.png', desc: 'Fresh homemade pasta, intense white truffle paste, sweet cream, aged parmesan.', cal: '580 kcal', weight: '300g', prepTime: '20 Min', serveStyle: '', badge: 'Chef Choice', bestFor: 'Ultimate Indulgence', price: '65 Lei' },
                { id: 'ps3', name: 'Seafood Linguine', img: 'img/food/paste/paste-3.png', desc: 'Perfectly al dente linguine, cherry tomatoes, garlic, fresh seafood mix deglazed with dry white wine.', cal: '490 kcal', weight: '400g', prepTime: '25 Min', serveStyle: '', badge: 'Italian Style', bestFor: 'Wine Pairing', price: '80 Lei' }
            ]
        },
        {
            id: 'peste', name: 'Premium Fish', isSignature: false, bgImg: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1600&auto=format&fit=crop',
            items: [
                { id: 'pe1', name: 'Sea Bass', img: 'img/food/peste/peste-1.jpg', desc: 'Pan-seared sea bass, served on a bed of pea purée with fresh mint and lemon butter sauce.', cal: '410 kcal', weight: '300g', prepTime: '25 Min', serveStyle: '', badge: 'Fresh', bestFor: 'Elegant Lunch', price: '90 Lei' },
                { id: 'pe2', name: 'Teriyaki Salmon', img: 'img/food/peste/peste-2.png', desc: 'Salmon fillet generously glazed in homemade teriyaki sauce, crispy pan-fried asparagus, sprinkled with toasted sesame.', cal: '460 kcal', weight: '320g', prepTime: '25 Min', serveStyle: '', badge: 'Asian Fusion', bestFor: 'Balanced Dinner', price: '85 Lei' },
                { id: 'pe3', name: 'Crusted Red Tuna', img: 'img/food/peste/peste-3.png', desc: 'Premium red tuna (medium rare), in a toasted pistachio and pink pepper crust, placed on a fine sweet potato purée.', cal: '380 kcal', weight: '280g', prepTime: '20 Min', serveStyle: 'Artisanal carving at presentation', badge: 'Delicacy', bestFor: 'Wine Tasting', price: '110 Lei' }
            ]
        },
        {
            id: 'porc', name: 'Pork & Poultry', isSignature: false, bgImg: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1600&auto=format&fit=crop',
            items: [
                { id: 'po1', name: 'Iberico Tomahawk', img: 'img/food/porc/porc-1.png', desc: 'The impressive bone-in Iberico Tomahawk chop, flavored potato wedges, and fresh chimichurri sauce.', cal: '780 kcal', weight: '450g', prepTime: '45 Min', serveStyle: 'Flambéed with cognac at the table', badge: 'Spectacular', bestFor: 'Hearty Dinner', price: '120 Lei' },
                { id: 'po2', name: 'Duck Confit', img: 'img/food/porc/porc-2.png', desc: 'Slow-cooked crispy skin duck breast, ginger carrot purée, and intense berry reduction.', cal: '620 kcal', weight: '350g', prepTime: '30 Min', serveStyle: '', badge: 'French', bestFor: 'Romantic Dinner', price: '95 Lei' }
            ]
        },
        {
            id: 'vita', name: 'Dry-Aged Beef', isSignature: false, bgImg: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
            items: [
                { id: 'vi1', name: 'Argentinian Ribeye', img: 'img/food/vita/vita-1.png', desc: 'Noble ribeye dry-aged for 28 days, bathed in butter flavored with fresh herbs and slow-roasted cherry tomatoes. A pure carnivorous experience.', cal: '850 kcal', weight: '350g', prepTime: '35 Min', serveStyle: '', badge: '28-Day Dry-Aged', bestFor: 'Wine Pairing Red', price: '160 Lei' },
                { id: 'vi2', name: 'Filet Mignon', img: 'img/food/vita/vita-2.png', desc: 'The tender center of the beef tenderloin, served with truffle-scented purée and a dense Port wine demi-glace sauce.', cal: '680 kcal', weight: '300g', prepTime: '30 Min', serveStyle: 'Lightly flambéed at presentation', badge: 'Premium', bestFor: 'Special Occasion', price: '180 Lei' },
                { id: 'vi3', name: 'Beef Cheek', img: 'img/food/vita/vita-4.png', desc: 'Beef cheek slow-cooked for 12 hours in robust red wine until it melts in your mouth, on a bed of silky potato purée.', cal: '550 kcal', weight: '350g', prepTime: '25 Min', serveStyle: '', badge: 'Melts in your mouth', bestFor: 'Elegant Dinner', price: '110 Lei' }
            ]
        }
    ];

    const btnOpen = document.getElementById('open-menu-btn');
    const menuWrapper = document.getElementById('aww-menu-wrapper');
    const introView = document.getElementById('aww-intro-view');
    const dishView = document.getElementById('aww-dish-view');
    const introBg = document.getElementById('intro-dynamic-bg');
    
    const btnCloseIntro = document.getElementById('close-intro-btn');
    const btnCloseDish = document.getElementById('close-dish-btn');

    const introCatsContainer = document.getElementById('intro-cats-container');
    const topCatContainer = document.getElementById('top-cat-container');
    const bottomSuggContainer = document.getElementById('bottom-sugg-container');

    const dImg = document.getElementById('dish-main-img');
    const dBadgeContainer = document.getElementById('dish-main-badge-container');
    const dPretitle = document.getElementById('dish-pretitle');
    const dTitle = document.getElementById('dish-title');
    const dDesc = document.getElementById('dish-desc');
    const dWeight = document.getElementById('dish-weight');
    const dCal = document.getElementById('dish-cal');
    const dTime = document.getElementById('dish-time');
    const dBestfor = document.getElementById('dish-bestfor');
    const dPrice = document.getElementById('dish-price');
    const dExpBox = document.getElementById('dish-experience-box');
    const dExpText = document.getElementById('dish-experience-text');
    const revealEls = document.querySelectorAll('.gs-reveal');

    const btnPrevSlider = document.getElementById('slider-prev');
    const btnNextSlider = document.getElementById('slider-next');

    const fallbackImg = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop";
    let isInitialized = false;

    if(btnOpen) {
        btnOpen.addEventListener('click', (e) => {
            e.preventDefault();
            if(window.vellutoLenis) window.vellutoLenis.stop();
            document.body.style.overflow = 'hidden';
            
            menuWrapper.classList.remove('opacity-0', 'pointer-events-none');
            
            if(!isInitialized) {
                buildIntroCategories();
                buildTopCategories();
                setupSliderLogic();
                isInitialized = true;
            }

            introView.classList.remove('hidden', 'pointer-events-none');
            introView.style.opacity = '1';
            dishView.style.opacity = '0';
            dishView.classList.add('pointer-events-none');

            introBg.style.backgroundImage = `url('${menuData[0].bgImg}')`;

            gsap.fromTo('#intro-cats-container > div', 
                { x: 100, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
            );
        });
    }

    function closeMenu() {
        menuWrapper.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
        if(window.vellutoLenis) window.vellutoLenis.start();
    }
    if (btnCloseIntro) btnCloseIntro.addEventListener('click', closeMenu);
    if (btnCloseDish) btnCloseDish.addEventListener('click', closeMenu);

    function buildIntroCategories() {
        introCatsContainer.innerHTML = '';
        menuData.forEach((cat, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            const card = document.createElement('div');
            
            const borderGlowClass = cat.isSignature 
                ? "border-accent/40 shadow-[0_0_30px_rgba(197,160,89,0.15)] hover:shadow-[0_0_40px_rgba(197,160,89,0.3)] hover:border-accent" 
                : "border-white/5 hover:border-accent/50";

            card.className = `group relative w-[80vw] md:w-[45vw] lg:w-[28vw] h-full flex-shrink-0 rounded-3xl md:rounded-[2rem] overflow-hidden cursor-pointer border transition-all duration-500 bg-sec/50 select-none ${borderGlowClass}`;
            
            card.innerHTML = `
                <img src="${cat.bgImg}" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-110 pointer-events-none">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
                <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10 pointer-events-none">
                    <div class="flex items-center justify-between mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span class="text-accent text-[10px] md:text-xs tracking-[0.3em] font-medium">${num}</span>
                        ${cat.isSignature ? '<i class="ph-fill ph-crown text-accent text-xl"></i>' : ''}
                    </div>
                    <h4 class="${cat.isSignature ? 'font-title text-4xl md:text-5xl lg:text-5xl text-accent' : 'text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-wider text-textM group-hover:text-white'} transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">${cat.name}</h4>
                    <div class="h-0 overflow-hidden group-hover:h-12 transition-all duration-500 flex items-end">
                        <span class="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            Explore <i class="ph ph-arrow-right text-accent"></i>
                        </span>
                    </div>
                </div>
            `;

            if (window.innerWidth > 768) {
                card.addEventListener('mouseenter', () => {
                    introBg.style.backgroundImage = `url('${cat.bgImg}')`;
                });
            }

            card.addEventListener('click', () => transitionToDishView(cat));
            introCatsContainer.appendChild(card);
        });
    }

    function setupSliderLogic() {
        btnNextSlider.addEventListener('click', () => {
            gsap.to(introCatsContainer, { scrollLeft: introCatsContainer.scrollLeft + (window.innerWidth * 0.4), duration: 0.8, ease: "power3.inOut" });
        });
        
        btnPrevSlider.addEventListener('click', () => {
            gsap.to(introCatsContainer, { scrollLeft: introCatsContainer.scrollLeft - (window.innerWidth * 0.4), duration: 0.8, ease: "power3.inOut" });
        });

        let isDown = false;
        let startX;
        let scrollLeft;

        introCatsContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            introCatsContainer.classList.add('cursor-grabbing');
            startX = e.pageX - introCatsContainer.offsetLeft;
            scrollLeft = introCatsContainer.scrollLeft;
        });
        introCatsContainer.addEventListener('mouseleave', () => {
            isDown = false;
            introCatsContainer.classList.remove('cursor-grabbing');
        });
        introCatsContainer.addEventListener('mouseup', () => {
            isDown = false;
            introCatsContainer.classList.remove('cursor-grabbing');
        });
        introCatsContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - introCatsContainer.offsetLeft;
            const walk = (x - startX) * 2;
            introCatsContainer.scrollLeft = scrollLeft - walk;
        });
    }

    function buildTopCategories() {
        topCatContainer.innerHTML = '';
        menuData.forEach((cat) => {
            const btn = document.createElement('button');
            
            if (cat.isSignature) {
                btn.className = "nav-link-signature flex-shrink-0 snap-start uppercase text-[10px] md:text-xs tracking-[0.2em] whitespace-nowrap py-1 flex items-center gap-1.5 font-medium";
                btn.innerHTML = `<i class="ph-fill ph-crown text-base pb-[2px]"></i> ${cat.name}`;
            } else {
                btn.className = "nav-link flex-shrink-0 snap-start uppercase text-[10px] md:text-xs tracking-[0.2em] whitespace-nowrap py-1";
                btn.textContent = cat.name;
            }
            
            btn.dataset.id = cat.id;

            btn.addEventListener('click', () => {
                updateActiveTopCat(cat.id);
                loadCategoryData(cat);
            });

            topCatContainer.appendChild(btn);
        });
    }

    function updateActiveTopCat(catId) {
        document.querySelectorAll('.nav-link, .nav-link-signature').forEach(b => b.classList.remove('is-active'));
        
        const activeBtn = document.querySelector(`button[data-id="${catId}"]`);
        if(activeBtn) {
            activeBtn.classList.add('is-active');
            activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }

    function transitionToDishView(cat) {
        gsap.to(introView, { 
            opacity: 0, duration: 0.6, ease: "power2.inOut",
            onComplete: () => {
                introView.classList.add('pointer-events-none');
                dishView.classList.remove('pointer-events-none');
                gsap.to(dishView, { opacity: 1, duration: 0.8 });
                
                updateActiveTopCat(cat.id);
                loadCategoryData(cat);
            }
        });
    }

    function loadCategoryData(cat) {
        if(cat.items.length > 0) loadDishInFocus(cat.items[0], cat);
        buildBottomSuggestions(cat);
    }

    function loadDishInFocus(item, cat) {
        gsap.to(revealEls, { opacity: 0, y: 15, duration: 0.3, stagger: 0.05 });
        
        gsap.to(dImg, { opacity: 0, scale: 0.95, duration: 0.3, onComplete: () => {
            
            dImg.src = item.img;
            dImg.onerror = function() { this.src = fallbackImg; };
            
            dTitle.textContent = item.name;
            dDesc.textContent = item.desc;
            dWeight.textContent = item.weight;
            dCal.textContent = item.cal;
            dTime.textContent = item.prepTime || '15 Min';
            dBestfor.textContent = item.bestFor;
            dPrice.textContent = item.price;
            
            if(item.serveStyle && item.serveStyle !== '') {
                dExpText.textContent = item.serveStyle;
                dExpBox.classList.remove('hidden');
            } else {
                dExpBox.classList.add('hidden');
            }
            
            dPretitle.textContent = cat.isSignature ? "Velluto Signature" : cat.name;
            if(cat.isSignature) dTitle.classList.replace('text-textM', 'text-accent');
            else dTitle.classList.replace('text-accent', 'text-textM');

            dBadgeContainer.innerHTML = '';
            if(item.badge) {
                const isGold = ['Bestseller', 'Crown Jewel', 'Absolute 24K Luxury', 'Spectacular', 'Most Complicated'].includes(item.badge);
                const badgeClass = isGold ? 'glass-badge gold-glow' : 'glass-badge text-white';
                
                dBadgeContainer.innerHTML = `
                    <div class="${badgeClass} px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-medium flex items-center gap-2 shadow-xl">
                        ${isGold ? '<i class="ph-fill ph-star"></i>' : ''} ${item.badge}
                    </div>
                `;
            }

            gsap.fromTo(dImg, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" });
            
            gsap.fromTo(revealEls, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power2.out", delay: 0.1 }
            );
            
            if (window.innerWidth < 1024) {
                document.getElementById('aww-dish-view').scrollTo({top: 0, behavior: 'smooth'});
            } else {
                const rightContainer = document.querySelector('#aww-dish-view main > div:last-child');
                if(rightContainer) rightContainer.scrollTo({top: 0, behavior: 'smooth'});
            }
        }});
    }

    function buildBottomSuggestions(cat) {
        bottomSuggContainer.innerHTML = '';
        
        cat.items.forEach(item => {
            const btn = document.createElement('button');
            btn.className = "group flex items-center gap-3 md:gap-4 cursor-pointer hover:bg-white/5 pr-4 md:pr-6 py-2 rounded-full transition-colors flex-shrink-0";
            
            btn.innerHTML = `
                <div class="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-accent transition-colors flex-shrink-0 shadow-lg">
                    <img src="${item.img}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="text-left">
                    <h5 class="text-textM text-[10px] md:text-xs font-light max-w-[100px] md:max-w-[120px] truncate">${item.name}</h5>
                    <span class="text-accent text-[8px] md:text-[9px] uppercase tracking-widest">${item.price}</span>
                </div>
            `;

            btn.addEventListener('click', () => loadDishInFocus(item, cat));
            bottomSuggContainer.appendChild(btn);
        });

        gsap.fromTo(bottomSuggContainer.children, 
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
        );
    }

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && !menuWrapper.classList.contains('opacity-0')) {
            closeMenu();
        }
    });

    function initMockSlider(sliderId, intervalTime) {
        const sliderWrapper = document.getElementById(sliderId);
        if (!sliderWrapper) return;

        const slides = sliderWrapper.querySelectorAll('.menu-slide');
        if(slides.length === 0) return;
        let currentIndex = 0;

        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, intervalTime);
    }

    initMockSlider('slider-left', 4000);  
    initMockSlider('slider-right', 4500); 

    const menuReveals = document.querySelectorAll('.menu-section .reveal-up');
    menuReveals.forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: "top 85%", 
            onEnter: () => element.classList.add('is-visible'),
            once: true 
        });
    });

});