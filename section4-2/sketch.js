//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls = []; //配列を用意
let gush = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const g = {x: width / 2, y: height / 2 , size: 20, vx: dx, vy: dy}
  const dx = random(-100, 100)
  const dy = random(-100, 100)
  for(let k = 0; k < 100; k++){
    let g = gush[k];  //gをボール配列のk番目だと定義する
    ellipse(g.x, g.y, g.size); //円の中心がbのxの値とyの値、大きさはbのsizeで描画する
    g.x += g.vx;  //速さを与える。xの座標はxvずつ増加していき、yの座標はxyずつ増加していく。
    g.y += g.vy;　//それが動いて見える。
  }
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];  //bをボール配列のi番目だと定義する
    ellipse(b.x, b.y, b.size); //円の中心がbのxの値とyの値、大きさはbのsizeで描画する
    b.x += b.vx;  //速さを与える。xの座標はxvずつ増加していき、yの座標はxyずつ増加していく。
    b.y += b.vy;　//それが動いて見える。
  }
}

function mouseDragged(){　//マウスがクリックされながら移動すること
  const dx = mouseX - pmouseX;　//xの移動距離
  const dy = mouseY - pmouseY;　//yの移動距離
  let j = random(10, 80); //ボールサイズをランダムに
  if(mag(dx, dy) > 5){ //移動距離の長さが5を越えるごとに一個、丸が生成される
    const b = { x: mouseX, y: mouseY, size: j, vx: dx, vy: dy };
    balls.push(b);　//ボール1のオブジェクトを作って配列に追加
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
