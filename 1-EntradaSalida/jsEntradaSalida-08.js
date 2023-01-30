/*
Nombre: Iván sacks
Ej: E/S 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1
	var num2
num1 = document.getElementById("txtIdNumeroDividendo").value;
num2 = document.getElementById("txtIdNumeroDivisor").value;
num1 = parseInt(num1);
num2 = parseInt(num2);
		var división ;
		división = num1 % num2;
		alert("El resto de tu división es de: " + división);
	
}
