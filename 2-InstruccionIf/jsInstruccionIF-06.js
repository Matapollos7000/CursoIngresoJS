// E/S: 6 Iván Sacks (No entregado) txtIdEdad
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	if(edad < 18)
	{
		if(edad < 13)
		{
			alert("Eres un niño");
		}
		else
		{
			alert("Eres un adolescente");

		}
	}
	else
	{
		alert("Eres mayor de edad");
	}
	



}