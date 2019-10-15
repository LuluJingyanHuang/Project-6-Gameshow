const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startScreen= document.getElementById('overlay');
var missed = 0;
const startButton = document.querySelector('.btn__reset');
const phraseList = document.querySelector('#phrase ul');
const button = document.getElementsByTagName('button');
const bro=document.getElementById('bro');
const ul=document.getElementsByTagName('li');

const phrases = [
  'substance',
  'whip',
  'metal',
  'representative',
  'punishment'

];

startButton.addEventListener('click',() => {
      // startScreen.style.opacity=0;
      startScreen.remove();
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
function letterClicked(){
     for (var i=0; i<button.length; i+=1){
        button[i].addEventListener('click',(event)=>{
          var clicked= event.target.textContent;
          var a=split.indexOf(clicked);
          var exist=(split.indexOf(clicked)>-1);
          if (exist){
            ul[a].className='show';
          }

        });
      }
}




getRandomPhraseArray(phrases);
addPhrasestoDisplay(split);
letterClicked();
