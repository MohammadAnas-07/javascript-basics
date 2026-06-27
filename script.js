// Guess the number

/* let number = 40
let guess = 0

do{
     guess = parseInt( prompt("Guess the number")) 
    if(guess == number){
        alert('Winner')
        break;
        console.log(guessNo())    
    }
}while(guess != 0)
 */


// Function

/* function sayHello(){
    console.log("Anas")
}
sayHello() */


//Parameter
/* function add(num1,num2){
    console.log(num1 + num2)
}

add(10,5) //parameter
add(2,8)
add(4,9) */

/* function multiply(a,b){
    let ans = a*b;
    return ans;
}
const result = multiply(10,20)
console.log("That hey user result is" , result) */


//Unlimited Arguments accept

/* function addNumbers(...numbers){ //spread operator
    let ans = 0
    for(let i = 0; i < numbers.length; i++){

        ans = ans + numbers[i]
    }
    return ans;
}
let result = addNumbers(1,2,31,42,56)
console.log(result)
 */


// '1.arguments' keyword
/* const addNumbers1 = (...nums) =>{
    console.log(nums)
}
addNumbers1(10, 22, 33, 44, 5)
 */


// 2.Hoisting
//Normal Function
sayHey()

function sayHey(){
    console.log("Heyy there")
}

//arrow function
/* const sayHey1 = ()=>{
    console.log('Hey there')
}
sayHey1()

// 3. This Keyword

const obj = {
    vale: 20,
    myFunction: function(){
        console.log(this.vale)
    }
}
obj.myFunction() */


//High Order Function and Callback

/* function add(a,b, cb){
    let result = a + b;
    cb(result)

    return () => console.log("result: ",result)
}
let resultFunction = add(2,4, () => {})
resultFunction() */


//Arrays

const students = ["Anas","John","Jane"]
const marks = [1,2,3,4,5]

const myMarks = [6, true, 'Anas','😊']
const merged = [...marks,...myMarks]

students[0] = "Mohammad Anas"
students.push('Alexa')
students.reverse()
console.log(students[0],students)
console.log(merged)
console.log(myMarks.indexOf('Anas'))


// Arrays High Order Function



