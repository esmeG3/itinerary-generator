function generateItinerary(event) {
event.preventDefault();

new Typewriter("#travel-itinerary", {
  strings: `Day one, it will be worth exploring....`,
  autoStart: true,
  curser: null,
  delay: 1,
});

}


let travelFormElement = document.querySelector(".travel-generator-form")
travelFormElement.addEventListener("submit", generateItinerary)