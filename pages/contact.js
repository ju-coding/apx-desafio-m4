function main() {
    const contactEl = document.querySelector(".contact");
    createHeader(contactEl);
    openMenu()
    closeMenu()
    const contactBoxEl = document.querySelector(".contact__box");
    createContactForm(contactBoxEl);
    const footerSectionEl = document.querySelector(".footer-section");
    createFooter(footerSectionEl);
    const contactFormEl = document.querySelector(".contact-form");
    submitForm(contactFormEl)
}
main()