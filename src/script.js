const checkbox = document.querySelector("#toggle");

function toggleDarkMode() {
  if (checkbox.checked) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
    let headlineText = document.getElementById("track-text");
    headlineText.setAttribute("data-colors", "DDA11D")
  } else {
    document.documentElement.classList.remove("dark");
    let headlineText = document.getElementById("track-text");
    headlineText.setAttribute("data-colors", "FFC300")
  }
}

checkbox.addEventListener("click", toggleDarkMode);

//   Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme')

$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
  if (localStorage.theme === "dark") {
    $("#toggle").prop("checked", true);
  }
});
