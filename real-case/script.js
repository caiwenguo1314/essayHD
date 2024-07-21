document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("scroll-link1")
    .addEventListener("click", function () {
      document.querySelector("#contact-footer").scrollIntoView({
        behavior: "smooth",
      });
    });
  document
    .getElementById("scroll-link2")
    .addEventListener("click", function () {
      document.querySelector("#contact-footer").scrollIntoView({
        behavior: "smooth",
      });
    });

  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    // navbar.style.backgroundColor = "rgba(0,0,0)";
    let scrollTop = window.scrollY;
    if (scrollTop !== 0) {
      if (scrollTop > lastScrollTop) {
        // 向下滚动时，让导航栏自然离开页面
        navbar.style.position = "absolute";
      } else {
        // 向上滚动时，将导航栏固定在顶部
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.backgroundColor = "rgba(0,0,0)";
      }
    } else {
      navbar.style.backgroundColor = "rgba(0,0,0,0)";
    }

    lastScrollTop = scrollTop;
  });
});
