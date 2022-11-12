
async function startRead(){
    const text = document.getElementById("textInput").value
    const rate = (60/Number(document.getElementById("rateInput").value))*1000
    const result = document.getElementById("resultText")
    const wordArray = text.replace(/\s\s+/g, ' ').split(" ")

    for (let i of wordArray){
        await sleep(rate)
        result.innerText = i
    }
    console.log("End of input")
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