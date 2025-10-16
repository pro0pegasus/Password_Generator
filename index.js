const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password")
let passwordEl2 = document.getElementById("password2")

function randomPwd() {
    return characters[Math.floor(Math.random()*characters.length)]
}

function getPwd(length=15) {
    let p1 = ""
    let p2 = ""
    for (let i = 0; i < length; i++) {
        p1+=randomPwd()
        p2+=randomPwd()
    }
    passwordEl.value = p1
    passwordEl2.value = p2
}

function generatePasswords() {
    getPwd()
    //if (generateBtn) {
    //    generateBtn.addEventListener("click", generatePasswords)
//}
}

// Attach event listener so it works even if inline handlers are blocked by CSP


// Also expose for inline onclick or module-bundled builds
//window.generatePasswords = generatePasswords