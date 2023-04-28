score = 0;
cross = true;

audio = new Audio('music.mp3')
audiogo = new Audio('gameover.mp3')
setTimeout(() =>{
    audio.play()
},1000)
document.onkeydown = function (e) {
    console.log("key code is: ", e.keycode)

    if (e.keycode == 38) {
        Dyno = document.querySelector('.dyno');
        dyno.classList.add('animateDyno');
        setTimeout(() => {
            dyno.classList.remove('animateDyno')
        }, 700);
    }
    if (e.keycode == 39) {
        Dyno = document.querySelector('.dyno');
        dynoX = parseInt(window.getComputedStyle(dyno, null).getPropertyValue('left'));
        dyno.style.left = dynoX + 112 + "px";
    }
    if (e.keycode == 37) {
        Dyno = document.querySelector('.dyno');
        dynoX = parseInt(window.getComputedStyle(dyno, null).getPropertyValue('left'));
        dyno.style.left = (dynoX - 112) + "px";
    }


}

setInterval(() => {
    dyno = document.querySelector('.dyno');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle')

    dx = parseInt(window.getComputedStyle(dyno, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dyno, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(dx - ox);
    offsetY = math.abs(dy - oy);
    //    console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game over - Reload to Play Again";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
         audiogo.pause();
         audio.pause();
         
        }, 1000)
    }

    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setInterval(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
         console.log('New animation duration', newDur)
        }, 500);

        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your score : " + score
}