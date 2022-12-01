const checkBtn = document.querySelector("#check")
const outPut = document.querySelector("#output")

var ramData = {
    name: " ram",
    power: "2500",
    yuga: " Treta ",
}
var krishnaData = {
    name: " Krishna ",
    power: "2325",
    yuga: " Dwapar ",
}

checkBtn.addEventListener("click",function () {
    checkAge(ramData,krishnaData) } )

function checkAge(ramData, krishnaData) {
    if (ramData.power < krishnaData.power) {
        outPut.innerText = krishnaData.name
    } else {
        outPut.innerText = ramData.name
    }
}
