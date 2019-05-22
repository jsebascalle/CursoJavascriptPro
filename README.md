# Curso de Backend js

## Stack de Tecnologías <h3>
> Como mencioné en el tema pasado, los ejemplos del curso estarán escritos con JavaScript y NodeJS. Además, los ejemplos con bases de datos se realizarán con mySQL.

> En el módulo de bases de datos usaremos un ORM, aprenderás qué es más adelante. Usaremos Sequelize para esta sección del curso.

> En el bloque de Websockets vamos a usar Socket.io, la librería más popular de NodeJS para la comunicación en tiempo real con el protocolo de WebSockets.

> En el servidor vamos a configurar Ubuntu con Nginx. Usaremos Capistrano y Git para automatizar el deploy de tu aplicación al servidor web.

> Será un curso muy interesante con tecnologías modernas que seguro mejorarán tu flujo de trabajo y productividad al desarrollar sitios web.

- NodeJS -> Ambiente de ejecución
- ExpressJs -> Framework JS

## Fundamentos <h3>

*El protocolo Http:*

Antes de que comencemos a hacer peticiones con Http a un servidor, primero entendamos que hay distintos tipos de peticiones que podemos hacer hacia el servidor mismo.

Una parte de la petición que se envía hacia el servidor corresponde al método Http o verbo Http como también conocemos a este elemento.

Comunmente este método puede ser POST o GET, que son los verbos más populares, de hecho, quizás los identifiques si antes has trabajado con formularios HTML.

Estos verbos indican qué acción queremos realizar sobre el servidor y son GET, POST, PUT, PATCH, DELETE, HEAD, CONNECT, OPTIONS y TRACE. Cada uno indica una acción diferente a la que el servidor debe responder.

HEAD, por ejemplo, indica que únicamente queremos que se responda con los encabezados de la respuesta, y se ignore el cuerpo de datos. DELETE significa que queremos eliminar un recurso, etc. Vamos a hablar más de estos verbos cuando conozcamos la arquitectura REST.

Por ahora sólo necesitas saber que dependiendo de qué queremos que el servidor haga, crear elementos, enviarlos, actualizarlos, etc. será el método HTTP que usaremos para que precisamente el servidor sepa qué tiene que hacer.

https://onlinecurl.com/

*Direcciones web*

El nombre de dominio nos permite identificar la computadora en la que se encuentra el recurso que estamos solicitando, nota como en lugar de página estamos usando el concepto de recurso, porque así como podemos solicitar una página, también puede ser otro tipo de archivo como una imagen.

Luego del nombre de dominio viene el puerto, en el primer ejemplo el puerto es el 3000, es el que aparece luego de los dos puntos. En el resto de los ejemplos se asume el puerto por defecto, porque no hay otro especificado. El puerto por defecto para el protocolo Http es el puerto 80, y es el que precisamente se usa cuando no se especifica otro, como en los ejemplos mencionados.

Además del dominio y el puerto, una dirección web contiene la ruta o el path en donde se encuentra el recurso, dentro del servidor. Piensa en que si el dominio fuera una colonia, el path sería la ruta para llegar a una casa en específico, ya que si bien el dominio representa al servidor, el path representa el recurso en específico que queremos.

El path por defecto es la /, misma que puede omitirse por lo que asumimos que si no hay path, estamos tratando de acceder al inicio, la /. En nuestros ejemplos de direcciones, el path es siempre / con excepción del último donde se indica que buscamos el recurso con la ruta /articulos.
