document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("footer");
  footer.style.backgroundColor = "#f1f1f1";
  footer.style.padding = "20px";
  footer.style.textAlign = "center";
  footer.style.marginTop = "50px";
  footer.innerHTML = `
    <p>Made with ❤️ by Neura</p>
  `;
  document.body.appendChild(footer);
});
