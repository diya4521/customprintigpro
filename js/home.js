$(document).ready(function () {
  $(".mugs").hide();
  $(".Mugs").addClass("mcolor");
  $(".Tshirt").removeClass("tcolor");

  $(".Mugs").click(function () {
    $(".mugs").show();
    $(".tshirts").hide();
    $(".Tshirt").addClass("tcolor");
    $(".Mugs").removeClass("mcolor");
  });

  $(".Tshirt").click(function () {
    $(".tshirts").show();
    $(".mugs").hide();
    $(".Mugs").addClass("mcolor");
    $(".Tshirt").removeClass("tcolor");
  });
});
