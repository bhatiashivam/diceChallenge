// method 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var pathLeft = "images/dice" + randomNumber1 + ".png";
var pathRight = "images/dice" + randomNumber2 + ".png";

document.querySelector(".imageLeft").src = pathLeft;
document.querySelector(".imageRight").src = pathRight;

// 2 other ways of querySelectors and setting attributes
// document.querySelectorAll("img")[0].src
// document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1)

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "h Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 wins";
} else {
  document.querySelector("h1").textContent = "Draw";
}

// method 2
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource1 = "images/dice" + randomNumber1 + ".png"
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png"

// var image1 = document.querySelector("img")[0]
// image1.setAttribute("src", randomImageSource1)

// var image2 = document.querySelector("img")[1]
// image2.setAttribute("src", randomImageSource2)

// incomplete method 3
// function getRandomPath() {
//   var randomNumber = Math.floor(Math.random() * 6) + 1;
//   var randomDice = "dice" + randomNumber + ".png";
//   return "images/" + randomDice;
// }

// document.querySelectorAll("img")[0].src = getRandomPath();
// document.querySelectorAll("img")[1].src = getRandomPath();
