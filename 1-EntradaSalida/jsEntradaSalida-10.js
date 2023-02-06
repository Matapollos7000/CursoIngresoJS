/*
Nombre: Iván sacks
Ej: E/S 010bis
Debemos lograr tomar el importe por ID ,transformarlo a entero (parseInt),y tambien pedirle
 al usuario mediante una entrada de datos cual es el descuento a realizar, y luego mostrar el
  importe final con el descuento en el TextBox y el descuento realizado en un Alert.
*/
function mostrarAumento()
{
	var sueldo;
	var descuento;
	var descuentoTotal;
	var sueldoTotal;

	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseFloat(sueldo);

	descuento = prompt("Ingrese el descuento");
	descuento = parseFloat(descuento);
	
	descuentoTotal = sueldo * descuento/100;
	sueldoTotal = sueldo - descuentoTotal;

	alert(`El descuento es de: $${descuentoTotal}` );

	document.getElementById("txtIdResultado").value = sueldoTotal;
}
