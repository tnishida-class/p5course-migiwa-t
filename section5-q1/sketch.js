// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon(80, 50, "  I love keyakizaka46  ");
}

function balloon(x, y, t){
  noStroke();
  let w = textWidth(t);//テキストの横幅
  let h = textAscent() + textDescent();//textHeightは存在しないので、こうなる
  let p = 2;
  fill(0);
  rect(x, y, w + p * 2, h + p * 2, 10); //最後ので丸みを指定
  triangle(x + w + p * 2 - 15, y, x + w + p * 2 - 10, y, x + w + p * 2 - 13, y - 5);
  fill(255);
  text(t, p + x , h + y - p);
}
