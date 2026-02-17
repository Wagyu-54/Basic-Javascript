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
/*  Repetition with Condition */

function showOddNumbers() {

    let result = "";

    for (let i = 1; i <= counter; i++) {

        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}

/*  Arrays */

function addMultiplesToArray() {

    let arr = [];

    if (counter >= 5) {

        for (let i = counter; i >= 5; i--) {

            if (i % 5 === 0) {
                arr.push(i);
            }
        }
    }

    // Print array to console
    console.log(arr);
}
