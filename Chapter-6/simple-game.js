var hero = document.getElementById("hero");
var obst = document.getElementById("obst");
var counter = 0;
// this function calls the animate property in the css and it will allow the jump animation to work
function jump() {
    hero.classList.add("animate");
    setTimeout(function () {
        hero.classList.remove("animate");
    }, 300);
}

var check = setInterval(function () {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let obstLeft = parseInt(window.getComputedStyle(obst).getPropertyValue("left"));
// these are the pixel distance collision between the character and the obstacle
    if (obstLeft < -120 && obstLeft > -140 && heroTop >= 130) {
        obst.style.animation = "none";

        alert("YOU DIED!! score: " + counter / 100);
        counter = 0;
        obst.style.animation = "obst 2s infinite linear";
    } else {
        counter++;

        document.getElementById("scoreSpan").innerHTML = counter / 100;
    }
}, 10);