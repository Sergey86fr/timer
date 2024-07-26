let second = 0;
let timerId;

function updateTimerDisplay () {
    document.getElementById("timer").innerText = `${second} секунд`;
}

function startTimer () {
    if(!timerId) {
        timerId = setInterval(() => {
            second++
            updateTimerDisplay()
        },1000)
    }
}
function stopTimer () {
    clearInterval(timerId);
    timerId = null;
}
function resetTimer () {
    stopTimer();
    second = 0;
    updateTimerDisplay();
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);