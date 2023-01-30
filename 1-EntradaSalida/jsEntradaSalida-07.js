/*
Nombre: Iván sacks
Ej: E/S 07
*/ 
var num1
var num2



function sumar()
{	
num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroDos").value;
num1 = parseInt(num1);
num2 = parseInt(num2);
		var suma ;
		suma = num1 + num2;
		alert("El resultado de tu suma es: " + suma);

}

function restar()
{
num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroDos").value;
num1 = parseInt(num1);
num2 = parseInt(num2);
var resta ;
		resta = num1 - num2;
		alert("El resultado de tu resta es: " + resta);
	
}

function multiplicar()
{ 
num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroDos").value;
num1 = parseInt(num1);
num2 = parseInt(num2);
var multiplicación ;
		multiplicación = num1 * num2;
		alert("El resultado de tu multiplicación es: " + multiplicación);
	
}

function dividir()
{
num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroDos").value;
num1 = parseInt(num1);
num2 = parseInt(num2);
var división ;
		división = num1 / num2;
		alert("El resultado de tu división es: " + división);
	
}

