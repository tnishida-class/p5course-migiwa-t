// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){
    total += scores[i];
  　sum[i] += scores[i]
  }

  // let px, py
  // px = i-1までの合計/total * (PI * 2) + (-PI / 2);
  // py = iまでの合計/total * (PI * 2) + (-PI / 2);

  // arc(200, 200, 380, 380, px, py, PIE)
  // arc(200, 200, 380, 380, -PI / 2, (-PI / 2) + PI * 2 * scores[1] / total, PIE)
  // arc(200, 200, 380, 380, (-PI / 2) + PI * 2 * scores[1] / total, (-PI / 2) + PI * 2 * (scores[1]+scores[2]) / total, PIE)



  // BLANK[1]


}

  // sum += scores[i];
  //
  //
  // px = total
  // py =
  // arc(200, 200, 380, 380, px, , PIE);


//-PI / 2, (-PI / 2) + (2 * PI) *
