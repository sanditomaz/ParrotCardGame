let animatedCards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
  ];

  
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
    }//This loop above stores the shuffled cards in array list.

  
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
  
    let sevencards = document.querySelector("ul");

    for (let i = sevencards.children.length; i >= 0; i--) {
      sevencards.appendChild(sevencards.children[(Math.random() * i) | 0]);
    }//This loop above shuffles ALL of the cards
}

  
askHowManyCardsWantsToPlay();
createCards();



function askHowManyCardsWantsToPlay() {
    //let howManyCards = Number(
    //   prompt(
    //     "How many cards do you want to play with?\n Pick even numbers from 4 to 14 only."
    //   )
    // );
  
    // while (howManyCards < 4 || howManyCards > 14 || howManyCards % 2 !== 0) {
    //   howManyCards = Number(
    //     prompt(
    //       "How many cards do you want to play with?\n Pick even numbers from 4 to 14 only."
    //     )
    //   );
    // }
  
    //let numberOfCards = howManyCards / 2;
    let numberOfCards = 2;
    createCards(numberOfCards);
}



function play(clickedCard){
    clickedCard.classList.add("turn"); //
    const cardsUp= document.querySelectorAll(".turn"); //
        
    if(cardsUp.length === 2){ 
        compareCards(cardsUp); //
    }
}



function compareCards(cards){ //
    const firstCardImage = cards[0].querySelector(".back-face img"); //
    const secondCardImage =  cards[1].querySelector(".back-face img");
    
    if(firstCardImage.src === secondCardImage.src){ //Compare Srcs
        return;
    }
    cards[0].classList.remove("turn"); //
    cards[1].classList.remove("turn");
}