window.onload = function(){

	var alpha = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h',
        		'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        		't', 'u', 'v', 'w', 'x', 'y', 'z']};

    var categories;
    var chosenWord;
    var getHint;
    var word;
    var guess;
    var guesses = [];
    var lives;
    var counter;
    var space;

    var showLives = document.getElementByID("mylives");
    var showCategory = document.getElementByID("scategory");
    var getHint = document.getElementByID("hint");
    var showClue = document.getElementByID("clue");

//unordered list of the alphabet
    var buttons = function(){
    	myButtons = document.getElementByID('buttons');
    	letters = document.createElement('ul');

    	for (var i = 0; i<alpha.length; i++){
    		letters.id = 'alphabet';
    		list = document.createElement('li');
    		list.id = 'letter';
    		list.innerHTML = alphabet[i];
    		check();
    		myButtons.appendChild(letters);
    		letters.appendChild(list);

    	}//end loop
    }//end function

//ul of guesses with dashes
result = function (){
	wordHolder = document.getElementByID('hold');
	correct = document.createElement('ul');

	for(var i=0; i<word.length; i++){
		correct.setAttribute('id', 'my-word');
		guess = document.createElement('li');
		guess.setAttribute('class', 'guess');
		if (word[i] === "-"){
			guess.innerHTML = "-";
			space = 1;
		} else {
			guess.innerHTML = "_";
		}

		guesses.push(guess);
		wordHolder.appendChil(correct);
		correct.appendChild(guess);
	}
}//end function

//lives to show
comments = function() {
	showLives.innerHTML = "You have " + lives + " lives ";
	if (lives < 1){
		showLives.innerHTML = "Game Over";
	}

	for (var i =0; i < guesses.length; i++){
		if (counter + space === guesses.length){
			showLives.innerHTML = "You Win!";
		}//end if
	}//end for
}//end function

//Anmiate
var animate = function(){
	var drawMe = lives;
	drawArray[drawMe]();
}

//hangman draw
canvas = function(){
	myStickman = document.getElementByID("stickman");
	context = myStickman.getContext('2d');
	context.beginPath();
	context.strokeStyle = "#fff";
	context.lineWidth =2;
}

head = function(){
	myStickman = document.getElementByID("stickman");
	context = myStickman.getContext('2d');
	context.beginPath();
	context.arc(60, 25, 10, 0, Math.PI*2, true);
	context.stroke();
}

draw = function($pathFromx, $pathfromy, $pathTox, $pathToy){
	context.moveTo($pathFromx, $pathFromy);
	context.lineTo($pathTox, $pathToy);
	context.stroke();
}


frame1 = function(){
	draw(0, 150, 150, 150);
};

frame2 = function(){
	draw(10, 0, 10, 600);
};

frame3 = function(){
	draw(0, 5, 70, 5);
};

frame4 = function{
	draw (60, 5, 60, 15);
};

torso = function(){
	draw (60, 36, 60, 70);
};

rightArm = function(){
	draw (60, 46, 100, 50);
};

leftArm = function(){
	draw (60, 46, 20, 50);
};

rightLeg = function(){
	draw (60, 70, 100, 100);
};

leftLeg = function(){
	draw(0, 70, 20, 100);
};

drawArray = [rightLeg, leftLeg, rightArm, leftArm,  
			torso,  head, frame4, frame3, frame2, frame1]; 

//onclick function
check = function(){
	list.function(){
		var guess = (this.innerHTML);
		this.setAttribute("class", "active");
		this.onclick = null;
		for (var i = 0, i<word.length; i++){
			if(word[i] === guess){
				guesses[i].innerHTML = guess;
				counter += 1;
			}
		}
		var j = (word.indexOf(guess));
		if(j === -1){
			lives -= 1;
			comments();
			animate();
		}
		else{
			comments();
		}
	}

}

play = function(){
	chosenWord =["flipflop", "sun", "beach", "swim"];
	word = chosenWord[Math.floor(Math.random() * chosenWord.length)];
	word = word.replace(/\s/g, "-");
	console.log(word);
	buttons();

	guesses = [];
	lives = 10;
	counter = 0;
	space =0;
	result();
	comments();
	canvas();
}

play();

var catagoryIndex = categories.indexOf(chosenWord);





