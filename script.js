// Counter variable
let counter = 0;

// Update counter display
function updateCounter() {
    document.getElementById("counter").textContent = counter;
}

function tickUp() {
    counter++;
    updateCounter();
}

function tickDown() {
    counter--;
    updateCounter();
}

function runForLoop() {

    let result = "";

    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}
