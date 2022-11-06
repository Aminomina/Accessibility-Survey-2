let stars = document.getElementById("stars");
let lightDark = document.getElementById("light-dark-icon");

for (let i = 0; i < 5; i++) {
  stars.children[i].addEventListener("click", function () {
    starSelect(i);
  });
}

lightDark.addEventListener("click", lightDarkToggle);

function starSelect(starIndex) {
  for (let i = 0; i < 5; i++) {
    stars.children[i].src = "star.png";
  }
  for (let i = 0; i <= starIndex; i++) {
    stars.children[i].src = "star-select.png";
  }
}

function lightDarkToggle() {
  if (document.body.className == "light") {
    document.body.className = "dark";
    lightDark.children[0].src = "/icons/dark.png";
  } else {
    document.body.className = "light";
    lightDark.children[0].src = "/icons/light.png";
  }
}

function sendMail() {
  var link =
    "mailto:anlu2188@colorado.edu" +
    "?cc=anka4328@colorado.edu, injo6806@colorado.edu, kyan6528@colorado.edu" +
    "&subject=" +
    escape("User Testing Results") +
    "&body=" +
    escape(
      `Review Feedback:\n${
        document.getElementById("review-feedback").value
      }\n\nLight/Dark Feedback:\n${
        document.getElementById("light-dark-feedback").value
      }\n\nOverall Feedback:\n${
        document.getElementById("overall-feedback").value
      }`
    );
  window.location.href = link;
}
