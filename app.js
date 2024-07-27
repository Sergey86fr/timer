let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timerId = null;

// function updateTimerDisplay() {
//     [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0]
//     // document.getElementById("timer").innerHTML = `${h} : ${m} : ${s} : ${ms}`;
// }

function startTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
        timerId = setInterval(() => {

            displayTimer();
            // updateTimerDisplay();
        }, 10)
    }
function stopTimer() {
    clearInterval(timerId);
   
}
function resetTimer() {
    stopTimer();
    [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
    document.getElementById("timer").innerHTML = "00 : 00 : 00 : 000";
}

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes ++;
            if(minutes == 60) {
                minutes = 0;
                hours ++;
            }
        } 
    }
    
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    document.getElementById("timer").innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}


document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);