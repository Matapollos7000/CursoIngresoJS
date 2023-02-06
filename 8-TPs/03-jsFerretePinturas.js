/*3.
Iván sacks
Ej: Tp3
	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la
 temperatura en Centígrados con un mensaje concatenado
 (ej.: " 32 Fahrenheit son 0 centígrados").
 txtIdTemperatura

B.	Al ingresar una temperatura en Centígrados debemos mostrar 
la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
	var gradosFahrenheit;
    var gradosCentigrados;

    gradosFahrenheit = document.getElementById("txtIdTemperatura").value;
    gradosFahrenheit = parseInt(gradosFahrenheit);

    gradosCentigrados = (gradosFahrenheit -32) * 5/9;

    alert(`${gradosFahrenheit} grados Fahrenheit son ${gradosCentigrados} grados centígrados`);
    

}

function CentigradosFahrenheit () 
{
	var gradosFahrenheit;
    var gradosCentigrados;

    gradosCentigrados= document.getElementById("txtIdTemperatura").value;
    gradosCentigrados= parseInt(gradosCentigrados);

    gradosFahrenheit = (gradosCentigrados * 9/5) + 32;

    alert(`${gradosCentigrados} grados Centigrados son ${gradosFahrenheit} grados Fahrenheit`);
}
