function addFooter() {
  if (document.querySelector("footer.custom-footer")) return;

  const footer = document.createElement("footer");
  footer.className = "custom-footer";

  footer.style.backgroundColor = "#f1f1f1";
  footer.style.padding = "20px";
  footer.style.textAlign = "center";
  footer.style.marginTop = "50px";

  footer.innerHTML = `<p>Made with <span aria-label="love" role="img">❤️</span> by Neura</p>`;

  document.body.appendChild(footer);
}

if (document.readyState === "loading") {
  // Document is still loading, wait for DOMContentLoaded
  document.addEventListener("DOMContentLoaded", addFooter);
} else {
  // DOMContentLoaded already fired, run immediately
  addFooter();
}
