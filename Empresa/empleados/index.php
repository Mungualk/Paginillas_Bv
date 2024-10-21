<?php
    // Si txtID tiene un valor, entonces asignarle ese valor a la variable txtID, de lo contrario, asignarle un valor vacío
    $txtID = (isset($_POST['txtID']) ? $_POST['txtID']: "");
    $txtNombre = (isset($_POST['txtNombre']) ? $_POST['txtNombre']: "");
    $txtApellidoP = (isset($_POST['txtApellidoP']) ? $_POST['txtApellidoP']: "");
    $txtApellidoM = (isset($_POST['txtApellidoM']) ? $_POST['txtApellidoM']: "");
    $txtCorreo = (isset($_POST['txtCorreo']) ? $_POST['txtCorreo']: "");
    $txtFoto = (isset($_FILES['txtFoto']['name']) ? $_FILES['txtFoto']['name']: "");

    $accion = (isset($_POST['accion']) ? $_POST['accion']: "");

    $accionagregar = "";
    $accionModificar = $accionEliminar = $accionCancelar = "disabled";
    $mostrarModal = false;

    include ('../conexion/conexion.php');

    switch ($accion) {
        case 'btnAgregar':
            $sentencia = $pdo -> prepare('INSERT INTO empleados (nombre, apellidop, apellidom, correo, foto) VALUES (:nombre, :apellidop, :apellidom, :correo, :foto);');

            $sentencia -> bindParam(':nombre', $txtNombre);
            $sentencia -> bindParam(':apellidop', $txtApellidoP);
            $sentencia -> bindParam(':apellidom', $txtApellidoM);
            $sentencia -> bindParam(':correo', $txtCorreo);

            $fecha = new DateTime();
            $nombreArchivo = ($txtFoto != "") ? $fecha -> getTimestamp() . '_' . $_FILES['txtFoto']['name'] : "imagen.jpg";

            $tmpFoto = $_FILES['txtFoto']['tmp_name'];

            if ($tmpFoto != '') {
                move_uploaded_file($tmpFoto, '../imagenes/' . $nombreArchivo);
            }

            $sentencia -> bindParam(':foto', $nombreArchivo);

            $sentencia -> execute();

            header('Location: index.php');
        break;
        case 'btnModificar':
            $sentencia = $pdo -> prepare("UPDATE empleados SET nombre=:nombre, apellidop=:apellidop, apellidom=:apellidom, correo=:correo WHERE id=:id");

            $sentencia -> bindParam(':nombre', $txtNombre);
            $sentencia -> bindParam(':apellidop', $txtApellidoP);
            $sentencia -> bindParam(':apellidom', $txtApellidoM);
            $sentencia -> bindParam(':correo', $txtCorreo);
            $sentencia -> bindParam(':id', $txtID);

            $sentencia -> execute();

            $fecha = new DateTime();
            $nombreArchivo = ($txtFoto != "") ? $fecha -> getTimestamp() . '_' . $_FILES['txtFoto']['name'] : "imagen.jpg";

            $tmpFoto = $_FILES['txtFoto']['tmp_name'];

            if ($tmpFoto != '') {
                move_uploaded_file($tmpFoto, '../imagenes/' . $nombreArchivo);

                $empleado = $sentencia -> fetch(PDO::FETCH_LAZY);

                print_r($empleado);

                if (isset($empleado['foto'])) {
                    if (file_exists('../imagenes/' . $empleado['foto'])) 
                    {
                        if($iten['foto'] != 'imagen.jpg')
                        unlink('../imagenes/' . $empleado['foto']);
                    }
                }

                $sentencia = $pdo -> prepare('UPDATE empleados SET foto=:foto WHERE id=:id');

                $sentencia -> bindParam(':foto', $nombreArchivo);
                $sentencia -> bindParam(':id', $txtID);

                $sentencia -> execute();
            }

            header('Location: index.php');

            echo $txtID;
            echo 'Presionaste btnModificar';
        break;
        case 'btnEliminar':
            $sentencia = $pdo -> prepare('SELECT foto FROM empleados WHERE id=:id');

            $sentencia -> bindParam(':id', $txtID);

            $sentencia -> execute();

            $empleado = $sentencia -> fetch(PDO::FETCH_LAZY);

            print_r($empleado);

            if (isset($empleado['foto']) && $item['foto' != 'imagen.jpg']) {
                if (file_exists('../imagenes/' . $empleado['foto'])) {
                    unlink('../imagenes/' . $empleado['foto']);
                }
            }
            
            $sentencia = $pdo -> prepare("DELETE FROM empleados WHERE id=:id");

            $sentencia -> bindParam(':id', $txtID);

            $sentencia -> execute();

            header('Location: index.php');

            echo $txtID;
            echo 'Presionaste btnEliminar';
        break;
        case 'btnCancelar':

            header('Location: index.php');
        break;

        case "Seleccionar":
            $accionAgregar = "disabled";
            $accionModificar = $accionEliminar = $accionCancelar = "";
            $mostrarModal = true;
        break;
    }

    $sentencia = $pdo -> prepare('SELECT * FROM empleados');
    $sentencia -> execute();
    $listaEmpleados = $sentencia -> fetchAll(PDO::FETCH_ASSOC);
    // print_r($listaEmpleados);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>CRUD con Bootstrap, PHP y MySQL</title>
</head>
<body>
    <div class="container">
        <form action="" method="post" enctype="multipart/form-data">
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-row">
                                <div class="row g-3">
                                    <div class="form-group col-md-4">
                                        <label for="">Nombre(s): </label>
                                        <input type="text" name="txtNombre" required class="form-control" value="<?php echo $txtNombre ?>" placeholder="" id="txtNombre" require=""><br>
                                    </div>
                                    <div class = "form-group col-md-4">
                                        <label for="">Apellido Paterno: </label>
                                        <input type="text" name="txtApellidoP" required class="form-control" value="<?php echo $txtApellidoP ?>" placeholder="" id="txtApellidoP" require=""><br>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="">Apellido Materno: </label>
                                        <input type="text" name="txtApellidoM" required class="form-control" value="<?php echo $txtApellidoM ?>" placeholder="" id="txtApellidoM" require=""><br>
                                    </div>
                                </div>
                            </div>
                            <label for="">ID: </label>
                            <input type="hidden" required name="txtID" value="<?php echo $txtID ?>" placeholder="" id="txtID" require=""><br>
                            <label for="">Correo: </label>
                            <input type="email" name="txtCorreo" required class="form-control" value="<?php echo $txtCorreo ?>" placeholder="" id="txtCorreo" require=""><br>
                            <label for="">Foto</label>
                            <input type="file" accept="image/*" class="form-control" name="txtFoto" value="<?php echo $txtFoto ?>" placeholder="" id="txtFoto" require=""><br>
                            
                        </div>
                        <div class="modal-footer">
                            <button value="btnAgregar" <?php echo $accionAgregar ?> class = "btn btn-success" type="submit" name="accion">Agregar</button>
                            <button value="btnModificar" <?php echo $accionModificar ?> class = "btn btn-warning" type="submit" name="accion">Modificar</button>
                            <button value="btnEliminar" <?php echo $accionEliminar ?> class = "btn btn-danger" type="submit" name="accion">Eliminar</button>
                            <button value="btnCancelar" <?php echo $accionCancelar ?> class = "btn btn-primary" type="submit" name="accion">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar registro +</button>
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
                </thead>
                <?php foreach ($listaEmpleados as $empleado) { ?>
                <tr>
                    <td><img class="img-thumbnail" width="100px" src="../imagenes/<?php echo $empleado['foto']?>" alt=""></td>
                    <td><?php echo $empleado['nombre'] . ' ' . $empleado['apellidop'] . ' ' . $empleado['apellidom']?></td>
                    <td><?php echo $empleado['correo'] ?></td>
                    <td>
                        <form action="" method="post">
                            <input type="hidden" name="txtID" value="<?php echo $empleado['id'] ?>">
                            <input type="hidden" name="txtNombre" value="<?php echo $empleado['nombre'] ?>">
                            <input type="hidden" name="txtApellidoP" value="<?php echo $empleado['apellidop'] ?>">
                            <input type="hidden" name="txtApellidoM" value="<?php echo $empleado['apellidom'] ?>">
                            <input type="hidden" name="txtCorreo" value="<?php echo $empleado['correo'] ?>">
                            <input type="hidden" name="txtFoto" value="<?php echo $empleado['foto'] ?>">
                            <input type="submit" value="Seleccionar" name="accion">
                            <button value="btnEliminar" type="submit" name="accion">Eliminar</button>
                        </form>
                    </td>
                </tr>
                <?php } ?>
            </table>
        </div>
        <?php if($mostrarModal){ ?>
            <script>
                $('#exampleModal').modal('show');
            </script>
            <?php } ?>
    </div>
</body>
</html>