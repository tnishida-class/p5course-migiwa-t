// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(270, 180);
  background(0, 51, 153);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 135 + cos(theta) * 60;
    let y = 90 + sin(theta) * 60;
    star(x, y, 10);
  }
}

function star(cx, cy, r){
  noStroke();
  fill(255, 204, 0);
  beginShape();
  for(let i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);//次に登場したやつ同士をくっつける
  }
  endShape(CLOSE);
}
// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
