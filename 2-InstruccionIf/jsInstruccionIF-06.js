// IF: 6 Iván Sacks 
function mostrar()
{
	var edad;
	var mensaje; 

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad > 12)
	{
		if(edad > 69)
		{
			mensaje = ("Eres un viejo");
		}
		else
		{
			if(edad < 18)
			{
				mensaje = ("Eres un adolescente");
			}
			else 
			{
				mensaje = ("Eres mayor");
			}	
		}	
	}
	else
	{
		mensaje = ("Eres un niño");
	}
	alert(mensaje);
}