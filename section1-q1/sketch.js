// 練習問題：神戸市のマーク
function setup(){
  createCanvas(200, 200);
  background(255);
  stroke(22, 131, 46)

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);　//線を太くする
  strokeCap(SQUARE);　//切れ目を資格にする。これがないと丸になる。
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1]
  noFill();
  strokeWeight(25);　//線を太くする
  strokeCap(SQUARE);　//切れ目を四角にする。これがないと丸になる。
  arc(100 - 27, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);
  //↑1番初めが円の中心のx座標?、QUARTER_PI * 数字 で開始の位置と終了の位置を指定

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
