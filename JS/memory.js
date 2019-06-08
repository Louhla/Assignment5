var cardsArray = ["img/jungle1.jpg", "img/jungle1.jpg", "img/jungle2.jpg", "img/jungle2.jpg", "img/jungle3.jpg", "img/jungle3.jpg", "img/jungle4.jpg", "img/jungle4.jpg", "img/jungle5.jpg", "img/jungle5.jpg", "img/jungle6.jpg", "img/jungle6.jpg"]
var openCards = [];
var solvedCards = 0;
var wrongGuesses = 0;
var array = shuffle(cardsArray);

//Find Matching Cards
$('.cards').on("click", function clickCard(e) {
    if (openCards.length < 2) {
        var index = e.target.id;
        clickedCard = $(this);
        clickedCard.css("background-image", "url(" + array[index] + ")");
        openCards.push(array[index]);
        clickedCard.addClass("selected");
    }
    if (openCards.length === 2) {
        $(".cards").off('click'); //Remove click event for the time two cards are open
        setTimeout(function () { $(".cards").on("click", clickCard) }, 1000);
        if (openCards[0] === openCards[1]) {
            setTimeout(function () { $(".cards.selected").removeClass("selected").addClass("solved") }, 1000);
            setTimeout(function () { openCards.length = 0 }, 1000);
            solvedCards += 1;
            if (solvedCards === 6) {
                setTimeout(function () { $("#myModal").modal("show") }, 1000);
                setTimeout(function () { $("body").css("background-image", "url('./img/flowers-bg.jpg')") }, 1000);
                $("#guess-result").text("Your amount of wrong guesses: " + wrongGuesses);
            }
        } else {
            wrongGuesses += 1;
            setTimeout(function () { $(".cards.selected").css("background-image", "url('./img/house-small.jpg')"); }, 1000);
            setTimeout(function () { openCards.length = 0 }, 1000);
        }
    }
});

//New Game
$("#newGame").on("click", function refresh() {
    window.location.reload();
});
$(".modal-button").on("click", function refresh() {
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
