/* eslint-disable */
import "bootstrap";
import "./style.css";

let form = document.getElementById("form");
let card = document.getElementById("card");
let cvc = document.getElementById("cvc");
let amount = document.getElementById("amount");
let name = document.getElementById("name");
let lastn = document.getElementById("lastn");
let city = document.getElementById("city");
let states = document.getElementById("states");
let postal = document.getElementById("postal");
let textBox = document.getElementById("textBox");
let alerta = document.getElementById("alert");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (card.value === "") {
    card.classList.add("is-invalid");
    alerta.classList.remove("d-none");
  } else {
    alerta.classList.add("d-none");
    card.classList.remove("is-invalid");
  }

  if (cvc.value === "") {
    cvc.classList.add("is-invalid");
    alerta.classList.remove("d-none");
  } else {
    cvc.classList.remove("is-invalid");
    alerta.classList.add("d-none");
  }

  if (amount.value === "") {
    amount.classList.add("is-invalid");
    alerta.classList.remove("d-none");
  } else {
    alerta.classList.add("d-none");
    amount.classList.remove("is-invalid");
  }

  if (name.value === "") {
    name.classList.add("is-invalid");
    alerta.classList.remove("d-none");
  } else {
    alerta.classList.add("d-none");
    name.classList.remove("is-invalid");
  }

  if (lastn.value === "") {
    lastn.classList.add("is-invalid");
    alerta.classList.remove("d-none");
  } else {
    lastn.classList.remove("is-invalid");
    alerta.classList.add("d-none");
  }

  if (city.value === "") {
    city.classList.add("is-invalid");
    alerta.classList.remove("d-none");
  } else {
    alerta.classList.add("d-none");
    city.classList.remove("is-invalid");
  }

  if (states.value === "") {
    states.classList.add("is-invalid");
    alerta.classList.remove("d-none");
  } else {
    alerta.classList.add("d-none");
    states.classList.remove("is-invalid");
  }

  if (postal.value === "") {
    postal.classList.add("is-invalid");
    alerta.classList.remove("d-none");
  } else {
    alerta.classList.add("d-none");
    postal.classList.remove("is-invalid");
  }

  if (textBox.value === "") {
    textBox.classList.add("is-invalid");
    alerta.classList.remove("d-none");
  } else {
    alerta.classList.add("d-none");
    textBox.classList.remove("is-invalid");
  }
});
