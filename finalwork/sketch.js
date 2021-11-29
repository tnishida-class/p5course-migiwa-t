// 最終課題を制作しよう

let tweetTime, retweetTime, hashtagTime, askTime, state, eT
let t = 0;
let r = 0;
let h = 0;
let a = 0;

let dots = []; //それぞれの中心点を決める
  const d0 = { x: 32, y: 192 };
  dots.push(d0);
  const d1 = { x: 64, y: 288 };
  dots.push(d1);
  const d2 = { x: 96, y: 144};
  dots.push(d2);
  const d3 = { x: 160, y: 80};
  dots.push(d3);
  const d4 = { x: 176, y: 208};
  dots.push(d4);
  const d5 = { x: 208, y: 336};
  dots.push(d5);
  const d6 = { x: 240, y: 160};
  dots.push(d6);
  const d7 = { x: 256, y: 96};
  dots.push(d7);
  const d8 = { x: 304, y: 256};
  dots.push(d8);
  const d9 = { x: 336, y: 128};
  dots.push(d9);
  const d10 = { x: 368, y: 208};
  dots.push(d10);

function setup(){
  createCanvas(400, 400);
}
function draw(){
  background(230, 230, 230);
  noStroke();
  circle(200, 200, 400);

  push();//それぞれを線で繋げる
  stroke(236, 147, 153);
  tsunagu(3, 2, a);
  tsunagu(3, 4, a);
  tsunagu(3, 6, a);

  tsunagu(1, 0, h);
  tsunagu(1, 4, h);
  tsunagu(1, 5, h);
  tsunagu(9, 6, h);
  tsunagu(9, 7, h);
  tsunagu(9, 10, h);

  stroke(245, 200, 203)
  tsunagu(8, 1, r);
  tsunagu(8, 5, r);
  tsunagu(8, 6, r);
  tsunagu(8, 9, r);
  tsunagu(8, 10, r);

  stroke(216, 36, 45);
  tsunagu(4, 0, t);
  tsunagu(4, 2, t);
  tsunagu(4, 5, t);
  tsunagu(4, 7, t);
  tsunagu(4, 8, t);
  pop();

  push();//人を表す円を描く
  stroke(255, 255, 255);
  strokeWeight(2);
  fill(236, 147, 153);
  for(let i = 0; i < 11; i++){
  circle(dots[i].x, dots[i].y, 30);
  }

  fill(216, 36, 45);//@kokubun_itに見立てた円を大きくする
  circle(dots[4].x, dots[4].y, 75);
  pop();

  const limit = 2000;
  const value = 10;

  if(state == 1){ //1を押すと、@kokubun_itの発信によってつながる
    eT = millis() - tweetTime;
    if(eT < limit){hasshin(dots[4].x, dots[4].y - 22.5)}
    if(1000 < eT){ t = value; }
  }
  if(state == 2){ //2を押すと、発信をリツイートすることでつながる
    eT = millis() - retweetTime;
    if(eT < limit){ hasshin(dots[8].x, dots[8].y)}
    if(1000 < eT && eT < limit){ fukidashi(dots[4].x, dots[4].y - 7.5, 'RT') }
    if(2000 < eT){ r = value; }
  }
  if(state == 3){//ハッシュタグイベントでつながる
    eT = millis() - hashtagTime;
    if(eT < limit){fukidashi(dots[4].x, dots[4].y - 7.5, ' #')}
    if(1000 < eT && eT < limit){hasshin(dots[1].x, dots[1].y) ; hasshin(dots[9].x, dots[9].y);}
    if(2000 < eT){ h = value; }
  }
  if(state == 4){//質問回答でつながる
    eT = millis() - askTime;
    if(eT < limit){fukidashi( dots[3].x, dots[3].y + 15, 'Q?'); }
    if(1000 < eT && eT < limit){fukidashi(dots[4].x, dots[4].y - 7.5, 'A!')}
    if(2000 < eT){ a = value; }
  }
}

//キーボード操作に対応させる
function keyPressed(){
 if(key == "1"){ tweetTime = millis(); state = 1; }
 if(key == "2"){ retweetTime = millis(); state = 2; }
 if(key == "3"){ hashtagTime = millis(); state = 3; }
 if(key == "4"){ askTime = millis(); state = 4; }
}

//ここから下は自作関数
function tsunagu(p, q, r){
    push();
    strokeWeight(r);
    beginShape();
    vertex(dots[p].x, dots[p].y );
    vertex(dots[q].x, dots[q].y );
    endShape();
    pop();
}

 function hasshin(x, y){
   push();
   for(let i = 0; i < 3; i++){
     strokeCap(SQUARE);
     strokeWeight(5);
     stroke(29, 161, 242); //Twitterのカラー
     noFill();
     arc(x ,y - 15, 20 + 15 * i, 20 + 15 * i, PI * 5 / 4, PI * 7 / 4);
   }
   pop();
 }

function fukidashi(x, y, t){
  push();
  noStroke();
  fill(29, 161, 242);
  rect(x - 17.5, y - 65, 35, 25, 8);
  triangle(x - 4, y - 40, x + 4, y - 40, x, y - 33)
  textSize(15)
  fill(255, 255, 255);
  text( t, x - 10, y - 47 );
  pop();
}
