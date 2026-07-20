// data18.js
// 6 plants × 3 questions (18 total)

window.QUIZ = {
  title: "万葉植物園 植物クイズ",
  mapImage: "assets/map.png",
  intro: {
    title: "万葉植物園の植物さがし",
    lead:
      "写真を手がかりに、園内で同じ植物を探してみましょう。\n\nQ1で植物名を当てたら、つづけて雰囲気の歌の問題へ進みます。\n\n地図はあくまで“だいたいこのへん”というヒントです。",
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
          question: "写真の植物はどれ？",
          choices: ["藤", "アジサイ", "クズ"],
          answer: "藤",
          correctTitle: "正解！",
          correctText: "つづけて、藤に関する問題へ進みます。",
        },
        {
          type: "waka_scene",
          question: "『藤』の雰囲気に近いのはどれ？",
          choices: [
            "房のように垂れる花が、静かに揺れる",
            "地面すれすれに小さく咲く",
            "水の上に浮かぶ丸い葉",
          ],
          answer: "房のように垂れる花が、静かに揺れる",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "藤（雰囲気）",
            text: "藤波の　ほどける光　夕の庭",
            modern: "夕方の光の中で、藤の花がほどけるように揺れて見える。",
          },
        },
        {
          type: "feature",
          question: "藤の花の咲き方として正しいのはどれ？",
          choices: ["房のように垂れ下がる", "1輪ずつ地面に沿って咲く", "木の幹に直接びっしり咲く"],
          answer: "房のように垂れ下がる",
          correctTitle: "完了！",
          correctText: "この植物の3問クリア。次の植物へ。",
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
          question: "写真の植物はどれ？",
          choices: ["杉", "ヒノキ", "マツ"],
          answer: "杉",
          correctTitle: "正解！",
          correctText: "つづけて、杉に関する問題へ進みます。",
        },
        {
          type: "waka_scene",
          question: "『杉』の雰囲気に近いのはどれ？",
          choices: ["まっすぐ立つ、静かな強さ", "すぐ散って消える軽さ", "水面に漂うゆらぎ"],
          answer: "まっすぐ立つ、静かな強さ",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "杉（雰囲気）",
            text: "冬の森　音を抱えた　杉の影",
            modern: "冷たい森で、杉の影が静かに伸びている感じ。",
          },
        },
        {
          type: "feature",
          question: "杉を見分けるときに一番わかりやすいポイントはどれ？",
          choices: ["まっすぐ伸びる幹が多い", "花が大きくて目立つ", "水辺にだけ生える"],
          answer: "まっすぐ伸びる幹が多い",
          correctTitle: "完了！",
          correctText: "この植物の3問クリア。次の植物へ。",
        },
      ],
    },

    {
      id: "shaku",
      name: "シャク",
      photo: "photos/shaku.jpg",
      pin: { x: 50, y: 60 },
      pinColor: "#F59E0B",
      stages: [
        {
          type: "plant_name",
          question: "写真の植物はどれ？",
          choices: ["シャク", "ニリンソウ", "ドクダミ"],
          answer: "シャク",
          correctTitle: "正解！",
          correctText: "つづけて、シャクに関する問題へ進みます。",
        },
        {
          type: "waka_scene",
          question: "『白い小花が集まる』雰囲気に近いのはどれ？",
          choices: ["小さな白が、点の集まりみたいに見える", "1輪だけ巨大に咲く", "実だけが目立つ"],
          answer: "小さな白が、点の集まりみたいに見える",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "シャク（雰囲気）",
            text: "白き点　道の端に咲き　風を待つ",
            modern: "小さな白い花が集まって、道の端で静かに揺れている感じ。",
          },
        },
        {
          type: "feature",
          question: "シャクの花の形として近いのはどれ？",
          choices: ["傘（かさ）みたいに広がる", "つり鐘みたいに下を向く", "花びらがほとんどない"],
          answer: "傘（かさ）みたいに広がる",
          correctTitle: "完了！",
          correctText: "この植物の3問クリア。次の植物へ。",
        },
      ],
    },

    {
      id: "hagi",
      name: "萩",
      photo: "photos/hagi.jpg",
      pin: { x: 40, y: 30 },
      pinColor: "#EC4899",
      stages: [
        {
          type: "plant_name",
          question: "写真の植物はどれ？",
          choices: ["萩", "ススキ", "ツツジ"],
          answer: "萩",
          correctTitle: "正解！",
          correctText: "つづけて、萩に関する問題へ進みます。",
        },
        {
          type: "waka_scene",
          question: "『萩』の雰囲気に近いのはどれ？",
          choices: ["秋の風で、細い枝がこまかく揺れる", "真夏の海で光がはねる", "雪の上で音が消える"],
          answer: "秋の風で、細い枝がこまかく揺れる",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "萩（雰囲気）",
            text: "秋の風　萩の影だけ　先に揺れ",
            modern: "風が来ると、まず萩の影がゆれて見える感じ。",
          },
        },
        {
          type: "feature",
          question: "萩の特徴として近いのはどれ？",
          choices: ["小さい花が枝先にたくさんつく", "針のような葉がまとまってつく", "大きな花が1つだけ咲く"],
          answer: "小さい花が枝先にたくさんつく",
          correctTitle: "完了！",
          correctText: "この植物の3問クリア。次の植物へ。",
        },
      ],
    },

    {
      id: "susuki",
      name: "ススキ",
      photo: "photos/susuki.jpg",
      pin: { x: 70, y: 50 },
      pinColor: "#64748B",
      stages: [
        {
          type: "plant_name",
          question: "写真の植物はどれ？",
          choices: ["ススキ", "ハス", "フジ"],
          answer: "ススキ",
          correctTitle: "正解！",
          correctText: "つづけて、ススキに関する問題へ進みます。",
        },
        {
          type: "waka_scene",
          question: "『月＋秋の草』の雰囲気に近いのはどれ？",
          choices: ["野原で月を見上げる景色", "海の底の景色", "真昼の山頂"],
          answer: "野原で月を見上げる景色",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "ススキ（雰囲気）",
            text: "月の下　穂がほどけゆく　野のしずけさ",
            modern: "月明かりで、ススキの穂がふわっとほどけて見える感じ。",
          },
        },
        {
          type: "feature",
          question: "ススキの見た目として近いのはどれ？",
          choices: ["ふわっとした穂が上に伸びる", "花が地面に張り付く", "水面に浮かぶ葉がある"],
          answer: "ふわっとした穂が上に伸びる",
          correctTitle: "完了！",
          correctText: "この植物の3問クリア。次の植物へ。",
        },
      ],
    },

    {
      id: "yamabuki",
      name: "ヤマブキ",
      photo: "photos/yamabuki.jpg",
      pin: { x: 15, y: 25 },
      pinColor: "#EAB308",
      stages: [
        {
          type: "plant_name",
          question: "写真の植物はどれ？",
          choices: ["ヤマブキ", "アジサイ", "ハギ"],
          answer: "ヤマブキ",
          correctTitle: "正解！",
          correctText: "つづけて、ヤマブキに関する問題へ進みます。",
        },
        {
          type: "waka_scene",
          question: "『山吹色』の雰囲気に近いのはどれ？",
          choices: ["あざやかな黄色", "こい紫", "真っ白"],
          answer: "あざやかな黄色",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "ヤマブキ（雰囲気）",
            text: "山の道　ひとつ灯るよう　黄の花",
            modern: "山道で、黄色い花がぱっと明るく見える感じ。",
          },
        },
        {
          type: "feature",
          question: "ヤマブキの花の特徴として近いのはどれ？",
          choices: ["黄色い花が目立つ", "針の葉が目立つ", "大きい実がぶら下がる"],
          answer: "黄色い花が目立つ",
          correctTitle: "完了！",
          correctText: "この植物の3問クリア。次の植物へ。",
        },
      ],
    },
  ],
};
