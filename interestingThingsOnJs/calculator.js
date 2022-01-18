
let a= prompt("Первое число: ",1)
let operator = prompt("Оператор: ")
let b = prompt("Второе число: ",2)
let answer = 0


if (operator == "+"){
    answer = Number(a) + Number(b)
    console.log(`${answer}`)
}
if (operator == "-"){
    answer = Number(a) - Number(b) 
    console.log(`${answer}`)
}
if (operator == "*"){
    answer = Number(a) * Number(b) 
    console.log(`${answer}`)
}
if (operator == "/"){
    answer = Number(a) / Number(b) 
    console.log(`${answer}`)
}