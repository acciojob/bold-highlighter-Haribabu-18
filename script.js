const strongEle = document.querySelectorAll("strong");
const paraEle = document.querySelector("p");

function highlight() {
    strongEle.forEach((val) => {
        val.style.color = "green"
    })
}


function return_normal() {
    strongEle.forEach((val) => {
        val.style.color = "black"
    })
}