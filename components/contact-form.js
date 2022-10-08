function createContactForm(container) {
    const contactFormEl = document.createElement('form');
    contactFormEl.className="contact-form"
    contactFormEl.innerHTML =  
        `<label name="name" class="contact-form__label">Name
        <input type="text" id="name" class="contact-form__input-name" required/>
        </label>
        <label name="email" class="contact-form__label">Email
        <input type="email" id="email" class="contact-form__input-email" required/>
        </label>
        <label name="message" class="contact-form__label">Message
        <textarea class="contact-form__input-message" name="" id="message" cols="30" rows="10" required></textarea>
        </label>
        <button name="submit" class="contact-form__submit">Submit</button>`;
    container.append(contactFormEl)
}
function submitForm(contactFormEl) {
    contactFormEl.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameValue = event.target.name.value;
        const emailValue = event.target.email.value;
        const messageValue = event.target.message.value;
        fetch('https://apx-api.vercel.app/api/utils/dwf', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
            to: "ada@asdas.com",
            message: `Name: ${nameValue},
            Email: ${emailValue}, 
            Message: ${messageValue}`
            })
        }).then(data => data.json());
        contactFormEl.reset();
    });
    const submitButton = contactFormEl.querySelector(".contact-form__submit")
    submitButton.addEventListener("click", function(){
        submitButton.textContent = "Sent!"
        setTimeout(() => {
            submitButton.textContent = "Submit"
        }, 1000);
    })
}