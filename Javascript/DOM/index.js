// Find HTML elements
// let TagName = document.getElementsByTagName("div")[0]    // select element by tag name
// let Id = document.getElementById("byId") // select element by id
// let Class = document.getElementsByClassName("byClass")[0]    // select element by class
// let QSelector = document.querySelectorAll("div")    // it gives list of select div elements
// let QSelector = document.querySelector("div")       // it gives first occurence of div 
// let QSelector = document.querySelector("div.byClass")   // give that div whose class is byClass.
// let QSelector = document.querySelector("div#byId")   // give that div whose id is byId

// Change attribute values
// document.getElementsByTagName("img")[0].alt = "nature image"
// document.getElementsByTagName("img")[0].src = "../images/img2.jpg"
// let img = document.getElementsByTagName("img")[0]
// console.log(img)

// Javascript Forms
// function validateNumber() {
//     let text;
//     let num = document.getElementsByTagName("input")[0].value
//     if (isNaN(num) || num < 1 || num > 10) {
//         text = "Invalid input number"
//     } else {
//         text = "It's OK";
//     }
//     document.getElementsByClassName("op")[0].innerHTML = text
// }

// Change CSS
// let num = true;
// function changeColor() {
//     num ? document.getElementsByTagName("h1")[0].style.color = "red" : document.getElementsByTagName("h1")[0].style.color = "yellow"
//     num = !num
// }

// Events
// function changeText(id){
//     id.innerHTML = "helo"
//     console.log(id)
// }

// function uppercase(){
//     let data = document.getElementById("fname")
//     console.log(data.value)
//     data.value = data.value.toUpperCase()
// }

// function Mover(obj){
//     obj.style.color = "red"
//     obj.style.fontSize = "20px"
//     obj.innerHTML = "Thank you"
// }
// function out(obj){
//     obj.style.color = "white" 
//     obj.style.fontSize = "20px"
//     obj.innerHTML = "Hey Vaibhav"
// }

// EventListener
// document.getElementsByTagName("button")[0].addEventListener("click", showDate);
// function showDate(){
//     // document.getElementById("demo").innerHTML = Date()
//     document.querySelector("p#demo").innerHTML = Date()
// }
// document.querySelector("button#btn").addEventListener("click", clicked)
// document.querySelector("button#btn").addEventListener("mouseover", mover)
// document.querySelector("button#btn").addEventListener("mousedown", mdown)
// document.querySelector("button#btn").addEventListener("mouseup", mup)
// function clicked(){
//     console.log("clicked")
// }
// function mover(){
//     console.log("over")
// }
// function mdown(){
//     console.log("pressed")
// }
// function mup(){
//     console.log("un-pressed")
// }
// console.log(window.innerWidth)
// window.addEventListener("resize",function(){
//     console.log(window.innerWidth)
// })

// Creating new Element
// const newPara = document.createElement("p");
// newPara.innerHTML = "Third P tag"
// newPara.id = "abc"
// document.getElementsByTagName("div")[0].appendChild(newPara)
// document.getElementsByTagName("div")[0].insertBefore(newPara,document.querySelector("div").firstChild)

// Delete node
// document.querySelector("p").remove()
// const parent = document.querySelector("div")
// const child = document.querySelector("p")
// parent.removeChild(child)

