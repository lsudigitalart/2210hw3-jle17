// Jessica Le hw3

var y;  //repeat in y direction
var x;  //repeat in x direction
var radius;

function setup(){
  createCanvas(600, 600);
  noStroke();
}

function draw(){
  background(50);

  //yellow dots
  for (y = 0; y <= height; y += 60){
    for (x = 0; x <= width; x += 60){
      fill(255, 218, 5);
      ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
    };
  };

  // blue stuff
  for(y = 0; y <= height; y += 50){
    for(x = 0; x <= width; x += 100){
      fill(80, 150, 200, 70);
      quad(x, y, x + 15, y + 20, x + 10, x + 25, x + 65, y + 70);
    };
  };

  //tiny gray dots
  for (y = 0; y <= height; y += 40){
    for (x = 0; x <= width; x += 40){
      fill(200, 200, 200, 150);
      ellipse(x, y, 20, 20);
    };
  };

  //tiny white dots
  for(y = 0; y <=height; y += 60){
    for(x = 0; x <= width; x +=60){
      fill(255);
      ellipse(x, y, 10);
    };
  };

};
