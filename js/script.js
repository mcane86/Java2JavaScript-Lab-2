" use strict ";

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };



  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var speak = "Nope";
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, elephant)");
      if(type.toLowerCase() == "dog") {
        speak = "Woof";
      } else if(type.toLowerCase() == "cat") {
        speak = "Meow";
      } else if(type.toLowerCase() == "elephant") {
        speak = "Fwomp!"
      } else {
        speak = "I have no idea what sound this animal makes.";
      }
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var textOut = type + " " + name + " " + speak + "<br />";
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
