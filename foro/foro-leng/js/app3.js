var messages2 = document.getElementById("message (2)")
var respu2 = document.getElementById("resp")
var textbox2 = document.getElementById("textbox (2)")
var textbox22 = document.getElementById("textbox2 (2)")
var button2 = document.getElementById("button (2)")

button2.addEventListener("click", function(){
   var usuario = document.createElement("li");
   u = textbox2.value + ": " + textbox22.value;
   usuario.innerHTML = u;
   messages2.appendChild(usuario);
   textbox2.value = "";
   textbox22.value = "";
});
