function toggle(button) {
  let text = button.previousElementSibling;

  if (text.style.display === "none") {
    text.style.display = "block";
    button.textContent = "Read Less";
  } else {
    text.style.display = "none";
    button.textContent = "Read More";
  }
}

const moreDetailses = document.querySelectorAll(".moreDetails");
for (let i = 0; i < moreDetailses.length; i++) {
  moreDetailses[i].style.display = "none";
}