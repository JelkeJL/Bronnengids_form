///function example_append(event) {
///  $("#reacties").append($("#feedback").value);
///}

///let thirdForm = document.querySelector("#feedback-form");
///thirdForm.addEventListener("Submit", example_append);

function feedbackOplijsten(event) {
  event.preventDefault();
  let kritiek = document.querySelector("#feedback");
  let comments = document.querySelector("#reacties");
  let naam = document.querySelector("#naam");
  comments.innerHTML +=
    "<div class='reactie'> <b>" +
    naam.value +
    "</b>: " +
    kritiek.value +
    "</div>";
  comments.innerHTML += "<hr/>";
  ///console.log(kritiek.value);
  ///comments.append(<div> ${kritiek.value} </div>);
}

let formulier = document.querySelector("#feedback-form");
formulier.addEventListener("submit", feedbackOplijsten);
