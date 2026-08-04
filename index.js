const faqButtons = document.querySelectorAll(".faq-item__question");

faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentItem = button.closest(".faq-item");
        const currentIsOpen =
            currentItem.classList.contains("faq-item--open");

        document.querySelectorAll(".faq-item").forEach((item) => {
            item.classList.remove("faq-item--open");

            const itemButton = item.querySelector(".faq-item__question");

            if (itemButton) {
                itemButton.setAttribute("aria-expanded", "false");
            }
        });

        if (!currentIsOpen) {
            currentItem.classList.add("faq-item--open");
            button.setAttribute("aria-expanded", "true");
        }
    });
}); 

const newsletterForm = document.querySelector(".newsletter__form");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("¡Gracias! La suscripción se conectará próximamente.");
    });
}