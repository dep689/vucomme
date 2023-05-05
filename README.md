# vucomme

ヴ専用 OneComme テンプレート

## 使い方 -- 簡単3ステップ

__Step 1.__ [リンク先](https://github.com/dep689/vucomme/releases) から vucomme_v0.0.0.zip を __ダウンロード__ して __解凍__ します。
中に「vucomme」というフォルダがあります。

![download](https://user-images.githubusercontent.com/117683899/236481839-8b73aa04-b04d-4bca-a4ef-b8e6c5f183c8.png)


__Step 2.__ OneComme の __テンプレートフォルダ__ を開きます。

![template_folder](https://user-images.githubusercontent.com/117683899/236480765-9cfa487f-8a9e-4e6f-b143-6845337d5719.png)

__Step 3.__ テンプレートフォルダの中に Step 1 でできた vucomme フォルダを入れます。（下の画像のようになります）

![complete](https://user-images.githubusercontent.com/117683899/236482935-b1542685-9b26-4f42-973a-29a6674f4231.png)


これで設定は完了！ OneComme を __再起動__ すると __テンプレート__ のとこに vucomme が追加されます！後は他のテンプレートと使い方は一緒です

![result](https://user-images.githubusercontent.com/117683899/236483434-5eda73ec-7817-404e-b3ea-8583438eb125.png)


## 目安は幅 600px ぐらい

## カスタム CSS

ちょっとだけカスタムできます。コピペして使ってね

- ミニヴを隠す

```css
/* ミニヴを隠す ここから */
.avatar { display: none; }
/* ミニヴを隠す ここまで */
```

- コメント背景色 (#?????? のように指定します)

https://www.colordic.org などから色を探せます。6桁なら色、8桁なら半透明色になります（例：#000000=黒，#000000f0=黒半透明）

```css
/* コメント背景色 ここから */
.comment-box { --v-color-primary: #000000f0; }
/* コメント背景色 ここまで */
```

- 文字

```css
/* 文字細い ここから */
.comment-box { font-weight: normal; }
/* 文字細い ここまで */
/* 文字色 ここから */
.comment-box { color: #ffffff; }
/* 文字色 ここまで */
```

- コメント少なく表示

```css
/* コメント少なく表示 ここから */
.comment-box:nth-child(n + 3) { animation: 600ms fadeout 200ms forwards ease-out; }
/* コメント少なく表示 ここまで */
```
