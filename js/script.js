
const form = document.querySelector("form");
const errorsList = document.querySelector("#errors");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  // prevent page refresh
  event.preventDefault();
  
  // clear out any previous errors
  errorsList.innerHTML = "";
  
  // validate first name
  let firstName = document.querySelector("#first-name").value;
  if (firstName.length < 2) {
    // create separate function to add `li` element to `errors` ul - shortens the code
    addError("First name must be at least 2 characters");
  }
  
  // validate last name
  let lastName = document.querySelector("#last-name").value;
  if (lastName.length < 2) {
    addError("Last name must be at least 2 characters");
  }
  
  
function addError(error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}