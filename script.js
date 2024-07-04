document.addEventListener("DOMContentLoaded", function () {
  function searchInsert(nums, target) {
    if (nums[0] > target) {
      return 0;
    }
    if (nums[nums.length - 1] < target) {
      return nums.length;
    }
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === target) {
        return i;
      } else {
        if (nums[i] < target && nums[i + 1] > target) {
          return i + 1;
        }
      }
    }
    if (nums[nums.length - 1] === target) {
      return nums.length - 1;
    }
  }

  console.log("searchInsert([1,3,5,6],5)", searchInsert([1, 3, 5, 6], 5));
  console.log("searchInsert([1,3,5,6],2)", searchInsert([1, 3, 5, 6], 2));
  console.log("searchInsert([1,3,5,6],0)", searchInsert([1, 3, 5, 6], 0));
  console.log("searchInsert([1,3,5,6],6)", searchInsert([1, 3, 5, 6], 6));

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
