<p align="center">
    <img src='frontend/assets/dans_logo.png' alt='Logo del Blog'>
</p>

---

Blog personal sobre mis videojuegos favoritos de todos los tiempos que contendrá posts con una descripción y puntos destacados de cada título.

## Instrucciones para ejecutar localmente

La aplicación web consta de frontend (este repositorio) y un backend realizado para el laboratorio 6. Es necesario levantar el contenedor del backend para utilizar la aplicación.

### Levantar el contenedor del backend

1. Clonar el repositorio del [laboratorio 6](https://github.com/DANdelion-0908/Laboratorio6.git) que contiene el backend de la aplicación.

2. Instalar las siguientes librerías utilizando el comando `npm install`:

    - express

    - mysql

    - cors

    - crypto-js

3. Levantar el contenedor de Docker Compose utilizando el comando `docker compose up -d`

### Ejecutar el frontend

1. Clonar este repositorio.

2. Instalar node.js.

3. Ejecutar el comando `npm i`.

4. Entrar mediante consola a la ruta `project_blog\frontend` y ejecutar el comando `npm run dev`.

5. Acceder en el navegador a la dirección `localhost:5173`.

## Tecnologías

|**Tecnología**|**Descripción**|**Razones de su uso**|
|--------------|---------------|---------------------|
|React|Biblioteca de Javascript diseñada para crear interfaces de usuario|Ofrece herramientas que permiten trabajar fácilmente con datos que cambian constantemente además de que permite crear componentes de una manera intuitiva|
|Node.js|Entorno en tiempo de ejecución para la capa del servidor|Posee una documentación muy completa y muchas herramientas que vuelven cómodo ejecutar programas hechos en Javascript|
|Vite|Herramienta de compilación que proporciona una experiencia de desarrollo rápida y ágil|Proporciona un servidor de pruebas que se actualiza rápidamente|
|Express|Framework de Node.js que provee un conjunto de características para el desarrollo de aplicaciones web|Brinda varios métodos HTTP que permiten utilizar API fácilmente|
|Crypto-js|Librería de Javascript con estándares de encriptación|Permite encriptar cadenas de una forma sencilla a la vez que aumenta la seguridad de la aplicación|
|Docker|Proyecto que permite desplegar aplicaciones dentro de contenedores de software|Simplifica enormemente la distribución de aplicaciones y permite que se ejecuten de manera autónoma|

