var playerName = document.querySelector("#player-name");

function inputChecker() {
  document
    .querySelector("#start-btn")
    .addEventListener("click", function (event) {
      var playerNameTrimmed = playerName.value.trim();
      if (playerNameTrimmed === "") {
        document.querySelector(".naam-bata").style.display = "block";
        event.preventDefault();
      } else {
        playerName.value = "";
      }
    });
}

setTimeout(() => {
  document.querySelector(".underwear").style.display = "none";
  document.querySelector(".sorry").style.display = "block";
}, 2800);

inputChecker();
