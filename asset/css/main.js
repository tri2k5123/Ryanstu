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

        this.classList.add("active");
        content.classList.add("active");
    };

})
navHomes.forEach((navHome, index) => {
    const content = contents[index];
    navHome.onclick = function () {
        navHomeActive.classList.remove("active");
        $(".js-content.active").classList.remove("active");

        this.classList.add("active");
        content.classList.add("active");
    }
})
navMobiles.forEach((navMobile, index) => {
    const content = contents[index];
    navMobile.onclick = function () {
        navMobileActive.classList.remove("active");
        $(".js-content.active").classList.remove("active");

        this.classList.add("active");
        content.classList.add("active");
        // hide category
        overlay.classList.remove("open");
    }
})
// hide pagination and show more product

// show nav category
const navCate = $(".js-nav-cate");
const btnCate = $(".js-btn-cate");
const overlay = $(".js-overlay");


btnCate.addEventListener("click", () => overlay.classList.toggle("open"));

overlay.addEventListener("click", () => overlay.classList.remove("open"));
navCate.addEventListener("click", (event) => event.stopPropagation());
// Show order
const btnUpdates = $$(".js-notify-update");
const notifyUpdate = $(".js-update");

for(const btnUpdate of btnUpdates) {
    btnUpdate.addEventListener("click", () => notifyUpdate.classList.add('open'));
}
// Hide order
const closeNotify = $(".js-close-notify");
const mainNotify = $(".not-updated-yet");

closeNotify.addEventListener("click", () => notifyUpdate.classList.remove('open'));
notifyUpdate.addEventListener("click", () => notifyUpdate.classList.remove('open'));
mainNotify.addEventListener("click", (event) => event.stopPropagation());

// Default right click
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
}, false);
// ----------------------
// preloader main
var preLoader = $('#preloader')
var root = $('#root')
setTimeout(function() {
    preLoader.style.display = 'none'
    root.style.display = 'block';
}, 1000)
// show search
// const search = $('.js-search')
// const iconSearch = $('.js-search-icon')
// const deleteSearch = $('.js-search-delete')
// const typeSearch = $('.js-search-type')

// iconSearch.addEventListener("click", () => search.classList.toggle('active'))
// deleteSearch.addEventListener('click', () => typeSearch.value = '')