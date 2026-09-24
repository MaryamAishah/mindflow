const tryButton = document.getElementById("tryButton");
const getStartedButton = document.getElementById("getStartedButton");

function scrollToFeatures() {
  const features = document.querySelector(".features");

  if (features) {
    features.scrollIntoView({
      behavior: "smooth"
    });
  }
}

if (tryButton) {
  tryButton.addEventListener("click", scrollToFeatures);
}

if (getStartedButton) {
  getStartedButton.addEventListener("click", scrollToFeatures);
}

const features = document.querySelectorAll(".feature");

features.forEach((feature) => {
  feature.addEventListener("click", () => {
    feature.classList.toggle("selected");
  });
});