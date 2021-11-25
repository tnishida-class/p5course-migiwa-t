// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);//これから描く全てのものがストローク付きになるということか？

  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方
//幅と高さを指定すれば中心と大きさが決定されるということ？

  drawCircle(black, maxR);
  drawArcs(green, red, maxR * 0.8);
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawCircle(red, maxR * 0.05);
}

function drawCircle(c, r){
  fill(c);
  ellipse(cx, cy, r, r);
}

function drawArcs(c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}

//上のやつよく分からないので自分でやってみる↓
function setup(){
  createCanvas(400, 400);
  fill(0);
  circle(200, 200, 400)

  stroke(255);
  strokeWeight(3);
  for(let i = 0; i < 10; i++){
    let x = i * 2
    let y = i * 2 + 1
    let z = i * 2 + 2
    fill(0, 255, 0);//緑
    arc(200, 200, 325, 325, PI / 10 * x, PI / 10 * y, PIE);
    fill(255, 0, 0);//赤
    arc(200, 200, 325, 325, PI / 10 * y, PI / 10 * z, PIE);
  }
  for(let i = 0; i < 10; i++){
    let x = i * 2
    let y = i * 2 + 1
    let z = i * 2 + 2
    fill(242, 212, 147);//ベージュ
    arc(200, 200, 300, 300, PI / 10 * x, PI / 10 * y, PIE);
    fill(0);//黒
    arc(200, 200, 300, 300, PI / 10 * y, PI / 10 * z, PIE);
  }
  for(let i = 0; i < 10; i++){
    let x = i * 2
    let y = i * 2 + 1
    let z = i * 2 + 2
    fill(0, 255, 0);//緑
    arc(200, 200, 200, 200, PI / 10 * x, PI / 10 * y, PIE);
    fill(255, 0, 0);//赤
    arc(200, 200, 200, 200, PI / 10 * y, PI / 10 * z, PIE);
  }
  for(let i = 0; i < 10; i++){
    let x = i * 2
    let y = i * 2 + 1
    let z = i * 2 + 2
    fill(242, 212, 147);//ベージュ
    arc(200, 200, 175, 175, PI / 10 * x, PI / 10 * y, PIE);
    fill(0);//黒
    arc(200, 200, 175, 175, PI / 10 * y, PI / 10 * z, PIE);
  }
  fill(0, 255, 0);
  circle(200, 200, 50);

  fill(255, 0, 0);
  circle(200, 200, 25);
}
