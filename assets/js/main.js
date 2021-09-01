const btns = document.querySelectorAll(".nav-link");
const cards = document.querySelectorAll(".card");

for (let x in btns) {
  const tempBtn = btns[x].getBoundingClientRect();
  const center = (tempBtn.left + tempBtn.right) / 2;
  const bottom = tempBtn.bottom + 10;
  const cardWidth = cards[x].clientWidth / 2;
  cards[x].style.left = `${center - cardWidth}px`;
  cards[x].style.top = `${bottom}px`;
  btns[x].addEventListener("mouseover", () => {
    cards[x].classList.add("active");
  });
}
