// 最終課題を制作しよう

let x, y, vx, vy;

function setup() {
  createCanvas(600, 600);
   x = width / 2;
  y1 = height / 2;
  y2 = height / 2;
  vy1 = 2;
  vy2 = random(1,2);
}

function draw() {
  background(random(240,255));
  for(let i = 100; i <=500; i += 50){
    if(i % 100 == 50){
      fill(250,128,114);
      circle(i,y1,30);
    
    }
    else{
      fill(255);
      circle(i, y2, 25);
    
      }

y1 += vy1;
y2 -= vy2;   


//   // 跳ね返りは「速度 × -1」
//   if(i < 0 || i > width){ vx = -1 * vx; }
if(y1 < 0 || y1 > height){ vy1 = -1 * vy1; }
if(y2 < 0 || y2 > height){ vy2 = -1 * vy2; }

//   // x座標, y座標を画面内に戻しておく
//   i = constrain(i, 0, width);
y = constrain(y, 0, height);
  }
}
