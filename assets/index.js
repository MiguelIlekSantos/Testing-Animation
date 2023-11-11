
const starsContent = document.getElementById("stars-content");

function ramdomNum(){
    return Math.floor(Math.random() * 100);
}
function ramdomNumStarMove(){
    return Math.floor(Math.random() * 15);
}

var starMove = ["one", "two", "three", "four"]

for (let a = 0; a < 500; a++) {
    starsContent.innerHTML += `<div id="${a}" class="star"></div>`
    const star = document.getElementById(`${a}`);

    var num = ramdomNum();
    star.style.left = `${num}%`;
    star.style.animationDelay = `${ramdomNumStarMove()}s`;

    var numtwo = ramdomNum();
    star.style.top = `${numtwo}%`;

    console.log(star.style.left);
    console.log(star.style.top);
    console.log("\n");

    if(star.style.left <= "25%" && star.style.top <= "25%" || star.style.left > "25%" && star.style.left <= "50%" && star.style.top > "25%" && star.style.top <= "50%" ){
        star.classList.add("star-move-four");
    }




    
}


