// init quiz


var init = () => {

//assign controls
document.querySelector('.score-btn').addEventListener('click', calcScore);
document.querySelector('.start-btn').addEventListener('click', init);

//reset UI
//reset checked inputs to unchecked
resetDisplay();   

//reset scoreboard
let scoreboard = document.getElementById("scoreboard");
while (scoreboard.firstChild) {
  scoreboard.removeChild(scoreboard.firstChild);
}

};





// calculate score
var calcScore = () => {
    var scoreboard = document.getElementById('scoreboard');
   if (!scoreboard.firstChild) {
    // If scoreboard div DOESNT have a child
    //set score date
    var total = 5;
    var correct = 0;

    // iterate over choices "INPUT" 
    //adding correct inputs w/ value "1" parseInt to correct
    var choices = document.getElementsByTagName('input');


    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
                var k = parseInt(choices[i].value);
                correct += k;
               
        }
    }

    //calc score  
    var score = ((correct / total) *50);

    // update UI with score
    console.log("You got " + correct +" correct. With a score of " + score);
    var node = document.createElement("H1");
    var textnode = document.createTextNode("You got " + correct +" correct. With a score of " + score);
    node.appendChild(textnode);
  

    document.getElementById("scoreboard").appendChild(node);




    updateUIDisplay();

}
// otherwise button does nothing 
};


// update UI
var updateUIDisplay = () => {
   var choices = document.getElementsByTagName('input');
           for (var j = 0; j < choices.length; j++) {
                if (choices[j].checked) {
                    if(choices[j].value === "1") {
                       choices[j].nextElementSibling.classList.add('right');
                                           
                    } else if(choices[j].value === "0") {
                        choices[j].nextElementSibling.classList.add('wrong');   
                   }
               
                }   

            }
    

};
   



var resetDisplay = () => {
    var choices = document.getElementsByTagName('input');
           for (var j = 0; j < choices.length; j++) {
                    if(choices[j].value === "1") {
                       choices[j].nextElementSibling.classList.remove('right');
                                           
                    } else if(choices[j].value === "0") {
                        choices[j].nextElementSibling.classList.remove('wrong');   
                    }
                    choices[j].checked = false;    
                  

            }
};

init();




/*
var answersOne = document.getElementsByName("answers[1]");




for (var i = 0; i < answersOne.length; i++) {
    if (answersOne[i].checked) {
        console.log("radioButton " + i + ": " + answersOne[i].value);
    }
}



*/
