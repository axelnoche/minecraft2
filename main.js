var lienzo = new fabric.Canvas('miLienzo');

player_x = 200;
player_y = 200;

block_image_width = 30;
block_image_height = 30;

var objeto_jugador= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("jugador.png", function(Img) {
	objeto_jugador = Img;
	objeto_jugador.scaleToWidth(150);
	objeto_jugador.scaleToHeight(140);
	objeto_jugador.set({top:player_y,left:player_x});
	lienzo.add(objeto_jugador);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	lienzo.add(block_image_object);
	});

}



// Agrega un evento listener y llama la función requerida
window.addEventListener("keydown", my_keydown);

// Define la función mi_TeclaPulsada
function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == "80"){
	console.log("p y shift precionadas juntas");
	block_image_width = block_image_width + 10;
	block_image_he = block_image_height + 10;
	document.getElementById("anchura_actual").innerHTML =block_image_width;
	document.getElementById("altura_actual").innerHTML =block_image_height;
}
if(e.shiftKey == true && keyPressed == "77"){
	console.log("m y shift precionadas juntas");
	block_image_width = block_image_width - 10;
	block_image_he = block_image_height - 10;
	document.getElementById("anchura_actual").innerHTML =block_image_width;
	document.getElementById("altura_actual").innerHTML =block_image_height;

}
if(keyPressed == "38"){
	arriba();
	console.log("arriba")
}
if(keyPressed == "40"){
	abajo();
	console.log("abajo")
}
if(keyPressed == "37"){
	izquierda();
	console.log("izquierda")
}
if(keyPressed == "39"){
	derecha();
	console.log("derecha")
}
if(keyPressed == "87"){
	new_image("muro.jpg");
	console.log("w");
	
}
if(keyPressed == "71"){
	new_image("tierra.png");
	console.log("g");
	
}
if(keyPressed == "76"){
	new_image("verde_claro.png");
	console.log("l");
	
}
if(keyPressed == "87"){
	new_image("muro.jpg");
	console.log("w");
	
}
if(keyPressed == "84"){
	new_image("tronco.jpg");
	console.log("t");
	
}
if(keyPressed == "82"){
	new_image("techo.jpg");
	console.log("r");
	
}
if(keyPressed == "89"){
	new_image("muro_amarillo.png");
	console.log("y");
	
}
if(keyPressed == "68"){
	new_image("verde_oscuro.png");
	console.log("d");
	
}
if(keyPressed == "85"){
	new_image("unico.png");
	console.log("u");
	
}
if(keyPressed == "67"){
	new_image("nube.jpg");
	console.log("c");
	
}
}




// Función para mover al jugador hacia arriba cuando la tecla de la flecha hacia ARRIBA es presionada.
function arriba()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura de imagen del bloque = " + block_image_height);
		console.log("Cuando la tecla hacia arriba es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		player_update();
	}
}
// Función para mover al jugador hacia abajo cuando la tecla de la flecha hacia ABAJO es presionada.
function abajo()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura de imagen del bloque = " + block_image_height);
		console.log("Cuando la tecla hacia abajo es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		player_update();
	}
}
// Función para mover al jugador hacia la izquierda cuando la tecla de la flecha IZQUIERDA es presionada.
function izquierda()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("altura de imagen del bloque = " + block_image_width);
		console.log("Cuando la tecla hacia la izquierda es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		player_update();
	}
}
// Función para mover al jugador hacia la derecha cuando la tecla de la flecha DERECHA es presionada.
function derecha()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("altura de imagen del bloque = " + block_image_width);
		console.log("Cuando la tecla hacia la derecha es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		player_update();
	}
}
