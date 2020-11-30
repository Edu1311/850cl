var messages3 = document.getElementById("message (3)")
var respu3 = document.getElementById("resp")
var textbox3 = document.getElementById("textbox (3)")
var textbox23 = document.getElementById("textbox2 (3)")
var button3 = document.getElementById("button (3)")

button3.addEventListener("click", function(){
   var usuario = document.createElement("li");
   u = textbox3.value + ": " + textbox23.value;
   usuario.innerHTML = u;
   messages3.appendChild(usuario);
   textbox3.value = "";
   textbox23.value = "";
});

