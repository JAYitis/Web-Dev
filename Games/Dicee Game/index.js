var randomNumber1;
var n1;
var n2;
d1();
d2();

function d1() {
    n1 = Math.floor(Math.random() * 6) + 1;
    if (n1 === 1) {
        var img1 = document.querySelector(".img1").src = "./images/dice" + n1 + ".png";
    }
    else if (n1 === 2) {
        var img1 = document.querySelector(".img1").src = "./images/dice" + n1 + ".png";
    }
    else if (n1 === 3) {
        var img1 = document.querySelector(".img1").src = "./images/dice" + n1 + ".png";
    }
    else if (n1 === 4) {
        var img1 = document.querySelector(".img1").src = "./images/dice" + n1 + ".png";
    }
    else if (n1 === 5) {
        var img1 = document.querySelector(".img1").src = "./images/dice" + n1 + ".png";
    }
    else if (n1 === 6) {
        var img1 = document.querySelector(".img1").src = "./images/dice" + n1 + ".png";
    }
    return n1;
}

// ------------------------------------------------------------------------------------------

function d2() {
    n2 = Math.floor(Math.random() * 6) + 1;
    if (n2 === 1) {
        var img2 = document.querySelector(".img2").src = "./images/dice" + n2 + ".png";
    }
    else if (n2 === 2) {
        var img2 = document.querySelector(".img2").src = "./images/dice" + n2 + ".png";
    }
    else if (n2 === 3) {
        var img2 = document.querySelector(".img2").src = "./images/dice" + n2 + ".png";
    }
    else if (n2 === 4) {
        var img2 = document.querySelector(".img2").src = "./images/dice" + n2 + ".png";
    }
    else if (n2 === 5) {
        var img2 = document.querySelector(".img2").src = "./images/dice" + n2 + ".png";
    }
    else if (n2 === 6) {
        var img2 = document.querySelector(".img2").src = "./images/dice" + n2 + ".png";
    }
    return n2;
}


if (n1 > n2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if (n2 > n1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw !";
}