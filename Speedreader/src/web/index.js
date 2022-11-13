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
const settingsOpenButton = document.querySelector("[data-settingsOpenButton]");
const settingsCloseButton = document.querySelector("[data-settingsCloseButton]");
const infoOpenButton = document.querySelector("[data-infoOpenButton]");
const infoCloseButton = document.querySelector("[data-infoCloseButton]");
const overlay = document.getElementById("overlay");
const result = document.getElementById("resultText");
const userColor = document.getElementById("inputColor");
const userSize = document.getElementById("inputSize");
let stopFunction = false;
let cookies;
if (!document.cookie)
    cookies = {};
else {
    cookies = JSON.parse(document.cookie);
    result === null || result === void 0 ? void 0 : result.style.color = userColor.value = cookies["textColor"];
}
settingsOpenButton.addEventListener("click", () => {
    const popup = document.querySelector(settingsOpenButton.dataset.settingsopenbutton);
    openPopup(popup);
});
settingsCloseButton.addEventListener("click", () => {
    const popup = settingsCloseButton === null || settingsCloseButton === void 0 ? void 0 : settingsCloseButton.closest(".settings");
    closePopup(popup);
});
infoOpenButton.addEventListener("click", () => {
    console.log(infoOpenButton.dataset);
    const popup = document.querySelector(infoOpenButton.dataset.infoopenbutton);
    openPopup(popup);
});
infoCloseButton.addEventListener("click", () => {
    const popup = infoCloseButton === null || infoCloseButton === void 0 ? void 0 : infoCloseButton.closest(".info");
    closePopup(popup);
});
overlay.addEventListener("click", () => {
    let popup;
    if (settingsCloseButton === null || settingsCloseButton === void 0 ? void 0 : settingsCloseButton.closest(".settings").classList.toString().includes("active")) {
        popup = settingsCloseButton === null || settingsCloseButton === void 0 ? void 0 : settingsCloseButton.closest(".settings");
    }
    else if (infoCloseButton === null || infoCloseButton === void 0 ? void 0 : infoCloseButton.closest(".info").classList.toString().includes("active")) {
        popup = infoCloseButton === null || infoCloseButton === void 0 ? void 0 : infoCloseButton.closest(".info");
    }
    closePopup(popup);
});
function openPopup(popup) {
    if (popup == null)
        return;
    popup.classList.add("active");
    overlay.classList.add("active");
}
function closePopup(popup) {
    if (popup == null)
        return;
    popup.classList.remove("active");
    overlay.classList.remove("active");
}
function saveSettings() {
    cookies["textColor"] = userColor.value;
    cookies["textSize"] = userSize.value;
    result === null || result === void 0 ? void 0 : result.style.color = cookies["textColor"];
    result === null || result === void 0 ? void 0 : result.style.fontSize = `${cookies["textSize"]}mm`;
    document.cookie = JSON.stringify(cookies);
}
function startRead() {
    return __awaiter(this, void 0, void 0, function* () {
        const button = document.getElementById("startButton");
        button.innerText = "Stop";
        button.setAttribute("onclick", "stopRead()");
        const text = document.getElementById("textInput").value;
        const rate = (60 / Number(document.getElementById("rateInput").value)) * 1000;
        const wordArray = text.replace(/[\s\n\r]+/g, ' ').split(" ");
        console.log(wordArray.join(" ").substring(0, 200));
        for (let i of wordArray) {
            if (!stopFunction) {
                yield sleep(rate);
                result.innerText = i;
            }
        }
        stopFunction = false;
        button.innerText = "Start";
        button.setAttribute("onclick", "startRead()");
        console.log("End of input");
    });
}
function stopRead() {
    stopFunction = true;
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
