let cost = 10
let sale = 20

if (cost <= 0 || sale <= 0 ){
    console.log("Entrada Invalida")
} else {
    let imposto = 1.2;
    let produtosVendidos = 1000;
    let custoTotal = cost * imposto;
    let lucro = sale - custoTotal;
    let lucroTotal = lucro * produtosVendidos;
    console.log(lucroTotal);
}