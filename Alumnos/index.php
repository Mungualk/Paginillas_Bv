<?php
    session_start();
    if($_POST)
    {
        $mensaje = 'Usuario o constraseña incorrectos';
        if($_POST['usuario']=='admin' && $_POST['password'] == '1234')
        {
            $_SESSION['usuario'] = $_POST['usuario'];
            header('location: secciones/index.php');
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alumnos y Cursos</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4">

            </div>
            <form action="" method="post">
                <div class="card">
                    <div class="card-header">
                        Inicio de sesión 
                    </div>
                    <div class="card-body">
                        <?php
                            if(isset($mensaje)){ 
                            ?>
                            <div class="alert alert-danger" role="alert">
                                <strong><?php echo $mensaje ?></strong>
                            </div>
                            <?php }
                        ?>
                        <div class="mb-3">
                            <label for="">Usuario</label>
                            <input type="text" class="form-control" name="usuario" id="usuario" aria-describedby="helpid" placeholder="Usuario">
                            <small id="helpid" class="text-muted">Escribe tu usuario</small>
                        </div>
                        <div class="mb-3">
                            <label for="">Contraseña</label>
                            <input type="password" class="form-control" name="password" id="password" aria-describedby="helpid" placeholder="Contraseña">
                            <small id="helpid" class="text-muted">Escribe tu contraseña</small>
                        </div>

                        <button>Iniciar sesión</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Librerias de Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>