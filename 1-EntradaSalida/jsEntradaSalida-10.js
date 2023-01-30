/*
Nombre: Iván sacks
Ej: E/S 010
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var num1;
num1 = document.getElementById("txtIdImporte").value;
num1 = parseInt(num1);
Descuento = num1 * 25 / 100;
total = num1 - Descuento;
document.getElementById("txtIdResultado").value = total;
}
