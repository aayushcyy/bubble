var hitVal;
var timer = 31;
var score = 0;
var interval;

function makeBubble() {
  var clutter = "";
  for (i = 0; i < 207; i++) {
    var rn;
    rn = Math.floor(Math.random() * 50);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".p-bottom").innerHTML = clutter;
}

function changeHit() {
  hitVal = Math.floor(Math.random() * 50);
  document.querySelector(".hit-val").textContent = hitVal;
}

function startTimer() {
  setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer-val").textContent = timer;
    } else {
      clearInterval(interval);
      document.querySelector(".p-bar").style.display = "none";
      document.querySelector(".p-bottom").style.display = "none";
      document.querySelector(".p-after").style.display = "flex";
      scoreBoard();
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector(".score-val").textContent = score;
}

//event bubbling

document.querySelector(".p-bottom").addEventListener("click", function (dets) {
  clickedValue = Number(dets.target.textContent);
  if (clickedValue === hitVal) {
    increaseScore();
    changeHit();
    makeBubble();
    var sound = document.getElementById("sound");
    sound.play().catch(function (error) {
      console.error("Failed to play sound:", error); // Debugging line
    });
  }
});

//display score on final window
function scoreBoard() {
  document.querySelector(".final-score").textContent = score;
}

//displaying name

makeBubble();
changeHit();
startTimer();
scoreBoard();
