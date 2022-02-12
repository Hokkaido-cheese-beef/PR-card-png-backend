# PR-card-png-buckend
This is buckend for make png.

## 使用方法 (入力コマンド)
1. [レポジトリを落とす] git clone https://github.com/BurakioCup/PR-card-png-backend.git
2. [ディレクトリに移動する] cd PR-card-png-backend
3. [必要なパッケージを落としてくる] npm install
4. [サーバーを起動する] npx ts-node .\app\app.ts

### server 設定
実運用BaseURL: https://us-central1-prcard-ae898.cloudfunctions.net/PR_card
ローカルで使用する際のURL: http://localhost:3000/

## API
### [POST] グラフ(レーダーチャート)&アイコン作成API
path: /newIconChart

parameter:
{
    faceImage: string,
    faceIconName: string,
    status: {
            itemName: string[5]
            itemScore: number[5]
        },
    chartName: string
}
```
ex)
{
    "faceImage": "asdfas~~~~~asdfasda="
    "faceIconName": "mmmaker_v1_icon.png",
    "status":  {
        "itemName":["技術力", "コミュ力", "陰キャ力", "星街パワー", "VTuber力"],
        "itemScore":[92, 72, 86, 74, 86]
    },
    "chartName": "mmmaker_v1_chart.png"
}

注意)
- faceIconNameとchartNameはユニークな値にしてください。
- itemNameとitemScorerの値の順序は一致させてください。
```
response:
```
Headers
    Status Code: 200
    Content-Type: application/json
Body
    {
        "statusImage": string,
        "faceImage": string
    }

    --------
    ex)
    {
        "statusImage": "https://firebasest~~~~",
        "faceImage": "https://firebasest~~~~~"
    }
    ## 返却される値は画像を取得できるURL
```

### [POST] グラフ作成API
path: /createChart

parameter:
{
    status: {
            itemName: string[5]
            itemScore: number[5]
        },
    chartName: string
}
```
ex)
{
    "status":  {
        "itemName":["技術力", "コミュ力", "陰キャ力", "星街パワー", "VTuber力"],
        "itemScore":[92, 72, 86, 74, 86]
    },
    "chartName": "mmmaker_v1_chart.png"
}

注意)
- chartNameはユニークな値にしてください。
- itemNameとitemScorerの値の順序は一致させてください。
```
response:
```
Headers
    Status Code: 200
    Content-Type: application/json
Body
    {
        "chartURL": string
    }

    --------
    ex)
    {
        "chartURL": "https://firebasestorage.googlea~~~~"
    }
    ## 返却される値は画像を取得できるURL
```

### [POST] 名前&ハッシュタグ&フリーテキスト画像作成API
path: /createNameTexts

parameter:
{
    userName: {
        name: string,
        nickName: string
    },
    userNameFileN: string,
    hashTags: string[4],
    hashTagsFileN: string,
    freeText: string,
    freeTextFileN: string
}
```
ex)
{
    "userName": {
        "name": "星神",
        "nickName": "userM"
    },
    "userNameFileN": "userM_name.png",
    "hashTags":["react","nodejs","redux","golang"],
    "hashTagsFileN": "userM_tag.png",
    "freeText": "As be\n As done.\n So I don't afraid it.",
    "freeTextFileN": "userM_text.png"
}

注意)
- hashTagsは4つ想定です。増やす場合は教えてください。
- freeTextは30字いない想定です。増やす場合は教えてください。
```
response:
```
Headers
    Status Code: 200
    Content-Type: application/json
Body
    {
    "nameImage": string,
    "tagImage": string,
    "freeImage": string
}

    --------
    ex)
    {
    "nameImage": "https://firebasestorage.googl~~~",
    "tagImage": "https://firebasestorage.google~~~",
    "freeImage": "https://firebasestorage.googl~~~"
}
    ## 返却される値は画像を取得できるURL
```