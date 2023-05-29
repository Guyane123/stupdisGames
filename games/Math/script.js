window.onload = function () {
    const percent = {
        div: document.getElementById("percentDiv"),
        btn: document.getElementById("percentBtn"),
        text: document.getElementById("percentText"),
        result: document.getElementById("percentSpanResult"),
        input1: document.getElementById("percentInput1"),
        input2: document.getElementById("percentInput2"),
        resultBtn: document.getElementById("percentGetResultBtn"),
        section: document.getElementById("percent"),
    };
    const userNavigator = Navigator.userAgentData;
    const pythagore = {
        div: document.getElementById("pythagoreDiv"),
        btn: document.getElementById("pythagoreBtn"),
        text: document.getElementById("pythagoreText"),
        pythagoreHypothenuse: document.getElementById("pythagoreHypothenuse"),
        hypothenuseInput: document.getElementById("pythagoreInputHypothenuse"),
        BInput: document.getElementById("pythagoreInputB"),
        CInput: document.getElementById("pythagoreInputC"),
        pythagoreB: document.getElementById("pythagoreB"),
        pythagoreC: document.getElementById("pythagoreC"),
        GetResultBtn: document.getElementById("pythagoreGetResult"),
        section: document.getElementById("pythagore"),
        result1: document.getElementById("PythagoreResult1"),
        result2: document.getElementById("PythagoreResult2"),
        result3: document.getElementById("PythagoreResult3"),
        h3: document.getElementById("pythagoreResultH3"),
    };
    const convertir = {
        div: document.getElementById("converterDiv"),
        section: document.getElementById("converter"),
        text: document.getElementById("converterText"),
    };
    const home = {
        homePage: document.getElementById("home"),
        div: document.getElementById("homeDiv"),
        text: document.getElementById("homeText"),
        section: document.getElementById("home"),
        Btn: document.getElementById("homeBtn"),
    };
    const uOM = {
        m: document.getElementById("m"),
        c: document.getElementById("c"),
        d: document.getElementById("d"),
        g: document.getElementById("g"),
        dam: document.getElementById("dam"),
        h: document.getElementById("h"),
        k: document.getElementById("k"),
        mResult: document.getElementById("mResult"),
        cResult: document.getElementById("cResult"),
        dResult: document.getElementById("dResult"),
        gResult: document.getElementById("gResult"),
        damResult: document.getElementById("damResult"),
        hResult: document.getElementById("hResult"),
        kResult: document.getElementById("kResult"),
        radioInput: document.getElementsByName("uOM"),
        radioInput1: document.getElementById("gramme"),
        radioInput2: document.getElementById("distance"),
        radioInput3: document.getElementById("litter"),
        inputNumber: document.getElementById("uOMNumber"),
        GetResultBtn: document.getElementById("uOMGetResultBtn"),
        select: document.getElementById("uOMSelect"),
        selectResult: document.getElementById("uOMSelectResult"),
        result: document.getElementById("converterResult"),
    };
    const calculator = {
        btn: document.getElementById("calculatorBtn"),
        div: document.getElementById("calculatorDiv"),
        section: document.getElementById("calculatorSection"),
        text: document.getElementById("calculatorText"),
        form: document.getElementById("form1"),
        t1: document.getElementById("t1"),
        t2: document.getElementById("t2"),
        t3: document.getElementById("t3"),
        t4: document.getElementById("t4"),
        t5: document.getElementById("t5"),
        t6: document.getElementById("t6"),
        t7: document.getElementById("t7"),
        t8: document.getElementById("t8"),
        t9: document.getElementById("t9"),
        tMultiply: document.getElementById("t*"),
        tPlus: document.getElementById("t+"),
        tMinus: document.getElementById("t-"),
        numbers: document.getElementById("calculatorNumbers"),
        input: document.getElementById("calculatorInput"),
    };
    let calcul = 0;
    const t1 = calculator.t1.addEventListener("click", () => {
        calcul += 1;
        console.log(calcul);
        calculator.input.value = Number(calcul);
        return 1;
    });
    const t2 = calculator.t2.addEventListener("click", () => {
        calcul += 2;
        console.log(calcul);
        calculator.input.value = Number(calcul);
        return 2;
    });
    const t3 = calculator.t3.addEventListener("click", () => {
        calcul += 3;
        console.log(calcul);
        calculator.input.value = Number(calcul);

        return 3;
    });
    const t4 = calculator.t4.addEventListener("click", () => {
        calcul += 4;
        console.log(calcul);
        calculator.input.value = Number(calcul);
        return 4;
    });
    const t5 = calculator.t5.addEventListener("click", () => {
        calcul += 5;
        console.log(calcul);
        calculator.input.value = Number(calcul);
        return 5;
    });
    const t6 = calculator.t6.addEventListener("click", () => {
        calcul += 6;
        console.log(calcul);
        calculator.input.value = Number(calcul);
        return 6;
    });
    const t7 = calculator.t7.addEventListener("click", () => {
        calcul += 7;
        console.log(calcul);
        calculator.input.value = Number(calcul);
        return 7;
    });
    const t8 = calculator.t8.addEventListener("click", () => {
        calcul += 8;
        console.log(calcul);
        calculator.input.value = Number(calcul);
        return 8;
    });
    const t9 = calculator.t9.addEventListener("click", () => {
        calcul += 9;
        console.log(calcul);
        calculator.input.value = Number(calcul);
        return 9;
    });
    const tMultiply = calculator.tMultiply.addEventListener("click", () => {
        calcul += "*";
        console.log(calcul);
        calculator.input.value = Number(calcul);
        return "*";
    });
    const tPlus = calculator.tPlus.addEventListener("click", () => {
        calcul += "+";
        calculator.input.value = Number(calcul);
        return "+";
        console.log(calcul);
    });
    const tMinus = calculator.tMinus.addEventListener("click", () => {
        calcul += "-";
        calculator.input.value = Number(calcul);
        return "-";
        console.log(calcul);
    });
    console.log(calcul);
    calculator.input.value = Number(calcul);
    let parameter = {
        div: document.getElementById("parameterDiv"),
        btn: document.getElementById("parameterBtn"),
        black: document.getElementById("parameterBlack"),
        white: document.getElementById("parameterWhite"),
        section: document.getElementById("parameter"),
    };
    let converted = uOM.inputNumber.value;
    uOM.GetResultBtn.addEventListener("click", () => converter());
    function converter() {
        converted = uOM.inputNumber.value;
        console.log(uOM.select.value);
        switch (uOM.select.value) {
            case "mg(milligramme)":
                converted = converted / 1000;
                console.log(converted);
                converterResult();
                break;
            case "cg(centigramme)":
                converted = converted / 100;
                console.log(converted);
                converterResult();
                break;
            case "dg(decagramme)":
                converted = converted / 1000;
                console.log(converted);
                converterResult();
                break;
            case "g(gramme)":
                converted = converted * 1;
                console.log(converted);
                converterResult();
                break;
            case "dag(decagramme)":
                converted = converted * 10;
                console.log(converted);
                converterResult();
                break;
            case "hg(hectogramme)":
                converted = converted * 100;
                console.log(converted);
                converterResult();
                break;
            case "kg(killogramme)":
                converted = converted * 1000;
                console.log(converted);
                converterResult();
                break;

            default:
                break;
        }
    }
    function converterResult() {
        switch (uOM.selectResult.value) {
            case "mg(milligramme)":
                uOM.result.innerHTML = converted * 1000;
                break;
            case "cg(centigramme)":
                uOM.result.innerHTML = converted * 100;
                break;
            case "dg(decagramme)":
                uOM.result.innerHTML = converted * 10;
                break;
            case "g(gramme)":
                uOM.result.innerHTML = converted * 1;
                break;
            case "dag(decagramme)":
                uOM.result.innerHTML = converted / 10;
                break;
            case "hg(hectogramme)":
                uOM.result.innerHTML = converted * 100;
                break;
            case "kg(killogramme)":
                uOM.result.innerHTML = converted / 1000;
                break;

            default:
                break;
        }
    }
    document.getElementById("userData").innerHTML = navigator.userAgent;
    function uOMInput() {
        if (uOM.radioInput1.checked == true) {
            console.log("Gramme");
            uOM.m.innerHTML = "mg(milligramme)";
            uOM.c.innerHTML = "cg(centigramme)";
            uOM.d.innerHTML = "dg(decagramme)";
            uOM.g.innerHTML = "g(gramme)";
            uOM.dam.innerHTML = "dag(decagramme)";
            uOM.h.innerHTML = "hg(hectogramme)";
            uOM.k.innerHTML = "kg(killogramme)";

            uOM.mResult.innerHTML = "mg(milligramme)";
            uOM.cResult.innerHTML = "cg(centigramme)";
            uOM.dResult.innerHTML = "dg(decagramme)";
            uOM.gResult.innerHTML = "g(gramme)";
            uOM.damResult.innerHTML = "dag(decagramme)";
            uOM.hResult.innerHTML = "hg(hectogramme)";
            uOM.kResult.innerHTML = "kg(killogramme)";
        } else if (uOM.radioInput2.checked == true) {
            uOM.m.innerHTML = "mm(millimettre)";
            uOM.c.innerHTML = "cm(centimettre)";
            uOM.d.innerHTML = "dm(decamettre)";
            uOM.g.innerHTML = "g(mettre)";
            uOM.dam.innerHTML = "dam(decamettre)";
            uOM.h.innerHTML = "hm(hectomettre)";
            uOM.k.innerHTML = "km(killomettre)";

            uOM.mResult.innerHTML = "mm(millimettre)";
            uOM.cResult.innerHTML = "cm(centimettre)";
            uOM.dResult.innerHTML = "dm(decamettre)";
            uOM.gResult.innerHTML = "m(mettre)";
            uOM.damResult.innerHTML = "dam(decamettre)";
            uOM.hResult.innerHTML = "hm(hectomettre)";
            uOM.kResult.innerHTML = "km(killomettre)";
            console.log("Distance");
        } else if (uOM.radioInput3.checked == true) {
            uOM.mResult.innerHTML = "ml(millilittre)";
            uOM.cResult.innerHTML = "cl(centilittre)";
            uOM.dResult.innerHTML = "dl(decalittre)";
            uOM.gResult.innerHTML = "l(littre)";
            uOM.damResult.innerHTML = "dal(decalittre)";
            uOM.hResult.innerHTML = "hl(hectolittre)";
            uOM.kResult.innerHTML = "kl(killolittre)";

            uOM.m.innerHTML = "m(millilittre)";
            uOM.c.innerHTML = "cl(centilittre)";
            uOM.d.innerHTML = "dl(decalittre)";
            uOM.g.innerHTML = "l(littre))";
            uOM.dam.innerHTML = "dal(decalittre)";
            uOM.h.innerHTML = "hl(hectolittre)";
            uOM.k.innerHTML = "kl(killolittre)";
            console.log("Littre");
        }
    }
    uOM.radioInput1.addEventListener("click", () => uOMInput());
    uOM.radioInput2.addEventListener("click", () => uOMInput());
    uOM.radioInput3.addEventListener("click", () => uOMInput());

    function percentresult() {
        percent.result.innerHTML =
            " = " + (percent.input1.value / percent.input2.value) * 100 + "%";
    }
    function removeAll(a) {
        pythagore.section.classList.add("hidden");
        percent.section.classList.add("hidden");
        home.homePage.classList.add("hidden");
        convertir.section.classList.add("hidden");
        calculator.section.classList.add("hidden");
        parameter.section.classList.add("hidden");
    }
    percent.resultBtn.addEventListener("click", () => percentresult());
    percent.div.addEventListener("click", () => {
        removeAll();
        percent.section.classList.remove("hidden");
    });
    pythagore.div.addEventListener("click", () => {
        removeAll();
        pythagore.section.classList.remove("hidden");
    });
    home.div.addEventListener("click", () => {
        removeAll();
        home.homePage.classList.remove("hidden");
    });
    convertir.div.addEventListener("click", () => {
        removeAll();
        convertir.section.classList.remove("hidden");
    });
    calculator.div.addEventListener("click", () => {
        removeAll();
        calculator.section.classList.remove("hidden");
    });
    parameter.div.addEventListener("click", () => {
        removeAll();
        parameter.section.classList.remove("hidden");
    });
    function pythagoreGetResult() {
        const pythagoreResult =
            pythagore.BInput.value * pythagore.BInput.value +
            pythagore.CInput.value * pythagore.CInput.value;
        pythagore.pythagoreB.innerHTML = pythagore.BInput.value;
        pythagore.pythagoreC.innerHTML = pythagore.CInput.value;
        pythagore.pythagoreHypothenuse.innerHTML = Math.sqrt(pythagoreResult);
        pythagore.result1.innerHTML =
            "Hypothénuse = " +
            pythagore.BInput.value +
            "²" +
            "+" +
            pythagore.CInput.value +
            "²";
        pythagore.result2.innerHTML = "Hypothénuse = √" + pythagoreResult;
        pythagore.result3.innerHTML =
            "Hypothénuse = " + Math.sqrt(pythagoreResult);
        pythagore.h3.innerHTML =
            "L'hypoténuse de ce triangle mesure " +
            Math.sqrt(pythagoreResult) +
            "X";
    }
    parameter.white.addEventListener("click", () => {
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = "black";
        percent.text.style.color = "black";
        convertir.text.style.color = "black";
        calculator.text.style.color = "black";
        home.text.style.color = "black";
        pythagore.text.style.color = "black";
        document.body.style.color = "black";
    });
    parameter.black.addEventListener("click", () => {
        document.body.style.backgroundColor = "#131313";
        percent.text.style.color = "white";
        convertir.text.style.color = "white";
        calculator.text.style.color = "white";
        home.text.style.color = "white";
        pythagore.text.style.color = "white";
        document.body.style.color = "white";
    });

    pythagore.GetResultBtn.addEventListener("click", () =>
        pythagoreGetResult()
    );
    console.log(navigator.userAgent);
    if (window.matchMedia("(pointer:coarse)").matches) {
        console.log("d");
        document.getElementById("math").style.marginLeft = 30 + "%";
        document.getElementById("pythagoreResult").style.display =
            "inline-block";
        document.getElementById("pythagoreResult").style.marginTop = "50px";
        document.getElementById("pythagoreResult").style.marginLeft = 0 + "px";
        document.getElementById("pythagore").style.marginLeft = 10 + "%";
        document.getElementById("pythagore").style.marginTop = -70 + "%";
        document.getElementById("parameter").style.marginTop = -60 + "%";
        document.getElementById("parameter").style.marginLeft = 0 + "%";
    } else {
        document.getElementById("math").style.marginLeft = 10 + "%";
        document.getElementById("math").style.marginTop = 10 + "px";
        console.log("dd");
    }
};
