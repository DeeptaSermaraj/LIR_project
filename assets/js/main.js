/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector('.details__img'),
  smallImg = document.querySelectorAll('.details__small-img');

  smallImg.forEach((img) => {
      img.addEventListener('click' , function() {
          mainImg.src = this.src;
      });
  });
}
/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 4,
          spaceBetween: 40,
      },
      1400: {
          slidesPerView: 6,
          spaceBetween: 40,
      }
  }
});

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 4,
          spaceBetween: 40,
      },
      1400: {
          slidesPerView: 4,
          spaceBetween: 40,
      }
  }
});

/*=============== SEARCH TABS ===============*/

const products = [
    { name: 'Minimalist Monochrome Shirt', image: 'assets/img/product-1-1.jpg', price: '₹2750' },
    { name: 'Boho Floral Printed Shirt', image: 'assets/img/product-2-1.jpg', price: '₹3200' },
    { name: 'Urban Explorer Sneakers', image: 'assets/img/product-3-1.jpg', price: '₹1950' },
    { name: 'Casual Slip-On Grey Sneakers', image: 'assets/img/product-3-2.jpg', price: '₹2399' },
    { name: 'Tailored Capri Pants', image: 'assets/img/product-4-2.jpg', price: '₹999' },
    { name: 'Asthetic Ibk Blued Shirt', image: 'assets/img/product-6-1.jpg', price: '₹3500' },
    { name: 'Artistic Abstract Top', image: 'assets/img/product-7-1.jpg', price: '₹2200' },
    { name: 'Ranjoli Tank Top', image: 'assets/img/product-7-2.jpg', price: '₹2800' },
    { name: 'Henly Shirt', image: 'assets/img/product-8-1.jpg', price: '₹5000' },
    { name: 'Retro Neon Vintage Shirt', image: 'assets/img/product-9-1.jpg', price: '₹3550' },
    { name: 'Classic Wool Slippers', image: 'assets/img/product-10-1.jpg', price: '₹1250' },
    { name: 'PElegant Satin Slippers', image: 'assets/img/product-10-2.jpg', price: '₹1390' },
    { name: 'Elegant Palazzo Pants', image: 'assets/img/product-11-1.jpg', price: '₹3000' },
    { name: 'Wildo Violet Pants', image: 'assets/img/product-11-2.jpg', price: '₹3500' },
    { name: 'Relaxed V-necked White T-Shirt', image: 'assets/img/product-12-1.jpg', price: '₹4000' },
    { name: 'Whitgree Top', image: 'assets/img/product-12-2.jpg', price: '₹2400' },
    { name: 'Elegant Leather Handbag', image: 'assets/img/product-13-1.jpg', price: '₹1750' },
    { name: 'Trendy Tote Bag', image: 'assets/img/product-13-2.jpg', price: '₹3500' },
    { name: 'Retro Neon Vintage Shirt', image: 'assets/img/category-1.jpg', price: '₹4000' },
    { name: 'Boho Tassel Slippers', image: 'assets/img/category-3.jpg', price: '₹1299' },
    { name: 'Chunky Knit Winter Scarf', image: 'assets/img/category-4.jpg', price: '₹950' },
    { name: 'Adidas Whit Sneakers', image: 'assets/img/category-5.jpg', price: '₹2050' },
    { name: 'Plush Throw Pillow', image: 'assets/img/category-6.jpg', price: '₹800' },
    { name: 'Wide-Leg Pants', image: 'assets/img/category-7.jpg', price: '₹1500' },
    { name: 'Stylish Fedora Hat', image: 'assets/img/category-8.jpg', price: '₹1000' },
    { name: 'Minikit Frock', image: 'assets/img/deals-1.jpg', price: '₹4000' },
    { name: 'Midnight Blue Elegance', image: 'assets/img/dress.jpeg', price: '₹8000' },
    { name: 'Satchel Bag', image: 'assets/img/showcase-img-1.jpg', price: '₹3700' },
    { name: 'Quilted Leather Shoulder Bag', image: 'assets/img/showcase-img-3.jpg', price: '₹1600' },
    { name: 'Vintage Trend Shirt', image: 'assets/img/showcase-img-5.jpg', price: '₹2400' },
    { name: 'Rich InkBlue Spilled Shirt', image: 'assets/img/showcase-img-6.jpg', price: '₹3750' },
    { name: 'Jogging Shoes', image: 'assets/img/showcase-img-7.jpg', price: '₹1800' },
    { name: 'Green Leto Bag', image: 'assets/img/showcase-img-8.jpg', price: '₹1200' },
    { name: 'Sleeveless Denim Frock', image: 'assets/img/dress1.jpeg', price: '₹3500' },
    { name: 'Rich-White Frock', image: 'assets/img/dress2.jpeg', price: '₹9500' },
    { name: 'stylish Party Wear', image: 'assets/img/dress3.jpeg', price: '₹8999' },
    { name: 'Classic Noir Frock', image: 'assets/img/dress4.jpeg', price: '₹4500' },
    { name: 'Snowfall Grace Frock', image: 'assets/img/dress5.jpeg', price: '₹10,000' },
    { name: 'Pure Elegance Frock', image: 'assets/img/dress6.jpeg', price: '₹8500' },
    { name: 'Azure Party Wear', image: 'assets/img/dress7.png', price: '₹6000' },
    { name: 'Blue Charm Frock', image: 'assets/img/dress8.jpeg', price: '₹8800' },
    
    { name: 'Blackzone T-Shirt', image: 'assets/img/dress10.jpeg', price: '₹1000' },
    { name: 'Charto T-Shirt', image: 'assets/img/dress11.jpeg', price: '₹1150' },
    { name: 'Modem Algae T-Shirt ', image: 'assets/img/dress12.jpeg', price: '₹1300' },
    { name: 'Formal Shirt', image: 'assets/img/dress13.jpeg', price: '₹2000' },
    { name: 'Classic White Oxford Shirt', image: 'assets/img/dress14.jpeg', price: '₹2500' },
    { name: 'Pink Stardust Sneakers', image: 'assets/img/dress15.jpeg', price: '₹1250' },
    { name: 'Blue Breeze Shoes', image: 'assets/img/dress16.jpeg', price: '₹1700' },
    { name: 'Midnight Black Shoes', image: 'assets/img/dress17.jpeg', price: '₹2460' },
    { name: 'Classic Everyday Shoes', image: 'assets/img/dress18.jpeg', price: '₹2600' },
    { name: 'Black Velvet Heels', image: 'assets/img/dress19.jpeg', price: '₹1080' },
    { name: 'Pure White Sneakers', image: 'assets/img/dress20.jpeg', price: '₹2000' },
    { name: 'Adidas Superstar Classic Sneakers', image: 'assets/img/dress21.jpeg', price: '₹2500' },
    { name: 'Buckles Slip-On Slipper', image: 'assets/img/dress22.jpeg', price: '₹2800' },
    { name: 'Comfort Slip-On Slippers', image: 'assets/img/dress23.jpeg', price: '₹1900' },
    { name: 'Babypink Comfyrich Slipper', image: 'assets/img/dress24.jpeg', price: '₹1500' },
    { name: 'Cozy Plush Slippers ', image: 'assets/img/dress25.jpeg', price: '₹2200' },
    { name: 'Pink Blossom Bag', image: 'assets/img/dress26.jpeg', price: '₹1580' },
    { name: 'Sunny Yellow HandBag', image: 'assets/img/dress27.jpeg', price: '₹2250' },
    { name: 'Rich Leather HandBag', image: 'assets/img/dress28.jpeg', price: '₹1970' },
    { name: 'Decent Grey Bag', image: 'assets/img/dress29.jpeg', price: '₹2500' },
    { name: 'Babypink Richnew Bag', image: 'assets/img/dress30.jpeg', price: '₹2000' },
    { name: 'Lemon Yellow Delight Shoulder Bag', image: 'assets/img/dress31.jpeg', price: '₹1850' },
    { name: 'Classic Black Elegance Shoulder Bag', image: 'assets/img/dress32.jpeg', price: '₹1250' },
    { name: 'Navy Blue Voyager Shoulder Bag', image: 'assets/img/dress33.jpeg', price: '₹2800' },
    { name: 'Denim Blue Casual Shoulder Bag', image: 'assets/img/dress34.jpeg', price: '₹3500' },
    { name: 'Monochrome Black & White Chic Shoulder Bag', image: 'assets/img/dress35.jpeg', price: '₹1900' },
    { name: 'Sunset Glow Sunglasses', image: 'assets/img/dress36.jpeg', price: '₹750' },
    { name: 'Stylish Black Round Sunglasses', image: 'assets/img/dress37.jpeg', price: '₹1000' },
    { name: 'Ocean Breeze Sunglasses', image: 'assets/img/dress38.jpeg', price: '₹1820' },
    { name: 'Crito Sunglasses', image: 'assets/img/dress39.jpeg', price: '₹640' },
    { name: 'Urban Edge Cat-Eye SunGlasses', image: 'assets/img/dress40.jpeg', price: '₹1200' },
    { name: 'Silk Serenity Scarf', image: 'assets/img/dress41.jpeg', price: '₹790' },
    { name: 'Autumn Harvest Infinity Scarf', image: 'assets/img/dress42.jpeg', price: '₹620' },
    { name: 'Winter Wonderland Knit Scarf', image: 'assets/img/dress43.jpeg', price: '₹1040' },
    { name: 'Classic Plaid Wrap Scarf', image: 'assets/img/dress44.jpeg', price: '₹880' },
    { name: 'Boho Chic Fringe Scarf', image: 'assets/img/dress45.jpeg', price: '₹1000' },
    { name: 'Urban Explorer Hat', image: 'assets/img/dress46.jpeg', price: '₹1050' },
    { name: 'Sunny Day Straw Hat', image: 'assets/img/dress47.jpeg', price: '₹1110' },
    { name: 'Cozy Knit Hat', image: 'assets/img/dress48.jpeg', price: '₹1300' },
    { name: 'Vintage Wide-Brimmed Hat', image: 'assets/img/dress49.jpeg', price: '₹1750' },
    { name: 'Retro Cowboy Cap', image: 'assets/img/dress50.jpeg', price: '₹3500' },
    { name: 'Soft Touch Velvet Pillow', image: 'assets/img/dress51.jpeg', price: '₹1050' },
    { name: 'Cozy Flannel Accent Pillow', image: 'assets/img/dress52.jpeg', price: '₹880' },
    { name: 'Modern Geometric Throw Pillow', image: 'assets/img/dress53.jpeg', price: '₹960' },
    { name: 'Elegant Satin Decorative Pillow', image: 'assets/img/dress54.jpeg', price: '₹640' },
    { name: 'Bohemian Tassel Pillow', image: 'assets/img/dress55.jpeg', price: '₹1800' },
    { name: 'Sleek Black Tailored Pants', image: 'assets/img/dress56.jpeg', price: '₹1800' },
    { name: 'Relaxed Fit Pant', image: 'assets/img/dress57.jpeg', price: '₹2050' },
    { name: 'Dailytrend Pants', image: 'assets/img/dress58.jpeg', price: '₹1800' },
    { name: 'Trendy High-Waisted Pants', image: 'assets/img/dress59.jpeg', price: '₹3500' },
    { name: 'Sophisticated Navy Blue Wrap Top', image: 'assets/img/dress60.jpeg', price: '₹1020' },
    { name: 'Chic Floral Womens Shirt', image: 'assets/img/dress61.jpeg', price: '₹3500' },
    { name: 'Casual Gray Henley Top', image: 'assets/img/dress62.jpeg', price: '₹1990' },
    { name: 'Trendy Black Womens T-Shirt', image: 'assets/img/dress63.jpeg', price: '₹2500' },
    { name: 'Vibrant Peplum Top', image: 'assets/img/dress64.jpeg', price: '₹1430' },
    { name: 'Classy White Ladies T-Shirt', image: 'assets/img/dress65.jpeg', price: '₹3500' },
    { name: 'Elegant Black Silk Womens T-Shirt', image: 'assets/img/dress66.jpeg', price: '₹2260' }


];

function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(input)
    );

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        container.appendChild(productCard);
    });

    if (filteredProducts.length === 0) {
        container.innerHTML = '<p>No products found.</p>';
    }
}


/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);
      tabContents.forEach((tabContent) => {
          tabContent.classList.remove('active-tab');
      });

      target.classList.add('active-tab');

      tabCs.forEach((tab) => {
          tab.classList.remove('active-tab');
      });

      tab.classList.add('active-tab');
  });
});