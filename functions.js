///function example_append(event) {
///  $("#reacties").append($("#feedback").value);
///}

///let thirdForm = document.querySelector("#feedback-form");
///thirdForm.addEventListener("Submit", example_append);

function feedbackOplijsten(event) {
  ///event.preventDefault();
  let kritiek = document.querySelector("#feedback");
  let comments = document.querySelector("#reacties");
  let naam = document.querySelector("#naam");
  comments.innerHTML +=
    "<div class='reactie'> <b><u>" +
    naam.value +
    "</u>: " +
    kritiek.value +
    "</b></div>";
  comments.innerHTML += "<hr/>";
  ///console.log(kritiek.value);
  ///comments.append(<div> ${kritiek.value} </div>);
}

let formulier = document.querySelector("#feedback-form");
formulier.addEventListener("submit", feedbackOplijsten);

var form = document.getElementById("feedback-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("feedback-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      document.getElementById("feedback-form").reset();
    });
});

<script src="//cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>;
// Get all data
axios.get("https://sheetdb.io/api/v1/sc4bwl7mloob3").then((response) => {
  console.log(response.data);
});
