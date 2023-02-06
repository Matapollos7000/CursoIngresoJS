
// E/S: 5 Iván Sacks
function mostrar()
{
	var edad; 

	edad = document.getElementById("txtIdEdad").value;

	if(edad < 13 || edad > 17)
	{
		alert("Usted no es adolescente");
	}

}