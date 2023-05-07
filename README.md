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

## フォント変更（ムズカシイ）

__とりあえず使ってみる__

次の内容をカスタムCSSの __一番上に__ コピペしてみよう！

```css
/* フォント設定 ここから */
@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap');
.comment-box { font-family: 'Hachi Maru Pop', cursive; }
/* フォント設定 ここまで */
```

フォントが変わりましたか！？他のフォントを使うには次のようにします。

__Step 1.__ [Google Fonts](https://fonts.google.com/?subset=japanese&noto.script=Jpan) でフォントを探します。
気に入ったフォントがあればクリックしてみる。

__Step 2.__ Select ~~ というところがあるのでクリックしてみるとサイドバーが開きます。開かない場合は右上のボタンから開くことができます。

![click](https://user-images.githubusercontent.com/117683899/236665548-076d85ce-eefa-47d9-a5b6-6c576f814dac.png)


__Step 3.__  サイドバーから必要な情報をコピーします。

![font_select](https://user-images.githubusercontent.com/117683899/236666553-04a2717d-f4c8-40be-81ab-36dc4a000f2a.png)

__Step 4.__ コピーした情報をもとにカスタムCSSを設定します。

__注意点__ カスタムCSSの __一番上に__ 設置します。

カスタムCSSの例は下のようになります。

```css
/* フォント設定 ここから */
@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap');
.comment-box { font-family: 'Hachi Maru Pop', cursive; }
/* フォント設定 ここまで */
```

次の２カ所を Step 3 でコピーした内容に書き換えてください。

![font_css](https://user-images.githubusercontent.com/117683899/236667828-62e63e00-ba6e-4e21-b0ca-b0f1a998fcc8.png)

