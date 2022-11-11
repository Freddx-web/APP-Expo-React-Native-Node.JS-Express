
# App with Node.js - Express - MySQL


### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. clone repository
   ```sh
   git clone https://github.com/Freddx-web/app-node-mysql-master.git
   ```
3. Create repository branch in GIT
   ```sh
   git branch -M main
   ```
3. Install NPM packages and update
   ```sh
   npm install -g npm-check-updates
   ```
4. install
   XAMPP :https://www.apachefriends.org/es/download.html or WAMPP :https://www.wampserver.com/en/

4. Create MySQL database `data_base.sql`
   ```js
   --  CREAR BASE DE DATOS  --

   create database data_base;

   --  CREAR TABLA DE PRODUCTOS  --

    create table productos(
       id integer not null auto_increment,
       nombre varchar(30),
       precio decimal(5, 2),
       primary key(id)
    );

    --  TABLA DE USUARIOS --

    create table usuarios(
       id integer not null auto_increment,
       nombre varchar(30),
       email varchar(60),
       password varchar(255),
       date datetime,
       primary key(id)
    );

    -- INSERT DATOS USUARIOS --

    INSERT INTO `usuarios`(`id`, `nombre`, `email`, `password`) VALUES (1,'Freddy Lopez','Freddy@gmail.com','fredd123');

    -- INSERT DATOS PRODUCTOS --

    INSERT INTO `productos`(`id`, `nombre`, `precio`) VALUES (1,'SMARPHONE', 300)

    -- INNER JOIN --
    SELECT * FROM `usuarios` INNER JOIN users ON nombre = name

   ```
Contenido:
 - Registro de Usuarios 
 - Registro de Productos 

### Executions

To run in debug mode:

`set debug=crud-mysql:* & npm start`

run normally:  

`npm start`

### Open project

http://localhost:8000/

