// animation header
window.addEventListener("scroll", function() {
    var header = $(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
// show product
const navMobiles = $$(".js-nav-mobile");
const navHomes = $$(".js-nav-home");

const navs = $$(".js-nav");
const contents = $$(".js-content");

const navMobileActive = $(".js-nav-mobile.active");
const navHomeActive = $(".js-nav-home.active");

const navActive = $(".js-nav.active");

navs.forEach((nav, index) => {
    const content = contents[index];
    nav.onclick = function () {
        navActive.classList.remove("active");
        $(".js-content.active").classList.remove("active");
        mainDetail.classList.remove('open');
        
        this.classList.add("active");
        content.classList.add("active");
    };

})
navHomes.forEach((navHome, index) => {
    const content = contents[index];
    navHome.onclick = function () {
        navHomeActive.classList.remove("active");
        $(".js-content.active").classList.remove("active");
        mainDetail.classList.remove('open');
        
        this.classList.add("active");
        content.classList.add("active");
    }
})
navMobiles.forEach((navMobile, index) => {
    const content = contents[index];
    navMobile.onclick = function () {
        navMobileActive.classList.remove("active");
        $(".js-content.active").classList.remove("active");
        mainDetail.classList.remove('open');
        
        this.classList.add("active");
        content.classList.add("active");
        // hide category
        overlay.classList.remove("open");
    }
})

// show nav category
const navCate = $(".js-nav-cate");
const btnCate = $(".js-btn-cate");
const overlay = $(".js-overlay");


btnCate.addEventListener("click", () => overlay.classList.toggle("open"));

overlay.addEventListener("click", () => overlay.classList.remove("open"));
navCate.addEventListener("click", (event) => event.stopPropagation());

// preloader main
var preLoader = $('#preloader')
var root = $('#root')
setTimeout(function() {
    preLoader.style.display = 'none'
    root.style.display = 'block';
}, 1000)
// show order
const mainOrder = $('.js-order')
const btnBuys = $$('.js-btn-buy')
const closeOrder = $('.js-close-order')
const orderContainer  = $('.order-container')

for(const btnBuy of btnBuys) {
    btnBuy.addEventListener('click', (e) => {
        mainOrder.classList.add('open')
        e.stopPropagation()
    })
} 
closeOrder.addEventListener('click', () => mainOrder.classList.remove('open'))
mainOrder.addEventListener('click', () => mainOrder.classList.remove('open'))
orderContainer.addEventListener('click', (e) => e.stopPropagation())

// Default right click
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
}, false);


