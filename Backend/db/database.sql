CREATE DATABASE ticketTwo
USE ticketTwo

CREATE TABLE Usuarios(
  id INT NOT NULL IDENTITY(1,1),
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  pass VARCHAR(max) NOT NULL,
  email VARCHAR(200) NOT NULL,  
  pais VARCHAR(200) NOT NULL,
  ciudad VARCHAR(200) NOT NULL,
  edad INT NOT NULL,
  imagen VARCHAR(max)NOT NULL DEFAULT '',
  estudios VARCHAR(max) NOT NULL DEFAULT '',
  idiomas VARCHAR(max) NOT NULL DEFAULT '',
  linkedin VARCHAR(100) NOT NULL DEFAULT '',
  hobbies VARCHAR(max) NOT NULL DEFAULT '',
  tipo VARCHAR(max) NOT NULL DEFAULT ''  
  PRIMARY KEY(id)
);

CREATE TABLE Amistades(
  id INT NOT NULL IDENTITY(1,1),
  idUsuarioA INT NOT NULL,
  idUsuarioB INT NOT NULL,
  fecha DATE NOT NULL,
  estatus INT NOT NULL DEFAULT 0,
  PRIMARY KEY(id),
  FOREIGN KEY(idUsuarioA) REFERENCES Usuarios,
  FOREIGN KEY(idUsuarioB) REFERENCES Usuarios
);

CREATE TABLE Post(
  id INT NOT NULL IDENTITY(1,1),
  idUsuario INT NOT NULL,
  contenido VARCHAR(max) NOT NULL,
  fecha DATETIME NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(idUsuario) REFERENCES Usuarios
);

CREATE TABLE Evaluaciones(
  id INT NOT NULL IDENTITY(1,1),
  idUsuario INT NOT NULL,
  idUsuarioC INT NOT NULL,
  basesDeDatos INT NOT NULL DEFAULT 0,
  apis INT NOT NULL DEFAULT 0,
  testings INT NOT NULL DEFAULT 0,
  seguridad INT NOT NULL DEFAULT 0,
  teoriaObjetos INT NOT NULL DEFAULT 0,
  nodejs INT NOT NULL DEFAULT 0,
  frontend INT NOT NULL DEFAULT 0,
  swagger INT NOT NULL DEFAULT 0,
  javascript INT NOT NULL DEFAULT 0,
  calidad INT NOT NULL DEFAULT 0,
  velocidad INT NOT NULL DEFAULT 0,
  performance INT NOT NULL DEFAULT 0,
  enfocado INT NOT NULL DEFAULT 0,
  trabajoEquipo INT NOT NULL DEFAULT 0,
  comprometido INT NOT NULL DEFAULT 0,
  comunicacion INT NOT NULL DEFAULT 0,
  aprendizaje INT NOT NULL DEFAULT 0,
  resolucion INT NOT NULL DEFAULT 0,
  versionado INT NOT NULL DEFAULT 0,
  trelloJira INT NOT NULL DEFAULT 0,
  slack INT NOT NULL DEFAULT 0,
  metodologias INT NOT NULL DEFAULT 0,
  fecha DATETIME NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(idUsuario) REFERENCES Usuarios,
  FOREIGN KEY(idUsuarioC) REFERENCES Usuarios
);
