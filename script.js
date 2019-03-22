window.onload=function(){
var cards = document.querySelectorAll(".card")
var count=document.getElementById("flips")
var val = count.innerHTML
var begin = document.getElementById("button")

//when start is selected the game resets
// begin.addEventListener("click", function(){
    
// })

cards.forEach(function(card){
    card.addEventListener('click', function(){
    // increasing num of flips
        val++
        document.getElementById("flips").innerHTML=val
    
    
        this.classList.add("flip");
    
        var flippedCard = false;    
        var firstCard;
        var secondCard;

        //first click
        if(!flippedCard){
            flippedCard=true;
            firstCard=this;
            // this.classList.toggle("open");
            // this.classList.toggle("show");
            // this.classList.toggle("disabled")
            console.log(flippedCard, this)
        }else{
            //second click
            flippedCard = false;
            secondCard = this;
            console.log(firstCard, secondCard);
            matchCheck();
    }
    })
})

function matchCheck(c1, c2){
    var isMatch = c1.classList === c2.classList
    isMatch ? console.log(true) : console.log(false)
}

//if not match
// function turnOver(){

// }

//if match
function correct(c1, c2){
    c1.removeEventListener('click', function(){
        this.classList.toggle("flip");
        
        // increasing num of flips
        val++
        document.getElementById("flips").innerHTML=val
        
        var flippedCard = false;    
        var firstCard;
        var secondCard;
    
        //first click
        if(!flippedCard){
            flippedCard=true;
            firstCard=this;
            // console.log(firstCard, this)
        }else{
        //second click
            flippedCard = false;
            secondCard = this;
            console.log(firstCard, secondCard);
            matchCheck();
        }
    })

    c2.removeEventListener('click', function(){
        this.classList.toggle("flip");
        
        // increasing num of flips
        val++
        document.getElementById("flips").innerHTML=val
        
        var flippedCard = false;    
        var firstCard;
        var secondCard;
    
        //first click
        if(!flippedCard){
            flippedCard=true;
            firstCard=this;
            // console.log(firstCard, this)
        }else{
        //second click
            flippedCard = false;
            secondCard = this;
            console.log(firstCard, secondCard);
            matchCheck();
        }
    })
}
}
