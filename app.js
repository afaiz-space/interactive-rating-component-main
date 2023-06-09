const stars = document.querySelectorAll(".btn");

const submitBtn = document.querySelector(".submit");

let selectedRating = null;

stars.forEach(function (star) {
  star.addEventListener("click", function () {
    const rating = this.dataset.rating;
    selectedRating = rating;
  });
});

submitBtn.addEventListener("click", function () {
  if (selectedRating) {
    document.querySelector("#s-no").innerHTML = selectedRating;
    highlightSelectedStars();
  } else {
    document.querySelector("#s-no").innerHTML = "0";
  }
});

function highlightSelectedStars() {
  const hide = document.querySelector(".card-back");
  const frontHide = document.querySelector(".card-front_wrap");
  if (hide.style.display === "none") {
    hide.style.display = "none";
  } else {
    hide.style.display = "block";
  }
  if (frontHide.style.display === "block") {
    frontHide.style.display = "block";
  } else {
    frontHide.style.display = "none";
  }
}
