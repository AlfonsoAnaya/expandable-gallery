let cards = document.querySelectorAll(".card-img");
const url = "https://apis.scrimba.com/unsplash/photos/random/?orientation=portrait&query=beach"

async function getImage(card) {
    let photoPromise = await fetch(url);
    let photo = await photoPromise.json();
    card.firstElementChild.src = await photo.urls.regular;
}

for (let card of cards) {
    getImage(card)
    //add an event listener for each card
    card.addEventListener("click", () => {
        //if the clicked card is active, make it inactive
        if (card.classList.contains("active")) {
            card.classList.remove("active")
        } else {
        //if the clicked card isn't active, make any other active card inactive and make the clicked card active
            for (let card of cards) {
                card.classList.remove("active");
            }
            card.classList.add("active");
        } 
    })
}