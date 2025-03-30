$(document).ready(function () {
  $("#menu-toggle").click(function (e) {
    e.preventDefault();

    $("#side-nav").fadeTo(1000, 0.5, function () {
      alert("Hi there");
    });
  });
});
