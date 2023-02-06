/*Nombre: Iván sacks
Ej: E/S tp1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
txtIdPrecioUno
txtIdPrecioDos
txtIdPrecioTres
*/
function Sumar () 
{
    var productoUno;
    var productoDos;
    var productoTres;
    var total;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseFloat(productoUno);
    productoDos = parseFloat(productoDos);
    productoTres = parseFloat(productoTres);

    total = productoUno + productoDos + productoTres;

    alert(`El total de la suma es: $${total}`);	
}
function Promedio () 
{
    var productoUno;
    var productoDos;
    var productoTres;
    var total;
    var promedio;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseFloat(productoUno);
    productoDos = parseFloat(productoDos);
    productoTres = parseFloat(productoTres);

    total =  productoUno + productoDos + productoTres;
    promedio = total/3;

    alert(`El promedio de los 3 es: $${promedio}`);
}
function PrecioFinal () 
{
    var productoUno;
    var productoDos;
    var productoTres;
    var total;
    var iva;
    var precioFinal;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseFloat(productoUno);
    productoDos = parseFloat(productoDos);
    productoTres = parseFloat(productoTres);

    total = productoUno + productoDos + productoTres;
    iva = total * 21 /100 ;
    precioFinal = total + iva;

    alert(`El precio final es: $${precioFinal}`);	
	
}