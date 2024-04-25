const dos = document.querySelectorAll(".dos");
const items = document.querySelectorAll(".feedback-list .feedback-item");
console.log(items);
let active = 0;
const firstPosition = 0;
const lastPosition = items.length - 1;
console.log(items.length);
let autoPlay;

const startAutoPlay = () => {
  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    moveNext();
  }, 10000);
};
startAutoPlay();

// Hàm di chuyển đến vị trí tiếp theo
const moveNext = () => {
  // Di chuyển vị trí active
  active = active + 1 == lastPosition ? firstPosition : active + 1;
  // console.log(active);
  // Thiết lập transform cho mỗi mục
  items.forEach((item, index) => {
    const distance = (index - active) * 100;
    item.style.transform = `translateX(${distance}%)`;
  });
};

startAutoPlay();

//

const slides = document.querySelectorAll(".blog-list .item");
const dots1 = document.querySelectorAll(".dot");
let currentView = 0;
const itemsPerPage = 3;

function showSlide() {
  slides.forEach((slide, i) => {
    const indexInView = i - currentView * itemsPerPage;
    console.log(indexInView);
    const isVisible = indexInView >= 0 && indexInView < itemsPerPage;
    slide.style.display = isVisible ? "block" : "none";
  });
}

function setActiveDot(index) {
  dots1.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

dots1.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentView = i;
    console.log(currentView);
    showSlide();
    setActiveDot(currentView);
  });
});

showSlide();
setActiveDot(currentView);
