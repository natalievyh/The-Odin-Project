import "./styles.css"
import Home from "./home.js"
import Menu from "./menu.js"
import Contact from "./contact.js"

let homeBtn = document.querySelector("#home");
let menuBtn = document.querySelector("#menu");
let contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click",(e)=>{
    Home();
})
menuBtn.addEventListener('click',(e)=>{
    Menu();
})
contactBtn.addEventListener('click',(e)=>{
    Contact();
})

Home();