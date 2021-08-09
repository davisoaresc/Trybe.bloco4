//Agora inverta o lado do triângulo. Por exemplo:
//n = 5

//    *
//   **
//  ***
// ****
//*****

let base = 5;
let asterisco = "*";
let espaco = " ";

for (let linhaContador = 1; linhaContador <= base; linhaContador += 1) {
  let linha = '';

  for (let colunaContador = base; colunaContador >= 1; colunaContador--) {
    if (colunaContador > linhaContador) {
      linha += espaco;
    } else {
      linha += asterisco;
    }
  }

  console.log(linha);
}

//

// i = 5 | index = 1
// 5 - e
// 4 - e
// 3 - e
// 2 - e
// 1 - *

// i = 5 | index = 2
// 5 - e
// 4 - e
// 3 - e
// 2 - *
// 1 - *

// i = 5 | index = 3
// 5 - e
// 4 - e
// 3 - *
// 2 - *
// 1 - *
