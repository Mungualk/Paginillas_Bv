<?php 
    include('../templates/cabecera.php');
?>
<div class="col-md-5">
    <form action="" method="post">
        <div class="card">
            <div class="card-header">
                Cursos
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="id" class="for-label">ID</label>
                    <input type="text" class="form-control" name="id" id="id" aria-describedby="helpId" placeholder="ID">
                </div>
                <div class="mb-3">
                    <label for="nombre_curso" class="form-label">Nombre</label>
                    <input type="text" class="form-control" name="nombre_curso" id="nombre_curso" aria-describedby="helpID" placeholder="Nombre del curso lol">
                </div>

                <div class="btn-group" role="group" aria-label="">
                    <button type="button" class="btn btn-success">Agregar</button>
                    <button type="button" class="btn btn-warning">Modificar</button>
                    <button type="button" class="btn btn-danger">Desintegrar</button>
                </div>

            </div>
        </div>
    </form>
</div>

<div class="col-md-7">
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> 1 </td>
                <td> Sitio web con PHP </td>
                <td> Seleccionar </td>
            </tr>
        </tbody>
    </table>
</div>

<?php 
    include('../templates/pie.php');
?>