let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};
let infor = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain',
  nota: "Dell's Four Color Comics #178', 'O último MacPatinhas",
  recorrente: 'Sim',
};
for(let index  in infor , info){
  if (infor[index] === info[index]){
      console.log("Ambos recorrentes")
    }else
  

  console.log(info[index] + " e " + infor[index])
}

