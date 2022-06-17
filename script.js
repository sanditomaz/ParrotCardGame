let animatedCards = ["img/bobrossparrot.gif", "img/explodyparrot.gif", "img/fiestaparrot.gif","img/metalparrot.gif", "img/revertitparrot.gif","img/tripletsparrot.gif","img/unicornparrot.gif"];

function comparador() { 
	return Math.random() - 0.5; 
}

animatedCards.sort(comparador);

let amountOfCards = animatedCards.length;

function createCards(numberOfCards){
let list = [];
    for(let i = 0; i<animatedCards.length; i++){ //This loop stores the shuffled cards in array list.
        if(list === null){
            animatedCards.sort(comparador);
        }
        list.push(animatedCards[i]);
        if( i === numberOfCards){
            break;
        }
    }

    for(let i=0; i < numberOfCards; i++){
        let cardsTemplate = ` 
        <div class="card" onclick ="play(this)">
            <div class="front-face face">
              <img src="img/front.png">
            </div>
            <div class="back-face face">
                <img src= ${list[i]}>
            </div>
        </div>`
        document.querySelector(".seven-cards").innerHTML += cardsTemplate;
        document.querySelector(".seven-cards").innerHTML += cardsTemplate;
    };

    let sevencards = document.querySelector('.seven-cards');
    for (let i = sevencards.children.length; i >= 0; i--) {
        sevencards.appendChild(sevencards.children[Math.random() * i | 0]);
    }
}


function askHowManyCardsWantsToPlay(){
    let howManyCards = Number (prompt("How many cards do you want to play with?\n Pick even numbers from 4 to 14 only."));

    while(howManyCards < 4 || howManyCards > 14 || howManyCards%2 !== 0){
        howManyCards = Number (prompt("How many cards do you want to play with?\n Pick even numbers from 4 to 14 only."));
    }

    numberOfCards = howManyCards/2;

    createCards(numberOfCards);
}

function play(element){

    



}