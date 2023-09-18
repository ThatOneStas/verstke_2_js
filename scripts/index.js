var test1 = "test1" // - bida

let test2 = "test2" // - defolt

// console.log(test1, test2)

let nameUser,age,surname

nameUser = 'John'
age = 22
surname = 'Doe'

const PI = 3.14

// console.log(`${nameUser} ${surname} ${age}`)
console.log(typeof age)

// - text methods -

console.log(nameUser.toUpperCase())
console.log(nameUser.toLowerCase())
console.log(nameUser.length)

let text = 'test Test test'

console.log(text.replaceAll(" ", ""))
console.log(text[0])
console.log(PI)

let result = 56 > 3
console.log(result)

// - Array -

let temp_arr = [1,2,3,4,'test']
temp_arr.push('last') // add last
temp_arr.unshift('first') // add first
temp_arr.push('last_2')
temp_arr.unshift('first_2')
temp_arr.pop() // del last
temp_arr.shift() // del first

console.log(temp_arr)

console.log(temp_arr.splice(5,1)) // cut element

console.log(temp_arr.indexOf('last')) // find index

// smth like - for -

let fruits_arr = ['apple','pineapple','banana']
fruits_arr.forEach((fruit, index)=>{
    console.log(fruit, index)
})  // цикли як методи
fruits_arr.map((fruit, index)=>{
    console.log(fruit, index)
})

// filter FULL VER

let filteredFruits = fruits_arr.filter((fruit)=>{
    if(fruit == 'banana'){
        return fruit
    }
})
console.log(filteredFruits)

// filter SHORT VER

filteredFruits = fruits_arr.filter(fruit => fruit == 'apple')
console.log(filteredFruits)

// sort desc

let numberArr = [1,5,2,6,0]
numberArr.sort((a,b)=>{
    return a - b
    // return a - b
})
console.log(numberArr)

// - Object (dict) -

let tempUser = {
    name: "John",
    surname: "Doe",
    age: 21,
    adress: [],
    dict: {
        testDict: 'textDict'
    }
}
console.log(tempUser.name)
console.log(tempUser.dict.testDict)

tempUser.test = 'textAdd' // add element
console.log(tempUser.test)

// destruct object
const {name,dict} = tempUser
console.log(name,dict)

delete tempUser.age
console.log(tempUser)

// - Func -



// - Listeners -

