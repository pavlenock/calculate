// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let plus = document.querySelector(".btn-primary")
let minus = document.querySelector(".btn-secondary")
let muliply = document.querySelector(".btn-success")
let divide = document.querySelector(".btn-danger")
let equal = document.querySelector(".btn-info")

let number1 = document.querySelector("#number1")
let number2 = document.querySelector("#number2")
let cardResult = document.querySelector(".card-body")

let buttons = document.querySelector(".buttons")

let res
buttons.addEventListener("click", calculate)
function calculate (e){
    let a = +number1.value
    let b = +number2.value
    if(e.target == plus) {
       res = a + b 
    } else if (e.target == minus){
        res = a - b
    } else if (e.target == muliply){
        res = a * b
    } else if (e.target == divide){
        res = a / b
    }
}
equal.addEventListener("click", result)
function result () {
    cardResult.innerText = `result ${res}`
}