import emailjs from 'emailjs-com';
import swal from 'sweetalert';


export function enviarMensaje(e) {
  e.preventDefault();
  emailjs.sendForm('service_sg73ukk', 'template_c87asbi', e.target, 'user_vHgrPqBhsusdq9vTBoRwZ')
    .then((result) => {
      if(result.text === "OK"){
        swal({
          title: "Enviada!",
          text: "La consulta ha sido enviada!",
          icon: "success",
          button: "OK",
        });
      }
    }, (error) => {
        console.log(error.text);
    });
  e.target.reset();
}
