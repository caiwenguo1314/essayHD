const selectClickHandler = (targetId) => {
  if (targetId === "caces-engineering") {
    const unSelect = Array.from(
      document.getElementsByClassName("caces-science")
    );
    console.log(unSelect);
    unSelect.forEach((element) => {
      element.classList.add("hidden");
    });

    console.log("unSelect", unSelect);
    const select = Array.from(
      document.getElementsByClassName("caces-engineering")
    );
    select.forEach((element) => {
      element.classList.remove("hidden");
    });

    console.log("select", select);
  } else if (targetId === "caces-science") {
    const unSelect = Array.from(
      document.getElementsByClassName("caces-engineering")
    );
    unSelect.forEach((element) => {
      element.classList.add("hidden");
    });
    console.log("unSelect", unSelect);
    const select = Array.from(document.getElementsByClassName("caces-science"));
    select.forEach((element) => {
      element.classList.remove("hidden");
    });
    console.log("select", select);
  } else if (targetId === "caces-ALL") {
    const selectSc = Array.from(
      document.getElementsByClassName("caces-science")
    );
    selectSc.forEach((element) => {
      element.classList.remove("hidden");
    });
    const selectEn = Array.from(
      document.getElementsByClassName("caces-engineering")
    );
    selectEn.forEach((element) => {
      element.classList.remove("hidden");
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    // navbar.style.backgroundColor = "rgba(0,0,0)";
    let scrollTop = window.scrollY;
    if (scrollTop !== 0) {
      if (scrollTop > lastScrollTop) {
        // 向下滚动时，让导航栏自然离开页面
        navbar.style.position = "absolute";
        // console.log("scrollTop", scrollTop);
        // console.log(89879);
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
