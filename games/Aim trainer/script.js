window.onload = function () {
    //*******************************************************************************VARIABLE ***************************************************************************//
    let score = 0;
    let position = {
        X: 50,
        Y: 50,
    };
    let time = "∞";
    const cube = document.getElementById("cube");
    let i = 0;
    let a = 0;
    let dificult = "normal";
    const timing = document.querySelector('input[name="time"]').value;
    //*******************************************************************************/VARIABLE ***************************************************************************//

    //*********************************************************************************SPAWN AT RANDOM POSITION **********************************************************//
    function random() {
        position.X = cube.style.left = Math.random() * 100 + "%";
        position.Y = cube.style.top = Math.random() * 100 + "%";
        console.log("X:" + position.X + " , " + "Y:" + position.Y);
    }
    //*********************************************************************************/SPAWN**********************************************************//
    //******************************************************************************RESET POSITION***************************************************************************//
    function reset() {
        position.X = cube.style.left = 50 + "%";
        position.Y = cube.style.top = 50 + "%";
    }
    //******************************************************************************/RESET POSITION***************************************************************************//
    //************************************************************************************SCORE SYSTEM: ADD '0's *************************************************************//
    function scoresysteme() {
        if (score >= 0 && score < 10) {
            document.getElementById("h1").innerHTML = "0000000" + score;
        } else if (score >= 10 && score < 100) {
            document.getElementById("h1").innerHTML = "000000" + score;
        } else if (score >= 100 && score < 1000) {
            document.getElementById("h1").innerHTML = "00000" + score;
        } else if (score >= 1000 && score < 10000) {
            document.getElementById("h1").innerHTML = "0000" + score;
        } else if (score >= 10000 && score < 100000) {
            document.getElementById("h1").innerHTML = "000" + score;
        } else if (score >= 100000 && score < 1000000) {
            document.getElementById("h1").innerHTML = "00" + score;
        } else if (score >= 1000000 && score < 10000000) {
            document.getElementById("h1").innerHTML = "0" + score;
        } else if (score >= 10000000 && score < 100000000) {
            document.getElementById("h1").innerHTML = score;
        }
    }
    //************************************************************************************/SCORE SYSTEM*************************************************************//
    setInterval(() => {
        if (score > 0) {
            score--;
        }
        scoresysteme();
    }, 100);
    cube.addEventListener("click", () => {
        position.X = cube.style.left = Math.random() * 100 + "%";
        position.Y = cube.style.top = Math.random() * 100 + "%";
        const pop = new Audio("./assets/decide.mp3");
        pop.play();
        score = score + 100;
        //SPAWN THE CUBE CORECTLY
        cubeposition();
        scoresysteme();
    });
    //***********************************************************START***********************************************************************//
    btn = document.getElementById("start");
    btn.addEventListener("click", () => {
        document.getElementById("title").style.transition = 0 + "s";
        score = 0;
        btn.style.transition = 0 + "s";
        document.getElementById("setting").classList.toggle("hidden");
        document.getElementById("games").classList.toggle("hidden");
        document.getElementById("title").classList.toggle("hidden");
        timer();
    });
    //***********************************************************/START***********************************************************************//
    //*************************************************************SET THE DIFICULTY **********************************************************//
    const easy = document.querySelector("#easy");
    const normal = document.querySelector("#normal");
    const hard = document.querySelector("#hard");
    document
        .querySelector("#easy")
        .addEventListener("click", () => dificulty());
    document
        .querySelector("#normal")
        .addEventListener("click", () => dificulty());
    document
        .querySelector("#hard")
        .addEventListener("click", () => dificulty());

    function dificulty() {
        if (easy.checked == true) {
            dificult = "easy";
            cube.style.width = 100 + "px";
            cube.style.height = 100 + "px";
        } else if (normal.checked == true) {
            dificult = "normal";
            cube.style.width = 50 + "px";
            cube.style.height = 50 + "px";
        } else if (hard.checked == true) {
            dificult = "hard";
            cube.style.width = 25 + "px";
            cube.style.height = 25 + "px";
        }
    }
    //*************************************************************/DIFICULTY **********************************************************//
    //*************************************************************SET THE COLORS*********************************************************//
    const color = document.getElementById("color");
    function changetheColor() {
        document.getElementById("about").innerHTML =
            color.value + "," + time + "," + dificult;
        cube.style.backgroundColor = color.value;
        document.querySelector(".box").style.backgroundColor = color.value;
        document.querySelector("#easybox").style.backgroundColor = color.value;
        document.querySelector("#normalbox").style.backgroundColor =
            color.value;
    }
    setInterval(() => {
        changetheColor();
    }, 200);
    //*************************************************************/COLORS*********************************************************//
    //*************************************************************SET THE TIMES*********************************************************//

    ten.addEventListener("click", () => (time = 10));
    thirty.addEventListener("click", () => (time = 30));
    sixty.addEventListener("click", () => (time = 60));

    function timer() {
        setInterval(() => {
            a++;
            console.log("a");
        }, 1000);
        console.log(a);

        if (timing == "ten") {
            a = 0;
            if (a == 10) {
                console.log("d");
                document
                    .querySelectorAll("#score , #games")
                    .classList.toggle("hidden");
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                document.getElementById("h2").innerHTML =
                    "your score :" + score + "(10s)";
            }
        } else if (timing == "thirty") {
            a = 0;
            if (a == 30) {
                document
                    .querySelectorAll("#score , #games")
                    .classList.toggle("hidden");
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                document.getElementById("h2").innerHTML =
                    "your score :" + score + "(30s)" + " '" + dificult + "'";
            }
        } else if (timing == "sixty") {
            a = 0;
            if (a == 60) {
                document
                    .querySelectorAll("#score , #games")
                    .classList.toggle("hidden");
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                document.getElementById("h2").innerHTML =
                    "your score :" + score + "(60s)" + " '" + dificult + "'";
            }
        }
    }
    //*************************************************************/TIMES*********************************************************//
    //************************************************************SPAWN THE CUBE CORECTLY******************************************//
    function cubeposition() {
        if (cube.style.left.replace("%", "") > 90) {
            cube.style.left = 90 + "%";
        } else if (cube.style.left.replace("%", "") < 10) {
            cube.style.left = 10 + "%";
        }
        if (cube.style.top.replace("%", "") > 90) {
            cube.style.top = 90 + "%";
        } else if (cube.style.top.replace("%", "") < 10) {
            cube.style.top = 10 + "%";
        }
    }
    //************************************************************/SPAWN TCUBE******************************************//
};
