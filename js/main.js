let card = document.querySelectorAll(".card");
let progress = document.querySelectorAll(".progress-bar");
for (let i = 0; i < card.length; i++) {
  card[i].onmouseenter = function () {
    progress[0].style.width = card[i].dataset.k0;
    progress[1].style.width = card[i].dataset.k1;
    progress[2].style.width = card[i].dataset.k2;
  };
  card[i].onmouseleave = function () {
    progress[0].style.width = 0;
    progress[1].style.width = 0;
    progress[2].style.width = 0;
  };
}