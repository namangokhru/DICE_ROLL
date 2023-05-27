function rollDices() {
  var dice1Element = document.getElementsByClassName('img1')[0];
  var dice2Element = document.getElementsByClassName('img2')[0];
  var winnerElement = document.getElementById('result');
  
  var dice1Value = Math.floor(Math.random() * 6) + 1;
  var dice2Value = Math.floor(Math.random() * 6) + 1;
  
  var dice1Face = getDiceFace(dice1Value);
  var dice2Face = getDiceFace(dice2Value);
  
  dice1Element.src = dice1Face;
  dice2Element.src = dice2Face;
  
  if (dice1Value > dice2Value) {
    winnerElement.textContent = "Player 1 wins!";
  } else if (dice1Value < dice2Value) {
    winnerElement.textContent = "Player 2 wins!";
  } else {
    winnerElement.textContent = "It's a tie!";
  }
}

function getDiceFace(number) {
  switch (number) {
    case 1:
      return "Images/dice1.png"; // Dice face with one dot
    case 2:
      return "Images/dice2.png"; // Dice face with two dots
    case 3:
      return "Images/dice3.png"; // Dice face with three dots
    case 4:
      return "Images/dice4.png"; // Dice face with four dots
    case 5:
      return "Images/dice5.png"; // Dice face with five dots
    case 6:
      return "Images/dice6.png"; // Dice face with six dots
  }
}
