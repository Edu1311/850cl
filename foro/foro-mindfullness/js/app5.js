var messages = document.getElementById("message")
var respu = document.getElementById("resp")
var textbox = document.getElementById("textbox")
var textbox2 = document.getElementById("textbox2")
var button = document.getElementById("button")

button.addEventListener("click", function(){
   var usuario = document.createElement("li");
   u = textbox.value + ": " + textbox2.value;
   usuario.innerHTML = u;
   messages.appendChild(usuario);
   textbox.value = "";
   textbox2.value = "";
   cont = 1;
});
