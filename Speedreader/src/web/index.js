"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function startRead() {
    return __awaiter(this, void 0, void 0, function* () {
        const text = document.getElementById("textInput").value;
        const rate = (60 / Number(document.getElementById("rateInput").value)) * 1000;
        const result = document.getElementById("resultText");
        const wordArray = text.replace(/\s\s+/g, ' ').split(" ");
        for (let i of wordArray) {
            yield sleep(rate);
            result.innerText = i;
        }
        console.log("End of input");
    });
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function testFill() {
    document.getElementById("textInput").value = shuffle("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, reprehenderit, eius commodi, voluptatum iure doloremque molestias ratione aspernatur recusandae minima laboriosam? Unde ipsum temporibus odit id magnam earum excepturi architecto?".split(" ")).join(" ");
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
