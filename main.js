
var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject= "";
var blockImageObject= "";

function playerUpdate()
{
	fabric.Image.fromURL("player.png", function(Img) {
	playerObject = Img;

	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject);

	});
}

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p e shift pressionadas juntas");
	blockImageWidth = blockImageWidth + 10;
	blockImageHeight = blockImageHeight + 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m e shift pressionadas juntas");
	blockImageWidth = blockImageWidth - 10;
	blockImageHeight = blockImageHeight - 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;
}

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	if(keyPressed == '87')
	{
		newImage('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		newImage('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		newImage('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		newImage('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		newImage('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		newImage('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		newImage('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		newImage('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		newImage('cloud.jpg'); 
		console.log("c");
	}
	
}

// ● Primeiro, adicionaremos o código para que o personagem vá para cima. Essa função é chamada
// quando a tecla direcional cima for pressionada.

function up()
{
	// Quando o personagem move para cima, significa que ele sobe no eixo y. E, isso significa
	// que a coordenada y diminuirá
	// ● playerY (a qual contém o valor da coordenada y para o personagem): Estamos verificando
	// se o valor de playerY é maior que 0, assim, apenas o personagem deve subir.
	// ○ Isso é feito para caso o valor de playerY seja 0 ou menor que 0, assim, é permitido
	// que o personagem mova para cima, ao pressionar a tecla direcional cima, então, o
	// personagem moverá para fora da tela.
	// ● Portanto, para ter certeza de que o personagem não saia da tela, fazemos uma verificação
	// para playerY caso seja maior que 0, assim, apenas o personagem sobe.
	// // 

	if(playerY >=0)
	{
		playerY = playerY - blockImageHeight;
		console.log("autura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Cima for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function down()
{
	if(playerY <=500)
	{
		playerY = playerY + blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Baixo for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left()
{
	if(playerX >0)
	{
		playerX = playerX - blockImageWidth;
		console.log("largura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right()
{
	if(playerX <=850)
	{
		playerX = playerX + blockImageWidth;
		console.log("largura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a tecla direcional Direita for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
