"use strict";
// ts/home.ts
document.addEventListener("DOMContentLoaded", () => {
    const btnDiscord = document.getElementById("btnDiscord");
    const btnLinkedIn = document.getElementById("btnLinkedIn");
    // Replace these with your real links later
    const DISCORD_URL = "#";
    const LINKEDIN_URL = "#";
    btnDiscord?.addEventListener("click", () => {
        if (DISCORD_URL === "#")
            return;
        window.open(DISCORD_URL, "_blank", "noopener,noreferrer");
    });
    btnLinkedIn?.addEventListener("click", () => {
        if (LINKEDIN_URL === "#")
            return;
        window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
    });
});
