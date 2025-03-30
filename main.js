document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("test").onclick = function () {
    alert("Hello world");
  };
});

$("#test").click(function () {
  alert("Hello world");
});

// Alternative jQuery approach

$(document).ready(function () {
  $("#test").click(function () {
    alert("Hello world");
  });
});

$(document).ready(function () {
  jq;
});
