// animation header
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
// show product
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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
// show nav category
const navCate = $(".js-nav-cate");
const btnCate = $(".js-btn-cate");
const overlay = $(".js-overlay");


btnCate.addEventListener("click", () => overlay.classList.add("open"));

overlay.addEventListener("click", () => overlay.classList.remove("open"));
navCate.addEventListener("click", (event) => event.stopPropagation());
// Show notify update
const btnUpdates = document.querySelectorAll(".js-notify-update");
const notifyUpdate = document.querySelector(".js-update");

for(const btnUpdate of btnUpdates) {
    btnUpdate.addEventListener("click", () => notifyUpdate.classList.add('open'));
}
// Hide notify update
const closeNotify = document.querySelector(".js-close-notify");
const mainNotify = document.querySelector(".not-updated-yet");

closeNotify.addEventListener("click", () => notifyUpdate.classList.remove('open'));
notifyUpdate.addEventListener("click", () => notifyUpdate.classList.remove('open'));
mainNotify.addEventListener("click", (event) => event.stopPropagation());

// toast message
function toast({title, message, type, duration, perform}) {
    const main = document.getElementById('toast');

    if(main) {
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast--${type}`);
        // auto remove
        const autoRemove = setTimeout(function() {
            main.removeChild(toast);
        }, duration + perform);
        // remove when clicked
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }
        const delay = (duration / 1000).toFixed(2);
        const effect = (perform / 1000).toFixed(2);
        toast.style.animation = `ShowInLeft ease-in-out 0.3s, fadeIn linear ${effect}s ${delay}s forwards`;

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-exclamation',
        }
        const icon = icons[type];
        toast.innerHTML = `
            <i class="toast__icon ${icon}"></i>
            <div class="toast__notify">
                <div class="toast__notify__title">${title}</div>
                <div class="toast__notify__text">${message}</div>
            </div>
            <i class="toast__close fa-solid fa-xmark"></i>
        `;
        main.appendChild(toast);
    }
};

function showToastInfo() {
    toast({
        title: 'Success',
        message: 'Please contact admin to order',
        type: 'info',
        duration: 4000,
        perform: 1000,
    })
}