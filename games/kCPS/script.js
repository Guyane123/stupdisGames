window.onload = function () {
    const box = document.getElementById("box");
    const text = document.getElementById("text");
    const text2 = document.getElementById("text2");
    start = document.getElementById("start");
    let time = 0;
    let click = 0;
    document.addEventListener("keypress", (e) => {
        if ((e = "Enter")) {
            click += 1;
        }
    });
    box.addEventListener("click", (e) => {
        if (time < 10) {
            click = click + 1;
            console.log(click);
            let x = e.clientX;
            let y = e.clientY;
            document.getElementById("seeMouseClick").innerHTML +=
                '<div id="clicks" class="click"></div>';
            document.getElementById("clicks").id = click;
            document.getElementById(click).style.left = x + "px";
            document.getElementById(click).style.top = y + "px";
            document.getElementById(click).style.backgroundColor =
                "rgb(" +
                Math.floor(Math.random() * 255 + 1) +
                ", " +
                Math.floor(Math.random() * 255 + 1) +
                ", " +
                Math.floor(Math.random() * 255 + 1) +
                ", 0.315" +
                ")";
        } else {
            console.log("end!");
            document.getElementById("score").innerHTML =
                "your score is " + click / time + " cps";
        }
    });
    setInterval(() => {
        if (time > 10) {
            document.getElementById(random).style.top =
                document.getElementById(random).style.top - 1;
        }
    }, 200);
    box.addEventListener(
        "click",

        () => {
            setInterval(() => {
                if (time < 10) {
                    time = time + 1;
                    console.log(time);
                    innerTime();
                } else if (time >= 10) {
                    console.log("end");
                    text2.innerHTML = "end";
                    document.getElementById("seeMouseClick").innerHTML +=
                        '<div id="win" class="confetti"></div>';
                    let random = Math.random();
                    document.getElementById("win").id = random;
                    document.getElementById(random).style.backgroundColor =
                        "rgb(" +
                        Math.floor(Math.random() * 255 + 1) +
                        ", " +
                        Math.floor(Math.random() * 255 + 1) +
                        ", " +
                        Math.floor(Math.random() * 255 + 1) +
                        ")";
                    document.getElementById(random).style.left =
                        random * 100 + "%";
                }
            }, 1000);
            setInterval(() => {
                let clickPersSeconds = click / time;
                text.innerHTML = clickPersSeconds.toFixed(2);
            }, 100);
        },
        { once: true }
    );
    function innerTime() {
        text2.innerHTML = 10 - time;
    }
};
