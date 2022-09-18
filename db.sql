create schema dbproyectomtb;
use dbproyectomtb;

CREATE TABLE usuarios(
id int  unsigned primary key auto_increment,
email varchar(50) not null,
contrasenia varchar(50) not null,
foto  varchar (200) not null,
fecha  date not null,
DNI int unsigned not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/*drop table usuario;*/
CREATE TABLE posteos(
id int  unsigned primary key auto_increment,
id_usuario int unsigned,
nombre_imagen  varchar (200) not null,
texto_imagen text not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
foreign key (id_usuario) references usuarios(id)

);
/*drop table posteos;*/

CREATE TABLE comentarios(
id int unsigned primary key auto_increment,
id_posteo int unsigned,
id_usuario int unsigned,
texto_comentario text not null,
foreign key (id_usuario) references usuarios(id),
foreign key (id_posteo) references posteos(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/*USUARIOS*/
INSERT INTO  usuarios (`id`, `email`, `contrasenia`, `foto`, `fecha`, `DNI`) values (default,'michaelscott@gmail.com','scott1234','/public/images/scott.jpg','1988-06-22',34683203);
INSERT INTO  usuarios (`id`, `email`, `contrasenia`, `foto`, `fecha`, `DNI`) values (default,'catadiaz@gmail.com','diaz1234','/public/images/diaz.jpg','1978-06-12',89753203);
INSERT INTO  usuarios (`id`, `email`, `contrasenia`, `foto`, `fecha`, `DNI`) values (default,'gueerrerom@gmail.com','guerrerosss','/public/images/guerrero.jpg','1999-06-13',44362014);
INSERT INTO  usuarios (`id`, `email`, `contrasenia`, `foto`, `fecha`, `DNI`) values (default,'wos@gmail.com','wos234','/public/images/wos.jpg','2005-07-12',09873203);
INSERT INTO  usuarios (`id`, `email`, `contrasenia`, `foto`, `fecha`, `DNI`) values (default,'dariobenedetto@gmail.com','dario1234','/public/images/benedetto.jpg','1972-09-02',78353203);

/*POSTEOS*/
INSERT INTO posteos(id, id_usuarios, image_name, pie_post)
values(default, 1 , '/img/usuarios/mc.png', 'Hola');
INSERT INTO posteos values (default,2,'/img/michael/mc.png','michael');
INSERT INTO posteos values (default,3,'/img/michael/mc.png','michael');
INSERT INTO posteos values (default,4,'/img/michael/mc.png','michael');
INSERT INTO posteos values (default,5,'/img/michael/mc.png','michael');
INSERT INTO posteos values (default,1,'/img/michael/mc.png','michael');
INSERT INTO posteos values (default,2,'/img/michael/mc.png','michael');
INSERT INTO posteos values (default,3,'/img/michael/mc.png','michael');
INSERT INTO posteos values (default,4,'/img/michael/mc.png','michael');
INSERT INTO posteos values (default,5,'/img/michael/mc.png','michael');


/*COMENTARIOS*/
INSERT INTO comentario values (default, 1, 1, 'Me gusta tu foto');
INSERT INTO comentario values (default, 1, 1, 'Me gusta tu foto');
INSERT INTO comentario values (default, 1, 1, 'Me gusta tu foto');
INSERT INTO comentario values (default, 1, 1, 'Me gusta tu foto');





