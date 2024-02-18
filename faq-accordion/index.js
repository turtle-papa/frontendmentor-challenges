/**
 *  1. 点击icon 判断当前faq是否处于active转态
 *      1. 是：移除active状态
 *      2. 不是：
 *          1. 移除其它存在的active状态 保证只有一个active (optional)
 *          2. 添加active状态
 */

const faqsElement = document.querySelector(".faqs");
const faqElements = faqsElement.querySelectorAll(".faq");

faqElements.forEach(function (faqElement, i) {
  faqElement.addEventListener("click", () => {
    if (faqElement.classList.contains("active")) {
      faqElement.classList.remove("active");
    } else {
      faqElements.forEach(function (faqElement, i) {
        faqElement.classList.remove("active");
      });
      faqElement.classList.add("active");
    }
  });
});
