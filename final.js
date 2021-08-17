
let loc = document.getElementById("location"); 

var sound = new Howl({
  src: ['sound/siren.mp3']
});


$('#alert').click(function textToAudio() { 

  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-IN";
  speech.text = "This is a Fire Alert.";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  
  window.speechSynthesis.speak(speech);
  sound.play();
});
$('#brake').click(function textToAudio() { 

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-IN";
    speech.text = "Brakes have failed. Please don't panic.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
    sound.play();
});
document.getElementById("yo").addEventListener("click", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;    
      const api = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=aee2dfe44fd34f0cb2cd555edb025d1a`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          loc.textContent = data.results[0].components.road + "," + data.results[0].components.city + "," + data.results[0].components.state;       
          document.getElementById("fo").addEventListener("click", textToAudio);
          function textToAudio() {

            let speech = new SpeechSynthesisUtterance();
            speech.lang = "en-IN";
            speech.text = "We have reached" + data.results[0].components.road + "," + data.results[0].components.city + "," + data.results[0].components.state + ". Doors are going to be opened soon. Be ready.";
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            
            window.speechSynthesis.speak(speech);
          }
          console.log(data.results[0].components.road + "," + data.results[0].components.city + "," + data.results[0].components.state);          
        });
    });
  }  
});
// $('#alert').click(function(){
//   document.getElementById("alert").addEventListener("click", textToAudio);
//   function textToAudio() {

//     let speech = new SpeechSynthesisUtterance();
//     speech.lang = "en-US";
//     speech.text = "This is a Fire Alert.";
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
  
//   window.speechSynthesis.speak(speech);
//   }
// });
// $('#alert').click(function(){  
//   document.getElementById("brake").addEventListener("click", textToAudio);
//   function textToAudio() {

//     let speech = new SpeechSynthesisUtterance();
//     speech.lang = "en-US";
//     speech.text = "Brakes have failed. Please don't panic.";
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
    
//     window.speechSynthesis.speak(speech);
//   } 
// });

