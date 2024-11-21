<?php
    include_once '../configuraciones/bd.php';
    $conexionBD = BD::crearInstancia();


    $id = isset($_POST['id']) ? $_POST['id']:'';
    $nombre_curso = isset($_POST['nombre_curso']) ? $_POST['nombre_curso']:'';

    $accion = isset($_POST['accion']) ? $_POST['accion'] : '';

    if($accion != '')
    {
        switch($accion)
        {
            case 'agregar':
                $sql = "INSERT INTO cursos(id, nombre) values (null, '$nombre_curso')";
                $consulta = $conexionBD -> prepare($sql);
                //$consulta -> bindParam(':nombre', $nombre_curso);
                $consulta -> execute();
            break;
            case 'modificar':
                $sql = "UPDATE cursos SET nombre = '$nombre_curso' where id = $id;";
                $consulta = $conexionBD -> prepare($sql);
                //$consulta -> bindParam(':nombre', $nombre_curso);
                $consulta -> execute();
            break;
            case 'eliminar':
                $sql = "DELETE FROM cursos where id = '$id';";
                $consulta = $conexionBD -> prepare($sql);
                $consulta -> execute();
            break;
        }
    }

    $consulta = $conexionBD -> prepare("SELECT * FROM cursos");
    $consulta->execute();
    $listaCursos = $consulta -> fetchAll();
?>