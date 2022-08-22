const inputEl = document.getElementById("input-el")
const convert = document.getElementById("convert")
const mtf = document.getElementById("mtf")

convert.addEventListener("click",function(){
    const input = inputEl.value
     const mToF= input.value*3.281
     const ftoM = input.value/3.281
     mtf.innerHTML ='${inputEl.value}'
})






/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/