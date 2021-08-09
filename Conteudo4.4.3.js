let numbers = [2, 3, 6, 7, 10, 1];
let maiorNumero = 0 
function numeros(numbers) {
  for (var numeros = 0; numeros <= numbers.length; numeros++) { 
    if (maiorNumero < numbers[numeros]) {
      maiorNumero = numbers[numeros];
      //console.log(maiorNumero)
      
    }
    
  }console.log([maiorNumero])
}

numeros(numbers);

