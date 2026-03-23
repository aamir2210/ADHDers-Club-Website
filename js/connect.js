"use strict";
// ts/connect.ts
document.addEventListener("DOMContentLoaded", () => {
    const btnCopyEmail = document.getElementById("btnCopyEmail");
    const clubEmail = document.getElementById("clubEmail");
    const copyStatus = document.getElementById("copyStatus");
    btnCopyEmail?.addEventListener("click", async () => {
        const email = clubEmail?.textContent?.trim();
        if (!email)
            return;
        try {
            await navigator.clipboard.writeText(email);
            if (copyStatus)
                copyStatus.textContent = "Copied!";
            setTimeout(() => {
                if (copyStatus)
                    copyStatus.textContent = "";
            }, 1200);
        }
        catch {
            if (copyStatus)
                copyStatus.textContent = "Copy failed — copy manually.";
        }
    });
});

const copyBtn = document.getElementById("btnCopyEmail");
const emailText = document.getElementById("clubEmail");
const status = document.getElementById("copyStatus");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailText.textContent);

    status.textContent = "Copied!";
    
    // reset after 2 seconds
    setTimeout(() => {
      status.textContent = "";
    }, 2000);

  } catch (err) {
    status.textContent = "Failed to copy";
  }
});

copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(emailText.textContent);
  
    copyBtn.textContent = "Copied!";
    
    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 2000);
  });
