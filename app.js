/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, startPlayer;

scores = [0, 0];
roundScore = 0;
startPlayer = Math.random();
console.log(startPlayer)
if(startPlayer > 0.5) {
  activePlayer = 0;
} else if(startPlayer < 0.5) {
  activePlayer = 1;
}
console.log(activePlayer);

//document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
var p0 = document.getElementById('player-0');
var p1 = document.getElementById('player-1');

if(activePlayer === 0) {
  p0.classList.add('active');
  p1.classList.remove('acitve');
} else {
  p1.classList.add('active');
  p0.classList.remove('acitve');
}

document.querySelector('.btn-roll').addEventListener('click', function() {

  // 1. Random Number
  var dice = Math.floor(Math.random() * 6) + 1;

  //2. Display result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  //3. Update round score IF rolled number was NOT a 1
  if(dice !== 1) {
    //Add to round score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    p0.classList.toggle('active');
    p1.classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if(activePlayer === 0) {
    //Add current score to GLOBAL score and switch player
    scores[0] += roundScore;
    roundScore = 0;
    activePlayer = 1;

    //Update UI
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    p0.classList.toggle('active');
    p1.classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = scores[0];

    if (scores[0] >= 100) {
      document.querySelector('.btn-roll').style.display = 'none';
      document.querySelector('.btn-hold').style.display = 'none';
      document.getElementById('name-0').textContent = 'Player 1 Wins!';
    }

  } else {
    //Add current score to GLOBAL score and switch player
    scores[1] += roundScore;
    roundScore = 0;
    activePlayer = 0;

    //Update UI
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    p0.classList.toggle('active');
    p1.classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-1').textContent = scores[1];

    if (scores[1] >= 100) {
      document.querySelector('.btn-roll').style.display = 'none';
      document.querySelector('.btn-hold').style.display = 'none';
      document.getElementById('name-1').textContent = 'Player 2 Wins!';
     }
  }
});

document.querySelector('.btn-new').addEventListener('click', function() {
  scores = [0, 0];
  roundScore = 0;
  startPlayer = Math.random();
  p0.classList.remove('active');
  p1.classList.remove('active');
  console.log(startPlayer)
  if(startPlayer > 0.5) {
    activePlayer = 0;
  } else if(startPlayer < 0.5) {
    activePlayer = 1;
  }
  console.log(activePlayer);

  //document.querySelector('#current-' + activePlayer).textContent = dice;
  document.querySelector('.dice').style.display = 'none';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';

  if(activePlayer === 0) {
    p0.classList.toggle('active');
  } else {
    p1.classList.toggle('active');
  }
});
