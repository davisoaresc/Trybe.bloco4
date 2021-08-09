//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista
 //nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
 let number= []
 for (index = 0 ; index < numbers.length ; index += 1 ){
     if (numbers[index] % 2 == 1){
         number.push(numbers[index])
         }
         else{
            console.log("Nao existe valor impar")
      }
      
    }
 console.log(number.length);