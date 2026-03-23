"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".team-card");
    cards.forEach((card, index) => {
        const el = card;
        el.style.opacity = "0";
        el.style.transform = "translateY(15px)";
        el.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 120 * index);
    });
});
