//Random Dice one
var randomNumber1 = (Math.floor(Math.random() * 6)+1);

var num = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",num);

//Random Dice Two
var randomNumber2 = (Math.floor(Math.random() * 6)+1);

var num2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",num2);

//if Else to Modify heading and Output Winner

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player1 Wins!";
}
else if ( randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML= "Tie!";
}
else{
    document.querySelector("h1").innerHTML = "Player2 Wins!";
}