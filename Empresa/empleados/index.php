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
            <input type="text" name="txtID" placeholder="" id="txtID" require=""> <br>
            <label for="">Nombre:</label>
            <input type="text" name="txtNombre" placeholder="" id="txtNombre" require=""> <br>
            <label for="">Apellido paterno:</label>
            <input type="text" name="txtApellidop" placeholder="" id="txtApellido" require=""> <br>
            <label for="">Apellido materno:</label>
            <input type="text" name="txtApellidom" placeholder="" id="txtApellidom" require=""> <br>
            <label for="">Correo:</label>
            <input type="text" name="txtCorreo" placeholder="" id="txtCorreo" require=""> <br>
            <label for="">Foto:</label>
            <input type="text" name="txtFoto" placeholder="" id="txtFoto" require="">
        </form>
    </div>
</body>
</html>