let buttonColours = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickPattern = []
let started = false;
let level = 0;

$(document).keypress((e) => {
	if (e.key === 'y') {
		if (!started) {
			$('#level-title').text('Level ' + level);
			$('.score').hide();
			$('.container').show();
			started = true;
			nextSequence();
		}
	}

});

$('.btn').click(function (e) {
	var userChosenColour = e.target.id;
	userClickPattern.push(userChosenColour);

	playSound(userChosenColour);
	animatePress(userChosenColour);

	checkAnswer(userClickPattern.length - 1);
});

$(document).keypress(function (e) {
	key_press(e.key)
})


function key_press(key) {
	switch (key) {
		case 'a':
			var userChosenColour = "green";
			userClickPattern.push(userChosenColour);

			playSound(userChosenColour);
			animatePress(userChosenColour);

			checkAnswer(userClickPattern.length - 1);
			break;
		case 's':
			var userChosenColour = "red";
			userClickPattern.push(userChosenColour);

			playSound(userChosenColour);
			animatePress(userChosenColour);

			checkAnswer(userClickPattern.length - 1);
			break;
		case 'j':
			var userChosenColour = "yellow";
			userClickPattern.push(userChosenColour);

			playSound(userChosenColour);
			animatePress(userChosenColour);

			checkAnswer(userClickPattern.length - 1);
			break;
		case 'k':
			var userChosenColour = "blue";
			userClickPattern.push(userChosenColour);

			playSound(userChosenColour);
			animatePress(userChosenColour);

			checkAnswer(userClickPattern.length - 1);
			break;

		default:
			break;
	}
}

function checkAnswer(currntlevel) {
	if (gamePattern[currntlevel] === userClickPattern[currntlevel]) {
		if (userClickPattern.length === gamePattern.length) {
			setTimeout(() => {
				nextSequence();
			}, 1000);
		}
	}
	else {
		playSound('wrong');
		$('body').addClass('game-over');
		$('.container').hide();
		$('#level-title').text("Game over, Press any Y to Restart");
		$('.score').show().text('You Scored ' + level + ' points');

		setTimeout(() => {
			$('body').removeClass('game-over');
		}, 200);
		startOver();
	}

}

function nextSequence() {
	userClickPattern = [];
	level++;
	$('#level-title').text('level ' + level);
	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColor = buttonColours[randomNumber]
	gamePattern.push(randomChosenColor);

	$('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColor);
}

function animatePress(currentColor) {
	$('#' + currentColor).addClass('pressed');
	setTimeout(() => {
		$('#' + currentColor).removeClass('pressed');
	}, 100);
}

function playSound(color) {
	let audio = new Audio('./sounds/' + color + ".mp3")
	audio.play()
}

function startOver(params) {
	level = 0;
	gamePattern = [];
	started = false;
}