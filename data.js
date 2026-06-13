// data.js
// 画像ファイルを置く場所：
//  - photos/fuji.jpg
//  - photos/sugi.jpg
//  - photos/shaku.jpg
//  - assets/map.png
// ピン位置は map.png に対する相対座標（%）です。必要ならあとで調整してください。

window.QUIZ = {
  title: "万葉植物園 植物クイズ",
  mapImage: "assets/map.png",
  intro: {
    title: "万葉植物園の植物さがし",
    lead:
      "万葉植物園には、昔から季節ごとにさまざまな植物が息づいてきました。花が咲く時期、葉の形、木の肌、香り――同じ場所でも、見方を変えると別の表情が見えてきます。\n\nこのサイトは、万葉植物園の中にある植物を『見つけて、確かめる』ための小さな図鑑クイズです。まずは写真を手がかりに、園内で同じ植物を探してみてください。\n\n地図はあくまで“だいたいこのへん”というヒントです。ピンの色が、それぞれのクイズ（植物）に対応しています。現地で見つけたら、選択肢から名前を選んでください。正解すると、画面の真ん中に『正解！』が出て、その植物の豆知識が読めます。\n\nゆっくり歩いて、立ち止まって、観察してみましょう。",
    note: "ボタンを押すとクイズへ進みます",
  },
  questions: [
    {
      id: "fuji",
      name: "藤の花",
      photo: "photos/fuji.jpg",
      pin: { x: 23, y: 52 },
      pinColor: "#7C3AED", // 紫
      choices: ["藤の花", "アジサイ", "クズ"],
      answer: "藤の花",
      triviaTitle: "豆知識",
      trivia:
        "藤はマメ科のつる植物。花が房のように垂れ下がるのが特徴で、香りも楽しめます。",
    },
    {
      id: "sugi",
      name: "杉の木",
      photo: "photos/sugi.jpg",
      pin: { x: 60, y: 18 },
      pinColor: "#059669", // 緑
      choices: ["杉の木", "ヒノキ", "マツ"],
      answer: "杉の木",
      triviaTitle: "豆知識",
      trivia:
        "スギは日本でよく見られる常緑針葉樹。まっすぐ伸びる幹と、細い針のような葉が目印です。",
    },
    {
      id: "shaku",
      name: "シャク",
      photo: "photos/shaku.jpg",
      pin: { x: 50, y: 60 },
      pinColor: "#F59E0B", // オレンジ
      choices: ["シャク", "ニリンソウ", "ドクダミ"],
      answer: "シャク",
      triviaTitle: "豆知識",
      trivia:
        "シャクはセリ科の植物で、白い小花が集まって傘のように咲きます。葉の形も観察ポイント。",
    },
  ],
};
