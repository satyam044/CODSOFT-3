let display = document.querySelector(".container input")
let button = document.querySelectorAll(".button")
let prev = document.querySelector(".prev")
let beforeeval = document.querySelector(".beforeeval")

let string = ""

Array.from(button).forEach((button) => {
    button.addEventListener("click", (e) => {
        let prevtarget = string + "="
        if (e.target.innerHTML === "=") {
            string = eval(string);
            display.value = string;
            prev.innerHTML = prevtarget + Math.floor(string);
            beforeeval.innerHTML = "";
        }
        else if (e.target.innerHTML === "AC") {
            string = "";
            display.value = string;
            prev.innerHTML = "";
            beforeeval.innerHTML = "";
        }
        else if (e.target.innerHTML === "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else {
            string = string + e.target.innerHTML
            display.value = string;
            beforeeval.innerHTML = eval(string);
        }
    })
})