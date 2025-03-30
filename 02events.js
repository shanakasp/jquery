$("#test").click(function () {
  $(this).hide();
});

$("#test").mouseout(function () {
  $(this).hide();
});

$("#test").mouseover(function () {
  $(this).hide();
});

var menuTrigger = false;
console.log(menuTrigger);

$("#test").keypress(function (e) {
  if (e.which == 13) {
    if (menuTrigger == false) {
      $("nav").fadeIn(500);
      menuTrigger = true;
    } else if (menuTrigger === true) {
      $("nav").fadeout(500);
      menuTrigger == false;
    }
  }
});
