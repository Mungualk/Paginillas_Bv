<?php
    require 'empleados.php';
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
                                        <input type="text" name="txtNombre" class="form-control" <?php echo (isset($error['nombre']))?"is-invalid":""; ?> value="<?php echo $txtNombre ?>" placeholder="" id="txtNombre" require="">
                                        <div class="invalid-feedback">
                                            <?php
                                                echo (isset($error['nombre'])) ? $error['nombre']:""; 
                                            ?>
                                        </div>
                                        <br>
                                    </div>
                                    <div class = "form-group col-md-4">
                                        <label for="">Apellido Paterno: </label>
                                        <input type="text" name="txtApellidoP" class="form-control" <?php echo (isset($error['apellidop']))?"is-invalid":""; ?>value="<?php echo $txtApellidoP ?>" placeholder="" id="txtApellidoP" require="">
                                        <div class="invalid-feedback">
                                            <?php
                                                echo (isset($error['apellidop'])) ? $error['apellidop'] : "";
                                            ?>
                                        </div>
                                        <br>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="">Apellido Materno: </label>
                                        <input type="text" name="txtApellidoM" class="form-control" value="<?php echo $txtApellidoM ?>" placeholder="" id="txtApellidoM" require=""><br>
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
                            <button value="btnEliminar" <?php echo $accionEliminar ?> class = "btn btn-danger" type="submit" name="accion" onclick="return Confirmar('¿Realmente te vez en la necesidad de borrar ese registro? Piensalo, no volverá');">Eliminar</button>
                            <button value="btnCancelar" <?php echo $accionCancelar ?> class = "btn btn-primary" type="submit" name="accion">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar registro +</button> <br> <br>
        </form>
        <div class="row">
            <table class="table table-hover table-bordered">
                <thead class="thead-dark">
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
                            <button value="btnEliminar" type="submit" name="accion"  onclick="return Confirmar('¿Realmente te vez en la necesidad de borrar ese registro? Piensalo, no volverá');">Eliminar</button>
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
        <script>
            function Confirmar(Mensaje)
            {
                return (confirm(Mensaje)) ? true : false;
            }
        </script>
    </div>
</body>
</html>