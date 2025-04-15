const clock = document.getElementById("clock")



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
},1000)      // kiten interval baaad contious run karwana he 