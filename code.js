const inputEl = document.getElementById("input-el")
const convert = document.getElementById("convert")
const mtf = document.getElementById("mtf")

convert.addEventListener("click",function(){
    const input = inputEl.value
    const mToF= input*3.281.toFixed(3)
    const ftoM = input/3.281.toFixed(3)
     mtf.innerHTML =`${input} meters = ${mToF} feet | ${input} feet = ${ftoM} meters`
})






/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/