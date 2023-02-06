/*
Nombre: Iván sacks
Ej: E/S 09 bis
/*9 BIS : Debemos lograr tomar el importe por ID ,transformarlo a entero (parseInt), y
 tambien pedirle al usuario mediante una entrada de datos cual es el aumento a realizar,
 y luego mostrar el importe con el aumento en el TextBox"RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var interes;
    var sueldoTotal
    var interesTotal;

    sueldo = document.getElementById("txtIdSueldo").value;
    sueldo = parseInt(sueldo);

    interes = prompt("¿Cuál es el aumento que desea realizar?");
    interes = parseFloat(interes);

    interesTotal = sueldo * interes / 100;

    sueldoTotal = interesTotal + sueldo;

    document.getElementById("txtIdResultado").value = sueldoTotal;
}
