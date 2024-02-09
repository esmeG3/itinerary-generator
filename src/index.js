
function displayItinerary(responce) {

    new Typewriter("#travel-itinerary", {
      strings: responce.data.answer,
      autoStart: true,
      curser: null,
      delay: 1,
    });

}

function generateItinerary(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "982865b6c020427a6364ef4b31o6dt0f";
  let prompt = `Create a three day, basic travel itinerary about ${userInput.value}` ;
  let context = `You are a helpful and well travelled AI itinerary generator.
  Begin on Day one, DO NOT INCLUDE A TITLE. 
  Write in HTML, no headings. 
  Make each day appear in strong format. 
  Include a LineBreak after each day e.g. "Day one: 
  (LineBreak)
  Day Two:"
  Write 150 words per day maximum.
  Be precise and to the point.
  Sign at the very end in strong " - AI Travel Bot 🤖"`;
 
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  console.log("creating itinerary");
  console.log(`prompt is ${prompt}`);

  axios.get(apiUrl).then(displayItinerary);
}

let travelFormElement = document.querySelector(".travel-generator-form");
travelFormElement.addEventListener("submit", generateItinerary);
