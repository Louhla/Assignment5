var cardsArray = ["img/jungle1.jpg", "img/jungle1.jpg", "img/jungle2.jpg", "img/jungle2.jpg", "img/jungle3.jpg", "img/jungle3.jpg", "img/jungle4.jpg", "img/jungle4.jpg", "img/jungle5.jpg", "img/jungle5.jpg", "img/jungle6.jpg", "img/jungle6.jpg"]
var openCards = [];
var solvedCards = 0;
var array = shuffle(cardsArray);

//Find Matching Cards
$('.cards').click(function (e) {
    if (openCards.length < 2) {
        var index = e.target.id;
        clickedCard = $(this);
        clickedCard.css("background-image", "url(" + array[index] + ")");
        openCards.push(array[index]);
        clickedCard.addClass("selected");
    }
    if (openCards.length === 2) {
        // for (var i = 1; i < openCards.length; i++) {
        //     for (var j = 0; j < openCards.length; j++) {
                if (openCards[0] === openCards[1]) {
                    setTimeout(function(){$(".cards.selected").removeClass("selected").addClass("solved")}, 1000);
                    setTimeout(function(){openCards.length = 0}, 1000);
                    solvedCards += 1; 
                    if(solvedCards === 6){
                            $('#myModal').modal('show');
                            $("body").css("background-image", "url('./img/jungle-bg.jpg')");
                          }
                }else {
                    setTimeout(function () { $(".cards.selected").css("background-image", "url('./img/house-small.jpg')"); }, 1000);
                    setTimeout(function(){openCards.length = 0}, 1000);
                }
        //     }
        // }
    
    }
});

//New Game
$("#newGame").on("click", function refresh(){
    window.location.reload();
});


//Randomize Cards
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
