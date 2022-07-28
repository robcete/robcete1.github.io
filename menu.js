

$(document).ready(function(){
	var numero=2
	$('#barra').hide();
    $('#barra1').hide();
    $('#barra2').hide();
    $('#barra3').hide();
    $('#barra4').hide();

	$("#menu").on( "click", function() {
	 if(numero%2==0){
	   $('#barra').show();
	   $('#barra1').show();
	   $('#barra2').show();
	   $('#barra3').show();
	   $('#barra4').show();
	   numero=1+numero
	   }
	   else{
	   $('#barra').hide();
	   $('#barra1').hide();
	   $('#barra2').hide();
	   $('#barra3').hide();
	   $('#barra4').hide();
	   
	   numero=1+numero
	   }

	});
});
function hacer_grande(){
imagen=document.getElementById("imagen")
imagen.width=400
imagen.height=200
}
function hacer_pequeño(){
imagen=document.getElementById("imagen")
imagen.width=200
imagen.height=200
}
function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}



