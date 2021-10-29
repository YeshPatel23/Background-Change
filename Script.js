const button = document.getElementById("btn")

button.addEventListener("click", function() {
    document.body.style.background = randomColors()
})

function randomColors() {
    return `hsl(${Math.floor(Math.random()*360)},100%, 50%)`
}
// Used IIFE (Immediately Invoked Function Expression)
// (function changeColor(){
//     setInterval((() => document.body.style.background = randomColors()), 
//         1000);
// })() 


// it can also work without if as seen line 17
setInterval((() => document.body.style.background = randomColors()), 1000);


// (Everthing below is the same as above)hence it will do the same thing as above
// const button = document.getElementById("btn")

// button.addEventListener("click", function() {
//    document.body.style.background = randomColors()
// })

// function randomColors() {
    // document.body.style.background =`hsl(${Math.floor(Math.random()*360)},100%, 50%)`
// }

// setInterval(randomColors,1000)


// (This the code for change colors with numbers instead of change me button)
// function randomBg(){
//     document.body.style.background = `hsl(${Math.floor(Math.random()* 360)}, 100%, 50%)`
// }

// setInterval(randomBg,1000)