window.addEventListener('load', () => {
    const form = document.querySelector('#formulario');
    const usuario = document.getElementById('usuario');
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const passConfirma = document.getElementById('passConfirma');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validaCampos();
    });

    const validaCampos = () => {
        // Capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim();
        const emailValor = email.value.trim();
        const passValor = pass.value.trim();
        const passConfirmaValor = passConfirma.value.trim();

        // Validando campo usuario
        !usuarioValor ? validaFalla(usuario, 'Campo vacío') : validaOk(usuario);

        // Validando campo email
        if (!emailValor) {
            validaFalla(email, 'Campo vacío');
        } else if (!validaEmail(emailValor)) {
            validaFalla(email, 'Email no valido');
        } else {
            validaOk(email);
        }

        // Validando campo pass
        const er = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
        if(!passValor)
        {
            validaFalla(pass, 'Campo vacío')
        }
        else if(passValor.lenght > 8)
        {
            validaFalla(pass, 'Debe tener 8 caracteres como mínimo');
        }
        else if(!passValor.match(er))
        {
            validaFalla(pass, 'Debe tener al menos una may., una min. y un num.');
        }
        else
        {
            validaOk(pass);
        }
        // !passValor ? validaFalla(pass, 'Campo vacío') : validaOk(pass);

        // Validando campo passConfirma
        if(!passConfirmaValor)
        {
            validaFalla(passConfirma, 'Confirme su password');
        }
        else if(passValor !== passConfirmaValor)
        {
            validaFalla(passConfirma, 'La contraseña no coincide');
        }
        else
        {
            validaOk(passConfirma);
        }
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement;
        const aviso = formControl.querySelector('p');
        aviso.innerText = msje;

        formControl.className = 'form-control falla';
    }

    const validaOk = (input, msje) => {
        const formControl = input.parentElement;
        formControl.className = 'form-control ok';
    }

    const validaEmail = (email) => {
        return /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email); 
    }
});