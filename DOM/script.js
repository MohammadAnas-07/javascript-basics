// query selector - only perform the First Element 

/* const div = document.querySelector("div")
div.innerHTML = "<h1>This is Hacked!</h1>" */

/* const userName = document.querySelector("#username")
userName.innerText = "Shamim" */

// getElement

const el = document.getElementById("username")
el.innerText = "John Dave"
el.classList.add("red-color")
setTimeout(()=>{
    el.classList.add("underline")
},2000)