# Pollos a un Click
Este es el repositorio del proyecto "Pollos a un Click", una aplicación que facilita la gestión de productores y tenderos en el sector avícola. A continuación, se detallan los pasos para trabajar con este proyecto.

## Requisitos Previos
Asegúrate de tener instalado lo siguiente en tu sistema:

- Visual Studio Code
- Node.js (versión v21.7.1)
- Git
- npm
- PostgreSQL

## Instalación

### No Clonar el Repositorio:

- Descarga el repositorio desde el enlace proporcionado en la página del proyecto.

- Descomprimir el Repositorio:
Descomprime el archivo descargado en una ubicación de tu elección.

- Instalar Dependencias:
Abre una terminal y navega hasta la carpeta raíz del proyecto.

```bash
cd pollos-a-un-click
```
Luego, instala las dependencias de cada carpeta por separado.

```bash
# Instalar dependencias del servidor
cd api
npm install
```

# Instalar dependencias del cliente

```bash
# Instalar dependencias del cliente
cd cliente
npm install
```

## Configuración
### Configuración del Servidor

Crear archivo `.env`:  
En la carpeta raíz del servidor `(api)`, crea un archivo llamado `.env`.

### Configurar Variables de Entorno:  

Dentro del archivo `.env`, configura las siguientes variables de entorno:

```plaintext
PORT=3001
DB_USER=password_user
DB_PASSWORD=password_base_de_datos
DB_HOST=localhost
DB_NAME=pollos
```
Debes poner tus password, los que colocaste al instalar postgres.  

### Asumiendo Configuración del Cliente  

Crear archivo `.env`:  

En la carpeta raíz `(cliente)`, crea un archivo llamado `.env`.

Configurar Variables de Entorno:
Dentro del archivo `.env`, configura las siguientes credenciales:

```plaintext
REACT_APP_AUTH0_DOMAIN=----claveprivada-----
REACT_APP_AUTH0_CLIENT_ID=-------------claveprivada-------
```
Debes configurar tu propia cuenta de Auth0 con tus credenciales

### Puesta en Marcha
Una vez que hayas realizado la instalación y configuración adecuada, puedes poner en marcha el servidor y el cliente.

### Iniciar Servidor:
Desde la carpeta api, ejecuta el siguiente comando para iniciar el servidor:

```bash
npm start
```

### Iniciar Cliente:  
Desde la carpeta cliente, ejecuta el siguiente comando para iniciar el cliente:

```bash
npm start
```

Esto iniciará el proyecto y podrás acceder a la interfaz de la aplicación. Desde aquí, podrás crear Productores y Tenderos para comenzar a poblar la base de datos y probar la funcionalidad de la aplicación.

Si tienes alguna pregunta o consulta, no dudes en contactar a su desarrollador. 
***Ojo esta app es un prototype, desarrollado para la clase de Estructura de datos de tercer semestre de la Universidad de Cartagena - Centro Tutorial Mompox - 2024-1.


# Licencia de Uso Educativo

Este software ha sido desarrollado exclusivamente para uso educativo por los estudiantes del curso Estructura de Datos en la Universidad de Cartagena(Centro Tutorial Mompox). Su distribución, modificación y uso están permitidos únicamente para fines educativos dentro del contexto de este curso.

## Condiciones

1. **Uso Exclusivo**: El software solo puede ser utilizado por los estudiantes registrados en el curso mencionado durante el período de [2024-1 febrero] a [2024-1 Junio].
2. **Distribución Prohibida**: No está permitida la redistribución de este software a terceros no relacionados con el curso.
3. **Modificaciones**: Los estudiantes pueden modificar el software, pero las modificaciones deben ser compartidas exclusivamente dentro del contexto del curso.
4. **No Comercial**: Queda prohibido el uso del software con fines comerciales.

[🚀👩‍🚀](programador5781@gmail.com)

¡Disfruta trabajando con Pollos a un Click! 🐔🚀

