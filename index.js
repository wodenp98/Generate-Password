let upperCase = "ABCDDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbols = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"

let passwordLength = 6

let newPassword = upperCase + lowerCase + numbers + symbols

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let password3 = document.getElementById("password3")
let password4 = document.getElementById("password4")

function generatePassword() {
    password1.textContent = ""
    password2.textContent = ""
    password3.textContent = ""
    password4.textContent = "" 
    
    for (let i = 0 ; i < passwordLength; i++) {
        password1.textContent += newPassword[Math.floor(Math.random() * (newPassword.length))]
        password2.textContent += newPassword[Math.floor(Math.random() * (newPassword.length))]
        password3.textContent += newPassword[Math.floor(Math.random() * (newPassword.length))]
        password4.textContent += newPassword[Math.floor(Math.random() * (newPassword.length))]
        
    }
}