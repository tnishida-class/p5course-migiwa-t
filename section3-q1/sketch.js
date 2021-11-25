// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
//大きくなったり小さくなったりしながら動くようにしてみたい
let x, y, vx, a, b;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = 2 //ここで最初の円の大きさを指定
  y = 0 //これで色を操る、今は速度と連動させて色を決めてる
  vx = 1
  a = width / 2
  b = height / 2
  count = 0
  cycle = 100
}

function draw(){
  background(160, 192, 255);　//←これなくても大丈夫。
  count = (count + 1) % cycle
  fill(0, y, y * -1); //色で遊んでみても面白いかも
  ellipse(a, b, count); //3-2は座標が移動したが今回は大きさが変化する
  x += vx; //定数１でも作動するが、方向を持たせたいので文字に置き換える 　
  y += vx

  if(keyIsDown(LEFT_ARROW)){ a -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ a += 5; }
  if(keyIsDown(UP_ARROW)){ b -= 5; }
  if(keyIsDown(DOWN_ARROW)){ b += 5; }
  if(keyIsDown("A".charCodeAt(0))){count = (count + 1) % 200}


  a = constrain(a, 0, width);
  b = constrain(b, 0, height);
   // （1）新しく生成するパターン
  // 　if(x > width){ x = 0; }
  // 　else if(x < 0){ x = width; }
  // 　if(x > height){ x = 0; }
  // 　if(x < 0){ x = height; } //ここまでで上下か左右に触れたら再び新しい円ができる仕様に。

  if(x > height || x > width || 0 > x){ vx = -1 * vx; }
}

function keyPressed(){
  if(key == " "){ // スペースキーを押したらリセット
    a = width / 2;
    b = height / 2;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

//気づいたこと。ひとつの{}にはひとつのxとyのみ
