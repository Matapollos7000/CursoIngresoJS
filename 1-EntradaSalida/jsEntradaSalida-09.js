/*
Nombre: Iván sacks
Ej: E/S 05
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var num1;
num1 = document.getElementById("txtIdSueldo").value;
num1 = parseInt(num1);
total = num1 * 10 / 100;
total = total + num1;
document.getElementById("txtIdResultado").value = total;
}
