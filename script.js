function makeBubbles() {
    var bubbles = "";
    for (var i = 1; i <= 216; i++) {
        var randomNumber = Math.floor(Math.random() * 10)
        bubbles += `<div class="bubble">${randomNumber}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = bubbles;
}

function runTimer() {
    var timer = 60;
    var timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else {
            clearInterval(timerInterval);
            var end = document.querySelector(".pbtm")
            end.innerHTML = `<h1>GAME OVER</h1>`;
            end.style.justifyContent = "center";
            end.style.alignItems = "center";
            end.style.position = "relative";
            end.style.top = "32%";

        }
    }, 1000)

}
var hit = 0;
function getNewHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = hit;
}
 var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}
document.querySelector(".pbtm").addEventListener("click", function (details) {
    var clickedNumber = Number(details.target.textContent);
    if (clickedNumber === hit) {
        increaseScore();
        makeBubbles();
        getNewHit();
    }

})

makeBubbles();
runTimer();
getNewHit();
