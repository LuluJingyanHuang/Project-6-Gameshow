const mainContainer= document.querySelector('.main-container');
const qwerty = document.getElementById('qwerty');
const win= document.getElementById('win');
const lose = document.getElementById('lose');
const phrase = document.getElementById('phrase');
const startScreen= document.getElementById('overlay');
var missed = 0;
var correct=0;
const startButton = document.querySelector('.btn__reset');
const phraseList = document.querySelector('#phrase ul');
const button = document.getElementsByTagName('button');
const bro=document.getElementById('bro');
const ul=document.getElementsByTagName('li');
const lives=document.querySelectorAll('.section li')
const heart=lives[lives.length-1];
const game=document.getElementById('game');
const title = document.querySelector('.title');
const phrases = [
  'substance',
  'whip',
  'metal',
  'representative',
  'punishment'

];

// win.style.display='none';
// lose.style.display='none'
//
// function off() {
//     win.style.display='none';
//     lose.style.display='none';
//
// }
//
// off();

startButton.addEventListener('click',() => {
      // startScreen.style.opacity=0;
      startScreen.style.display='none';
});

var split;
function getRandomPhraseArray(phrases){
    var randomWord=phrases[Math.floor(Math.random() * phrases.length)];
    console.log(randomWord);
    split = randomWord.split('');
    return split;
}

function addPhrasestoDisplay(split){
    for (i=0; i<split.length;i+=1) {
        var li = document.createElement('LI');
        var letter = document.createTextNode(split[i]);
        console.log(letter);
        li.appendChild(letter);
        phraseList.appendChild(li);
        li.className ='letter';
    }
  }

var attempt;
var a;


function checkWin (){
      if(missed>4){
        startScreen.style.display='';
        startScreen.classList.add('lose');
        title.textContent = "Yikes";
        startButton.style.display='none';
      }else if (document.querySelectorAll('.show').length == split.length){
        startScreen.style.display='';
        startScreen.classList.add('Win');
        title.textContent = "You win!";
        startButton.style.display='none';
      }

}

function letterClicked(){
     for (var i=0; i<button.length; i+=1){
        button[i].addEventListener('click',(event)=>{
          var clicked= event.target.textContent;
          if (split.indexOf(clicked)<0){
            missed += 1;
            lives[missed-1].parentNode.removeChild(lives[missed-1]);
            checkWin();
          }
          for (var i=0; i<split.length;i+=1){
              if (split[i] ===clicked){
                ul[i].classList.add('show');
                correct+=1;
                checkWin();
              }
            }
          });

        }

      }





getRandomPhraseArray(phrases);
addPhrasestoDisplay(split);
letterClicked();
