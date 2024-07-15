const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const noNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const noSympols= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const noSympolsOrNumbers= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let firstpassEl = document.getElementById("firstpass-el")
let secondpassEl = document.getElementById("secondpass-el")
let copyIconOneEl = document.querySelector("#copyIconOne")
let copyIconTwoEl = document.querySelector("#copyIconTwo")
let checkOne = document.querySelector("#noNum-el")
let checkTwo = document.querySelector("#noSym-el")
let passLengthEl = document.getElementById("passlength")

function genPass() {
    
    firstpassEl.innerText = " "
    secondpassEl.innerText = " "
    let passval = passLengthEl.value

    if (checkOne.checked === true && checkTwo.checked === false) {
        for ( let i = 0 ; i < passval ; i++) {
            let randomIndexOne = Math.floor(Math.random() * noNumbers.length)
            firstpassEl.innerText += noNumbers[randomIndexOne]
            console.log(firstpassEl.innerText)
            
            let randomIndexTwo = Math.floor(Math.random() * noNumbers.length)
            secondpassEl.innerText += noNumbers[randomIndexTwo]
            console.log(secondpassEl.innerText)    
    } 
    } else if (checkOne.checked === false && checkTwo.checked === true) {
        for ( let i = 0 ; i < passval ; i++) {
            let randomIndexOne = Math.floor(Math.random() * noSympols.length)
            firstpassEl.innerText += noSympols[randomIndexOne]
            console.log(firstpassEl.innerText)
            
            let randomIndexTwo = Math.floor(Math.random() * noSympols.length)
            secondpassEl.innerText += noSympols[randomIndexTwo]
            console.log(secondpassEl.innerText)    
    }
    } else if (checkOne.checked === true && checkTwo.checked === true) {
        for ( let i = 0 ; i < passval ; i++) {
            let randomIndexOne = Math.floor(Math.random() * noSympolsOrNumbers.length)
            firstpassEl.innerText += noSympolsOrNumbers[randomIndexOne]
            console.log(firstpassEl.innerText)
            
            let randomIndexTwo = Math.floor(Math.random() * noSympolsOrNumbers.length)
            secondpassEl.innerText += noSympolsOrNumbers[randomIndexTwo]
            console.log(secondpassEl.innerText)    
    }
    } else if (checkOne.checked === false && checkTwo.checked === false) {
        for ( let i = 0 ; i < passval ; i++) {
            let randomIndexOne = Math.floor(Math.random() * characters.length)
            firstpassEl.innerText += characters[randomIndexOne]
            console.log(firstpassEl.innerText)
            
            let randomIndexTwo = Math.floor(Math.random() * characters.length)
            secondpassEl.innerText += characters[randomIndexTwo]
            console.log(secondpassEl.innerText)    
    }
    }

}

function copyTextOne() {
    let codeOne = firstpassEl.innerText
    navigator.clipboard.writeText(codeOne)
    console.log("copy :" , codeOne)
}

copyIconOneEl.addEventListener("click" , copyTextOne)

function copyTextTwo() {
    let codeTwo = secondpassEl.innerText
    navigator.clipboard.writeText(codeTwo)
    console.log("copy :" , codeTwo)
}

copyIconTwoEl.addEventListener("click" , copyTextTwo)

