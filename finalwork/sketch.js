// 最終課題を制作しよう

//個人の点は配列にして扱いやすくする
let dots = [];
  const d0 = { x: 32, y: 192 };
  dots.push(d0);
  const d1 = { x: 64, y: 288 };
  dots.push(d1);
  const d2 = { x: 96, y: 144};
  dots.push(d2);
  const d3 = { x: 160, y: 80};
  dots.push(d3);
  const d4 = { x: 176, y: 208}; //こいつがメイン
  dots.push(d4);
  const d5 = { x: 208, y: 336};
  dots.push(d5);
  const d6 = { x: 240, y: 160};
  dots.push(d6);
  const d7 = { x: 256, y: 96};
  dots.push(d7);
  const d8 = { x: 304, y: 256};
  dots.push(d8);
  const d9 = { x: 336, y: 64};
  dots.push(d9);
  const d10 = { x: 368, y: 272};
  dots.push(d10);

function setup(){
  createCanvas(400, 400);
}

let tweetTime, retweetTime, hashtagTime, askTime, state, eT
let t = 0; //これを0にしたら何もないから現れたようになるぞ…！
let r = 0;
let h = 0;
let a = 0;

function draw(){
  background(255, 255, 255);

  push();
  stroke(253, 164, 42);
  tsunagu(4, 0, t);
  tsunagu(4, 2, t);
  tsunagu(4, 5, t);
  tsunagu(4, 7, t);
  tsunagu(4, 8, t);

  stroke(27, 159, 211);
  tsunagu(8, 1, r);
  tsunagu(8, 5, r);
  tsunagu(8, 6, r);
  tsunagu(8, 9, r);
  tsunagu(8, 10, r);

  stroke(254, 106, 179);
  tsunagu(1, 0, h);
  tsunagu(1, 4, h);
  tsunagu(1, 5, h);
  tsunagu(9, 6, h);
  tsunagu(9, 7, h);
  tsunagu(9, 10, h);

　stroke(57, 188, 89);
  tsunagu(3, 2, a);
  tsunagu(3, 4, a);
  tsunagu(3, 6, a);
  pop();

  push();
  noStroke();
  fill(16, 16, 32);
  for(let i = 0; i < 11; i++){
  circle(dots[i].x, dots[i].y, 30);
  }
  // fill(217, 36, 45);
  circle(dots[4].x, dots[4].y, 60);
  pop();

  const limit = 2000;

  if(state == 1){ eT = millis() - tweetTime;
    if(eT < limit){hasshin(dots[4].x, dots[4].y - 15)}
    if(1000 < eT){ t = 5; }
  }
  if(state == 2){ eT = millis() - retweetTime;
    if(eT < limit){ hasshin(dots[8].x, dots[8].y)}
    if(1000 < eT && eT < limit){ fukidashi(dots[4].x, dots[4].y) }
    if(2000 < eT){ r = 5; }
  }
  if(state == 3){
    eT = millis() - hashtagTime;
    if(eT < limit){fukidashi(dots[4].x, dots[4].y, ' #')}
    if(1000 < eT && eT < limit){hasshin(dots[1].x, dots[1].y) ; hasshin(dots[9].x, dots[9].y);}
    if(2000 < eT){ h = 5; }
  }
  if(state == 4){
    eT = millis() - askTime;
    if(eT < limit){fukidashi( dots[3].x, dots[3].y + 15, 'Q?'); }
    if(1000 < eT && eT < limit){fukidashi(dots[4].x, dots[4].y, 'A!')}
    if(2000 < eT){ a = 5; }
  }
}

function keyPressed(){
 if(key == "1"){ tweetTime = millis(); state = 1; }
 if(key == "2"){ retweetTime = millis(); state = 2; }
 if(key == "3"){ hashtagTime = millis(); state = 3; }
 if(key == "4"){ askTime = millis(); state = 4; }
}

//点と点をつなぐ関数を短く
function tsunagu(p, q, r){
    push();
    strokeWeight(r);
    //stroke(　, , );
    beginShape();
    vertex(dots[p].x, dots[p].y );
    vertex(dots[q].x, dots[q].y );
    endShape();
    pop();
}

 function hasshin(x, y){
   push();
   for(let i = 0; i < 3; i++){
     strokeWeight(4);
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
