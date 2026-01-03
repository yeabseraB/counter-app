const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countDisplay = document.getElementById("count");
 let count = 0;
 function updateDisplay(){
    countDisplay.textContent = count;
//color changes
 if(count >0){
    countDisplay.style.color ="green";
 }else if(count <0){
    countDisplay.style.color ="red";
 }else{
    countDisplay.style.color ="blue";
 }
 countDisplay.style.transform ="scale(1.2)";
 setTimeout(()=>{
    countDisplay.style.transform ="scale(1)";
 },150);
 }
 //button functions
 increaseBtn.onclick = function(){
    count++;
    updateDisplay();
 }
 decreaseBtn.onclick = function(){
    count--;
    updateDisplay();
 }
 resetBtn.onclick = function(){
    count =0;
    updateDisplay();
 }
    updateDisplay();
 