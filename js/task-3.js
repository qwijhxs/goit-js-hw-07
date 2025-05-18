"use strict";


const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", () => {
    const nameOutput = document.querySelector("#name-output");

    nameInput.value !== "" ? nameOutput.textContent = nameInput.value : nameOutput.textContent = "Anonymous";
});