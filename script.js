let animatedCards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
  ];

let cardsUp;
let cont;
let globalNumberOfCards;
  

function comparador() {
    return Math.random() - 0.5;
}
  animatedCards.sort(comparador);



function createCards(numberOfCards) {
    let list = [];
  
    for (let i = 0; i < animatedCards.length; i++) {
      if (list === null) {
        animatedCards.sort(comparador);
      }
      list.push(animatedCards[i]);
      if (i === numberOfCards) {
        break;
      }
    }

  
    for (let i = 0; i < numberOfCards; i++) {
      let cardsTemplate = ` 
        <li class="card" onclick ="play(this)">
              <div class="back-face face ">
                 <img src = "img/${list[i]}.gif">
              </div>

              <div class="front-face face">
                  <img class = "frontimg" src="img/front.png">
              </div>
          </li>`;
      document.querySelector("ul").innerHTML += cardsTemplate;
      document.querySelector("ul").innerHTML += cardsTemplate;
    }
  
    let sevenCards = document.querySelector("ul");

    for (let i = sevenCards.children.length; i >= 0; i--) {
      sevenCards.appendChild(sevenCards.children[(Math.random() * i) | 0]);
    }
}

  
askHowManyCardsWantsToPlay();
createCards();


function askHowManyCardsWantsToPlay() {
    let howManyCards = Number(
      prompt(
        "Welcome To The Parrot Game !! 😃😃\n\nHow many cards do you want to play with ?\nRemember, you can only pick even numbers from 4 to 14.\n\n Enjoy ! ⚡⚡"
      )
    );
  
    while (howManyCards < 4 || howManyCards > 14 || howManyCards % 2 !== 0) {
      howManyCards = Number(
        prompt(
          "Welcome To The Parrot Game !! 😃😃\n\nHow many cards do you want to play with ?\nRemember, you can only pick even numbers from 4 to 14.\n\n Enjoy ! ⚡⚡"
        )
      );
    }
    globalNumberOfCards = howManyCards;
    let numberOfCards = howManyCards / 2;
    
    createCards(numberOfCards);
}
let test = 0;

function play(clickedCard){ 
  if(document.querySelectorAll.length < 2){
 
    clickedCard.classList.add("turn"); 
  }
    cardsUp= document.querySelectorAll(".turn");   

    if(cardsUp.length === 2){ 
        compareCards(cardsUp); 
    }
    endGame();  
}

let numberOfRounds = 0;


function compareCards(cards){ 
    if(cards){
        numberOfRounds+=2;
    }
    
    const firstCardImage = cards[0].querySelector(".back-face img"); 
    const secondCardImage =  cards[1].querySelector(".back-face img");
    
    if(firstCardImage.src === secondCardImage.src){ 
        cards[0].classList.add("turn2");
        cards[1].classList.add("turn2");
        cards[0].classList.remove("turn"); 
        cards[1].classList.remove("turn");
        return;
    }else{
      setTimeout(function () {
        cards[0].classList.remove("turn"); 
        cards[1].classList.remove("turn");
      }, 1000);
  }
 
}


 function endGame(){
   console.log()
    if(document.querySelectorAll(".turn2").length  ===  globalNumberOfCards ){
        alert(`Congratulations!! 🎉🎉🎉\n\nYou won the game in ${numberOfRounds} rounds! 👏👏`);
        restart()
    }
}


function restart(){
    cont = prompt("Would you like to play again? 🕹️🕹️\n\nType 'sim' for a yes or 'não' for a no, then watch the magic happen. 🤞\n");

    if(cont === "sim"){
        location.reload();
    }else{
        alert(`Congratulations!! 🎉🎉🎉\n\nYou won the game in ${numberOfRounds} rounds! 👏👏`);
    }
}

