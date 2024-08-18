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

**SphereVault** es una plataforma web diseñada para ofrecer:
- **Inicio de sesión con Google**: Permite a los usuarios autenticarse utilizando sus cuentas de Google.
- **Subida y Organización de Archivos**: Facilita la carga, descarga y organización de archivos y carpetas.
- **Documentación de Proyectos**: Ofrece una sección adicional para ayudar a documentar proyectos en desarrollo.

La plataforma está construida utilizando Node.js para el backend y React para el frontend, con MySQL como sistema de gestión de bases de datos.

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
