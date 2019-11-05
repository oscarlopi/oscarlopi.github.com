var peso = document.getElementById("peso");
var planeta = document.getElementById("planeta");
var boton = document.getElementById("bpeso");
var respuesta = document.getElementById("respuesta");

boton.addEventListener("click", calcularPeso)

var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var nombre;
var peso_total;

function calcularPeso()
{
  console.log(parseInt(peso.value));
  console.log(parseInt(planeta.value));
  console.log(g_marte);
  if (planeta.value == 1)
  {
    peso_total = parseInt(peso.value) * g_marte / g_tierra;
    nombre = "Marte";
  }
  else if (planeta.value == 2)
  {
    peso_total = parseInt(peso.value) * g_jupiter / g_tierra;
    nombre = "Jupiter";
  }
  else
  {
    peso_total = 1000000000;
    nombre = "cualquier lugar";
  }
  peso_total = parseInt(peso_total);
  respuesta.innerHTML = "Tu peso en " + nombre + " es de " + peso_total + " kgs <br><img src=resp.png width=150 class= img animated bounceInDown><br> Recarga para intentar de nuevo : )"
}
