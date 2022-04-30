# Hazy

このプロジェクトは、[Create React App](https://github.com/facebook/create-react-app)でブートストラップしています。

## 開発について
GitHubのワークフローは[Github Flow](https://atmarkit.itmedia.co.jp/ait/articles/1708/01/news015.html)を採用しています。

基本的にブランチとissueは、1対1に対応付けて作成してください。

ブランチ名の命名規則ですが、`feature`ブランチの場合は`feature/issue番号_このブランチで実装する内容の説明`のフォーマットで作成してください。

例えば、issue番号が`12`で、ログインページを実装する場合は、`feature/12_implementLoginPage`といった具合です。

`master`ブランチ, `develop`ブランチへの直接の`push`は避けて`PR`を作成するようにしてください。

PR名は`issue名 #issue番号`としてください。

Reviwerには全ての開発メンバーを選択して、全員からの`Approve`後に`Merge`します。

PRの本文には、以下のテンプレートを使用してください。

```md
# 関連issue/PR
- 

# PRでやったこと
- 

# 設計記事/関連情報(slack, 議事録など)
- 

# 確認項目
- [ ] [変数名や関数名に情報が詰め込まれている](https://qiita.com/fkrw/items/7646563a2b238fbcff9a#%EF%BC%92%E7%AB%A0%E5%90%8D%E5%89%8D%E3%81%AB%E6%83%85%E5%A0%B1%E3%82%92%E8%A9%B0%E3%82%81%E8%BE%BC%E3%82%80)
- [ ] [誤解を招く単語を変数名や関数名に使用していない](https://wayasblog.com/readable-code/#toc4)
- [ ] [必要なコメントを書いているか](https://wayasblog.com/readable-code/#toc6)
- [ ] [正確で簡潔なコメントを書いているか](https://wayasblog.com/readable-code/#toc7)
- [ ] [読みやすい制御フローを書いているか](https://wayasblog.com/readable-code/#toc9)
- [ ] [不要な変数を宣言していないか](https://wayasblog.com/readable-code/#toc11)
- [ ] [汎用コードをモジュール化出来ているか](https://wayasblog.com/readable-code/#toc11)
- [ ] [一度に一つのことを行っているか](https://wayasblog.com/readable-code/#toc14)
```

## 利用可能なスクリプト

プロジェクトディレクトリで、実行することができます。

### `npm start`

開発モードでアプリを実行します。
[http://localhost:3000](http://localhost:3000) を開くと、ブラウザで表示されます。

編集を行うとページが再読み込みされます。
また、lintエラーが発生した場合はコンソールに表示されます。

### `npm test`

テストランナーを対話型ウォッチモードで起動します。
詳しくは[テストの実行](https://facebook.github.io/create-react-app/docs/running-tests)の項を参照してください。

### `npm run build`

本番用のアプリを `build` フォルダにビルドします。
本番モードでReactを正しくバンドルし、最高のパフォーマンスが得られるようにビルドを最適化します。

ビルドはminifyされ、ファイル名にはハッシュが含まれます。
アプリをデプロイする準備ができました!

詳細は[deployment](https://facebook.github.io/create-react-app/docs/deployment)のセクションを参照してください。

## Learn More

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)でさらに詳しく学ぶことができます。

Reactを学ぶには、[React documentation](https://reactjs.org/)をチェックしてください。
