$(".hero-down-button").on("click", function () {
  window.scroll({
    top: 800,
    left: 100,
    behavior: "smooth",
  });
});

$(".alt-title-text1").css("color", "#47aad1");

// Cycle through the words on the main page
let cycle = 1;
let arr = ["fast", "accurate", "efficient"];

setInterval(() => {
  if (cycle > 2) {
    cycle = 0;
  }

  $(".alt-title-text1").fadeOut(1000, function () {
    $(this)
      .text(arr[cycle])
      .fadeIn(1000, function () {
        cycle++;
      });
  });
}, 5000);
