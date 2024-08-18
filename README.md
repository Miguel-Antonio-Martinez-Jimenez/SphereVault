# SphereVault

**SphereVault** es una plataforma web avanzada que proporciona una solución completa para el almacenamiento y gestión de archivos y carpetas. Diseñada con un enfoque en la seguridad, la eficiencia y la facilidad de uso, SphereVault ofrece a los usuarios una experiencia fluida y confiable en el manejo de sus datos.



## Descripción del Proyecto

**SphereVault** es una plataforma web diseñada para ofrecer una solución integral en la gestión y almacenamiento de archivos, con un enfoque en la seguridad y la facilidad de uso.

**Funcionalidades Principales:**
- **Inicio de sesión con Google**: Autenticación segura y rápida mediante cuentas de Google.
- **Organización de Archivos y Carpetas**:  Facilita la creación, edición, descarga y eliminación de carpetas para una mejor estructuración de los archivos.
- **Gestión de Permisos y Compartición**: Opciones avanzadas para compartir archivos y carpetas con otros usuarios, controlando los permisos de acceso.
- **Funcionalidades Avanzadas de Búsqueda**: Herramientas potentes para localizar archivos y carpetas de manera rápida y precisa.
- **Notificaciones y Alertas**: Sistema de notificaciones para mantener a los usuarios informados sobre cambios y actividades relevantes.
- **Vista Previa de Archivos**: Permite visualizar el contenido de los archivos antes de descargarlos.
- **Seguridad y Privacidad**: Protección robusta de datos mediante cifrado y gestión de accesos.

**Función Especial:**
- **Documentación de Proyectos de Software**: Ofrece una sección dedicada para la documentación de proyectos en desarrollo, facilitando el seguimiento y la organización.

**Futuras Actualizaciones:**
- **Centro de Soporte**: Sección de asistencia con planes para incluir un chatbot que ayude a resolver dudas y problemas de los usuarios.
- **Estadísticas y Análisis**: Herramientas para monitorear y analizar el uso de la plataforma y la gestión de archivos.

**SphereVault** combina la potencia y la simplicidad para ofrecer una plataforma robusta que se adapta a las necesidades de almacenamiento y gestión de archivos, al tiempo que proporciona herramientas especializadas para el desarrollo y documentación de proyectos. Con su arquitectura basada en *Node.js* y *React*, y utilizando *MySQL* como sistema de gestión de bases de datos, **SphereVault** está diseñado para ser ágil, escalable y seguro, proporcionando una experiencia de usuario excepcional.



## Requisitos

- **Software Necesario:**
   - ***Node.js***: Versión 14 o superior (recomendado).
   - ***MySQL***: Versión 8 o superior (recomendado).
   - ***npm***: Gestor de paquetes de Node.js para instalar dependencias.

- **Dependencias del Proyecto:**
   - ***Express***: Framework web para *Node.js*, utilizado para gestionar el backend.
   - ***MySQL***: Paquete para la conexión y gestión de la base de datos *MySQL* desde Node.js.
   - ***dotenv***: Para manejar variables de entorno, como configuraciones de la base de datos y claves secretas.
   - ***jsonwebtoken***: Para la gestión y verificación de tokens JWT, necesarios para la autenticación de usuarios.
   - ***google-auth-library***: Librería utilizada para implementar la autenticación con cuentas de Google.

- **Herramientas de Desarrollo:**
   - ***Editor de Código***: Visual Studio Code o cualquier otro editor que prefieras.
   - ***Postman*** *(opcional)*: Para probar las API del backend.
   - ***Git***: Para el control de versiones y clonación del repositorio.

>[!IMPORTANT]
> Es imprescindible tener todos estos requisitos instalados y configurados correctamente en tu entorno de desarrollo. Sin ellos, el código de SphereVault no funcionará adecuadamente, y es posible que encuentres errores durante la instalación o ejecución de la aplicación. Asegúrate de cumplir con cada uno de ellos antes de continuar.



## Configuración del Entorno

1. Clona el repositorio:
   Primero, clona el repositorio del proyecto desde GitHub:
   ```bash
   git clone https://github.com/Miguel-Antonio-Martinez-Jimenez/SphereVault.git
   cd SphereVault
   
2. Instala las dependencias:
   Para instalar las dependencias necesarias para el backend y el frontend, sigue estos pasos:
   - Back-end
     Navega a la carpeta del backend (si está separada):
     ```bash
     cd back-end
     npm install
     
   - Front-end
     Navega a la carpeta del frontend (si está separada):
     ```bash
     cd back-end
     npm install
     
3. Configura el Archivo .env del back-end
   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_contraseña
   DB_NAME=nombre_base_de_datos
   JWT_SECRET=tu_palabra_secreta
   PORT=tu_puerto
>[!IMPORTANT]
> Asegúrate de que el puerto configurado en el archivo .env (en este caso, el puerto 5000 para el backend) no esté siendo utilizado por otro servicio en tu máquina. Si el puerto ya está en uso, el servidor backend no podrá iniciarse correctamente. Puedes cambiar el puerto a uno disponible en el archivo .env si es necesario. Además, verifica que el puerto utilizado por el frontend (por defecto, 3000) no esté en conflicto con otras aplicaciones.

5. Configura la Autenticación de Google
   Sigue los pasos de Google Cloud Platform para obtener las credenciales necesarias para la autenticación con Google y configúralas en el backend.


   
## Compilacion y Ejecución

- **Back-end**
   1. Compilar y Ejecutar en Modo Desarrollo:
      Utiliza nodemon para ejecutar el servidor en modo desarrollo, lo que permitirá reiniciar automáticamente el servidor al realizar cambios en el código:
         ```bash
         npm run dev
   2. **Compilar y Ejecutar en Modo Producción**
      Si prefieres ejecutar el servidor en modo producción, puedes hacerlo con el siguiente comando:
      ```bash
      npm start

- **Front-end**
1. **Compilar y Ejecutar en Modo Desarrollo**
      Navega a la carpeta del frontend y utiliza el siguiente comando para iniciar el servidor de desarrollo:
      ```bash
      npm start
Esto abrirá la aplicación en tu navegador, generalmente en http://localhost:3000.



## Estructura del Proyecto

## Avances
- Se ha configurado la conexión y creación de la base de datos spherevault y la tabla usuarios.
- Implementado el inicio de sesión con Google y la autenticación de usuarios.
- Creación básica del perfil de usuario.

## Problemas y Soluciones
- Error de Conexión a la Base de Datos:
   - Problema: Error de acceso denegado.
   - Solución: Verificar las credenciales en el archivo .env y ajustar la configuración de la base de datos.
   - 
## Próximos Pasos
- Completar la funcionalidad de gestión de archivos.
- Implementar y configurar las rutas de la API para el perfil de usuario.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas colaborar en el proyecto, por favor realiza un fork del repositorio y envía un pull request con tus mejoras.

## Licencia
Este `README.md` proporciona una descripción completa del proyecto, incluyendo la configuración, estructura, avances, problemas y próximos pasos. ¡Espero que te sea útil!
