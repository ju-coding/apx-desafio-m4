function createServiceCard(container, params) {
    const serviceCardEl = document.createElement("div")
    serviceCardEl.className="card";
    serviceCardEl.id="service-card";
    serviceCardEl.innerHTML =
        `<img src="" alt="" class="card__img"/>
        <h2 class="card__title"></h2>
        <p class="card__text"></p>`
    serviceCardEl.querySelector(".card__title").textContent = params.title
    serviceCardEl.querySelector(".card__text").textContent= params.text
    serviceCardEl.querySelector(".card__img").src = params.img
    container.append(serviceCardEl)
}
function createWorkCard(container, params) {
    const workCardEl = document.createElement("div")
    workCardEl.className="card";
    workCardEl.id="work-card";
    workCardEl.innerHTML =
        `<img src="" alt="" class="card__img"/>
        <h2 class="card__title"></h2>
        <p class="card__text"></p>
        <a href="" class="card__link">See More</a>`
    workCardEl.querySelector(".card__title").textContent = params.title
    workCardEl.querySelector(".card__text").textContent= params.text
    workCardEl.querySelector(".card__img").src = params.img
    workCardEl.querySelector(".card__link").href = params.link
    container.append(workCardEl)
}