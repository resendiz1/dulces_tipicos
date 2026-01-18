window.onload = function(){
    emailjs.init('m202FJpgz8JlMhJrh');
}

function correo(){
    let $nombre = document.getElementById('nombre').value;
    let $telefono = document.getElementById('telefono').value;
    let $mensaje = document.getElementById('mensaje').value;
    let $error = document.getElementById('error');
    let $success = document.getElementById('success');

    if($nombre == '' || $telefono == '' || $mensaje == ''){
        $error.textContent = 'Por favor, completa todos los campos requeridos';
        $error.classList.remove('d-none');
        
        setTimeout(()=>{
            $error.classList.add('d-none');
        }, 4000);
        
        return;
    }
    else{
        let parametros = {
            to_email: 'arturo.resendiz@grupopabsa.com',
            name: $nombre,
            email: 'arturo.resendiz@grupopabsa.com',
            phone: $telefono,
            message: $mensaje
        }

        emailjs.send("service_9m5rcfq", 'template_cfgl7gs', parametros)
            .then(response => {
                $success.classList.remove('d-none');
                
                setTimeout(()=>{
                    $success.classList.add('d-none');
                }, 4000);

                document.getElementById('nombre').value = '';
                document.getElementById('telefono').value = '';
                document.getElementById('mensaje').value = '';
            }, error => {
                alert('El correo no se envió');
            })
    }
}
