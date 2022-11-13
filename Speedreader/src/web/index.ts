const settingsOpenButton = document.querySelector("[data-settingsOpenButton]")
const settingsCloseButton = document.querySelector("[data-settingsCloseButton]")
const overlay = document.getElementById("overlay")
const result = document.getElementById("resultText")
const userColor = document.getElementById("inputColor")
let stopFunction = false
let cookies : object

if (!document.cookie) cookies = {}
else{
    cookies = JSON.parse(document.cookie)
    result?.style.color = userColor.value = cookies["textColor"]
}


settingsOpenButton.addEventListener("click", () =>{
    console.log(settingsOpenButton.dataset)
    const popup = document.querySelector(settingsOpenButton.dataset.settingsopenbutton)
    openSettings(popup)
})

settingsCloseButton.addEventListener("click", () =>{
    const popup = settingsCloseButton?.closest(".settings")
    closeSettings(popup)
})

function openSettings(popup){
    if (popup == null) return
    popup.classList.add("active")
    overlay.classList.add("active")
}

function closeSettings(popup){
    if (popup == null) return
    popup.classList.remove("active")
    overlay.classList.remove("active")
}

function saveSettings(){
    cookies["textColor"] = userColor.value
    result?.style.color = cookies["textColor"]
    document.cookie = JSON.stringify(cookies)
}

async function startRead(){
    const button = document.getElementById("startButton")
    button.innerText = "Stop"
    button.setAttribute("onclick", "stopRead()")
    const text = document.getElementById("textInput").value
    const rate = (60/Number(document.getElementById("rateInput").value))*1000
    const wordArray = text.replace(/[\s\n\r]+/g, ' ').split(" ")


    console.log(wordArray.join(" ").substring(0, 200))
    for (let i of wordArray){
        if (!stopFunction){
        await sleep(rate)
        result.innerText = i
        }
    }
    stopFunction = false
    button.innerText = "Start"
    button.setAttribute("onclick", "startRead()")
    console.log("End of input")
}

function stopRead(){
    stopFunction = true
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 function testFill(){
    document.getElementById("textInput").value = shuffle("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, reprehenderit, eius commodi, voluptatum iure doloremque molestias ratione aspernatur recusandae minima laboriosam? Unde ipsum temporibus odit id magnam earum excepturi architecto?".split(" ")).join(" ")
 }

 function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }