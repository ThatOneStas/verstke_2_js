// Exeptions

try{
    result = 1/0
    alert(result)
}catch(err){
    alert(err)
}finally{
    alert('Anyway')
}

// Loops

let a=0
while(a<=5){
    console.log(a)
    a++
}

console.log('_________')

a = 0
do{
    console.log(a)
    a++
}while(a<=5)

console.log('_________')

// For

for(i=0; i <= 10; i++){
    console.log(i)
}

console.log('_________')

let arr = [1,3,'p']
arr.map((item)=>{
    console.log(item)
})

// Conditionals

a = prompt('Vvedit temperaturu:')
if(a>10){
    alert('teplo')
}
else if(a<=10 && a>0){
    alert('pomirno')
}
else{
    alert('holodno')
}

let salary = null // null +- = false
if(salary){
    alert('Ви працюєте!')
}
else{
    alert('Ви не працюєте')
}

salary ? alert('Ви працюєте!') : alert('Ви не працюєте')

// Switch

let c = 4
switch(c){
    case 2:
        alert('2')
    case 3:   
    case 4:
        alert('4')
}

// Listeners

    // start point

// DOM - document obj model
// BOM - browser obj model
document.addEventListener("DOMContentLoaded", ()=>{
    const BODY = document.querySelector('body')
    const RED_BTN = document.querySelector('.main_btn')
    RED_BTN.addEventListener("click", (e)=>{
        e.preventDefault()
        // метод за стильом в скрипті
        // ліпше за класами
        BODY.style.backgroundColor = "#f00"
    })
})