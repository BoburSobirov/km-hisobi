const elSpeedForm = document.querySelector(".speed-form");

const elOnFoot = document.querySelector(".speed-form__on-foot");
const elBicycle = document.querySelector(".speed-form__bicycle");
const elCar = document.querySelector(".speed-form__car");
const elPlane = document.querySelector(".speed-form__plane");

elSpeedForm.addEventListener("submit", function(evt) {
evt.preventDefault();

const elInput = evt.target.elements.input;

const elInputValue = elInput.value;

elOnFoot.textContent = `On-foot:${Math.floor(elInputValue / 3.6)} hour`;
elBicycle.textContent = `Bicycle speed : ${Math.floor(elInputValue / 20.01)} hour`;
elCar.textContent = `Car speed : ${Math.floor(elInputValue / 70)} hour `;
elPlane.textContent = `Plane speed:${Math.floor(elInputValue / 800)} hour `;


elSpeedForm.reset();
})