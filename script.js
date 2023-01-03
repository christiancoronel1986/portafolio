function encriptarTexto(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
  }
  
  function desencriptarTexto(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
  }
  
  function mostrar(){
    swal('titulo','contenido','success')
  }
  
    document.getElementById("boton-encrip").addEventListener("click", function() {
    let textoOriginal = document.getElementById("input-text").value;
    let nuevoTexto = encriptarTexto(textoOriginal);
    document.getElementById("texto2").value = nuevoTexto;
    document.getElementById("input-text").value = "";
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
  
  });
  
    document.getElementById("boton-desen").addEventListener("click", function() {
    let textoOriginal = document.getElementById("input-text").value;
    let nuevoTexto = desencriptarTexto(textoOriginal);
    document.getElementById("texto2").value = nuevoTexto;
    document.getElementById("input-text").value = "";
    
  });
  
    document.getElementById("botonCopiar").addEventListener("click", function() {
    let areaDeTexto = document.getElementById("texto2");
    areaDeTexto.select();  // Seleccionamos el contenido del área de texto
    document.execCommand("copy");  // Copiamos el contenido seleccionado
    document.getElementById("texto2").value = "Mensaje Copiado";
    
    swal('Mensaje Copiado','', 'success')
  });
  
  