function calcular(){
  return  new Promise((resolve,reject) => setTimeout(resolve, 500, "Primer promesa"));
}


function calcularDos(mesajePromesa1){
  console.log(mesajePromesa1);
  return  new Promise((resolve,reject) => setTimeout(resolve, 100, "Segunda promesa"));
}

calcular().then(calcularDos).then(console.log);
