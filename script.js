onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

/* ---- small golden garden clusters in the corners ---- */
document.addEventListener("DOMContentLoaded", () => {
  const groundFlowers = document.querySelectorAll(".ground .flower-container");

  groundFlowers.forEach((el) => {
    el.innerHTML = `<div class="flower-top">
                    <div class="flower-petal flower-petal__1"></div>
                    <div class="flower-petal flower-petal__2"></div>
                    <div class="flower-petal flower-petal__3"></div>
                    <div class="flower-petal flower-petal__4"></div>
                    <div class="flower-petal flower-petal__5"></div>
                    <div class="flower-petal flower-petal__6"></div>
                    <div class="flower-petal flower-petal__7"></div>
                    <div class="flower-petal flower-petal__8"></div>
                    <div class="flower-circle"></div>
                    <div class="flower-light flower-light__1"></div>
                    <div class="flower-light flower-light__2"></div>
                    <div class="flower-light flower-light__3"></div>
                    <div class="flower-light flower-light__4"></div>
                    <div class="flower-light flower-light__5"></div>
                    <div class="flower-light flower-light__6"></div>
                    <div class="flower-light flower-light__7"></div>
                    <div class="flower-light flower-light__8"></div>
                    </div>
                    <div class="flower-bottom">
                    <div class="flower-stem"></div>
                    <div class="flower-leaf flower-leaf__1"></div>
                    <div class="flower-leaf flower-leaf__2"></div>
                    <div class="flower-leaf flower-leaf__3"></div>
                    <div class="flower-leaf flower-leaf__4"></div>
                    <div class="flower-leaf flower-leaf__5"></div>
                    <div class="flower-leaf flower-leaf__6"></div>
                    <div class="flower-grass flower-grass__1"></div>
                    <div class="flower-grass flower-grass__2"></div>
                    <div class="flower-grass flower-grass__3"></div>
                    <div class="flower-grass flower-grass__4"></div>
                    </div>`;
  });

  // stagger them in gently, roughly alongside the main flowers blooming
  groundFlowers.forEach((el, i) => {
    setTimeout(() => el.classList.add("animate"), 900 + i * 400);
  });
});
