# SphereVault

**SphereVault** es una plataforma web para almacenar y gestionar archivos y carpetas. Ofrece inicio de sesión con Google, subida y organización de archivos, y un apartado adicional para ayudar a documentar proyectos en desarrollo.

## Índice

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Requisitos](#requisitos)
3. [Configuración del Entorno](#configuración-del-entorno)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Avances](#avances)
6. [Problemas y Soluciones](#problemas-y-soluciones)
7. [Próximos Pasos](#próximos-pasos)
8. [Contribuciones](#contribuciones)
9. [Licencia](#licencia)

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

**SphereVault** está construido utilizando *Node.js* para el ***back-end*** y *React* para el ***front-end***, con *MySQL* como sistema de gestión de bases de datos, garantizando un entorno ágil, escalable y seguro.

## Requisitos

- **Node.js** (v14 o superior recomendado)
- **MySQL** (v8 o superior recomendado)
- **npm** (para la gestión de dependencias)

### Dependencias

- **Express**: Framework para Node.js.
- **MySQL**: Paquete para la conexión con MySQL.
- **dotenv**: Para manejar variables de entorno.
- **jsonwebtoken**: Para la gestión de tokens JWT.
- **google-auth-library**: Para autenticación con Google.

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
