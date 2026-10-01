const door = document.getElementById("door");
const desk = document.getElementById("desk");
const message = document.getElementById("message");
const box = document.getElementById("box");
const codeInput = document.getElementById("codeInput");
const unlockButton = document.getElementById("unlockButton");
const photo = document.getElementById("photo");
const clock = document.getElementById("clock");
const compartment = document.getElementById("compartment");
const key = document.getElementById("key");
const restartButton = document.getElementById("restartButton");
let photoFound = false;
let clockChecked = false;
let activeLock = "box";

door.addEventListener("click", function() {
    message.textContent = "The door is locked, find a way to unlock it.";
});

desk.addEventListener("click", function() {

    if (photoFound === true && clockChecked === true) {
        message.textContent = "There is a scratched code under the desk: 23 : 11 : 36";
        compartment.style.display = "block";
    } else if (photoFound === true) {
        message.textContent = "Something has changed. There is a small mark underneath the desk.";
    } else {
        message.textContent = "There is a note under the desk. It says: 48 - 27 - 65";
    }

});

box.addEventListener("click", function(event) {
if (event.target === codeInput || event.target === unlockButton || event.target === photo) {
    return;
}
    message.textContent = "The box is locked. It seems to require a code to open it."; 
    codeInput.style.display = "block"; 
    unlockButton.style.display = "block";
});

unlockButton.addEventListener("click", function() {
    const code = codeInput.value;
    if (activeLock === "box" && code === "16-09-25") {
        message.textContent = "The box is unlocked!";
        photo.style.display = "block";
    } else if (activeLock === "compartment" && code === "23-11-36") {
        message.textContent = "The compartment is unlocked!";
        key.style.display = "block";
    } else {
        message.textContent = "Incorrect code. Try again.";
    }
});

codeInput.addEventListener("input", function() {
    let code = codeInput.value.replace(/\D/g, '');
    if (code.length > 2) {
        code = code.slice(0, 2) + '-' + code.slice(2);
    }
    if (code.length > 5) {
        code = code.slice(0, 5) + '-' + code.slice(5);
    }
    codeInput.value = code;
});

photo.addEventListener("click", function(event) {
    photoFound = true;
    event.stopPropagation();
    message.textContent = "The back of the photograph says: 23 minutes. That's all it says.";

});

clock.addEventListener("click", function() {

    if (photoFound === true) {
        clockChecked = true;
        message.textContent = "23 minutes. The clock hasn't moved.";
    } else {
        message.textContent = "The clock is frozen at 11:59.";
    }

});

compartment.addEventListener("click", function() {

    message.textContent = "The compartment is locked. It requires a code.";
    activeLock = "compartment";

    codeInput.style.display = "block";
    unlockButton.style.display = "block";

});

key.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", "key");
});

door.addEventListener("dragover", function(event) {
    event.preventDefault();
});

door.addEventListener("drop", function(event) {
    const item = event.dataTransfer.getData("text/plain");

    if (item === "key") {
        message.textContent = "The door is unlocked!";
        door.style.transform = "scaleX(0.1)";
        door.style.transformOrigin = "left";
        key.style.display = "none";
        setTimeout(function() {
            document.querySelector(".game").style.display = "none";
            document.getElementById("endingScreen").style.display = "block";
        }, 1000);
    }
});
restartButton.addEventListener("click", function() {
    location.reload();
});
