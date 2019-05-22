# Curso de Javascript Pro - CF

* Documentación
https://developer.mozilla.org/es/
https://www.w3schools.com/jsref/default.asp
https://codigofacilito.com/categories/javascript

* Herramientas

- Navegador: Chrome
- IDE: Atom, Sublime
- Node.js
- npm

## Características técnicas de javascript

- Lenguaje basado en prototipos
- Interpretado.
- Tipado dinamicamente
- Debilmente Tipado
- Case Sensitive

## Conceptos Básicos

* *Variables y constantes*

https://mothereff.in/js-variables
https://jsbin.com/?html,console,output

let nombre = "Juan";
var nombre = "juan";
const pi = 3.1416;

> Se deben usar estas palabras reservadas para declarar variables, de lo contrario se asignan al scope global.

> " let y const " tienen alcance dentro del bloque mas próximo, " var "  tiene alcance dentro de la función mas próxima.

* *Operaciones matematicas*
Tener en cuenta *Math* , ademas de las operaciones comunes
https://www.w3schools.com/js/js_math.asp

* *Operadores de comparación*

> Cuando se usa "===" compara no solo el valor sino el tipo de dato

> Cuando esta el operador "or" no se ejecuta si se cumple omite lo que sigue

* *Undefined, null y nan*

> Undefined : Es el valor de una variable cuando no se le ha asignado nada o no se ha definido ("Es un tipo de dato")
> null : Indica la ausencia de valor
> NaN : Indica que "No es un numero" o Infinito el lugar de otros que da error

## *Funciones y Scope*

> Funciones anonimas: aquellas que no se les asigna nombre

````Javascript
function(){
}
````

> Arrow functions :

````Javascript
let funcion = ()=>{}

let funcion = ()=> //sin llaves cuando es una sola linea

````

* *Scope*

````Javascript
//Scope de Alcance global - Cuando la variable se define globalmente (NO SE RECOMIENDA USAR)
let variable;
function(){};

//Scope local - se define al interior de una función. (Lo mas recomendado bajo el Principio de menor acceso)
function(){
  let variable;

}
````

* *Argumentos y parametros en funciones*

> El argumento es lo que se pasa y el parametro lo que recibe la función
> A los parametros se les puede asignar valores por defecto, los cuales deben ser declarados al final de la lista de paramteros a recibir la funcion

````Javascript
function(parametro1, parametro2 = 0){}
````

> A una función se le pueden pasar n cantidad de argumentos asi no esten declardos en la funcion como parametros y se manipulan con la palabra "arguments[]"

````Javascript

function numeros(num, str2){
  arguments[0] ...
}

numeros(1, "hola",3,5,"hola de nuevo");
````

* *El contexto (this)*
````Javascript
//El contexto es el objeto de donde se manda llamar la funcion this
console.log(this); //alcance global
//Arrow functions y el contexto
 ()=> (num, str2){} // No modifica el contexto de this

````

* *Call Apply y Bind*
Call: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/call
Apply: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/apply
Bind: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

````Javascript
function executor(funcion){
  funcion.call(alumno);
  //funcion.apply(alumno); //se pasan parametros como argumentos
  //funcion();//Con bind se deja la funcion tal cual
}

let alumno = {
  nombre: "Marcos",
  apellido: "Cid de la Paz",
  nombreCompleto: function(){
    console.log(this.nombre + " " + this.apellido);
  }
}

//¿Por qué al ejecutar esto obtengo como resultado en la consola "Marcos undefined"?
executor(alumno.nombreCompleto.bind(alumno));

````
## Arreglos
https://www.w3schools.com/js/js_arrays.asp
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3schools.com/js/js_array_iteration.asp
*Métodos y operaciones sobre arreglos*
````Javascript

let arreglo = [1,2,3,4,5,6];
//Recorrer
for(let i; i <= arreglo.lenght;i++){} //Mas rapido
arreglo.forEach(fuction(elemento){})
for(numero of arreglo){ console.log(numero)} //irtera sobre los valo0res
for(propiedad in objeto){ console.log(propiedad)} //itera sobre las propiedades
//Funciones
arreglo.filter( el => el != 0) //Filtrar arreglos
arreglo.find( el => el == 2) //buscar elemento
arreglo.map( el => el * 2) //mapiar
//.join(), .indexOf(), .concat(), .reverse(), .slice(), .push(), .shift(), .pop().
````
## Objetos
````Javascript
//dclarar
let objeto = {uno:"uno",dos:2,inscribir:function(){}...}

````
*funciones constructoras*
https://www.w3schools.com/js/js_object_methods.asp
````Javascript
//COMO CONVENION LA PRIMERA LETRA DEBE SER MAYUSCULA
function Funcion(titulo){
  this.titulo: titulo;
  this.inscribir: funcion(usuario){
    console.log(usuario + "Se ha incrito");
  }
}

let titulo = new Funcion("titulo"); //SE CREA EL OBJETO

````

*Clases*
https://www.w3schools.com/js/js_object_constructors.asp
````Javascript

class Clase(){
  //constructor SE EJECUTA AUTOMATICAMENTE AL INSTANCIAR
   constructor(titulo){
     this.titulo = titulo;
   }

   inscribir: funcion(usuario){
     console.log(usuario + "Se ha incrito");
   }
}

let titulo = new Clase("titulo"); //SE CREA EL OBJETO
//con extends heredamos de otra clase, un objeto, un arary, una funcion constructira
// con super utilizamos el polimorfismo, o sobreescritura de los metodos del padre
````

*Métodos accesores*
https://www.w3schools.com/js/js_object_accessors.asp
````Javascript
class Clase(){
  //constructor SE EJECUTA AUTOMATICAMENTE AL INSTANCIAR
   constructor(titulo){
     this._titulo = titulo; //se coloca el guin bajo porque el nombre debe ser diferente al del metodo get o set
   }

   get titulo: funcion(){
     return this._titulo + "Se ha incrito"
   }

   set titulo: funcion(titulo){
     this._titulo = titulo;
   }
}
````
*Métodos estaticos*
````Javascript
class Clase(){
  //constructor SE EJECUTA AUTOMATICAMENTE AL INSTANCIAR
   constructor(titulo){
     this._titulo = titulo; //se coloca el guin bajo porque el nombre debe ser diferente al del metodo get o set
   }

   static createAdmin: funcion(){} //acceder al metodo sin necesidad de instancia
}
````

## prototipos
https://www.w3schools.com/js/js_object_prototypes.asp

````Javascript

let user = {nombre:"Juan"}
typeof user;
user.__proto__ //Devuelve le objeto apartir del cual se creo
user.prototype
````

## Qué es la programación asíncrona?
http://latentflip.com/loupe/

Se puede decir que el encargado de delegar los procesos es el event loop, el cual hará que el programa no se bloquee y pueda seguir ejecutándose las demás tareas
del programa

> *Callbacks* Una funcion que se ejecuta despues de que una acción se ha completado al 100%

````Javascript
 request("http://google.com",function(){
   console.log("termine");
 });
````

> *Promesas* Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. ... Esencialmente, una promesa es un objeto devuelto al cual enganchas las funciones callback, en vez de pasar funciones callback a una función.

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas

````Javascript
request("http://google.com")
  .then(function(html){
      console.log("Entre a google");
  })
  .catch(function(err){
      console.log(err);
  });
````

## Bonus

> Spread Operator : "..."

````Javascript
let arreglo1 = [1,2,3];
let arreglor2 = ["uno","dos"];

console.log([...arreglo1,...arreglor2]);
function sumar(n1,n2,n3){
  return n1+n2+n3;
}
sumar(...arreglo1)

````
## Funciones asíncronas

Cuando programamos en JavaScript, constantemente trabajamos con operaciones asíncronas como solicitudes a un servicio web, cálculos, eventos, etc.

La complejidad de las operaciones asíncronas es que no se sabe cuándo van a terminar, por lo que debe existir un mecanismo que nos informe sobre si una tarea ha sido completada o no, qué resultado produjo y si se completó con éxito o hubo un error, y en caso de que haya habido un error, de qué error se trata.

Para solucionar esto se han introducido distintas estrategias, objetos y estructuras que permitan trabajar en un flujo de operaciones asíncronas, inicialmente teníamos los callbacks, funciones que se asignaban y eran llamadas cuando la operación asíncrona había retornado. Eventualmente se introdujeron las promesas, objetos pensados para valores asíncronos con funcionalidad adicional pensada precisamente para trabajar con 1 o varias operaciones asíncronas en un programa.

Las promesas, como aprendimos antes, introdujeron incontables mejoras por sobre los callbacks, sin embargo, la sintaxis puede parecer confusa y poco legible, además de que es un concepto que puede ser desafiante para nuevos desarrolladores de JavaScript.

En versiones más nuevas del lenguaje se introdujo el concepto de funciones asíncronas, dentro de las que trabajar con promesas se vuelve más simple con el uso de la palabra reservada await.

En este bloque conocerás los detalles de las funciones asíncronas, la sintaxis, cómo funcionan y cómo puedes usarlas para manejar operaciones asíncronas, como podrás ver más adelante, esto significará que el código de manejo de operaciones asíncronas se vuelve más expresivo y sencillo, sin perder por supuesto la funcionalidad correspondiente.

````Javascript
async function suma(n1,n2){
  return n1 +n2; //lo retorna como promesa es como si hiciera -> return new Promise.resolve(n1+n2)
}

//await
(async function(){

  let resultado = await new Promise((resolve,reject)=>{
    setTimeout(resolve,500,"Hola");
  });

  console.log(resultado);

})();

````

Es importante tener en cuenta que async / await debe de ser utilizado cuando sea necesario y de una manera adecuada, ya que de no ser así, esto puede afectar negativamente el rendimiento del código, aquí dejo dos lecturas que pueden ayudar a entender el tema:
 https://medium.com/front-end-weekly/async-await-is-not-about-making-asynchronous-code-synchronous-ba5937a0c11e
 https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c
Si no se entiende nada, tranquilos, la practica y el uso del lenguaje para desarrollar proyectos, ayudara a que esto suceda.

## Generadores e Iteradores
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators

````Javascript
function crearIterador(arreglo){
    var siguienteIndice = 0;

    return {
       next: function(){
           return siguienteIndice < arreglo.length ?
               {value: arreglo[siguienteIndice++], done: false} :
               {done: true};
       }
    }
}

function* hacedorIds() {
  var indice = 0;
  while(true)
    yield indice++;
}

var gen = hacedorIds();

console.log(gen.next().value);
````
Casos de uso:
https://github.com/tj/co
https://github.com/redux-saga/redux-saga
