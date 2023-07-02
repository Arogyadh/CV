$(document).ready(function () {
  $(".top-dog, .bottom-dog").addClass("bounce-dog");
  $(".text-element").hover(
    function () {
      $(this).addClass("bounce-text");
    },
    function () {
      $(this).removeClass("bounce-text");
    }
  );
});
