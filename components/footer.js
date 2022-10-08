function createFooter(container) {
    const footerEl = document.createElement('footer')
    footerEl.className="footer"
    footerEl.innerHTML =
        `<div class="footer__logo-box">
            <img src="./img/logo-white.png" alt="" class="footer__logo"/>
        </div>
        <div class="footer__social">
            <div class="footer__social-box">
                <a href="http://instagram.com" class="footer__social-link">Instagram</a>
                <img src="./img/instagram-white.png" alt="" class="footer__social-icon"/>
            </div>
            <div class="footer__social-box">
                <a href="http://linkedin.com" class="footer__social-link">Linkedin</a>
                <img src="./img/linkedin-white.png" alt="" class="footer__social-icon"/>
            </div>
            <div class="footer__social-box">
                <a href="http://github.com" class="footer__social-link">Github</a>
                <img src="./img/github-white.png" alt="" class="footer__social-icon"/>
            </div>
        </div>`;
    container.append(footerEl)
}