create table alumnos
(
    id int auto_increment primary key,
    nombre    varchar(255) not null,
    apellidos varchar(255) not null
)
    engine = InnoDB;

create table cursos
(
    id int auto_increment primary key,
    nombre varchar(255) not null
)
    engine = InnoDB;

create table alumnos_cursos
(
    id       int auto_increment
        primary key,
    idAlumno int not null,
    idCurso  int not null,
    constraint alumnos_cursos_ibfk_1
        foreign key (idAlumno) references alumnos (id)
            on update cascade on delete cascade,
    constraint alumnos_cursos_ibfk_2
        foreign key (idCurso) references cursos (id)
            on update cascade on delete cascade
)
    engine = InnoDB;

create index idAlumno
    on alumnos_cursos (idAlumno);

create index idCurso
    on alumnos_cursos (idCurso);


