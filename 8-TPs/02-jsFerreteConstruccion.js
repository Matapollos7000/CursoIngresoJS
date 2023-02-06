/*2.	
Iván sacks TP3
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

https://onlinegdb.com/zGVTAoan8
https://onlinegdb.com/o2-KG2kBT
https://onlinegdb.com/RjXRhrtkm
txtIdLargo
txtIdAncho
txtIdRadio
*/

function Rectangulo () 
{
    var largoIngresado;
    var anchoIngresado;
    var perimetro;
    var cantidadAlambre;

    largoIngresado = document.getElementById("txtIdLargo").value;
    anchoIngresado = document.getElementById("txtIdAncho").value;

    anchoIngresado = parseFloat(anchoIngresado);
    largoIngresado = parseFloat(largoIngresado);

    perimetro = (largoIngresado + anchoIngresado) *2;

    cantidadAlambre = perimetro * 3;

    alert(`El terreno se debe alambrar con ${cantidadAlambre}ms`);
}
function Circulo () 
{
    var radio;
    var perimetro;
    var cantidadAlambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    perimetro = 2 * 3.14 * radio;

    cantidadAlambre = perimetro * 3;

    alert(`Según su terreno usted debe alambrarlo con: ${cantidadAlambre}ms`);

	
}
function Materiales () 
{
    
    var largoIngresado;
    var anchoIngresado;
    var bolsasCal;
    var bolsasCemento;
    var medidasTotal;

    largoIngresado = document.getElementById("txtIdLargo").value;
    anchoIngresado = document.getElementById("txtIdAncho").value;

    anchoIngresado = parseFloat(anchoIngresado);
    largoIngresado = parseFloat(largoIngresado);

    medidasTotal = largoIngresado * anchoIngresado;

    bolsasCemento = medidasTotal * 2;
    bolsasCal = medidasTotal * 3;

    bolsasCemento = medidasTotal * 2;

    alert(`Para hacer el contrapiso se necesitan ${bolsasCal} bolsas de cal y ${bolsasCemento} bolsas de cemento`);



}