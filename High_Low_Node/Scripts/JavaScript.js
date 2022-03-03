var credit = 0;
console.log(credit);
var numCard1;


function DEPOSIT() {
	var deposit = document.getElementById('a').value;

	credit = credit + parseFloat(deposit);

	document.getElementById("story").innerHTML = "You have $" + credit + " in your account.";
}


function DEAL() {

	numCard1 = Math.floor(Math.random() * 11) + 1;
	document.getElementById("rnc").innerHTML = numCard1;
	console.log(numCard1);
	numCard2 = "?";
	document.getElementById("rnc2").innerHTML = numCard2;
	return numCard1;



}



//Logic works I just need to find a way for the user to 
//pick the value of the stake.
function LOWER() {
	var stake = 10;
	if (credit < stake || credit <= 0) {
		alert("you have insufficient funds. Deposit cedits to continue.")
	} else {
		// access numcard1 from DEAL()
		var numCard2 = Math.floor(Math.random() * 11) + 1;
		var guess = "Lower";
		var result;
		var gameresult;


		if (numCard1 > numCard2) {
			console.log("Higher");
			result = "Higher";
			if (guess == result) {
				gameresult = "You Win!";
				console.log("You win!");
				credit += stake;
				console.log(credit);
			} else {
				gameresult = "You Lose!";
				console.log("You Lose");
				credit -= stake;
				console.log(credit);
			}

		} else if (numCard1 < numCard2) {
			console.log("Lower");
			result = "Lower";
			if (guess == result) {
				gameresult = "You Win!";
				console.log("You win!");
				credit += stake;
				console.log(credit);
			} else {
				gameresult = "You Lose!";
				console.log("You Lose");
				credit -= stake;
				console.log(credit);
			}
		} else {
			console.log("Even");
			result = "Even";
			if (guess == result) {
				gameresult = "You Win!";
				console.log("You win!");
				credit += stake;
				console.log(credit);
			} else {
				gameresult = "You Lose!";
				console.log("You Lose");
				credit -= stake;
				console.log(credit);
			}
		}
		document.getElementById("story").innerHTML = "You have $" + credit + " in your account.";
		document.getElementById("status").innerHTML = result;
		document.getElementById("status2").innerHTML = gameresult;;
		document.getElementById("rnc2").innerHTML = numCard2;
	}
}


function EVEN() {
	var stake = 10;

	if (credit < stake || credit <= 0) {
		alert("you have insufficient funds. Deposit cedits to continue.")
	} else {

		var numCard2 = Math.floor(Math.random() * 11) + 1;
		var guess = "Even";
		var result;
		var gameresult;

		if (numCard1 > numCard2) {
			console.log("Higher");
			result = "Higher";
			if (guess == result) {
				gameresult = "You Win!";
				console.log("You win!");
				credit += stake;
				console.log(credit);
			} else {
				gameresult = "You Lose!";
				console.log("You Lose");
				credit -= stake;
				console.log(credit);
			}

		} else if (numCard1 < numCard2) {
			console.log("Lower");
			result = "Lower";
			if (guess == result) {
				gameresult = "You Win!";
				console.log("You win!");
				credit += stake;
				console.log(credit);
			} else {
				gameresult = "You Lose!";
				console.log("You Lose");
				credit -= stake;
				console.log(credit);
			}
		} else {
			console.log("Even");
			result = "Even";
			if (guess == result) {
				gameresult = "You Win!";
				console.log("You win!");
				credit += stake;
				console.log(credit);
			} else {
				gameresult = "You Lose!";
				console.log("You Lose");
				credit -= stake;
				console.log(credit);
			}
		}
		document.getElementById("story").innerHTML = "You have $" + credit + " in your account.";
		document.getElementById("status").innerHTML = result;
		document.getElementById("status2").innerHTML = gameresult;
		document.getElementById("rnc2").innerHTML = numCard2;
	}
}

function HIGHER() {
	var stake = 10;

	if (credit < stake || credit <= 0) {
		alert("you have insufficient funds. Deposit cedits to continue.")
	} else {
		var numCard2 = Math.floor(Math.random() * 11) + 1;
		var guess = "Higher";
		var result;
		var gameresult;

		if (numCard1 > numCard2) {
			console.log("Higher");
			result = "Higher";
			if (guess == result) {
				gameresult = "You Win!";
				console.log("You win!");
				credit += stake;
				console.log(credit);
			} else {
				gameresult = "You Lose!";
				console.log("You Lose");
				credit -= stake;
				console.log(credit);
			}

		} else if (numCard1 < numCard2) {
			console.log("Lower");
			result = "Lower";
			if (guess == result) {
				gameresult = "You Win!";
				console.log("You win!");
				credit += stake;
				console.log(credit);
			} else {
				gameresult = "You Lose!";
				console.log("You Lose");
				credit -= stake;
				console.log(credit);
			}
		} else {
			console.log("Even");
			result = "Even";
			if (guess == result) {
				gameresult = "You Win!";
				console.log("You win!");
				credit += stake;
				console.log(credit);
			} else {
				gameresult = "You Lose!";
				console.log("You Lose");
				credit -= stake;
				console.log(credit);
			}
		}
		document.getElementById("story").innerHTML = "You have $" + credit + " in your account.";
		document.getElementById("status").innerHTML = result;
		document.getElementById("status2").innerHTML = gameresult;
		document.getElementById("rnc2").innerHTML = numCard2;
	}
}

