// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
//大きくなったり小さくなったりしながら動くようにしてみたい
let x, y, vx;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = 2 //ここで最初の円の大きさを指定
  y = 0 //これで色を操る、今は速度と連動させて色を決めてる
  vx = 1
}

function draw(){
  background(160, 192, 255);　//←これなくても大丈夫。
  fill(0, y, y * -1); //色で遊んでみても面白いかも
  ellipse(width / 2, height / 2, x); //3-2は座標が移動したが今回は大きさが変化する
  x += vx; //定数１でも作動するが、方向を持たせたいので文字に置き換える 　
  y += vx
  //  （1）新しく生成するパターン
  // 　if(x > width){ x = 0; }
  // 　else if(x < 0){ x = width; }
  // 　if(x > height){ x = 0; }
  // 　if(x < 0){ x = height; } //ここまでで上下か左右に触れたら再び新しい円ができる仕様に。

  if(x > height || x > width || 0 > x){ vx = -1 * vx; }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

//気づいたこと。ひとつの{}にはひとつのxとyのみ
