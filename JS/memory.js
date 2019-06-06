var cardsArray = ["img/jungle1.jpg", "img/jungle1.jpg", "img/jungle2.jpg", "img/jungle2.jpg", "img/jungle3.jpg", "img/jungle3.jpg", "img/jungle4.jpg", "img/jungle4.jpg", "img/jungle5.jpg", "img/jungle5.jpg", "img/jungle6.jpg", "img/jungle6.jpg"]
var openCards = [];
var open = false;


var array = shuffle(cardsArray);

$('.cards').click(function (e) {
    if (openCards.length < 2) {
        var index = e.target.id;
        clickedCard = $(this);
        clickedCard.css("background-image", "url(" + array[index] + ")");
        openCards.push(array[index]);
        clickedCard.addClass("selected");
        console.log("one");
    }
    if (openCards.length === 2) {
        for (var i = 0; i < openCards.length; i++) {
            for (var j = 0; j < openCards.length; j++) {
                if (openCards[i] === openCards[j]) {
                    $(".cards.selected").addClass("background-image");
                }else {
                    setTimeout(function () { $(".cards.selected").css("background-image", "url('./img/house-small.jpg')"); }, 2000);
                    openCards = [];
                }
            }
        }
    
    }
});

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
