function addFooter() {
    if (document.querySelector("footer.custom-footer")) return;

    const footer = document.createElement("footer");
    footer.className = "custom-footer";

    footer.innerHTML = `<p>Made with <span aria-label="love" role="img">❤️</span> by Neura</p>`;

    document.body.appendChild(footer);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addFooter);
} else {
    addFooter();
}
