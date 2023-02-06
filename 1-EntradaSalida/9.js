/*9 BIS : Debemos lograr tomar el importe por ID ,transformarlo a entero (parseInt), y
 tambien pedirle al usuario mediante una entrada de datos cual es el aumento a realizar,
 y luego mostrar el importe con el aumento en el TextBox"RESULTADO".*/
 /*
Nombre: Iván sacks
Ej: E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var interes;
    var sueldoTotal

    sueldo = document.getElementById("txtIdSueldo").value;

    sueldo = parseFloat(sueldo);

    interes = sueldo * 10 / 100;

    sueldoTotal = interes + sueldo;

    document.getElementById("txtIdResultado").value = sueldoTotal;
}
