const door = document.getElementById("door");
const desk = document.getElementById("desk");
const message = document.getElementById("message");
const box = document.getElementById("box");
const codeInput = document.getElementById("codeInput");
const unlockButton = document.getElementById("unlockButton");
const photo = document.getElementById("photo");

door.addEventListener("click", function() {
    message.textContent = "The door is locked, find a way to unlock it.";
});

desk.addEventListener("click", function() {
    message.textContent = "There is a note under the desk. It says: 48 - 27 - 65";
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
    if (code === "16-09-25") {
        message.textContent = "The box is unlocked!";
        photo.style.display = "block";
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


