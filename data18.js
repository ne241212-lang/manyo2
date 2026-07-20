// data18.js
// 6 plants × 3 questions (18 total)
// Photo files to place under /photos:
//  - fuji.jpg, sugi.jpg, shaku.jpg, hagi.jpg, susuki.jpg, yamabuki.jpg
// Map pin positions are % on assets/map.png (adjust later).

window.QUIZ = {
  title: "万葉植物園 植物クイズ",
  mapImage: "assets/map.png",
  intro: {
    title: "万葉植物園の植物さがし",
    lead:
      "写真を手がかりに、園内で同じ植物を探してみましょう。\n\nQ1で植物名を当てたら、つづけて和歌の問題や観察ポイントの問題に進みます。\n\n地図はあくまで“だいたいこのへん”というヒントです。",
    note: "ボタンを押すとクイズへ進みます",
  },

  // 6 plants
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
          question: "『藤』が出てくる和歌の場面として近いのはどれ？",
          choices: [
            "房のように垂れる花を見て季節を感じる",
            "果実を割って中身を食べる",
            "海辺の貝を拾って遊ぶ",
          ],
          answer: "房のように垂れる花を見て季節を感じる",
          correctTitle: "正解！",
          correctText: "最後に、実物の特徴を観察してみよう。",
          poem: {
            title: "万葉歌（あとで差し替え）",
            text: "（ここに万葉集の歌を入れる）",
            modern: "（ここに現代語訳を入れる）",
          },
        },
        {
          type: "feature",
          question: "藤の花の咲き方として正しいのはどれ？",
          choices: [
            "房のように垂れ下がる",
            "1輪ずつ地面に沿って咲く",
            "木の幹に直接びっしり咲く",
          ],
          answer: "房のように垂れ下がる",
          observe: [
            "花は紫〜薄紫？",
            "房のようにぶら下がって咲いている？",
            "近づくと香りがする？",
          ],
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
          question: "『常緑の木（冬でも緑）』のイメージにいちばん近いのはどれ？",
          choices: ["変わらない、長く続く", "すぐ散って消える", "甘い香りで虫を呼ぶ"],
          answer: "変わらない、長く続く",
          correctTitle: "正解！",
          correctText: "最後に、実物の特徴を観察してみよう。",
          poem: {
            title: "万葉歌（あとで差し替え）",
            text: "（ここに万葉集の歌を入れる）",
            modern: "（ここに現代語訳を入れる）",
          },
        },
        {
          type: "feature",
          question: "杉を見分けるときに一番わかりやすいポイントはどれ？",
          choices: ["まっすぐ伸びる幹が多い", "花が大きくて目立つ", "水辺にだけ生える"],
          answer: "まっすぐ伸びる幹が多い",
          observe: ["幹はまっすぐ伸びている？", "葉は針のように細い？", "木の肌（樹皮）はどんな模様？"],
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
          question: "『小さな花が集まって咲く』表現として近いのはどれ？",
          choices: [
            "ひとつひとつは小さいが、集まると目立つ",
            "ひとつの花が巨大で目立つ",
            "花より実だけが目立つ",
          ],
          answer: "ひとつひとつは小さいが、集まると目立つ",
          correctTitle: "正解！",
          correctText: "最後に、実物の特徴を観察してみよう。",
          poem: {
            title: "万葉歌（あとで差し替え）",
            text: "（ここに万葉集の歌を入れる）",
            modern: "（ここに現代語訳を入れる）",
          },
        },
        {
          type: "feature",
          question: "シャクの花の形として近いのはどれ？",
          choices: ["傘（かさ）みたいに広がる", "つり鐘みたいに下を向く", "花びらがほとんどない"],
          answer: "傘（かさ）みたいに広がる",
          observe: ["白い小花が集まって、傘みたいな形？", "葉の形はギザギザ？", "近くに同じ仲間の草がある？"],
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
          question: "万葉集で『秋の植物』としてよく扱われるイメージに近いのはどれ？",
          choices: ["風、月、すすき、萩などの秋らしさ", "真夏の強い日差しと海", "雪と氷の世界"],
          answer: "風、月、すすき、萩などの秋らしさ",
          correctTitle: "正解！",
          correctText: "最後に、実物の特徴を観察してみよう。",
          poem: {
            title: "万葉歌（あとで差し替え）",
            text: "（ここに万葉集の歌を入れる）",
            modern: "（ここに現代語訳を入れる）",
          },
        },
        {
          type: "feature",
          question: "萩の特徴として近いのはどれ？",
          choices: ["小さい花が枝先にたくさんつく", "針のような葉がまとまってつく", "大きな花が1つだけ咲く"],
          answer: "小さい花が枝先にたくさんつく",
          observe: ["花が小さく、枝の先にまとまっている？", "秋に咲くイメージがある？", "葉は小さめで並んでいる？"],
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
          question: "『月＋秋の草』という組み合わせで連想しやすいのはどれ？",
          choices: ["野原で月を見上げる景色", "海の底の景色", "真昼の山頂"],
          answer: "野原で月を見上げる景色",
          correctTitle: "正解！",
          correctText: "最後に、実物の特徴を観察してみよう。",
          poem: {
            title: "万葉歌（あとで差し替え）",
            text: "（ここに万葉集の歌を入れる）",
            modern: "（ここに現代語訳を入れる）",
          },
        },
        {
          type: "feature",
          question: "ススキの見た目として近いのはどれ？",
          choices: ["ふわっとした穂が上に伸びる", "花が地面に張り付く", "水面に浮かぶ葉がある"],
          answer: "ふわっとした穂が上に伸びる",
          observe: ["穂がふわっと広がっている？", "草丈が高い？", "秋に目立ちやすい？"],
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
          question: "『山吹色』という言葉に近いのはどれ？",
          choices: ["あざやかな黄色", "こい紫", "真っ白"],
          answer: "あざやかな黄色",
          correctTitle: "正解！",
          correctText: "最後に、実物の特徴を観察してみよう。",
          poem: {
            title: "万葉歌（あとで差し替え）",
            text: "（ここに万葉集の歌を入れる）",
            modern: "（ここに現代語訳を入れる）",
          },
        },
        {
          type: "feature",
          question: "ヤマブキの花の特徴として近いのはどれ？",
          choices: ["黄色い花が目立つ", "針の葉が目立つ", "大きい実がぶら下がる"],
          answer: "黄色い花が目立つ",
          observe: ["花の色は黄色？", "花が目立つ場所に咲いている？", "春に咲くイメージがある？"],
          correctTitle: "完了！",
          correctText: "この植物の3問クリア。次の植物へ。",
        },
      ],
    },
  ],
};
