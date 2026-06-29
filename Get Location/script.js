const button = document.getElementById("get-location-button")

async function gotLocation(position){
    console.log(position)

}

function failedToGet(){
    console.log("There was some issues")
}

button.addEventListener("click", async ()=>{
    const result = navigator.geolocation.getCurrentPosition(gotLocation,failedToGet)

})