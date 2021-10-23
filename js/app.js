// const togglerBtn = document.querySelector(".main__nav--toggler");
// const navItems = document.querySelector(".nav__items");

// togglerBtn.addEventListener("click", () => {
//   if (navItems.style.display == "none") {
//     navItems.style.display = "block";
//   } else {
//     navItems.style.display = "none";
//   }
// });

$(function () {
  $(".main__nav--toggler").on("click", function () {
    $(".nav__items").slideToggle();
  });
});
