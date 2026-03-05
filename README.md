# Enlace a la página web

https://illuminatimlg2003-design.github.io/ProyectoSnikersJJ/

# Documentación técnica del proyecto web

## 1. Obtención de la paleta de colores

Para garantizar la fidelidad visual con respecto al diseño original proporcionado, se ha utilizado la herramienta **Image Color Picker**.
Esta herramienta permite extraer los valores exactos de color a partir de una imagen del diseño, facilitando la implementación precisa de la paleta cromática en la hoja de estilos CSS.

## 2. Implementación de música de fondo

Se ha incorporado música de fondo en la página web con el objetivo de mejorar la experiencia de usuario durante la navegación.
El audio se reproduce automáticamente y en bucle mediante el uso de la etiqueta `<audio>` de HTML.

## 3. Mejora de la accesibilidad en elementos interactivos

Con el objetivo de mejorar la accesibilidad del sitio web, se han aplicado diversas prácticas recomendadas por las pautas de accesibilidad web.

Entre las mejoras implementadas se encuentran:

* Uso del atributo `role="button"` en aquellos enlaces (`<a>`) que funcionan como botones interactivos.
* Inclusión de atributos `aria-label` descriptivos que indican claramente la acción que realiza cada elemento.

Esto permite que los lectores de pantalla interpreten correctamente la funcionalidad de cada componente interactivo.

## 4. Accesibilidad en la información de precios

Se han añadido atributos `aria-label` en los elementos que muestran los precios de los productos.

De este modo, los lectores de pantalla pueden interpretar correctamente:

* el precio actual del producto
* el precio anterior en caso de descuento

Esta mejora evita que los lectores de pantalla únicamente lean números sin proporcionar contexto al usuario.

## 5. Agrupación semántica del selector de colores

En el selector visual de colores de los productos se han aplicado mejoras de accesibilidad mediante el uso de atributos ARIA.

Las mejoras implementadas incluyen:

* `role="group"` para indicar que las opciones de color pertenecen a un mismo conjunto.
* `role="img"` junto con `aria-label` en cada opción de color para describir verbalmente el color disponible.

Esto permite que los usuarios que utilizan lectores de pantalla puedan identificar las distintas opciones de color aunque no puedan percibirlas visualmente.

## 6. Mejora de la estructura semántica del contenido principal

El elemento `<main>` incluye un atributo `aria-label` que describe la función del contenido principal de la página, en este caso el catálogo de productos de calzado.

Esta mejora facilita la navegación mediante **landmarks**, permitiendo a los usuarios de tecnologías de asistencia localizar rápidamente el contenido principal del sitio.

## 7. Implementación de enlaces temporales

Durante la fase de desarrollo se han añadido enlaces temporales en distintos elementos de la interfaz para simular la navegación entre páginas.

Estos enlaces permiten verificar el correcto funcionamiento de la estructura del sitio web antes de implementar las rutas definitivas.

## 8. Reutilización de componentes mediante JavaScript

Para evitar la duplicación de código y mejorar la mantenibilidad del proyecto, se ha implementado un script en JavaScript que carga dinámicamente el **header** y el **footer** desde archivos HTML independientes.

Esta técnica permite:

* reutilizar componentes comunes en todas las páginas
* reducir la repetición de código
* facilitar futuras modificaciones en la estructura del sitio web
