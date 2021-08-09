let numbers = [2, 4, 6, 7, 10, 0, -3];
let menorNumero = 0
function numeros(numbers) {
  for (var numeros = 0; numeros <= numbers.length; numeros++) { 
     
    if (menorNumero > numbers[numeros]) {
      menorNumero = numbers[numeros];
   
      
    }
    
  }console.log([menorNumero])
}

numeros(numbers);

