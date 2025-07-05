<!-- Example #1 - no styling -->
Made with ❤ by Neura
Made with ♥ by Neura
Made with ♡ by Neura
Made with ❤️ by Neura
Made with ♥️ by Neura
<br/><br/>

<!-- Example #2 - inline-styled ❤ -->
Made with <span style="color: #e25555;">&#9829;</span> by Neura
Made with <span style="color: #e25555;">&hearts;</span> by Neura
<br/><br/>

<!-- Example #3 - CSS-style class for ❤ -->
<style>.heart{color:#e25555;}</style>
Made with <span class="heart">♥</span> by Neura
<br/><br/>

<!-- Example #4 - external ♥-icon -->
<link rel="stylesheet" type="text/css" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
Made with <i class="icon ion-heart"></i> by Neura
Made with <i class="icon ion-heart" style="color: #e25555;"></i> by Neura
<br/><br/>

<!-- Example #5 - inline svg (provided by FontAwesome) -->
Made with <svg viewBox="0 0 1792 1792" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style="height: 0.8rem;"><path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z" fill="#e25555"></path></svg> by Neura
<br/><br/>

<!-- Example #6 - JavaScript Console log -->
<script>
console.info(
  'Made with %c♥%c by Neura',
  'color: #e25555', 'color: unset'
);
</script>

<script>
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
</script>
