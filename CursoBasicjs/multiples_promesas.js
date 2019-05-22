let p1 = new Promise((resolve,reject) => setTimeout(resolve,500,"Hola mundo"));

let p2 = new Promise((resolve,reject) => setTimeout(resolve,600,"Hola mundo 2"));

let p3 = Promise.reject();
//p1.then(console.log);
//p2.then(console.log);

let saluda = ()=> console.log("Saludos a todos");

//saluda();

Promise.all([p1,p2,p3]).then(resultados =>{
  console.log(resultados);
  saluda();
}).catch(()=> console.log("Falle!"));
