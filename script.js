document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");
  const logoImage = document.getElementById("logo-image");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      // 向下滚动时，让导航栏自然离开页面
      navbar.style.position = "absolute";
      logoImage.style.position = "absolute";
    } else {
      // 向上滚动时，将导航栏固定在顶部
      navbar.style.position = "fixed";
      navbar.style.top = "0";
      navbar.style.backgroundColor = "rgba(0,0,0)";

      logoImage.style.position = "fixed";
      logoImage.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });
});
