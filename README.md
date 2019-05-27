#Buenas practicas de desarrollo

- La arquitectura MVC (Modelo-Vista-Controlador)
- Los modelos deben ser gordos y los controladores delgados
- Por convension el nombre del controlador se coloca el nombre del modelo en plural
- Rest -> Define como se dara la comunicación entre el cliente y el servidor

*Verbos Http en REST*

Estas son algunas reglas que te servirán para saber cómo y cuándo debes usar los verbos Http en una arquitectura REST.

Los verbos Http involucrados en un sistema REST son GET, POST, PUT, PATCH y DELETE.

GET es el más simple de todos, es el que usamos para obtener un recurso. Las peticiones GET no deben causar efectos secundarios en un servidor, no deben producir nuevos registros, ni modificar los ya existentes. A esta cualidad la llamamos idempotencia, cuando una acción ejecutada un número indefinido de veces, produce siempre el mismo resultado.

Esto quiere decir, que no importa cuántas veces hagamos una petición GET, los resultados obtenidos serán los mismos.

Cuando ingresamos a la dirección usando GET https://codigofacilito.com/cursos/backend-profesional/ estamos solicitando que se nos entregue el recurso identificado por /cursos/backend-profesional, este es un buen ejemplo de uso con GET.

Esta otra ruta: https://codigofacilito.com/cursos/recomendar?selected_level=0&category_options=28 aunque más compleja, también es correcta, estamos solicitando los recursos identificados por /cursos con las opciones ahí indicadas. Sin importar cuantas veces hagamos esta solicitud, no modificará los resultados por sí misma.

Las peticiones con POST son para crear recursos nuevos, no para eliminarlos, ni para modificarlos. Cada llamada con POST debería producir un nuevo recurso.

Lo que es interesante acerca de POST no es el verbo en sí, queda muy claro que es para crear, más bien es los recursos a los que se dirige.

Por ejemplo, si en nuestra aplicación existe una colección de cursos, la solicitud para crear uno nuevo, debe ser con el verbo POST al recurso que identifica la colección, por ejemplo /cursos.

Si queremos crear un nuevo artículo, pudiéramos tener una URI /articulos. Lo que es importante en estos casos, es recordar que la URI no debe decir qué acción estamos ejecutando, nos olvidamos de /articulos/crear o de /cursos/agregar, etc. El verbo dice qué haremos, y la URI sobre qué recurso se harán las modificaciones.

Algunos escenarios más complejos para el uso de POST son los inicios de sesión, agregar a un carrito de compras, procesar un pago nuevo, etc.

Consideremos por ejemplo el inicio de sesión, normalmente al iniciar sesión, no producimos un nuevo registro en la base de datos, sin embargo, usamos POST porque estamos creando una sesión nueva. Esto nos da a entender que para saber si usaremos POST o no, no necesariamente tenemos que agregar registros en la base de datos, el recurso creado puede ser de otros tipos, como una sesión.

Los verbos PUT/PATCH van como el señor cara de papa y la señora cara de papa, siempre juntos. Los agrupamos porque ambos indican una modificación en el servidor.

En la teoría, PUT se diferencía de PATCH, en que el primero indica que vamos a sustituir por completo un recurso, mientras que PATCH habla de actualizar algunos elementos del recurso mismo, sin sustituirlo por completo.

Un escenario común para el uso de PUT sería una llamada para actualizar la información de un curso, por ejemplo:

PUT /cursos/backend-profesional

O también:

PATCH /cursos/backend-profesional

En la práctica, no conozco un framework que establezca una diferencia en funcionamiento para peticiones con PUT o con PATCH, ambos verbos son tratados como iguales.

Por último, DELETE es el verbo que usamos para eliminar registros, bien pudiera ser para eliminar un recurso con un mensaje Http como

DELETE /cursos/backend-profesional

O para eliminar una colección completa:

DELETE /cursos

Esta es la manera a través de la que usamos los verbos Http en una aplicación web. Estos en combinación con las URIs proveen la interfaz uniforme de la que hablamos cuando discutimos las características de un sistema REST.

Como podrás notar, el beneficio de estas es que se establece una guía para la construcción de la aplicación, las rutas siempre representan recursos, las acciones se representan con Http.

## ¿Qué son las Websockets?

Cuando hablamos de WebSockets usualmente nos podemos referir a dos cosas, por un lado al protocolo de WebSockets y por otro a la interfaz del navegador para comunicarnos vía WebSockets.

El protocolo de WebSockets es un protocolo de la capa 7 del modelo OSI, que funciona a través del protocolo TCP, de la misma forma que lo hace el protocolo Http. Esto quiere decir, por un lado que Http y WebSockets son protocolos de red distintos, PERO, que son compatibles entre sí porque ambos funcionan a través de TCP.

La diferencia entre ambos, es que las WebSocket permiten comunicación a dos vías, desde el cliente hacia el servidor y desde el servidor hacia el cliente sobre una misma conexión. El protocolo Http, por otro lado y como has aprendido en este curso, sólo se comunica desde el cliente hacia el servidor y cada nuevo mensaje requiere una conexión nueva hacia el servidor mismo.

La habilidad de que el servidor se comunique con el cliente sin que el cliente haya iniciado la conversación, y que podamos mandar mensajes de ida y vuelta sobre una misma conexión hacen a las Websockets la tecnología perfecta para la implementación de aplicaciones en tiempo real. Ya que si el servidor tiene información nueva que comunicar al navegador, no debe esperar nada, usa el canal establecido a través del protocolo de Websockets para informarlo.

La interfaz de las WebSockets por su parte, es el cómo nosotros programamos un cliente que se conecte con un servidor a través de este protocolo, esta interfaz la estandariza y define el consorcio de la web, la W3C. Los navegadores la integran junto con su implementación de comunicación con el protocolo WebSockets.

En palabras más simples, esta interfaz son las clases, métodos y objetos a través desde JavaScript en el navegador nos comunicamos vía WebSockets.

Para poder comunicarnos vía WebSockets tenemos que configurar nuestro servidor para dar soporte a la comunicación vía este protocolo, y por supuesto implementar un cliente en el navegador que se conecte, reciba y envíe mensajes hacia el servidor, además, también podemos configurar los mensajes que el servidor mismo enviará hacia el cliente.

Trabajar con protocolos de red es un desafío por sí mismo, como recordarás, un desarrollador backend por lo general no implementa el programa de comunicación con el protocolo de Http, más bien aprovecha uno existente, NodeJS por ejemplo expone el paquete http para comunicarnos con el protocolo.

Lo mismo pasa con las Websockets, y aunque Node no incluye un paquete para comunicarnos con este protocolo, existen muchas alternativas, la más popular de entre ellas es Socket.io.

En los siguientes temas vamos a aprender a comunicarnos vía Websockets con Socket.io. ¿Emocionado? También yo, continuemos.
