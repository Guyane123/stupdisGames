window.onload = function () {
    const startBtn = document.getElementById("startBtn");
    const enemie = document.getElementById("enemie");
    const game = document.getElementById("game");
    const player = document.getElementById("player");
    const scoreHTML = document.getElementById("score");
    let score = 0;
    let playerBottom = 0;
    let enemieRight = 0;
    const hightestScoreHTML = document.getElementById("highestScore");
    startBtn.addEventListener("click", () => {
        game.classList.toggle("hidden");
        document.getElementById("enemieL").classList.add("hidden");
        document.getElementById("playerL").classList.add("hidden");
        enemieMouvement();
    });
    // startBtn.addEventListener("mouseover", () => {
    //     docu
    // }
    scored();
    console.log(score);
    function scored() {
        hightestScoreHTML.innerHTML = score;
        if (score >= 0 && score < 10) {
            score++;
            hightestScoreHTML.innerHTML = "000" + score;
            scoreHTML.innerHTML = "000" + score;
        }
        if (score >= 10 && score < 100) {
            score++;
            scoreHTML.innerHTML = "00" + score;
            hightestScoreHTML.innerHTML = "00" + score;
        }
        if (score >= 100 && score < 1000) {
            score++;

            scoreHTML.innerHTML = "0" + score;
            hightestScoreHTML.innerHTML = "0" + score;
        }
        if (score >= 1000 && score < 10000) {
            score++;
            scoreHTML.innerHTML = score;
            hightestScoreHTML.innerHTML = score;
        }
    }
    // enemie.addEventListener("mouseover", (e) => console.log(e));

    console.log(enemie.style.right);
    function enemieMouvement() {
        setInterval(() => {
            gameOver();
            scored();
            if (enemieRight >= 0 && enemieRight <= 760) {
                enemieRight += 20;
                enemie.style.right = enemieRight + "px";
                // console.log(enemieRight);
            } else {
                console.log("Re");
                enemieRight = 0;
                enemie.style.right = enemieRight + "px";
            }
        }, 250);
    }
    const playerXY = document.body.addEventListener("keypress", (e) => {
        if (e.key == " ") {
            playerBottom = 0;
            playerBottom += 40;
            player.style.bottom = playerBottom + "px";
            setTimeout(() => {
                playerBottom = 0;
                player.style.bottom = playerBottom + "px";
            }, 500);
        }
    });
    function gameOver() {
        if (enemieRight == 600) {
            console.log("600");
            if (playerBottom == 0) {
                console.log("0");
                player.style.backgroundColor = "red";
            }
        }
    }
};
