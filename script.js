document.addEventListener("DOMContentLoaded", function () {
  function searchInsert(nums, target) {
    if (nums[nums.length / 2]) {
      if (target <= nums[nums.length / 2]) {
      }
    } else {
    }
  }

  function getInsert(nums, target) {
    if (target < nums[0]) {
      return 0;
    }
    console.log("Math.log2(4)", Math.log2(4));
    console.log("Math.log2(9)", Math.log2(9));
    for (let i = 0; i < nums.length - 1; i++) {
      if (target === nums[i]) {
        return i;
      } else if (nums[i] === target - 1 && nums[i + 1] > target) {
        return i + 1;
      }
    }

    if (nums[nums.length - 1] === target) {
      return nums.length - 1;
    } else if (nums[nums.length - 1] < target) {
      return nums.length;
    }
  }

  console.log("searchInsert([1,3,5,6]),5", searchInsert([1, 3, 5, 6]), 5);

  console.log("getInsert([1,3,5,6],5)", getInsert([1, 3, 5, 6], 5));
  console.log("getInsert([1,3,5,6],4)", getInsert([1, 3, 5, 6], 4));
  console.log("getInsert([1,3,5,6],2)", getInsert([1, 3, 5, 6], 2));
  console.log("getInsert([1,3,5,6],6)", getInsert([1, 3, 5, 6], 6));
  console.log("getInsert([1,3,5,6],7)", getInsert([1, 3, 5, 6], 7));
  console.log("getInsert([1,3,5,6],0)", getInsert([1, 3, 5, 6], 0));

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
