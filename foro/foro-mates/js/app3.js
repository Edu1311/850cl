var mensaje = document.getElementById("mensaje")
var respus = document.getElementById("respu")
var cajatexto = document.getElementById("cajatexto")
var cajatexto2 = document.getElementById("cajatexto2")
var boton = document.getElementById("boton")

boton.addEventListener("click", function(){
   var usuario = document.createElement("li");
   u = cajatexto.value + ": " + cajatexto2.value;
   usuario.innerHTML = u;
   mensaje.appendChild(usuario);
   cajatexto.value = "";
   cajatexto2.value = "";
});
