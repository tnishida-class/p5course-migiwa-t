//アメリカ国旗作る
function setup(){
  createCanvas(380, 200);
  background(255);

  let d = height / 13;

  for(let i = 0; i < 13; i++){
    if(i % 2 == 0){ //この中カッコ忘れずに！！
    x = i;
    noStroke(); //ストロークつけたくない時はこれ
    fill(191, 13, 62); //星条旗の赤
    rect(0, d * x, width, d);
    }
   }

   noStroke();
   fill(0, 32, 91);//星条旗の青
   rect(0, 0, 152, d * 7);



   for(let j = 0; j < 10; j++){
     for(let k = 0; k < 12; k++){

       let e = 152 / 12
       let f = d * 7 / 10

       if(k % 2 == 1 && j % 2 == 1){
       fill(255);
       circle(e * k, f * j, 10);
       }
       if(k > 0 && j > 0 && k % 2 == 0 && j % 2 == 0){
         fill(255);
         circle(e * k, f * j, 10)
       }
     }
   }
}

//iを2回使っちゃたために、無限ループ。一回使った変数は使わない。iとj似てるから見間違わないように！！！

// ギリシャ国旗
//function setup() {
  //const blue = color(0, 51, 160);
  //createCanvas(270, 180);
  // noStroke();
  //background(255);

  //let d = height / 9; // 縞1本の太さ

  //for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    //rect(0, i * d, width, (i + 1) * d);
  //}

  //fill(blue);
  //let size = d * 5;
  //rect(0, 0, size, size);

  //fill(255);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
//}
