const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let colour = '#'

    for(let i = 0 ; i<6 ; i++){
        colour += hex[Math.floor(Math.random() * 16)]
        console.log(colour)
    }
    return colour
}
let Id
const start_changing_colour = function(){

    function change_colour(){
        document.body.style.backgroundColor = randomcolor()

    }

    if(!Id){
        Id =  setInterval(change_colour,1000)
        console.log("started:")
      }
}

const stop_changing_colour = function(){

clearInterval(Id);
console.log("stopped:")
Id = null

}

document.querySelector("#start").addEventListener("click" , start_changing_colour)

document.querySelector("#stop").addEventListener("click" , stop_changing_colour)