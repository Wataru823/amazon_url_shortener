## Amazonの商品URLを短くするWebアプリ

https://amazon-url-shortener.netlify.app

![test](https://github.com/Wataru823/amazon_url_shortener/assets/74819028/2eba39e7-5335-45a6-8ebb-03f773f1a36f)

### 開発環境・技術スタック
- M1 Mac
- TypeScript, React, Tailwind CSS

### 実行方法

```bash
yarn
```

```bash
yarn dev
```

### アルゴリズム

参考[[2]](https://takuya-1st.hatenablog.jp/entry/2013/12/24/005719) をもとに数パターンに対応しました。
(完全には網羅されていない可能性があります。)

- `"amazon.co.jp"` または `"amazon.jp"` が含まれているものとする。含まれていなければ、無効なURLであると警告する
- `"/dp/⚪︎⚪︎⚪︎⚪︎⚪︎⚪︎?"`, `"/dp/⚪︎⚪︎⚪︎⚪︎⚪︎⚪︎/"`, `"/gp/product/⚪︎⚪︎⚪︎⚪︎⚪︎⚪︎?"`, `"/gp/product/⚪︎⚪︎⚪︎⚪︎⚪︎⚪︎/"` の4パターンを検出し、前後は任意の文字列が入る
- ⚪︎⚪︎⚪︎⚪︎⚪︎⚪︎の部分を抽出し、`"http://amazon.jp/dp/"`の後ろに結合して出力する


### その他
AmazonのURLには "https://amzn.to/" から始まるものもあるが、こちらは主にアソシエイト (広告、アフィリエイトのようなもの) で正規のURLではないらしい。


### 参考
[1] [AmazonのURLには短縮機能がある。(amazonのドメインだけで短縮URLとしては十分）](https://takuya-1st.hatenablog.jp/entry/2013/12/24/005719)
[2] [【Typescript】Reactでテキストをコピーするボタンを実装する](https://amateur-engineer-blog.com/copy-button-with-typescript-react/)
