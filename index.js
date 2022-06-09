let cards = document.querySelectorAll(".card-img");

for (let card of cards) {
    card.addEventListener("click", () => {
        if (card.classList.contains("active")) {
            card.classList.remove("active")
        } else {
            for (let card of cards) {
                card.classList.remove("active");
            }
            card.classList.add("active");
        } 
    })
}

