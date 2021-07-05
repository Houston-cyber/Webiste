function guessNumber() {
    var randonNum = Math.floor(Math.random() * 11);



    console.log(randonNum);

    var guess;
    guess = prompt("please enter a number between 0 and 10");


    if (guess < randonNum) {
        window.alert("Too low, guess again");
    } else if (guess > randonNum) {
        window.alert("Too high, guess agian");
    } else if (guess == 7) {
        window.alert("You got it. You win!!");
    } else {
        window.alert("Error")
    }



}