
document.addEventListener('DOMContentLoaded', function() {
    console.log('Business page loaded successfully!');
    
    const galleryData = {
        'name-keychain-models': {
        title: 'Name Keychain Models',
        images: [
            { src: 'assets/img/business/keychain-models/n40.jpg', alt: 'Name Keychain 40', caption: 'Name keychain new design (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n1,n16,n17.jpg', alt: 'Name Keychain 1', caption: 'Afina, Dhays and Aliesha (Orca)' },
            { src: 'assets/img/business/keychain-models/n2-1.jpg', alt: 'Name Keychain 2', caption: 'Sam (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n2-3.jpg', alt: 'Name Keychain 3', caption: 'Sam (Orca)' },
            { src: 'assets/img/business/keychain-models/n3-1.jpg', alt: 'Name Keychain 4', caption: 'Shara (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n4-1.jpg', alt: 'Name Keychain 5', caption: 'Kate (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n4-3.jpg', alt: 'Name Keychain 6', caption: 'Kate (Orca)' },
            { src: 'assets/img/business/keychain-models/n5-1.jpg', alt: 'Name Keychain 7', caption: 'Jb (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n5-3.jpg', alt: 'Name Keychain 8', caption: 'Jb (Orca)' },
            { src: 'assets/img/business/keychain-models/n6-1.jpg', alt: 'Name Keychain 9', caption: 'Eunice (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n6-3.jpg', alt: 'Name Keychain 10', caption: 'Eunice (Orca)' },
            { src: 'assets/img/business/keychain-models/n7-1.jpg', alt: 'Name Keychain 11', caption: 'Mary Rose (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n7-3.jpg', alt: 'Name Keychain 12', caption: 'Mary Rose (Orca)' },
            { src: 'assets/img/business/keychain-models/n8-1.jpg', alt: 'Name Keychain 13', caption: 'Theracel (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n8-3.jpg', alt: 'Name Keychain 14', caption: 'Theracel (Orca)' },
            { src: 'assets/img/business/keychain-models/n9-1.jpg', alt: 'Name Keychain 15', caption: 'Sheena (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n9-3.jpg', alt: 'Name Keychain 16', caption: 'Sheena (Orca)' },
            { src: 'assets/img/business/keychain-models/n11-1.jpg', alt: 'Name Keychain 17', caption: 'Coleen (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n11-2.jpg', alt: 'Name Keychain 18', caption: 'Coleen (AutoCad / Shaded)' },
            { src: 'assets/img/business/keychain-models/n11.jpg', alt: 'Name Keychain 19', caption: 'Liah (AutoCad / Shaded)' },
            { src: 'assets/img/business/keychain-models/n12-1.jpg', alt: 'Name Keychain 20', caption: 'Rhen Dale (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n12-2.jpg', alt: 'Name Keychain 21', caption: 'Rhen Dale (AutoCad / Shaded)' },
            { src: 'assets/img/business/keychain-models/n13-1.jpg', alt: 'Name Keychain 22', caption: 'France Carlo (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n13-2.jpg', alt: 'Name Keychain 23', caption: 'france Carlo (AutoCad / Shaded)' },
            { src: 'assets/img/business/keychain-models/n14-1.jpg', alt: 'Name Keychain 24', caption: 'Alexa Jane (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n14-2.jpg', alt: 'Name Keychain 25', caption: 'Alexa Jane (AutoCad / Shaded)' },
            { src: 'assets/img/business/keychain-models/n15-1.jpg', alt: 'Name Keychain 26', caption: 'Misty (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n15-2.jpg', alt: 'Name Keychain 27', caption: 'Misty (AutoCad / Shaded)' },
            { src: 'assets/img/business/keychain-models/n18.jpg', alt: 'Name Keychain 28', caption: 'York (AutoCad / Shaded)' },
            { src: 'assets/img/business/keychain-models/n19.jpg', alt: 'Name Keychain 29', caption: 'Dory (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n20.jpg', alt: 'Name Keychain 30', caption: 'bien (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n21.jpg', alt: 'Name Keychain 31', caption: 'Jade (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n22.jpg', alt: 'Name Keychain 32', caption: 'Arjhon (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n23.jpg', alt: 'Name Keychain 33', caption: 'Hazel (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n24.jpg', alt: 'Name Keychain 34', caption: 'Rose (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n25.jpg', alt: 'Name Keychain 35', caption: 'Kenneth (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n26.jpg', alt: 'Name Keychain 36', caption: 'Jean (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n27.jpg', alt: 'Name Keychain 37', caption: 'Criselle (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n28.jpg', alt: 'Name Keychain 38', caption: 'Anj (AutoCad)' },
            { src: 'assets/img/business/keychain-models/n29.jpg', alt: 'Name Keychain 39', caption: 'Sophia (AutoCad)' },
            ]
        },
        'custom-keychain-models': {
            title: 'Custom Keychain Models',
            images: [
            { src: 'assets/img/business/keychain-models/c1.jpg', alt: 'Custom Keychain 1', caption: 'Grow a Garden Cherry Blossom' },
            { src: 'assets/img/business/keychain-models/c2.jpg', alt: 'Custom Keychain 2', caption: 'Grow a Garden Watermelon' },
            { src: 'assets/img/business/keychain-models/c3.jpg', alt: 'Custom Keychain 3', caption: 'Minecraft Pig' },
            { src: 'assets/img/business/keychain-models/c4.jpg', alt: 'Custom Keychain 4', caption: 'minecraft Ghast' },
            { src: 'assets/img/business/keychain-models/c5.jpg', alt: 'Custom Keychain 5', caption: 'Labubu' },
            { src: 'assets/img/business/keychain-models/c6.jpg', alt: 'Custom Keychain 6', caption: 'Minecraft Creeper' },
            { src: 'assets/img/business/keychain-models/c7.jpg', alt: 'Custom Keychain 7', caption: 'Minecraft Skeleton' },
            { src: 'assets/img/business/keychain-models/c8.jpg', alt: 'Custom Keychain 8', caption: 'Nikee Shoe' },
            { src: 'assets/img/business/keychain-models/c9.jpg', alt: 'Custom Keychain 9', caption: 'Tumbler' },
            { src: 'assets/img/business/keychain-models/c10.jpg', alt: 'Custom Keychain 10', caption: 'Minecraft Potion' },
            { src: 'assets/img/business/keychain-models/c11.jpg', alt: 'Custom Keychain 11', caption: 'dino Skeleton' },
            { src: 'assets/img/business/keychain-models/c12.jpg', alt: 'Custom Keychain 12', caption: 'Roblox Logo' },
            { src: 'assets/img/business/keychain-models/c13.jpg', alt: 'Custom Keychain 13', caption: 'Evil Eye' },
            { src: 'assets/img/business/keychain-models/c14.jpg', alt: 'Custom Keychain 14', caption: 'Sitted Heart' },
            { src: 'assets/img/business/keychain-models/c15.jpg', alt: 'Custom Keychain 15', caption: 'Puzzle Heart Left and Right' },
            { src: 'assets/img/business/keychain-models/c16.jpg', alt: 'Custom Keychain 16', caption: 'Pixel Heart' },
            { src: 'assets/img/business/keychain-models/c17.jpg', alt: 'Custom Keychain 17', caption: 'Grow a Garden Racoon' },
            { src: 'assets/img/business/keychain-models/c18.jpg', alt: 'Custom Keychain 18', caption: 'Grow a Garden Pumpkin' },
            { src: 'assets/img/business/keychain-models/c19.jpg', alt: 'Custom Keychain 19', caption: 'Grow a Garden Blueberry' },
            { src: 'assets/img/business/keychain-models/c20.jpg', alt: 'Custom Keychain 20', caption: 'Ribbon' },
            { src: 'assets/img/business/keychain-models/c21.jpg', alt: 'Custom Keychain 21', caption: 'Booty Cat' },
            { src: 'assets/img/business/keychain-models/c22.jpg', alt: 'Custom Keychain 22', caption: 'Pixel Star' },
            { src: 'assets/img/business/keychain-models/c23.jpg', alt: 'Custom Keychain 23', caption: 'Squid' },
            { src: 'assets/img/business/keychain-models/c24.jpg', alt: 'Custom Keychain 24', caption: 'Electric Guitar' },
            { src: 'assets/img/business/keychain-models/c25.jpg', alt: 'Custom Keychain 25', caption: 'Cat' },
            { src: 'assets/img/business/keychain-models/c26.jpg', alt: 'Custom Keychain 26', caption: 'Pixel Star' },
            { src: 'assets/img/business/keychain-models/c27.jpg', alt: 'Custom Keychain 27', caption: 'Garfield' },
            { src: 'assets/img/business/keychain-models/c28.jpg', alt: 'Custom Keychain 28', caption: 'Electric Guitar' },
            { src: 'assets/img/business/keychain-models/c29.jpg', alt: 'Custom Keychain 29', caption: 'Guitars' },
            { src: 'assets/img/business/keychain-models/c30.jpg', alt: 'Custom Keychain 30', caption: 'Chubby Star' },
            { src: 'assets/img/business/keychain-models/c31.jpg', alt: 'Custom Keychain 31', caption: 'Ribbon' },
            { src: 'assets/img/business/keychain-models/c44-2.jpg', alt: 'Custom Keychain 32', caption: 'Rose' },
            { src: 'assets/img/business/keychain-models/c44.jpg', alt: 'Custom Keychain 33', caption: 'Tulips' },
            ]
        },
        'custom-designs': {
            title: 'Custom Designs',
            images: [
                { src: 'assets/img/business/custom-design/cd1.png', alt: 'Custom Design 1', caption: '(Autocad)' },
                { src: 'assets/img/business/custom-design/cd2.png', alt: 'Custom Design 2', caption: '(Autocad)' },
                { src: 'assets/img/business/custom-design/cd2.png', alt: 'Custom Design 2', caption: '(Autocad)' },
                { src: 'assets/img/business/custom-design/cd3.png', alt: 'Custom Design 3', caption: '(Cura)' },
                { src: 'assets/img/business/custom-design/cd4.png', alt: 'Custom Design 4', caption: '(Cura)' },
                { src: 'assets/img/business/custom-design/cd5.png', alt: 'Custom Design 5', caption: '(Cura)' },
                { src: 'assets/img/business/custom-design/cd6.png', alt: 'Custom Design 6', caption: '(Cura)' },
                { src: 'assets/img/business/custom-design/cd7.png', alt: 'Custom Design 7', caption: '(Cura)' },
                { src: 'assets/img/business/custom-design/cd8.png', alt: 'Custom Design 8', caption: '(Cura)' },
                { src: 'assets/img/business/custom-design/cd9.png', alt: 'Custom Design 9', caption: '(Cura)' },
                { src: 'assets/img/business/custom-design/cd10.png', alt: 'Custom Design 10', caption: '(Cura)' },
                { src: 'assets/img/business/custom-design/cd11.png', alt: 'Custom Design 11', caption: '(Cura)' },
            ]
        },
        'name-prototypes': {
        title: 'Name Prototypes',
        images: [
            { src: 'assets/img/business/prototypes/n1.png', alt: 'Name Prototype 1', caption: 'Dhays name prototype' },
            { src: 'assets/img/business/prototypes/n2.png', alt: 'Name Prototype 2', caption: 'Sam name prototype' },
            { src: 'assets/img/business/prototypes/n3.png', alt: 'Name Prototype 3', caption: 'Shara prototype' },
            { src: 'assets/img/business/prototypes/n4.png', alt: 'Name Prototype 4', caption: 'Kate name prototype' },
            { src: 'assets/img/business/prototypes/n5.png', alt: 'Name Prototype 5', caption: 'Jb name prototype' },
            { src: 'assets/img/business/prototypes/n6.png', alt: 'Name Prototype 6', caption: 'Eunice name prototype' },
            { src: 'assets/img/business/prototypes/n7.png', alt: 'Name Prototype 7', caption: 'Mary Rose name prototype' },
            { src: 'assets/img/business/prototypes/n8.png', alt: 'Name Prototype 8', caption: 'Theracel name prototype' },
            { src: 'assets/img/business/prototypes/n9.png', alt: 'Name Prototype 9', caption: 'Sheena name prototype' },
            { src: 'assets/img/business/prototypes/n10.png', alt: 'Name Prototype 10', caption: 'Liah name prototype' },
            { src: 'assets/img/business/prototypes/n11.png', alt: 'Name Prototype 11', caption: 'Coleen name prototype' },
            { src: 'assets/img/business/prototypes/n12.png', alt: 'Name Prototype 12', caption: 'Rhen Dale name prototype' },
            { src: 'assets/img/business/prototypes/n13.png', alt: 'Name Prototype 13', caption: 'France Carlo name prototype' },
            { src: 'assets/img/business/prototypes/n14.png', alt: 'Name Prototype 14', caption: 'Alexa Jane name prototype' },
            { src: 'assets/img/business/prototypes/n15.png', alt: 'Name Prototype 15', caption: 'Misty name prototype' },
            { src: 'assets/img/business/prototypes/n16.png', alt: 'Name Prototype 16', caption: 'Afina name prototype' },
            { src: 'assets/img/business/prototypes/n17.png', alt: 'Name Prototype 17', caption: 'Aliesha name prototype' },
            ]
        },
        'custom-prototypes': {
            title: 'Custom Prototypes',
            images: [
                { src: 'assets/img/business/prototypes/c44.png', alt: 'Custom Prototype 1', caption: 'Flower custom prototype' },
                { src: 'assets/img/business/prototypes/c45.png', alt: 'Custom Prototype 2', caption: 'Flower Top view model custom prototype' },
                { src: 'assets/img/business/prototypes/c1.png', alt: 'Custom Prototype 3', caption: 'Minecraft Potion 4pcs custom prototype' },
                { src: 'assets/img/business/prototypes/c2.png', alt: 'Custom Prototype 4', caption: 'Minecraft Potion 1pc custom prototype' },
                { src: 'assets/img/business/prototypes/c3.png', alt: 'Custom Prototype 5', caption: 'Minecraft Ghast custom prototype' },
                { src: 'assets/img/business/prototypes/c4.png', alt: 'Custom Prototype 6', caption: 'Nikee Shoes custom prototype' },
                { src: 'assets/img/business/prototypes/c5.png', alt: 'Custom Prototype 7', caption: 'Grow a Garden Racoon custom prototype' },
                { src: 'assets/img/business/prototypes/c6.png', alt: 'Custom Prototype 8', caption: 'Minecraft Skeleton custom prototype' },
                { src: 'assets/img/business/prototypes/c7.png', alt: 'Custom Prototype 9', caption: 'Roblox Logo 2pcs custom prototype' },
                { src: 'assets/img/business/prototypes/c8.png', alt: 'Custom Prototype 10', caption: 'Roblox Logo 1pc custom prototype' },
                { src: 'assets/img/business/prototypes/c9.png', alt: 'Custom Prototype 11', caption: 'Tumbler custom prototype' },
                { src: 'assets/img/business/prototypes/c10.png', alt: 'Custom Prototype 12', caption: 'Minecraft Creeper custom prototype' },
                { src: 'assets/img/business/prototypes/c11.png', alt: 'Custom Prototype 13', caption: 'Minecraft Pig custom prototype' },
                { src: 'assets/img/business/prototypes/c12.png', alt: 'Custom Prototype 14', caption: 'Grow a Garden Watermelon custom prototype' },
                { src: 'assets/img/business/prototypes/c13.png', alt: 'Custom Prototype 15', caption: 'Grow a Garden Blueberry custom prototype' },
                { src: 'assets/img/business/prototypes/c14.png', alt: 'Custom Prototype 16', caption: 'Grow a Garden Pumpkin custom prototype' },
                { src: 'assets/img/business/prototypes/c15.png', alt: 'Custom Prototype 17', caption: 'Labubu custom prototype' },
                { src: 'assets/img/business/prototypes/c16.png', alt: 'Custom Prototype 18', caption: 'Pixel Heart custom prototype' },
                { src: 'assets/img/business/prototypes/c17.png', alt: 'Custom Prototype 19', caption: 'Roblox Logo 1pc custom prototype' },
                { src: 'assets/img/business/prototypes/c18.png', alt: 'Custom Prototype 20', caption: 'Puzzle Heart Right custom prototype' },
                { src: 'assets/img/business/prototypes/c19.png', alt: 'Custom Prototype 21', caption: 'Puzzle Heart Left custom prototype' },
                { src: 'assets/img/business/prototypes/c20.png', alt: 'Custom Prototype 22', caption: 'Cat 5pcs. custom prototype' },
                { src: 'assets/img/business/prototypes/c21.png', alt: 'Custom Prototype 23', caption: 'Cat 2pcs. custom prototype' },
                { src: 'assets/img/business/prototypes/c22.png', alt: 'Custom Prototype 24', caption: 'Booty Cat 5pcs. custom prototype' },
                { src: 'assets/img/business/prototypes/c23.png', alt: 'Custom Prototype 25', caption: 'Booty Cat 5pcs. custom prototype' },
                { src: 'assets/img/business/prototypes/c24.png', alt: 'Custom Prototype 26', caption: 'Booty Cat custom prototype' },
                { src: 'assets/img/business/prototypes/c25.png', alt: 'Custom Prototype 27', caption: 'Ribbon 2pcs. custom prototype' },
                { src: 'assets/img/business/prototypes/c26.png', alt: 'Custom Prototype 28', caption: 'Ribbon custom prototype' },
                { src: 'assets/img/business/prototypes/c27.png', alt: 'Custom Prototype 29', caption: 'Pixel Star 5pcs. custom prototype' },
                { src: 'assets/img/business/prototypes/c28.png', alt: 'Custom Prototype 30', caption: 'Pixel Star custom prototype' },
                { src: 'assets/img/business/prototypes/c29.png', alt: 'Custom Prototype 31', caption: 'Squid 5pcs. custom prototype' },
                { src: 'assets/img/business/prototypes/c30.png', alt: 'Custom Prototype 32', caption: 'Squid custom prototype' },
                { src: 'assets/img/business/prototypes/c31.png', alt: 'Custom Prototype 33', caption: 'Electric Guitar 5pcs. custom prototype' },
                { src: 'assets/img/business/prototypes/c32.png', alt: 'Custom Prototype 34', caption: 'Electric Guitar custom prototype' },
                { src: 'assets/img/business/prototypes/c33.png', alt: 'Custom Prototype 35', caption: 'Electric Guitar custom prototype' },
                { src: 'assets/img/business/prototypes/c34.png', alt: 'Custom Prototype 36', caption: 'Chubby Star 5pcs custom prototype' },
                { src: 'assets/img/business/prototypes/c35.png', alt: 'Custom Prototype 37', caption: 'Chubby Star custom prototype' },
                { src: 'assets/img/business/prototypes/c36.png', alt: 'Custom Prototype 38', caption: 'Pixel Star custom prototype' },
                { src: 'assets/img/business/prototypes/c37.png', alt: 'Custom Prototype 39', caption: '3 Different custom prototype' },
                { src: 'assets/img/business/prototypes/c38.png', alt: 'Custom Prototype 40', caption: 'Garfield component custom prototype' },
                { src: 'assets/img/business/prototypes/c39.png', alt: 'Custom Prototype 41', caption: 'Ribbon 4pcs. custom prototype' },
                { src: 'assets/img/business/prototypes/c40.png', alt: 'Custom Prototype 42', caption: 'Ribbon custom prototype' },
                { src: 'assets/img/business/prototypes/c42.png', alt: 'Custom Prototype 43', caption: 'Acoustic Guitar custom prototype' },
                { src: 'assets/img/business/prototypes/c43.png', alt: 'Custom Prototype 44', caption: 'Grow a Garden Cherry Blossom custom prototype' },
                { src: 'assets/img/business/prototypes/c46.png', alt: 'Custom Prototype 45', caption: 'Flower box custom prototype' }
                
            ]
        },
        'decorative': {
            title: 'Decorative Items',
            images: [
                { src: 'assets/img/business/decorative/black_alloy2.png', alt: 'Decorative Item 1', caption: 'Black Alloy Siries 2' },
                { src: 'assets/img/business/decorative/white_alloy1.png', alt: 'Decorative Item 2', caption: 'White Alloy Siries 1' },
                { src: 'assets/img/business/decorative/pink_alloy1.png', alt: 'Decorative Item 3', caption: 'Pink Alloy Siries 1' },
                { src: 'assets/img/business/decorative/purple_alloy1.png', alt: 'Decorative Item 4', caption: 'Purple Alloy Siries 1' },
                { src: 'assets/img/business/decorative/glass_ball.png', alt: 'Decorative Item 5', caption: 'Glass Ball' },
                { src: 'assets/img/business/decorative/glass_heart.png', alt: 'Decorative Item 6', caption: 'Glass Heart' },
                { src: 'assets/img/business/decorative/glass_Star.png', alt: 'Decorative Item 7', caption: 'Glass Star' },
                { src: 'assets/img/business/decorative/silver_pear.png', alt: 'Decorative Item 8', caption: 'Silver Pear' },
                { src: 'assets/img/business/decorative/silverheart_key03.png', alt: 'Decorative Item 9', caption: 'Silver Key Heart' },
                { src: 'assets/img/business/decorative/silverwingheart_key08.png', alt: 'Decorative Item 10', caption: 'Silver Wing Key Heart' },
                { src: 'assets/img/business/decorative/tassle.png', alt: 'Decorative Item 11', caption: 'Tassle' }
            ]
        },

        'filament': {
            title: 'Filament',
            images: [
                { src: 'assets/img/business/decorative/FULABS_PLA(Transparent).png', alt: 'Decorative Item 1', caption: 'PLA - Transparent' },
                { src: 'assets/img/business/decorative/PLA(Luminous Blue-Green).png', alt: 'Decorative Item 2', caption: 'PLA - Luminous Blue-Green' },
                { src: 'assets/img/business/decorative/PETG(Gray).png', alt: 'Decorative Item 3', caption: 'PETG - Gray' },
            ]
        }
    };

    const galleryModal = document.getElementById('galleryModal');
    const galleryModalTitle = document.getElementById('galleryModalTitle');
    const galleryModalImage = document.getElementById('galleryModalImage');
    const galleryModalCaption = document.getElementById('galleryModalCaption');
    const galleryModalThumbnails = document.getElementById('galleryModalThumbnails');
    const closeModal = document.querySelector('.gallery-modal__close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentGallery = '';
    let currentImageIndex = 0;

    const categoryButtons = document.querySelectorAll('.category-btn');
    const portfolioItems = document.querySelectorAll('.business-portfolio__item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            portfolioItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    const viewGalleryButtons = document.querySelectorAll('.view-gallery-btn');

    viewGalleryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); 
            const gallery = this.getAttribute('data-gallery');
            openGallery(gallery);
        });
    });

    function openGallery(galleryName) {
        if (!galleryData[galleryName]) return;
        
        currentGallery = galleryName;
        currentImageIndex = 0;
        
        galleryModalTitle.textContent = galleryData[galleryName].title;
        updateGalleryImage();
        generateThumbnails();
        
        galleryModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    }

    function updateGalleryImage() {
        const currentImage = galleryData[currentGallery].images[currentImageIndex];
        galleryModalImage.src = currentImage.src;
        galleryModalImage.alt = currentImage.alt;
        galleryModalCaption.textContent = currentImage.caption;
        
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentImageIndex);
        });
    }

    function generateThumbnails() {
        galleryModalThumbnails.innerHTML = '';
        
        galleryData[currentGallery].images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image.src;
            thumbnail.alt = image.alt;
            thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
            thumbnail.addEventListener('click', () => {
                currentImageIndex = index;
                updateGalleryImage();
            });
            galleryModalThumbnails.appendChild(thumbnail);
        });
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryData[currentGallery].images.length;
        updateGalleryImage();
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryData[currentGallery].images.length) % galleryData[currentGallery].images.length;
        updateGalleryImage();
    }

    if (nextBtn) nextBtn.addEventListener('click', showNextImage);
    if (prevBtn) prevBtn.addEventListener('click', showPrevImage);

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        });
    }

    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (galleryModal.style.display === 'block') {
            if (e.key === 'Escape') {
                galleryModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });

    const businessContactForm = document.getElementById('business-contact-form');
    
    if (businessContactForm) {
        businessContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const projectType = formData.get('project-type');
            const description = formData.get('description');
            
            if (!name || !email || !description) {
                alert('Please fill in all required fields.');
                return;
            }

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            if (typeof emailjs === 'undefined') {
                alert('Email service not loaded. Please try again later.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                return;
            }

            emailjs.sendForm(
                'service_0wt0p2q',
                'template_bm5bkvp', 
                '#business-contact-form',
                'd7Fsk1hnjBTfgBSXw'
            ).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Thank you for your inquiry! I will get back to you within 24 hours.');
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                },
                (error) => {
                    console.error('FAILED...', error);
                    alert('Oops! Something went wrong. Please try again or contact me directly at larrenellajoydizon@gmail.com');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            );
        });
    }
    
    function businessScrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        
        if (!scrollUp) return;
        if (window.scrollY >= 350) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }
    
    window.addEventListener('scroll', businessScrollUp);
    
    function setBusinessActiveNav() {
        const navLinks = document.querySelectorAll('.nav__link');
        const businessLink = document.querySelector('.nav__link[href="business.html"]');
        
        navLinks.forEach(link => {
            link.classList.remove('active-link');
        });
        
        if (businessLink) {
            businessLink.classList.add('active-link');
        }
    }
    
    setBusinessActiveNav();
});