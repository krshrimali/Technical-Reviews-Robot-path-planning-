var positions = []; 
var startX = 1;
var startY = 1;
var endX = 400;
var endY = 400;	
var flag = 0;

var start_newX = 490;
var start_newY = 1;
var end_newX = 1;
var end_newY = 490;

function setup() {
	canvas = createCanvas(500, 500);
	console.log(width);
	console.log(height);
	numberOfColumns = 16; 
	numberOfRows = 16; 

	xStep = width/numberOfColumns; 
	yStep = height/numberOfRows; 

	var z = 1;
	for(var x = 0; x <= width; x += xStep){
		for(var y = 0; y <= height; y += yStep){
	 	 	z += 1
		  	// if(z % 4 == 0){
		  	var p = createVector(x, y, z);
		  	positions.push(p);
		  	// }
		  	// var p = createVector(x, y, z);      
		  	// positions.push(p);
		}
	}
}

function draw(){
  // console.log(positions);
  fill(250, 100, 100); 
  // alphabet =  1;
  for(var i = 0; i < positions.length; i++){ //go through all our positions
    line(positions[i].x, positions[i].y, positions[i].x + height, positions[i].y); //put a circle at each of them
    line(positions[i].x, positions[i].y, positions[i].x, positions[i].y + width);
    ellipse(positions[i].x, positions[i].y, 3, 3);
    // text(positions[i].z, positions[i].x, positions[i].y);
    // text(alphabet, positions[i].x, positions[i].y + 3);
    // alphabet += 1;
  }
  flag = 0; // set flag to zero.
  // line(500, 0, 500, 500);
  // canvas.mouseOver(showElement);
  if(flag == 0){
    ellipse(startX, startY, 10, 10);
    ellipse(start_newX, start_newY, 10, 10);
  }
  else{
    ellipse(startX, startY, 10, 10);
    fill(255, 204, 0);
    ellipse(start_newX, start_newY, 10, 10);
  }

  if(startX >= endX){
  	startX = 1;
  	startY = 1;
  }

  if(start_newX <= end_newX){
  	start_newX = 499;
  	start_newY = 1;
  }

  // if(startX == start_newX || startY == start_newY){
  // 	start_newX += 5;
  // 	start_newY -= 5;
  // }

  if(abs(startX - start_newX) <= 3 && abs(startY- start_newY) <= 3){
    flag = 1;
    console.log(start_newX, start_newY);
    console.log("Collided");
  	start_newX += 10;
  	start_newY -= 10;
    fill(200);
    ellipse(start_newX, start_newY, 3, 3);
    console.log(start_newX, start_newY);
  	// startX -= 10;
  	// startY -= 10;
  }
  else {
    // console.log(startX, start_newX);
  	start_newX -= 1;
  	start_newY += 1;
  	startX += 1;
  	startY += 1;
  }
}


function make_marker_move(X,Y,A,B){
	while(X != A){
		ellipse(X, Y, 3, 3);
		X = X + 0.25;
		Y = Y + 0.25;
		sleep();
		console.log("Drawing");
	}
}