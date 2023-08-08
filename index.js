  var result = document.querySelector('.result');
  var button = document.querySelector('button');

  var image1 = document.querySelectorAll("img")[0];
  var image2 = document.querySelectorAll("img")[1];

  button.addEventListener('click', function () {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  image1.setAttribute("src", randomImageSource1);
  image2.setAttribute("src", randomImageSource2);


//If player 1 wins

  if (randomNumber1 > randomNumber2) {
    result.innerHTML = "🚩Play 1 Wins";
  }
  else if (randomNumber2 > randomNumber1) {
    result.innerHTML = "Player 2 Wins🚩";
  }
  else {
    result.innerHTML = "Draw!";
  }
});
