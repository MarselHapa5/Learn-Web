
let a= prompt("Первое число: ",1)
,operator = prompt("Оператор: ")
,b = prompt("Второе число: ",2)
,answer = 0


if (operator == "+"){
    answer = Number(a) + Number(b)
    alert(`${answer}`)
}
if (operator == "-"){
    answer = Number(a) - Number(b) 
    alert(`${answer}`)
}
if (operator == "*"){
    answer = Number(a) * Number(b) 
    alert(`${answer}`)
}
if (operator == "/"){
    answer = Number(a) / Number(b) 
    alert(`${answer}`)
}