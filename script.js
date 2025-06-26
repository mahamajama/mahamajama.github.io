

const messageButton = document.getElementById("message-button");
const message = document.getElementById("message");

function init() {
	message.innerHTML = currentMessage;
}



/* SOUND FX */

function sound(src) {   //sound constructor via: https://www.w3schools.com/graphics/game_sound.asp
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	this.sound.volume = 0.6;
	document.body.appendChild(this.sound);
	this.play = function(){
		this.sound.play();
	}
	this.stop = function(){
		this.sound.pause();
	}
}




// MY NAME FUNCTIONS

const letterContainers = [...document.getElementsByClassName("letter-container")];
const blipSound = new sound("sounds/supersmashbros_dot.wav");

letterContainers.forEach(function(letter) {
	letter.onclick = function() {
		let delay = 20;
		let step = 2;
		let previousColor;
			
		function getRandomColor() {
			
			let randomColor;
			let n = Math.floor(Math.random()*6);
				
			switch(n) {
				case 0:
					randomColor = "red";
					break;
				case 1:
					randomColor = "green";
					break;
				case 2:
					randomColor = "blue";
					break;
				case 3:
					randomColor = "cyan";
					break;
				case 4:
					randomColor = "magenta";
					break;
				case 5:
					randomColor = "yellow";
					break;
			}
			return randomColor;
		}
			
		function changeColor () {
			
			let randomColor = getRandomColor();
			if (randomColor === previousColor) {
				randomColor = getRandomColor();
			}
			
			letter.style.color = randomColor;
			previousColor = randomColor;
			delay *= 1.25;
			
			blipSound.play();
			
			if (delay < 800) {
				setTimeout(function(){changeColor();}, delay);
			}
		}
		changeColor();
	}
});





// MESSAGE BLASTER

messageButton.addEventListener("click", function(e) {
	generateNewMessage();
});

let messages = [ `We dont just sell websites, we create websites that SELL.`,
				`The true ENTREPRENEUR is a risk taker, not an excuse maker.`,
				`Website without visitors is like a ship lost in the horizon.`,
				`Code is read more than it is written.`,
				`Web development is difficult, only then it is fun to do.`,
				`Akaal Websoft is an emerging and credible software company in Mohali, Amritsar.`,
				`Strengthen your business presence with digital marketing to receive optimum brand reach.`,
				`For every pixel-perfect moment, theres a web developer behind it.`,
				`From startups to big corporates, Imenso offers everything that needs to build world-class applications.`,
				`Experience growth and efficiency with top talent. We offer skilled and hand-vetted IT professionals tailored to your specific requirements.`,
				];
let currentMessage = `Websites are cool.`;

function generateNewMessage() {
	const index = Math.floor(Math.random() * messages.length);
	message.innerHTML = messages[index];
	
	const tempString = messages[index];
	let dump = messages.splice(index, 1);
	messages.push(currentMessage);
	
	currentMessage = tempString;
}

init();



