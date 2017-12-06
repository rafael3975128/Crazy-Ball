var x = 100;
var y = 100;
var z = 200;
var d = 200;
var  posX = 0;
var  posY = 200;
var  posz = 400;
var  posd = 300;
var sinalX=1;
var sinalY=1;
var sinalz=1;
var sinald=1;
var posa = 180;
var posb = 340;
var sinala=1;
var sinalb=1; 
var lv=50;
var tempo=0;
var Fase="Fase1";
var lifes = 5;

function setup() {
	stroke(1024,600);
	fill(255,255,0)
	tempo=0;
    createCanvas(1024,600);
   
}

function preload(){
	img = loadImage("Cenario.png");
	img2 = loadImage("game-over.jpg");
	img3 = loadImage("MinhaCaraHomer2.png");
	img4 = loadImage("cenario2.jpg");
	img6 = loadImage("caes-contra-fogos-artificio.jpg");
	img5 = loadImage("cenariofinal.png");

	}
	

function draw() {
	//if(Fase=="Fase1" && tempo>3000){
	//	Fase="Fase2";
	//}
	/*if(Fase=="fase2" && tempo > 1000){
		Fase = "fase3";
	}
	//fase 1
	if(Fase == "Fase1"){
		vaipFase1();
	}
	*/
	//if(Fase=="Fase1") {
			//fase 1
			background(img,1024,600);
			
			//Bolinha verde se movimentando (Personagem)

			
			if (keyIsDown(LEFT_ARROW))
			if(x>29)
			x-=15;

			if (keyIsDown(RIGHT_ARROW))
			if(x<width-29)
			x+=15;
		   

			if (keyIsDown(UP_ARROW))
			if(y>29)
			y-=15;

			if (keyIsDown(DOWN_ARROW))
			if(y<height-29)
			{
				y+=15;
			}
			
			//Colisões da bolinha verde com a bolinha preta e redução de tamanho
			
			if(dist(posX,posY,posz,posd)<=50)
			{
				sinalX = -sinalX;
				sinalY = -sinalY;
				sinald = -sinald;
				sinalz = -sinalz;
				
			}
			if(dist(x,y,posz,posd)<=50)
			{
				sinald = -sinald;
				sinalz = -sinalz;
				lv=lv-10;
				lifes--;
			}
			if(dist(x,y,posX,posY)<=50)
			{
				sinalX = -sinalX;
				sinalY = -sinalY;
				lv=lv-10;
				lifes--;
			}
			fill(0,0,0);
			ellipse(posz, posd, 50, 50);
			
			
			//Movimentos da verde
			fill(0, 255, 0);
			strokeWeight(0, 255, 0);
			ellipse(x, y, lv, lv);

			 
			posX = posX + (sinalX*15);
			posY = posY + (sinalY*15);
			if (posX > width){
				sinalX=-1;
			}
			if (posX < 0){
				sinalX=1;
			}
			if (posY > height){
				sinalY=-1;
			}
			if (posY < 0){
				sinalY=1;
			}
			
			fill(139, 101, 8);
			ellipse(posX, posY, 50, 50);
			
			//Movimentos da bola amarela
			posz = posz + (sinalz*15);
			posd = posd + (sinald*15);
			if (posz > width){
				sinalz=-1;
			}
			if (posz < 0){
				sinalz=1;
			}
			if (posd > height){
				sinald=-1;
			}
			if (posd < 0){
				sinald=1;
			}
			
			//Colisões
			
			if(dist(posX,posY,posa,posb)<=50)
			{
				sinalX = -sinalX;
				sinalY = -sinalY;
				sinala = -sinala;
				sinalb = -sinalb;
			}
			if(dist(x,y,posa,posb)<=50)
			{
				sinala = -sinala;
				sinalb = -sinalb;
			}
			if(dist(posa,posb,posX,posY)<=50)
			{
				sinalX = -sinalX;
				sinalY = -sinalY;
			}
			fill(255,255,0);
			ellipse(posa, posb, 50, 50);

			posa = posa + (sinala*20);
			posb = posb + (sinalb*20);
			if (posa > width){
				sinala=-1;
			}
			if (posa < 0){
				sinala=1;
			}
			if (posb > height){
				sinalb=-1;
			}
			if (posb < 0){
				sinalb=1;
			}
			if(lv==0){
				lv = 50;
				background(img2,1024,600);
				alert("Game Over");
				tempo=0;
			}
			// Temporizador
			if(tempo++>=2000){
				if(lv>0){
					lv=50;
					background(img3,1024,600);
					alert("Parabéns! Você passou para o Nível:  2");
					tempo++;
					fase2();
					return;
				}
			}
			
			
			
			//Texto
			textSize(35);
			fill(0, 0, 139);
			text("Time : "+ tempo++/100, 10,50);
		

			
			textSize(35);
			text("Lifes "+lifes, 250,50);
			
	//} // else{
		//Fase="Fase2";
		//} // <-
	


	if(tempo>2000){ // Fase=="Fase2" &&
		// Fase="Fase2"; // <-
	    fase2(); // <-
	    return;
	}
 // <-

function fase2() {
	//tempo=0;
	//setup();
	background(img4,1024,600);
	
	//Bolinha verde se movimentando (Personagem)


    
    if (keyIsDown(LEFT_ARROW))
    if(x>29)
    x-=22;

    if (keyIsDown(RIGHT_ARROW))
    if(x<width-29)
    x+=22;
   

    if (keyIsDown(UP_ARROW))
    if(y>29)
    y-=22;

    if (keyIsDown(DOWN_ARROW))
    if(y<height-29)
    {
        y+=22;
    }
    
    //Colisões da bolinha verde com a bolinha vermelha e redução de tamanho
    
    if(dist(posX,posY,posz,posd)<=50)
	{
		sinalX = -sinalX;
		sinalY = -sinalY;
		sinald = -sinald;
		sinalz = -sinalz;
		
	}
	if(dist(x,y,posz,posd)<=50)
	{
		sinald = -sinald;
		sinalz = -sinalz;
		lv=lv-10;
		lifes--;
	}
	if(dist(x,y,posX,posY)<=50)
	{
		sinalX = -sinalX;
		sinalY = -sinalY;
		lv=lv-10;
		lifes--;
	}
	fill(0,0,0);
	ellipse(posz, posd, 50, 50);
	
	
    //Movimentos da verde
    
    
    fill(0, 255, 0);
    strokeWeight(0, 255, 0);
    ellipse(x, y, lv, lv);

     
	posX = posX + (sinalX*25);
	posY = posY + (sinalY*25);
	if (posX > width){
	    sinalX=-1;
	}
	if (posX < 0){
	    sinalX=1;
	}
	if (posY > height){
	    sinalY=-1;
	}
	if (posY < 0){
	    sinalY=1;
	}
	
	
	fill(139, 101, 8);
	ellipse(posX, posY, 50, 50);
	
	//Movimentos da bola amarela
	
	
	posz = posz + (sinalz*25);
	posd = posd + (sinald*25);
	if (posz > width){
	    sinalz=-1;
	}
	if (posz < 0){
	    sinalz=1;
	}
	if (posd > height){
	    sinald=-1;
	}
	if (posd < 0){
	    sinald=1;
	}
	


	//Colisões
	
	if(dist(posX,posY,posa,posb)<=50)
	{
		sinalX = -sinalX;
		sinalY = -sinalY;
		sinala = -sinala;
		sinalb = -sinalb;
		
	}
	if(dist(x,y,posa,posb)<=50)
	{
		sinala = -sinala;
		sinalb = -sinalb;
		
			}
	if(dist(posa,posb,posX,posY)<=50)
	{
		sinalX = -sinalX;
		sinalY = -sinalY;
		
	
	}
	fill(255,255,0);
	ellipse(posa, posb, 50, 50);

	posa = posa + (sinala*25);
	posb = posb + (sinalb*25);
	if (posa > width){
	    sinala=-1;
	}
	if (posa < 0){
	    sinala=1;
	}
	if (posb > height){
	    sinalb=-1;
	}
	if (posb < 0){
	    sinalb=1;
	}
	if(lv==0){
		lv = 50;
		background(img2,1024,600);
		alert("Game Over");
		tempo=0;
	}
	
	// Temporizador
			if(tempo++>=3000){
				if(lv>0){
					alert("Parabéns! Você passou para o Nível:  3");
					lv=50;
					background(img3,1024,600);
					tempo++;
					fase3();
					return;
				}
			}
		                                                                     //background(img3,1024,600);

	//Texto
	textSize(35);
	fill(0, 0, 139);
	text("Time : "+ tempo++/100, 10,50);
	

	
	textSize(35);
			text("Lifes "+lifes, 250,50);
	
	
		// } <-
		//else{
		//	Fase="Fase3";
		//}
		
	//if(Fase=="Fase2" && tempo>3000){
	//	Fase="Fase3";
	// }
	if(tempo>3000){
		fase3();
		return;
		}
} // <-

function fase3(){
		//tempo = 0;
		//setup();
		//fase 3
			background(img5,1024,600);
			
			//Bolinha verde se movimentando (Personagem)

			
			if (keyIsDown(LEFT_ARROW))
			if(x>29)
			x-=15;

			if (keyIsDown(RIGHT_ARROW))
			if(x<width-29)
			x+=15;
		   

			if (keyIsDown(UP_ARROW))
			if(y>29)
			y-=15;

			if (keyIsDown(DOWN_ARROW))
			if(y<height-29)
			{
				y+=15;
			}
			
			//Colisões da bolinha verde com a bolinha vermelha e redução de tamanho
			
			if(dist(posX,posY,posz,posd)<=50)
			{
				sinalX = -sinalX;
				sinalY = -sinalY;
				sinald = -sinald;
				sinalz = -sinalz;
				
			}
			if(dist(x,y,posz,posd)<=50)
			{
				sinald = -sinald;
				sinalz = -sinalz;
				lv=lv-10;
				lifes--;
			}
			if(dist(x,y,posX,posY)<=50)
			{
				sinalX = -sinalX;
				sinalY = -sinalY;
				lv=lv-10;
				lifes--;
			}
			fill(0,0,0);
			ellipse(posz, posd, 50, 50);
			
			
			//Movimentos da verde
			fill(0, 255, 0);
			strokeWeight(0, 255, 0);
			ellipse(x, y, lv, lv);

			 
			posX = posX + (sinalX*60);
			posY = posY + (sinalY*60);
			if (posX > width){
				sinalX=-1;
			}
			if (posX < 0){
				sinalX=1;
			}
			if (posY > height){
				sinalY=-1;
			}
			if (posY < 0){
				sinalY=1;
			}
			
			
			fill(139, 101, 8);
			ellipse(posX, posY, 50, 50);
			
			//Movimentos da bola amarela
			posz = posz + (sinalz*60);
			posd = posd + (sinald*60);
			if (posz > width){
				sinalz=-1;
			}
			if (posz < 0){
				sinalz=1;
			}
			if (posd > height){
				sinald=-1;
			}
			if (posd < 0){
				sinald=1;
			}
			


			//Colisões
			
			if(dist(posX,posY,posa,posb)<=50)
			{
				sinalX = -sinalX;
				sinalY = -sinalY;
				sinala = -sinala;
				sinalb = -sinalb;
			}
			if(dist(x,y,posa,posb)<=50)
			{
				sinala = -sinala;
				sinalb = -sinalb;
			}
			if(dist(posa,posb,posX,posY)<=50)
			{
				sinalX = -sinalX;
				sinalY = -sinalY;
			}
			fill(255,255,0);
			ellipse(posa, posb, 50, 50);

			posa = posa + (sinala*60);
			posb = posb + (sinalb*60);
			if (posa > width){
				sinala=-1;
			}
			if (posa < 0){
				sinala=1;
			}
			if (posb > height){
				sinalb=-1;
			}
			if (posb < 0){
				sinalb=1;
			}
			if(lv==0 && lifes==0){
				lv = 50;
				background(img2,1024,600);
				alert("Game Over");
				tempo=0;
			}
			// Temporizador
			if(tempo++>=5000){
				if(lv>0){
					lv=50;
					background(img3,1024,600);
					alert("Parabéns! Você venceu!");
					background(img6,1024,600);
					alert("Voltar para o MENU");
					tempo++;
					//fase3();
					return;
				}
			}
			
			//Texto
			textSize(35);
			fill(0, 0, 139);
			text("Time : "+ tempo++/100, 10,50);

			textSize(35);
			text("Lifes "+lifes, 250,50);		
		//} <-
}
}
