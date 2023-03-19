// const add = document.querySelector(".add");
// const resetCounter = document.querySelector(".reset");
// const subtract = document.querySelector(".subtract");
const count = document.querySelector(".count");
const button = document.querySelector(".buttons");

button.addEventListener("click" , (e) => {
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor()
    }
    if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor()
    }
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor()
    }
});

function setColor() { 
    if(count.innerHTML > 0 ){
        count.style.color = "green";
    }else if (count.innerHTML < 0){
        count.style.color = "orange";
    }else{
        count.style.color = "#fff";
    }
}


// add.addEventListener("click",() => {
//     count.innerHTML++;
// });

// resetCounter.addEventListener("click",() => {
//     count.innerHTML = 0;
// });

// subtract.addEventListener("click",() => {
//     count.innerHTML--;
// });