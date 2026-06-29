// query selector - only perform the First Element 

/* const div = document.querySelector("div")
div.innerHTML = "<h1>This is Hacked!</h1>" */

/* const userName = document.querySelector("#username")
userName.innerText = "Shamim" */

// getElement

/* const el = document.getElementById("username")
el.innerText = "John Dave"
el.classList.add("red-color")
setTimeout(()=>{
    el.classList.add("underline")
},2000) */

/* const elements = document.getElementsByClassName("block")
for( let i = 0; i < elements.length; i++ ){
    elements[i].style.background = "blue"
}

// Better approach: querySelectorAll()
const els = document.querySelectorAll(".remove");

els.forEach((el) => {
    el.classList.remove("remove");
}); */


// Event Listener

/*  const el = document.getElementById("clickButton")
 el.addEventListener("click",()=>{
    console.log("Hi")
 })
 el.addEventListener("click",()=>{
    console.log("Anas")
 }) */