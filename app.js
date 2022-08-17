let count = 0;
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let display = document.getElementById("display")

// btn.onclick = function(){
//     count++;
//     display.innerHTML = count++
//     display.style.color="red"
    
// }

// btn2.onclick = function(){
//     count--; 
//     display.innerHTML = count--;
//     display.style.color="green"

// }

btn.addEventListener("click",()=>{
    count++
    display.innerHTML=count++
    display.style.color="green"
})

btn2.addEventListener("click",()=>{
    count--
    display.innerHTML=count--
    display.style.color="red"
})