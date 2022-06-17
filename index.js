let cards = document.querySelectorAll(".card-img");
let url = "https://apis.scrimba.com/unsplash/photos/random/"

if (window.innerWidth < 1301 ) {
    url = `${url}?orientation=portrait&query=ocean`
} else {
    url = `${url}?orientation=landscape&query=ocean`
}

async function getImage(card) {
    console.log(url)
    let photoPromise = await fetch(url);
    let photo = await photoPromise.json();
    card.firstElementChild.src = await photo.urls.regular;
    card.firstElementChild.alt = await photo.alt_description;
    card.lastElementChild.firstElementChild.firstElementChild.textContent = await photo.user.name;
    card.lastElementChild.firstElementChild.firstElementChild.href = photo.user.links.html;
}

for (let card of cards) {
    getImage(card);
    //add an event listener for each card
    card.addEventListener("click", () => {
        //if the clicked card is active, make it inactive
        if (card.classList.contains("active")) {
            card.classList.remove("active");
        } else {
        //if the clicked card isn't active, make any other active card inactive and make the clicked card active
            for (let card of cards) {
                card.classList.remove("active");
            }
            card.classList.add("active");
        } 
    })
}