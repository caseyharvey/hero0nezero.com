// for port.html 

// number of images in the gallery
var listnum = 6;
// number of images in the gallery

// variables for DOM Elements
var cover2 = document.getElementById('cov');
var left = document.getElementById("left");
var right = document.getElementById("right");
// variables for DOM Elements

// variable for the img count
var img = 1;
// variable for the img count

// addEventListeners
left.addEventListener('click', function () {

    if (img === 1) {
        cover2.style.backgroundImage = "url('../img2/" + listnum + ".jpeg')";
        img = listnum;

    } else {
        img--;
        cover2.style.backgroundImage = "url('../img2/" + img + ".jpeg')";

    }

});
right.addEventListener('click', function () {

    if (img === listnum) {
        cover2.style.backgroundImage = "url('../img2/1.jpeg')";
        img = 1;

    } else {
        img++;
        cover2.style.backgroundImage = "url('../img2/" + img + ".jpeg')";

    }

});