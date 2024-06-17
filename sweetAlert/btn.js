$('#btn_guardar').click(function() {
    Swal.fire(
        '¡Éxito!',
        'Se guardó de la manera correcta.',
        'success'
    );
});

$('#btn_actualizar').click(function() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se actualizó el registro de la manera correcta.',
        showConfirmButton: false,
        timer: 1500
    });
});

$('#btn_eliminar').click(function() {
    Swal.fire({
        title: '¿Está seguro de eliminar el registro?',
        text: 'Verifique antes de continuar.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado',
                'Se eliminó el registro de la manera correcta.',
                'success'
            );
        }
    });
});