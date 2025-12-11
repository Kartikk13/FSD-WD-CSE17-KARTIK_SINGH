let timer = null;
let milliseconds = 0;
let lapCount = 1;
function updateDisplay() {
    let hrs = String(Math.floor(milliseconds / 3600000)).padStart(2, "0");
    let mins = String(Math.floor((milliseconds % 3600000) / 60000)).padStart(2, "0");
    let secs = String(Math.floor((milliseconds % 60000) / 1000)).padStart(2, "0");
    let ms = String(milliseconds % 1000).padStart(3, "0");
    document.getElementById("display").innerHTML = `${hrs}:${mins}:${secs}:${ms}`;
}
function startWatch() {
    if (timer !== null) return;
    timer = setInterval(() => {
        milliseconds += 10;
        updateDisplay();
    }, 10);
}
function stopWatch() {
    clearInterval(timer);
    timer = null;
}
function resetWatch() {
    stopWatch();
    milliseconds = 0;
    updateDisplay();
    document.getElementById("lapList").innerHTML = "";
    lapCount = 1;
}
function addLap() {
    if (milliseconds === 0) return;
    let lapTime = document.getElementById("display").innerHTML;
    let li = document.createElement("li");
    li.textContent = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById("lapList").appendChild(li);
    lapCount++;
}