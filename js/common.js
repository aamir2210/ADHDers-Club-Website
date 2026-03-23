"use strict";
// ts/common.ts
document.addEventListener("DOMContentLoaded", () => {
    // Mobile nav toggle
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
        });
        // Close menu when a nav link is clicked (mobile)
        navLinks.addEventListener("click", (e) => {
            const target = e.target;
            if (target instanceof HTMLAnchorElement) {
                navLinks.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    }
    // Highlight active page in navbar
    const filename = (window.location.pathname.split("/").pop() || "home.html").toLowerCase();
    let page = "home";
    if (filename.includes("team"))
        page = "team";
    if (filename.includes("connect"))
        page = "connect";
    document.querySelectorAll(".nav-link").forEach((el) => {
        const link = el;
        if (link.dataset.page === page)
            link.classList.add("active");
    });
});
