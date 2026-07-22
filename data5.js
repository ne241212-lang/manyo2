// data5.js
// 5 questions total (5 plants × 1 question)
// Required photos under /photos:
//  - fuji.jpg, himejoon.jpg, sugi.jpg, marigold.jpg, nanakamado.jpg

window.QUIZ = {
  title: "万葉植物園 植物クイズ（5問）",
  mapImage: "assets/map.png",
  intro: {
    title: "万葉植物園の植物さがし",
    lead:
      "写真を手がかりに、園内で同じ植物を探してみましょう。\n\n地図はあくまで“だいたいこのへん”というヒントです。\n\n全5問。正解すると雰囲気の歌が表示されます。",
    note: "ボタンを押すとクイズへ進みます",
  },

  plants: [
    {
      id: "fuji",
      name: "藤",
      photo: "photos/fuji.jpg",
      pin: { x: 23, y: 52 },
      pinColor: "#7C3AED",
      stages: [
        {
          type: "plant_name",
          question: "【Q1】写真の植物はどれ？",
          choices: ["藤", "アジサイ", "クズ"],
          answer: "藤",
          nameHint: "ヒント：漢字2文字。花が房みたいに垂れる。",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "藤（雰囲気）",
            text: "藤波の　ほどける光　夕の庭",
            modern: "夕方の光の中で、藤の花がほどけるように揺れて見える。",
          },
        },
      ],
    },

    {
      id: "himejoon",
      name: "ヒメジョオン",
      photo: "photos/himejoon.jpg",
      pin: { x: 50, y: 60 },
      pinColor: "#F59E0B",
      stages: [
        {
          type: "plant_name",
          question: "【Q2】写真の植物はどれ？",
          choices: ["ヒメジョオン", "タンポポ", "ハルジオン"],
          answer: "ヒメジョオン",
          nameHint: "ヒント：カタカナ6文字。白い花びらがたくさん。道ばたに多い。",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "ヒメジョオン（雰囲気）",
            text: "白き花　風にほどけて　道しるべ",
            modern: "白い花びらが風でほどけるみたいに見えて、道ばたで目印になる感じ。",
          },
        },
      ],
    },

    {
      id: "sugi",
      name: "杉",
      photo: "photos/sugi.jpg",
      pin: { x: 60, y: 18 },
      pinColor: "#059669",
      stages: [
        {
          type: "plant_name",
          question: "【Q3】写真の植物はどれ？",
          choices: ["杉", "ヒノキ", "マツ"],
          answer: "杉",
          nameHint: "ヒント：漢字1文字。まっすぐ高く伸びる木。",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "杉（雰囲気）",
            text: "冬の森　音を抱えた　杉の影",
            modern: "冷たい森で、杉の影が静かに伸びている感じ。",
          },
        },
      ],
    },

    {
      id: "marigold",
      name: "マリーゴールド",
      photo: "photos/marigold.jpg",
      pin: { x: 15, y: 25 },
      pinColor: "#EAB308",
      stages: [
        {
          type: "plant_name",
          question: "【Q4】写真の植物はどれ？",
          choices: ["マリーゴールド", "ヒマワリ", "キンセンカ"],
          answer: "マリーゴールド",
          nameHint: "ヒント：カタカナ8文字。オレンジ〜黄色の花が丸く咲く。",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "マリーゴールド（雰囲気）",
            text: "昼の陽に　まるくほどける　金の花",
            modern: "日なたで、オレンジ色の花がまるく明るく見える感じ。",
          },
        },
      ],
    },

    {
      id: "nanakamado",
      name: "ナナカマド",
      photo: "photos/nanakamado.jpg",
      pin: { x: 40, y: 30 },
      pinColor: "#EC4899",
      stages: [
        {
          type: "plant_name",
          question: "【Q5】写真の植物はどれ？",
          choices: ["ナナカマド", "モミジ", "サクラ"],
          answer: "ナナカマド",
          nameHint: "ヒント：カタカナ5文字。赤い実が房になって残る木。",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "ナナカマド（雰囲気）",
            text: "秋の実の　赤を残して　風の道",
            modern: "秋の終わりでも赤い実が残って、風が通る道の目印になる感じ。",
          },
        },
      ],
    },
  ],
};
