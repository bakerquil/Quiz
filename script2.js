var submitButton = document.getElementById("sub");

renderLastRegistered();

function renderLastRegistered() {
  var name = localStorage.getItem("name");
  var score = localStorage.getItem("score");

  if (!name) {
    return;
  }
  var para = document.querySelector("p");
  para.textContent = name + "  " + score;
}


submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;

  localStorage.setItem("name", name);
  renderLastRegistered();
});
var clearOnClick = document.getElementById("clear");

clearOnClick.addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "finish.html";
});
