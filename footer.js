const timeoutLimit = 5000; // 5 seconds
const interval = 100; // Check every 100ms
const startTime = Date.now();

function addFooter() {
    const isReact = document.getElementById('root');
    const footers = document.querySelectorAll("footer");
    let lastFooter = footers[footers.length - 1];

    if ((!footers || footers.length <= 0) && isReact) {
        if (Date.now() - startTime >= timeoutLimit) {
            lastFooter = document.body;
        } else {
            return setTimeout(addFooter, interval);
        }
    }

    if (!lastFooter) {
        lastFooter = document.body;
    }

    if (document.querySelector("footer.custom-footer")) return;

    const footer = document.createElement("footer");
    footer.className = "neura-custom-footer";

    footer.innerHTML = `
        <a href="https://neura-team.com/" target="_blank" referrerpolicy="no-referrer">
            <p>
                Made with <span aria-label="love" role="img">❤️</span> by&nbsp;
                <img src="https://raw.githubusercontent.com/Neura-Team/scripts/main/logo120x120%20(background).png" alt="N"><span class="hidden">eura</span>
            </p>
        </a>
    `;

    lastFooter.insertAdjacentElement("afterend", footer);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addFooter);
} else {
    addFooter();
}
