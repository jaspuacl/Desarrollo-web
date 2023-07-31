
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

        //validar edad
    if (document.formularios.edad.value.length < 2){
        alert("Ingrese una edad valida.")
        document.formularios.edad.focus()
        return 0;
      }


         //validar direccion
    if (document.formularios.adress.value.length < 5){
        alert("Ingrese una direccion valida.")
        document.formularios.adress.focus()
        return 0;
      }

       //validar Telefono
    if (document.formularios.cel.value.length < 8){
        alert("Ingrese una telefono valido.")
        document.formularios.cel.focus()
        return 0;
      }


      //validar Contraseña
    if (document.formularios.pass.value.length < 5){
        alert("Ingrese una contraseña valida.")
        document.formularios.pass.focus()
        return 0;
      }

      //validar Tarjeta
      if (document.formularios.tarjet.value.length < 12){
        alert("Ingrese un numero de tarjeta valido.")
        document.formularios.tarjet.focus()
        return 0;
      }

      //validar Tarjeta
      if (document.formularios.security.value.length <= 2){
        alert("Ingrese un numero de seguridad de 3 digitos.")
        document.formularios.security.focus()
        return 0;
      }

      //validar Tarjeta
      if (document.formularios.propietario.value.length < 5){
        alert("Ingrese el nombre de la tarjeta.")
        document.propietario.security.focus()
        return 0;
      }



    alert("Muchas gracias por enviar el formulario");
        document.formularios.submit();
       
}

