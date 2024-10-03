<?php
    //Si txtID tiene un valor, entonces asignarle ese valor a la variable txtID, de lo contrario, asignarle un valor vacío
    $txtID = (isset($_POST['txtID']) ? $_POST['txtID']: "");
    $txtNombre = (isset($_POST['txtNombre']) ? $_POST['txtNombre']: "");
    $txtApellidoP = (isset($_POST['txtApellidoP']) ? $_POST['txtApellidoP']: "");
    $txtApellidoM = (isset($_POST['txtApellidoM']) ? $_POST['txtApellidoM']: "");
    $txtCorreo = (isset($_POST['txtCorreo']) ? $_POST['txtCorreo']: "");
    $txtFoto = (isset($_POST['txtFoto']) ? $_POST['txtFoto']: "");

    $accion = (isset($_POST['accion']) ? $_POST['accion']: "");

    include ("../conexion/conexion.php");

    switch ($accion) 
    {
        case 'btnAgregar':

            $sentencia = $pdo->prepare('INSERT INTO empleados (nombre, apellidop, apellidom, correo, foto) VALUES (:nombre,:apellidop,:apellidom,:correo,:foto)');

            $sentencia->bindParam(':nombre', $txtNombre);
            $sentencia->bindParam(':apellidop', $txtApellidoP);
            $sentencia->bindParam(':apellidom', $txtApellidoM);
            $sentencia->bindParam(':correo', $txtCorreo);
            $sentencia->bindParam(':foto', $txtFoto);
            $sentencia->execute();
            echo $txtID;
    
            echo 'Presionaste btnAgregar';
        break;
        case 'btnModificar':
            echo $txtID;
            echo 'Presionaste btnModificar';
        break;
        case 'btnEliminar':
            echo $txtID;
            echo 'Presionaste btnEliminar';
        break;
        case 'btnCancelar':
            echo $txtID;
            echo 'Presionaste btnCancelar';
        break;
    }

    $sentencia = $pdo->prepare('SELECT * FROM empleados');
    $sentencia->execute();

    $listaEmpleados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    print_r($listaEmpleados);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD con Bootstrap, PHP y MYSQL</title>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.js" integrity="sha256-UgvvN8vBkgO0luPSUl2s8TIlOSYRoGFAX4jlCIm9Adc=" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <form action="">
            <label for="">ID:</label>
            <input type="text" name="txtID" value="<?php echo $txtID;?>" placeholder="" id="txtID" require=""> <br>
            <label for="">Nombre:</label>
            <input type="text" name="txtNombre" value="<?php echo $txtNombre;?>" placeholder="" id="txtNombre" require=""> <br>
            <label for="">Apellido paterno:</label>
            <input type="text" name="txtApellidoP" value="<?php echo $txtApellidoP;?>" placeholder="" id="txtApellidoP" require=""> <br>
            <label for="">Apellido materno:</label>
            <input type="text" name="txtApellidoM" value="<?php echo $txtApellidoM;?>" placeholder="" id="txtApellidoM" require=""> <br>
            <label for="">Correo:</label>
            <input type="text" name="txtCorreo" value="<?php echo $txtCorreo;?>" placeholder="" id="txtCorreo" require=""> <br>
            <label for="">Foto:</label>
            <input type="text" name="txtFoto" value="<?php echo $txtFoto;?>" placeholder="" id="txtFoto" require=""> <br>
            <button value="btnAgregar" type="submit" name="accion">Agregar</button>
            <button value="btnModificar" type="submit" name="accion">Modificar</button>
            <button value="btnEliminar" type="submit" name="accion">Eliminar</button>
            <button value="btnCancelar" type="submit" name="accion">Cancelar</button>
        </form>
        <div class="row">
            <table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre completo</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                    <?php 
                    foreach($listaEmpleados as $empleado)
                    {                       
                    ?>
                    <tr>
                        <td><?php echo $empleado['foto'] ?></td>
                        <td><?php echo $empleado['nombre'] ?> <?php echo " ".$empleado['apellidop'] ?> <?php echo " ".$empleado['apellidom'] ?></td>
                        <td><?php echo $empleado['correo'] ?></td>
                        <td><input type="button" value="Seleccionar" name="accion"></td>
                    </tr>
                    <?php 
                    }
                    ?>
                </thead>*
            </table>
        </div>
    </div>
</body>
</html>