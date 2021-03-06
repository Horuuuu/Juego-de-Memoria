const cards =document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard,secondCard;



function flipCard(){
    if(lockBoard)return;
    if(this === firstCard)return;

this.classList.add('flip');

if(!hasFlippedCard){
hasFlippedCard=true;
firstCard=this;
return;
}

    hasFlippedCard=false;
    secondCard=this;

    checkForMatch();
}

    function checkForMatch() {

     let isMatch =firstCard.dataset.nintendo === secondCard.dataset.nintendo;
            
           
isMatch ? disabledCards() : unFlipCards();
    }

function disabledCards(){
    firstCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click',flipCard);

            resetBoard();
}

function unFlipCards(){
    lockBoard=true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
       secondCard.classList.remove('flip');
       resetBoard();
    }, 1500);       

}

function resetBoard (){
    [hasFlippedCard,lockBoard] = [false,false];
    [firstCard,secondCard] = [null,null]
}

(function shuffle() {
    cards.forEach(cards => {
        let randomPos = Math.floor(Math.random( )*12);
        cards.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click',flipCard))

