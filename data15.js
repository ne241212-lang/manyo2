// data15.js
// 15 questions total (5 plants × 3 questions)
// Required photos under /photos:
//  - fuji.jpg, himejoon.jpg, sugi.jpg, marigold.jpg, nanakamado.jpg

window.QUIZ = {
  title: "万葉植物園 植物クイズ（5×3問）",
  mapImage: "assets/map.png",
  intro: {
    title: "万葉植物園の植物さがし",
    lead:
      "写真を手がかりに、園内で同じ植物を探してみましょう。\n\n各植物3問（名前→雰囲気→特徴）。正解すると雰囲気の歌が表示されます（名前を当てた直後ではなく2問目で出ます）。",
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
          question: "【藤 Q1】写真の植物はどれ？",
          choices: ["藤", "アジサイ", "クズ"],
          answer: "藤",
          nameHint: "ヒント：漢字2文字。花が房みたいに垂れる。",
          correctTitle: "正解！",
          correctText: "次は雰囲気の問題。",
        },
        {
          type: "waka_scene",
          question: "【藤 Q2】この植物の“雰囲気”として近いのはどれ？",
          choices: ["房がゆれて、光がほどける感じ", "地面に張りつくように咲く", "水面に浮かぶ葉が目立つ"],
          answer: "房がゆれて、光がほどける感じ",
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
          question: "【藤 Q3】藤の花の咲き方として正しいのはどれ？",
          choices: ["房のように垂れ下がる", "1輪ずつ地面に沿って咲く", "木の幹に直接びっしり咲く"],
          answer: "房のように垂れ下がる",
          correctTitle: "完了！",
          correctText: "次の植物へ。",
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
          question: "【ヒメジョオン Q1】写真の植物はどれ？",
          choices: ["ヒメジョオン", "タンポポ", "ハルジオン"],
          answer: "ヒメジョオン",
          nameHint: "ヒント：カタカナ6文字。白い花びらがたくさん。道ばたに多い。",
          correctTitle: "正解！",
          correctText: "次は雰囲気の問題。",
        },
        {
          type: "waka_scene",
          question: "【ヒメジョオン Q2】この花の“見え方”として近いのはどれ？",
          choices: ["白い花びらが風でほどけるみたい", "大きい花が1輪だけ目立つ", "赤い実が房になって残る"],
          answer: "白い花びらが風でほどけるみたい",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "ヒメジョオン（雰囲気）",
            text: "白き花　風にほどけて　道しるべ",
            modern: "白い花びらが風でほどけるみたいに見えて、道ばたで目印になる感じ。",
          },
        },
        {
          type: "feature",
          question: "【ヒメジョオン Q3】見分けポイントとして近いのはどれ？",
          choices: ["細い花びらがたくさん", "葉が巨大でつやつや", "つるが巻きつく"],
          answer: "細い花びらがたくさん",
          correctTitle: "完了！",
          correctText: "次の植物へ。",
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
          question: "【杉 Q1】写真の植物はどれ？",
          choices: ["杉", "ヒノキ", "マツ"],
          answer: "杉",
          nameHint: "ヒント：漢字1文字。まっすぐ高く伸びる木。",
          correctTitle: "正解！",
          correctText: "次は雰囲気の問題。",
        },
        {
          type: "waka_scene",
          question: "【杉 Q2】この木の“印象”として近いのはどれ？",
          choices: ["静かに高く立つ", "地面に広がって這う", "水辺に浮かぶ"],
          answer: "静かに高く立つ",
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
          question: "【杉 Q3】杉を見分けるときに一番わかりやすいポイントはどれ？",
          choices: ["まっすぐ伸びる幹が多い", "花が大きくて目立つ", "水辺にだけ生える"],
          answer: "まっすぐ伸びる幹が多い",
          correctTitle: "完了！",
          correctText: "次の植物へ。",
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
          question: "【マリーゴールド Q1】写真の植物はどれ？",
          choices: ["マリーゴールド", "ヒマワリ", "キンセンカ"],
          answer: "マリーゴールド",
          nameHint: "ヒント：カタカナ8文字。オレンジ〜黄色の花が丸く咲く。",
          correctTitle: "正解！",
          correctText: "次は雰囲気の問題。",
        },
        {
          type: "waka_scene",
          question: "【マリーゴールド Q2】この花の“色の印象”として近いのはどれ？",
          choices: ["日なたで金色っぽく見える", "青く冷たく見える", "真っ白で影がうすい"],
          answer: "日なたで金色っぽく見える",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "マリーゴールド（雰囲気）",
            text: "昼の陽に　まるくほどける　金の花",
            modern: "日なたで、オレンジ色の花がまるく明るく見える感じ。",
          },
        },
        {
          type: "feature",
          question: "【マリーゴールド Q3】見分けポイントとして近いのはどれ？",
          choices: ["花びらが重なって丸く見える", "つるが木に巻きつく", "葉が針みたいに細い"],
          answer: "花びらが重なって丸く見える",
          correctTitle: "完了！",
          correctText: "次の植物へ。",
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
          question: "【ナナカマド Q1】写真の植物はどれ？",
          choices: ["ナナカマド", "モミジ", "サクラ"],
          answer: "ナナカマド",
          nameHint: "ヒント：カタカナ5文字。赤い実が房になって残る木。",
          correctTitle: "正解！",
          correctText: "次は雰囲気の問題。",
        },
        {
          type: "waka_scene",
          question: "【ナナカマド Q2】この木の“季節のサイン”として近いのはどれ？",
          choices: ["赤い実が残って目印になる", "夏だけ水に浮かぶ", "花が夜だけ光る"],
          answer: "赤い実が残って目印になる",
          correctTitle: "正解！",
          correctText: "雰囲気の歌が出ます。",
          poem: {
            title: "ナナカマド（雰囲気）",
            text: "秋の実の　赤を残して　風の道",
            modern: "秋の終わりでも赤い実が残って、風が通る道の目印になる感じ。",
          },
        },
        {
          type: "feature",
          question: "【ナナカマド Q3】特徴として近いのはどれ？",
          choices: ["赤い実が房になる", "花が紫で房が垂れる", "穂がふわっと広がる"],
          answer: "赤い実が房になる",
          correctTitle: "完了！",
          correctText: "おつかれさま！全問クリア。",
        },
      ],
    },
  ],
};
