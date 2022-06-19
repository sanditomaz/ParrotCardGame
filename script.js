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
  
  let amountOfCards = animatedCards.length;
  
  function createCards(numberOfCards) {
    let list = [];
  
    for (let i = 0; i < animatedCards.length; i++) {
      //This loop stores the shuffled cards in array list.
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
              <div class="front-face face">
                  <img class = "frontimg" src="img/front.png">
              </div>
              <div class="back-face face turn">
                  <img class = "${list[i]}" src = "img/${list[i]}.gif">
              </div>
          </li>`;
      document.querySelector("ul").innerHTML += cardsTemplate;
      document.querySelector("ul").innerHTML += cardsTemplate;
    }
  
    let sevencards = document.querySelector("ul");
    for (let i = sevencards.children.length; i >= 0; i--) {
      //This loop shuffles ALL of the cards
      sevencards.appendChild(sevencards.children[(Math.random() * i) | 0]);
    }
  }
  
  askHowManyCardsWantsToPlay();
  createCards();
  
  function askHowManyCardsWantsToPlay() {
    let howManyCards = Number(
      prompt(
        "How many cards do you want to play with?\n Pick even numbers from 4 to 14 only."
      )
    );
  
    while (howManyCards < 4 || howManyCards > 14 || howManyCards % 2 !== 0) {
      howManyCards = Number(
        prompt(
          "How many cards do you want to play with?\n Pick even numbers from 4 to 14 only."
        )
      );
    }
  
    let numberOfCards = howManyCards / 2;
  
    createCards(numberOfCards);
  }
  
  function compareCards(element) {
    let image = element.querySelectorAll(".back-face > img");
    for (let i = 0; i < image.length; i++) {
      if (image[i] === image[i + 1]) {
        return true;
      }
    }
    setTimeout(play, 1000);
  }
  
  function turnsCardUp(elemento) {
    return elemento.classList.remove("turn");
  }
  
  function turnsCardDown(elemento) {
    let element = [];
    for (let i = 0; i < elemento.length; i++) {
      element.push(elemento[i].classList.add("turn"));
    }
    return element;
  }
  
  function play() {
    let isClicked = document.querySelectorAll(".card .turn");
    console.log(isClicked);
    let compare = [];
  
    for (let i = 0; i < isClicked.length; i++) {
      turnsCardUp(isClicked[i]);
      if (i < 2) {
        compare.push(isClicked[i]);
      }
      if (i === 2) {
        compareCards(compare);
      }
  
      if (!compareCards()) {
        turnsCardDown(compare);
      }
    }
  }
  