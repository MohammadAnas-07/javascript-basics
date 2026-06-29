const button = document.getElementById("clickButton")
const uName = document.getElementById("input-username")
const userName = document.getElementById("username")


button.addEventListener("click", ()=>{
    const value = uName.value
    localStorage.setItem('name',value)
    /* userName.innerText = value */
    location.reload()

})

window.addEventListener('load',()=>{
    const value = localStorage.getItem('name')
    userName.innerText = value
 }
)