let cards = document.querySelectorAll(".card-img");

for (let card of cards) {
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

