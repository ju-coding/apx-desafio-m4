function createHeader(container) {
    const headerEl = document.createElement('header')
    headerEl.className="header"
    headerEl.innerHTML =
        `<a href="./index.html">
            <img src="./img/logo-white.png" alt="" class="header__logo"/>
        </a>
        <img src="./img/menu-white.png" alt="" class="header__menu-btn"/>
        <div class="header__menu-open">
            <img src="./img/cross-white.png" alt="" class="header__menu-open-cross"/>
            <div class="header__menu-open-label-box">
                <a href="./portfolio.html" class="header__menu-label header__menu-open-label">Portfolio</a>
                <a href="./services.html" class="header__menu-label header__menu-open-label">Services</a>
                <a href="./contact.html" class="header__menu-label header__menu-open-label">Contact</a>
            </div>
        </div>
        <div class="header__menu-label-box">
            <a href="./portfolio.html" class="header__menu-label">Portfolio</a>
            <a href="./services.html" class="header__menu-label">Services</a>
            <a href="./contact.html" class="header__menu-label">Contact</a>
        </div>`;
    container.prepend(headerEl)
}
function openMenu() {
    const openButtonEl = document.querySelector(".header__menu-btn");
    const menuOpenEl = document.querySelector(".header__menu-open");
    openButtonEl.addEventListener("click",()=>{
        menuOpenEl.style.display = "flex"
    })
}
function closeMenu() {
    const closeButtonEl = document.querySelector(".header__menu-open-cross");
    const menuOpenEl = document.querySelector(".header__menu-open");
    closeButtonEl.addEventListener("click",()=>{
        menuOpenEl.style.display = "none";
    })
}