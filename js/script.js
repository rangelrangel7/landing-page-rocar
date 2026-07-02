const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {
    whatsapp.addEventListener("mouseenter", () => {
        whatsapp.style.transform = "scale(1.1)";
        whatsapp.style.transition = "0.2s";
    });

    whatsapp.addEventListener("mouseleave", () => {
        whatsapp.style.transform = "scale(1)";
    });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// FAQ 

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("ativo");

    });

});