
const starsContent = document.getElementById("stars-content");

function ramdomNum(){
    return Math.floor(Math.random());
}

for (let a = 0; a < 100; a++) {
    starsContent.innerHTML += `<div id="${a}" class="star"></div>`
    const star = document.getElementById(`${a}`);

    let num;
    do {
        num = ramdomNum();
    } while (num > 30 && num < 70);
    star.style.left = `${num}%`;
    
}


