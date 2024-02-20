/**
 * 提交评分前 隐藏结果界面
 * 提交评分后 显示结果界面 更新评分
 */

const ratingComponent = document.querySelector(".rating");
const ratingBtn = document.querySelector(".rating__cta");
const ratingScore = document.getElementById("rating__score");

ratingBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const ratingResult = ratingComponent.querySelector("input:checked");

  if (!ratingResult) {
    return;
  } else {
    ratingScore.textContent = ratingResult.value;
    ratingComponent.classList.remove("before");
    ratingComponent.classList.add("after");
  }
});
