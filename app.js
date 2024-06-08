document.querySelector(".button").addEventListener("click",function(){
    a = document.querySelector(".ekran")
    a.value = parseInt(a.value) +1;

    console.log( a.value);
})

document.querySelector(".delete").addEventListener("click",function(){
    a = document.querySelector(".ekran")
    tugat = 0
    a.value = tugat

    console.log("tugat");
})


