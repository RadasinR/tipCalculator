let Tip = undefined;
let bill = undefined;
let numP = undefined;

function calcTip() {
    if (Tip != undefined && bill != undefined && numP != undefined) {
        console.log(Tip, bill, numP);
        let total = bill * Tip;
        let splitTip = total / numP;
        document.querySelector("#totalTip").innerText = total.toFixed(2);
        document.querySelector("#perPerson").innerText = splitTip.toFixed(2);
        let reset = document.querySelector(".btn---reset");
        reset.disabled = false;
    } 
}

function enterBill(elem) {
    let label = document.getElementById("labelBill");
    let error = label.querySelector(".error__message");

    elem.classList.remove("error__input");
    error.innerText = "";

    if (!valid(elem.value)) {
        elem.classList.add("error__input");
        error.innerText = "Enter a positiv number.";
        bill = undefined;
        return;
    }

    bill = elem.value;
}

function enterTip(elem) {
    let label = document.getElementById("labelTip");
    let error = label.querySelector(".error__message");

    elem.classList.remove("error__input");
    error.innerText = "";

    let selected = document.querySelector(".btn---selected");
    if (selected) {
        selected.classList.remove("btn---selected");
    }
    
    if (!valid(elem.value, 0, 100)) {
        elem.classList.add("error__input");
        error.innerText = "Enter a number ( 0 to 100)";
        Tip = undefined;
        return;
    }

    Tip = elem.value / 100;
}

function tip(elem) {
    /* reset input for tip */
    let label = document.getElementById("labelTip");
    let error = label.querySelector(".error__message");
    let field = document.querySelector(".field---custom");
    field.classList.remove("error__input");
    error.innerText = "";

    let selected = document.querySelector(".btn---selected");
    if (selected != null) {
        selected.classList.remove("btn---selected");
    }
    elem.classList.add("btn---selected");
    Tip = Number(elem.innerText.replace("%", "")) / 100;
    calcTip();
}

function enterPeople(elem) {
    let label = document.getElementById("labelNumPeople");
    let error = label.querySelector(".error__message");

    elem.classList.remove("error__input");
    error.innerText = "";

    if (!valid(elem.value)) {
        elem.classList.add("error__input");
        error.innerText = "Can't be zero.";
        numP = undefined;
        return;
    }

    numP = elem.value;
}

function valid(value, min = 0, max = undefined) {
    if (isNaN(Number(value))) {
        return false;
    }
    if (value <= min) {
        return false;
    }
    if (value > max) {
        return false;
    }
    return true;
}

function start() {

    console.log("reseting");
    document.getElementById("tipCalculator").reset();
    document.querySelector(".btn---reset").disabled = true;
    document.querySelector("#totalTip").innerText = "0.00";
    document.querySelector("#perPerson").innerText = "0.00";
    document.querySelector(".btn---selected").classList.remove("btn---selected");
    Tip = undefined;
    bill = undefined;
    numP = undefined;

}