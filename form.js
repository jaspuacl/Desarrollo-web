
function validar(){
    //Validar nombre
    if (document.formularios.myname.value.length < 5){
      alert("Ingrese un nombre valido.")
      document.formularios.myname.focus()
      return 0;
    }

    //validar apellido
    if (document.formularios.mylastname.value.length < 5){
        alert("Ingrese un apellido valido.")
        document.formularios.mylastname.focus()
        return 0;
      }

      //validar correo
    if (document.formularios.mail.value.length < 5){
        alert("Ingrese un correo valido.")
        document.formularios.mail.focus()
        return 0;
      }

       //validar direccion
    if (document.formularios.adress.value.length < 5){
        alert("Ingrese una direccion valida.")
        document.formularios.adress.focus()
        return 0;
      }

       //validar Telefono
    if (document.formularios.phone.value.length < 5){
        alert("Ingrese una direccion valida.")
        document.formularios.phone.focus()
        return 0;
      }

      //validar Carrera
    if (document.formularios.carrera.value.length < 5){
        alert("Ingrese una direccion valida.")
        document.formularios.carrera.focus()
        return 0;
      }

      //validar Contraseña
    if (document.formularios.pass.value.length < 5){
        alert("Ingrese una direccion valida.")
        document.formularios.pass.focus()
        return 0;
      }

    alert("Muchas gracias por enviar el formulario");
        docent.formularios.submit();
       
}



