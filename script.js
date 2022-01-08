/* 
Control Flow
formato do if e else
ex:
if (condicional){
  codigo executado caso a condição seja satisfeita
}else if {
  para uma necessidade de mais de uma condição
}else{
  caso a condição do if não seja satisfeita
}


let temperature = 37.4

if(temperature >= 37.5){
  console.log('febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
  console.log('febre moderada')
} else{
  console.log('saudável')
}


Switch 

let expression = 'a'

switch(expression) {
  case 'a':
    //código 
    console.log('primeira expressão')
    break
    case 'b':
      console.log('segunda expressão')
      break
      default:
        console.log('sem expressões detectadas')  
      }
      
      
Exercício calculadora      
      */
      
function calculate(number1 , operator , number2) {
let result  

switch (operator) {
  case '+':
    result = number1 + number2
    break
case '-':
result =  number1 - number2
break
case'*': 
result = number1 * number2
break
case '/':
result = number1 / number2
break
  default:
    console.log('método não implementado')
    break;
}

return result

}

console.log(calculate(2  , '*' , 3))


