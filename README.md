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
   ```bash
   git clone https://github.com/Miguel-Antonio-Martinez-Jimenez/SphereVault.git
   cd SphereVault
2. Instala las dependencias:
   ```bash
   npm install
3. Configura el archivo back-end/.env en la raíz del proyecto con las siguientes variables:
   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=Tu_Contraseña
   DB_NAME=spherevault
   JWT_SECRET=spherevaultsecret
   PORT=5000
4. Ejecuta el servidoro:
   - modo desarrollo
     ```bash
     npm run dev
   - modo producción:
     ```bash
     npm start

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
