# CHATGPT-Example

Este repositorio contiene el código fuente del proyecto CHATGPT-Example, una aplicación de chat que utiliza la inteligencia artificial para asistir en la generación de texto y código. El proyecto se desarrolló utilizando el stack MERN (MongoDB, Express.js, React.js, Node.js) y se integra con la API de OpenAI para proporcionar funcionalidades de inteligencia artificial.

## Características

- Autenticación de usuarios: Los usuarios pueden registrarse y acceder a la aplicación.
- Chat en tiempo real: Los usuarios pueden enviar y recibir mensajes en tiempo real.
- Asistencia de inteligencia artificial: Los usuarios pueden interactuar con un bot de inteligencia artificial que puede generar texto y código.

## Tecnologías utilizadas

- [React.js](https://reactjs.org/): Una biblioteca de JavaScript para construir interfaces de usuario.
- [Node.js](https://nodejs.org/): Un entorno de ejecución de JavaScript en el servidor.
- [Express.js](https://expressjs.com/): Un marco de aplicación web para Node.js.
- [MongoDB](https://www.mongodb.com/): Una base de datos NoSQL orientada a documentos.
- [OpenAI API](https://openai.com/): Una API que proporciona acceso a GPT-3, un modelo de lenguaje generativo avanzado.

# Esquema del proyecto

    -Client (cliente consumidor de server)
        -env
    -Server (servidor consumidor de api's)
        -env

## Cómo ejecutar el proyecto

Este proyecto consta de dos partes, cliente (client) y servidor (server). Ambas han de ejecutarse por separado para que funcione el proyecto.

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Crea un archivo `.env` en la raíz del proyecto y añade tus claves de API para MongoDB y OpenAI.
4. Ejecuta `npm start` o `npm run dev` para iniciar el servidor de desarrollo o el cliente

## Demostración

Puedes ver una demostración del proyecto en [este video](https://www.youtube.com/watch?v=ffEDkqfIzxM).

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o realiza un pull request si deseas contribuir al proyecto.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
