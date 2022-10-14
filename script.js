var headingElement2 = document.querySelector('.box .heading-2'),
    headingElement = document.querySelector('heading')
var boxNode = document.querySelectorAll('.box-1')
console.log(boxNode[0])
//Event click
// TH1: onclick vào thẳng thẻ
// TH2: get vào element
// headingElement2.onclick = function(e){
//     console.log(e.target)
// }
var inputElement = document.querySelector('input[type="text"]'),
    checkboxElement = document.querySelector('input[type="checkbox"]'),
    valueElement = document.querySelector('select')
console.log(inputElement)
inputElement.oninput = function(e){
    console.log(e.target.value)
}
// Lấy từ bàn phím 
inputElement.onkeyup = function(e){
    console.log(e.which)
    switch(e.which){
        case 27:
            console.log("Exit")
            break
        case 13:
            console.log("SEND CHAT")
            break
    }
}
// Hiện ra check hay chưa
checkboxElement.onchange = function(e){
    console.log(e.target.checked)
}
// In ra value
valueElement.onchange = function(e){
    console.log(e.target.value)
}

var btn = document.getElementById('btn')
function viec1(){
    console.log('viec 1')
}
btn.addEventListener('click',viec1)
setTimeout(function() {
    btn.removeEventListener('click',viec1)
},3000)