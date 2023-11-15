


// -----------------STAR-BACK-ANIMATION-----------------



const starsContent1 = document.getElementById("1");
const starsContent2 = document.getElementById("2");
const starsContent3 = document.getElementById("3");
const starsContent4 = document.getElementById("4");
const starsContent5 = document.getElementById("5");
const starsContent6 = document.getElementById("6");
const starsContent7 = document.getElementById("7");
const starsContent8 = document.getElementById("8");
const starsContent9 = document.getElementById("9");
const starsContent10 = document.getElementById("10");
const starsContent11 = document.getElementById("11");
const starsContent12 = document.getElementById("12");
const starsContent13 = document.getElementById("13");
const starsContent14 = document.getElementById("14");
const starsContent15 = document.getElementById("15");
const starsContent16 = document.getElementById("16");
const starsContent17 = document.getElementById("17");
const starsContent18 = document.getElementById("18");
const starsContent19 = document.getElementById("19");
const starsContent20 = document.getElementById("20");
const starsContent21 = document.getElementById("21");
const starsContent22 = document.getElementById("22");
const starsContent23 = document.getElementById("23");
const starsContent24 = document.getElementById("24");
const starsContent25 = document.getElementById("25");

function ramdomNum() {
    return Math.floor(Math.random() * 100);
}
function ramdomNumStarMove() {
    return Math.floor(Math.random() * 15);
}

var starContent = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five"];


for (let a = 0; a < 20; a++) {
    starsContent1.innerHTML += `<div id="star-one-${a}" class="star"></div>`
    starsContent2.innerHTML += `<div id="star-two-${a}" class="star"></div>`
    starsContent3.innerHTML += `<div id="star-three-${a}" class="star"></div>`
    starsContent4.innerHTML += `<div id="star-four-${a}" class="star"></div>`
    starsContent5.innerHTML += `<div id="star-five-${a}" class="star"></div>`
    starsContent6.innerHTML += `<div id="star-six-${a}" class="star"></div>`
    starsContent7.innerHTML += `<div id="star-seven-${a}" class="star"></div>`
    starsContent8.innerHTML += `<div id="star-eight-${a}" class="star"></div>`
    starsContent9.innerHTML += `<div id="star-nine-${a}" class="star"></div>`
    starsContent10.innerHTML += `<div id="star-ten-${a}" class="star"></div>`
    starsContent11.innerHTML += `<div id="star-eleven-${a}" class="star"></div>`
    starsContent12.innerHTML += `<div id="star-twelve-${a}" class="star"></div>`
    starsContent13.innerHTML += `<div id="star-thirteen-${a}" class="star"></div>`
    starsContent14.innerHTML += `<div id="star-fourteen-${a}" class="star"></div>`
    starsContent15.innerHTML += `<div id="star-fifteen-${a}" class="star"></div>`
    starsContent16.innerHTML += `<div id="star-sixteen-${a}" class="star"></div>`
    starsContent17.innerHTML += `<div id="star-seventeen-${a}" class="star"></div>`;
    starsContent18.innerHTML += `<div id="star-eighteen-${a}" class="star"></div>`;
    starsContent19.innerHTML += `<div id="star-nineteen-${a}" class="star"></div>`;
    starsContent20.innerHTML += `<div id="star-twenty-${a}" class="star"></div>`;
    starsContent21.innerHTML += `<div id="star-twenty-one-${a}" class="star"></div>`;
    starsContent22.innerHTML += `<div id="star-twenty-two-${a}" class="star"></div>`;
    starsContent23.innerHTML += `<div id="star-twenty-three-${a}" class="star"></div>`;
    starsContent24.innerHTML += `<div id="star-twenty-four-${a}" class="star"></div>`;
    starsContent25.innerHTML += `<div id="star-twenty-five-${a}" class="star"></div>`;

    for (let b = 0; b < 25; b++) {
        const star = document.getElementById(`star-${starContent[b]}-${a}`);

        var num = ramdomNum();
        star.style.left = `${num}%`;
        star.style.animationDelay = `${ramdomNumStarMove()}s`;

        var numtwo = ramdomNum();
        star.style.top = `${numtwo}%`;
    }
}





// ----------------------STATIC STAR---------------------





function randomNumStatic() {
    return Math.floor(Math.random() * 71) + 15;
}
function ramdomNumStaticMove() {
    return Math.random(1);
}

const circleCenter = document.getElementById("circle-center");

for (let x = 0; x < 70; x++) {
    circleCenter.innerHTML += `<div id="static-${x}" class="static-star"></div>`;
    const staticStar = document.getElementById(`static-${x}`);

    var numThree = randomNumStatic();
    staticStar.style.left = `${numThree}%`;
    staticStar.style.animationDelay = `${ramdomNumStaticMove()}s`;

    var numFour = randomNumStatic();
    staticStar.style.top = `${numFour}%`;

}






