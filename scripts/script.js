// // Arrow button scrolls down when pressed
// $(".hero-down-button").on("click", function () {
//   window.scroll({
//     top: 800,
//     left: 100,
//     behavior: "smooth",
//   });
// });

// $(".alt-title-text1").css("color", "#47aad1");

// // Cycle through the words on the main page
// let cycle = 0;
// let arr = ["fast", "accurate", "efficient"];

// setInterval(() => {
//   if (cycle > 2) {
//     cycle = 0;
//   }

//   $(".alt-title-text1").fadeOut(1000, function () {
//     $(this)
//       .text(arr[cycle])
//       .fadeIn(1000, function () {
//         cycle++;
//       });
//   });
// }, 5000);

function addTodo(data) {
  // Get the data
  // Create an element to store data in

  // Animate todo item into existence
  let randoId = Math.random().toString(16).slice(2);
  // Put the element at the start of the list
  let createElement = `
    <li data-crossed="false" style="display: none;" id="todo-item-${randoId}">
      <button class="todo-item-button">${data}</button>
      <button class="todo-item-button-delete">x</button>
    </li>
  `;

  $("#todo-list").prepend(createElement);
  $(`#todo-item-${randoId}`).slideDown("slow", function () {
    strikeTime();
    deleteItem();
  });
  $("#new").remove();
  // $("#todo-list").prepend(createElement);
  // strikethrough
}

function strikeTime() {
  $(".todo-item-button").unbind("click");
  $(".todo-item-button").click(function (e) {
    console.log("test");
    let isCrossed = !!$(e.currentTarget).parent().data("crossed");

    // Check if it's striked out
    if (isCrossed === false) {
      let btnText = $(e.currentTarget).text();

      // Add the html around the text inside the button
      let strike = `<del>${btnText}</del>`;
      $(e.currentTarget).html(strike);
      $(e.currentTarget).parent().data("crossed", true);
    } else {
      let btnText = $(e.currentTarget).html();
      // Add the html around the text inside the button
      let unStrike = btnText.substring(5, btnText.length - 6);

      $(e.currentTarget).html(unStrike);
      $(e.currentTarget).parent().data("crossed", false);
    }

    // Get the element thats clicked
    // Get the text from the button
  });
}
// Call the strikethrough outside of the function
strikeTime();

function deleteItem() {
  $(".todo-item-button-delete").click(function (e) {
    // Remove the li with random id

    // Find the parent of the button
    // Remove the parent when button is clicked
    // Animate todo into extintion
    $(e.currentTarget)
      .parent()
      .slideUp("slow", function () {
        // Animation complete
        $(e.currentTarget).parent().remove();
        if ($("#todo-list").children().length == 0) {
          $("#todo-list").append("<p id='new'>No todos left!</p>");
        }
      });

    // Get the list parent
    // Check if the parent doesn't have any children
  });
}

// Call the function on the outside so it works for new ones
deleteItem();

// Toggle a strikethrough on the word when it's clicked on

// For the form
$("#todo-form").validate({
  rules: {
    todo_value: {
      required: true,
      maxlength: 50,
    },
  },
  invalidHandler: function (form, validator) {
    var errors = validator.numberOfInvalids();
    if (errors) {
      alert("Must be between 1-50 characters");
    }
  },
  errorPlacement: function () {},

  submitHandler: function (form, event) {
    event.preventDefault();
    let formInput = $.trim($(form).find('input[name="todo_value"]').val());
    addTodo(formInput);
  },
});

// $(".alt-text-container").hover(
//   function () {
//     $(this).toggleClass(".alt-title-text2");
//   },
//   function () {
//     $(this).removeClass(".alt-title-text2");
//   }
// );

// let isVisible = true;
// // repeat with the interval of 5 seconds
// setInterval(() => {
//   if (isVisible === true) {
//     $("#alt-title-text1").animate({ opacity: 0 }, "fast", () => {
//       $("#alt-title-text1").hide();
//     });
//     isVisible = false;
//   } else {
//     $("#alt-title-text1").animate({ opacity: 1 }, "fast", () => {
//       $("#alt-title-text1").show();
//     });
//     isVisible = true;
//   }
// }, 15000);
// // Accurate
// let isVisible2 = false;
// // repeat with the interval of 5 seconds
// setTimeout(function () {
//   setInterval(() => {
//     if (isVisible2 === true) {
//       $("#alt-title-text2").animate({ opacity: 0 }, "fast", () => {
//         $("#alt-title-text2").hide();
//       });
//       isVisible2 = false;
//     } else {
//       $("#alt-title-text2").animate({ opacity: 1 }, "fast", () => {
//         $("#alt-title-text2").show();
//       });
//       isVisible2 = true;
//     }
//   }, 15000);
// }, 1000);
// // Effecient
// let isVisible3 = false;
// setTimeout(function () {
//   setInterval(() => {
//     if (isVisible3 === true) {
//       $("#alt-title-text3").animate({ opacity: 0 }, "fast", () => {
//         $("#alt-title-text3").hide();
//       });
//       isVisible3 = false;
//     } else {
//       $("#alt-title-text3").animate({ opacity: 1 }, "fast", () => {
//         $("#alt-title-text3").show();
//       });
//       isVisible3 = true;
//     }
//   }, 15000);
// }, 12000);
/*
// Fast
.style.display = "none";
.style.display = "inline";
let timerId = setInterval(() => {
  $("#alt-title-text1").animate({ opacity: 0 }, 2000, function () {
    $("#alt-title-text1").toggleClass("alt-title-text1");
  });
}, 2000);
timerId = setInterval(() => {
  $("#alt-title-text1").animate({ opacity: 1 }, 4000, function () {
    $("#alt-title-text1").toggleClass("alt-title-text1");
  });
}, 4000);

// Accurate
timerId = setInterval(() => {
  $("#alt-title-text2").animate({ opacity: 0 }, 3000, function () {
    $("#alt-title-text2").toggleClass("alt-title-text2");
  });
}, 5000);
timerId = setInterval(() => {
  $("#alt-title-text2").animate({ opacity: 1 }, 3000, function () {
    $("#alt-title-text2").toggleClass("alt-title-text2");
  });
}, 5000);

// Effecient
timerId = setInterval(() => {
  $("#alt-title-text3").animate({ opacity: 0 }, 4000, function () {
    $("#alt-title-text3").toggleClass("alt-title-text3");
  });
}, 4000);
timerId = setInterval(() => {
  $("#alt-title-text3").animate({ opacity: 1 }, 4000, function () {
    $("#alt-title-text3").toggleClass("alt-title-text3");
  });
}, 6000);
*/
