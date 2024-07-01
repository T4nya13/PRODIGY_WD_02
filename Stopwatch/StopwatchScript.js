let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');
let display = document.getElementById('display');

let timer;
let running = false;
let elapsed = 0;

function updateDisplay() {
    let hours = Math.floor(elapsed / 3600);
    let minutes = Math.floor((elapsed % 3600) / 60);
    let seconds = elapsed % 60;

    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStop() {
    if (running) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(() => {
            elapsed++;
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = 'Stop';
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    running = false;
    elapsed = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
