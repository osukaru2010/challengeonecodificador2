// esta funcion toma el texto ingresado en el textarea y lo encripta
function encriptar() { 
    var aCodificar = document.getElementById("textarea").value;
    var encriptado = aCodificar.replace(/[eèêëé]/gi,'enter').replace(/[iíìîï]/gi,'imes').replace(/[oóòôõö]/gi,'ober').replace(/[aáàâãä]/gi,'ai').replace(/[uùûüú]/gi,'ufat');
    document.getElementById("codificado").innerHTML=encriptado;
    document.getElementById("ocultar").innerHTML="";
    document.getElementById("textarea").value="";
    console.log(encriptado);
    cambiaImagenCodificado();
    if (aCodificar == "") { 
        alert(" \u26a0 Ingresa un Valor Diferente de Vacio");
        return true;
    }
}

function desencriptar() {
        var aDesCodificar = document.getElementById("textarea").value;
        var desencriptar = aDesCodificar.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    
    document.getElementById("codificado").innerHTML=desencriptar;
    document.getElementById("ocultar").innerHTML="";
    cambiaImagenDeCodificado()
    if (aDesCodificar == "") { 
        alert(" \u26a0 Ingresa un Valor Diferente de Vacio");
        return true;
    }
}


function copiar() {
    var paraCopiar = document.getElementById("codificado");

    paraCopiar.select();
    document.execCommand('copy');
    alert('\uD83D\uDC4D Copiado!');

}

//Cambiar Imagen
imagenUno=new Image
imagenUno.src="img/Muneco.png"
imagenDos=new Image
imagenDos.src="img/codificado.png"

var imagen=true;
function cambiaImagenCodificado() {                      
   if (imagen == true)
      {
      document.images['imagencodificado'].src=imagenDos.src
      imagen=false;
      }
   else
      {
      document.images['imagencodificado'].src=imagenUno.src;
      imagen=true;
      }
   }


   //Cambiar Imagen
imagenUnoD=new Image
imagenUnoD.src="img/Muneco.png"
imagenDosD=new Image
imagenDosD.src="img/decodificado.png"

var imagenD=true;
function cambiaImagenDeCodificado() {                      
   if (imagenD == true)
      {
      document.images['imagencodificado'].src=imagenDosD.src
      imagenD=false;
      }
   else
      {
      document.images['imagencodificado'].src=imagenUnoD.src;
      imagenD=true;
      }
   }


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/