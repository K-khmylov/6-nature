let popup = document.getElementById("popup");
let popup_btn = document.getElementById("popup_btn");
let body = document.body;

function toggleOpenClass() {
    popup_btn.classList.toggle("open");
    popup.classList.toggle("open");
  if (popup.classList.contains("open")) {
    body.style.height = "100vh";
    body.style.overflow = "hidden";
  } else {
    body.style.height = "auto";
    body.style.overflow = "auto";
  }
}

popup_btn.addEventListener("click", toggleOpenClass);
popup.addEventListener("click", toggleOpenClass);
