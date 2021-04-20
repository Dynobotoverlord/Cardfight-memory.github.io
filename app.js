
//Array of cards that a function cycles through to pull the card info 
const cardsArray = [{
    name : 'vairina',
    img :'images/Varina.png',
},
{
name : 'nirvana',
img :'images/Nirvana.png',
},

{
name : 'reiyu',
img :'images/Reiyu.png',
},

{
name : 'rino',
img :'images/Rino.png',
},

{
name : 'crit',
img :'images/DragonCrit.png',
},


{
name : 'heal',
img :'images/DragonHeal.png',
},

{
name : 'front',
img :'images/DragonStand.png',
},

{
name : 'inferno',
img :'images/inferno.png',
},

{
name : 'sunburst',
img :'images/SunBurst.png',
},

{
 name : 'stealth',
 img :'images/Stealth.png',
 },

 {
 name : 'anky',
 img :'images/Anky.png',
    },

{
name : 'trickstar',
img :'images/TrickStar.png',

},

]
// randomizes the cards
const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});
//matches the cards and be able to determine if  match was made
function match () {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

function wingame(){
  if (cardsArray.length === cardsArray.length){
      alert('you won congrats')
  }
}
// resets the number of guesses at 2 so the player cannot just click all over the board
function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;
  

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||clicked === previousTarget || clicked.parentNode.classList.contains('selected') ||clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

});
// count down timer
const startTime = 80;
let time = startTime * 60;

const CountDown = document.getElementById('timer');

setInterval(updateCountdown, 1000);
function updateCountdown(){
    const minutes = Math.floor(time/60)
    let seconds = time % 60
     seconds < 10 ? '0' + seconds : seconds;
    CountDown.innerHTML = "Time Remaining: " + `${minutes}:${seconds}`;
    time--;
    time = time < 0 ?0:time;
}


