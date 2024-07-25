let timer;
let countdown = 25 * 60; // 25 minutes in seconds 
let isRunning = false; // tracking if timer is running or not 

function startPauseTimer() {
    if (!isRunning) {
        //Start or resume the timer 
        isRunning = true;
        document.getElementById('start-pause-button').textContent = 'Pause';
        timer = setInterval(updateTimer, 1000); // repeatedly calls update Timer function with a fixed delay(1000ms = 1s)
    }

    else {
        //Pause the timer
        clearInterval(timer); //stops execution of setInterval function 
        isRunning = false; 
        document.getElementById('start-pause-button').textContent = 'Resume';
    }
}

function resetTimer() { 
    clearInterval(timer); //stops the setInterval function when clicked from winding clock 
    isRunning = false; 
    countdown = 25 * 60;
    displayTime();
    document.getElementById('start-pause-button').textContent = 'Start';

}

function updateTimer() {
    if (countdown > 0) {
        countdown--;
        displayTime();
    }

    else {
        clearInterval(timer);
        isRunning = false;
        countdown = 25 * 60;
        displayTime();
        document.getElementById('start-pause-button').textContent = 'Start';
    }
}

function displayTime() { 
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function playAudio(url) {
    new Audio(url).play(); //Audio constructor creates and returns a new HTMLAudioElement
}

window.onload = function() { 
    displayTime();
}