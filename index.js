/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("num-el")
const conBtn = document.getElementById("con-btn")
const ansL = document.getElementById("ans-l")
const ansV = document.getElementById("ans-v")
const ansM = document.getElementById("ans-m")

conBtn.addEventListener("click", function(){
        ansL.innerHTML = `<p id="ans-l">${equation("meters", "feet", 3.28084)}</p>` 
        ansV.innerHTML = `<p id="ans-v">${equation("liters", "gallons", 0.264172)}</p>`
        ansM.innerHTML = `<p id="ans-m">${equation("kilos", "pounds", 2.20462)}</p>`
})

function equation(unitA, unitB, num){
  let answerA = inputEl.value * num
  let answerB = inputEl.value / num
  let result = `${inputEl.value} ${unitA} = ${answerA.toFixed(3)} ${unitB} | ${inputEl.value} ${unitB} = ${answerB.toFixed(3)} ${unitA}`
  return result
}



