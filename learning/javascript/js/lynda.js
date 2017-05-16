// var a = 10;
// // function isZero() {
// // 	return (a > 0) ? "a  > than 0" : (a < 0) ? "a < 0" : 0;
// // }; // это же можно зщаписать и через if
// function isZero() {
// 	if (a > 0) {
// 		return "a > 0"
// 	} else if (a < 0) {
// 		return "a < 0"
// 	} else {
// 		return 0
// 	}
// };
// console.log(isZero());
// for (var i = 10; i > 0; i--) {
// 	if (i === 5) {
// 		continue;http://brainfag.com/dvzine/TheDvorakZine.pdf
// 	}
// 	console.log(i)
// };

// function newUser(name, date, interest) {
// 	function dob() {
// 		return 2017 - date;
// 	};
// 	return "Hello, " + name + " you are " + dob() + " old. " + "your interest is: " + interest;
// };

// console.log(newUser("Anubic", 1992, "love"));
// var multipleValues = [10, 20, 30, 40, 50];
// console.log(multipleValues);
// console.log(multipleValues.reverse());
// var myArrayOfLinks = document.getElementsByTagName("li");
// console.log(myArrayOfLinks);
// var x = 2.6;
// var y = Math.log(x);
// console.log(y);
// var phase = "Lorem ipsum dolor sit amet.";
// var words = phase.split(" ");
// console.log(words);
// var position = phase.indexOf("dd");
// console.log(position);
// var myDay = new Date(2000,0,1);
// var nextDay = new Date(2000,0,1);
// var player1 = {name: "fred", rank: 1, score: 1000};
// var player2 = {name: "jon", rank: 2, score: 9000};
// function playerDetails() {
// 	// display info about player
// 	console.log(this.name + " has a rank of: " 
// 	+ this.rank + " and a score of " + this.score);
// }

// player1.logDetails = playerDetails;
// player2.logDetails = playerDetails;

// player1.logDetails();
// player2.logDetails();

// var emailField = document.getElementById("email");

// emailField.onfocus = function() {
// 	if (emailField.value == "your email") {
// 		emailField.value = "";
// 	}
// };

// emailField.onblur = function() {
// 	if (emailField.value == "") {
// 		emailField.value = "your email";
// 	}
// };
// var myArray = ["one", "two", "thre"];
// console.log(myArray.reverse());

function prepareEventHandlers() {
	document.getElementById("form").onsubmit = function() {
		if (document.getElementById("email").value == "") {
			document.getElementById("error").innerHTML = "please provide email";
			return false;
		} else {
			document.getElementById("error").innerHTML = "";
			return true;
		}
	};
};

function preparePage() {
	document.getElementById("check").onclick = function() {
		if (document.getElementById("check").checked) {
			document.getElementById("tourSel").style.display = "block";
		} else {
			document.getElementById("tourSel").style.display = "none";
		}
	};
	document.getElementById("tourSel").style.display = "none";
}

// var curentPos = 0;
// var eventHandle;

// function beginAnimate() {
// 	document.getElementsByClassName("animate")[0].style.position = "absolute";
// 	document.getElementsByClassName("animate")[0].style.left = "0px";
// 	document.getElementsByClassName("animate")[0].style.top = "50px";
// 	eventHandle = setInterval(animateBox, 50);
// }

// function animateBox() {
// 	curentPos+=2;
// 	document.getElementsByClassName("animate")[0].style.left = curentPos + "px";
// 	if (curentPos > 900) {
// 		clearInterval(eventHandle);
// 		document.getElementsByClassName("animate")[0].style.position = "";
// 		document.getElementsByClassName("animate")[0].style.left = "";
// 		document.getElementsByClassName("animate")[0].style.top = "";
// 	}
// };

// window.onload = function() {
// 	prepareEventHandlers();
// 	preparePage();
// 	setTimeout(beginAnimate, 5000);
// };

// $(document).ready(function() {
// 	$(".animate").click(function() {
// 		$(".animate p").toggle();
// 	});
// });

// var myRequest = new XMLHttpRequest();

// myRequest.onreadystatechange = function(){
// 	console.log("we are called");
// 	console.log(myRequest.readyState);
// 	if (myRequest.readyState === 4) {
// 		var p = document.createElement("p");
// 		var t = document.createTextNode(myRequest.responseText);
// 		p.appendChild(t);
// 		document.getElementsByClassName("mainContent")[0].appendChild(p);
// 	}
// };

// myRequest.open('GET', 'simple.txt', true);
// myRequest.send(null);

function Car(m, s, r) {
	this.mark = m;
	this.score = s;
	this.rank = r;
}

Car.prototype.CarInfo = function() {
	console.log("This car is ", this.mark);
}

Car.prototype.promote = function () {
	this.rank+=2;
	console.log("New rank fo this car", this.rank);
}

var audi = new Car("audi",10000,5);
audi.CarInfo();
audi.promote();
var mers = new Car("mers",50,6);
mers.CarInfo();
mers.promote();