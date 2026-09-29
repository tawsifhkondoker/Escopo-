const door = document.getElementById("door");
const desk = document.getElementById("desk");
const message = document.getElementById("message");

door.addEventListener("click", function() {
    message.textContent = "The door is locked, find a way to unlock it.";
});

desk.addEventListener("click", function() {
    message.textContent = " Something is under the desk.";
});

