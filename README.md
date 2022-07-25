# IchigoJam-LINE-api

https://ichigojam-line.herokuapp.com/

誰でも簡単にIchigoJam（+ MixJuice）からLINEを送れるapiを作成しました！

※POSTメソッドを使うため、IchigoJamWebは使えません。IchigoJam実機のみです。

LINEアカウントを持っていれば無料で使えるLINE Notifyの機能で、スマホを持っていなくてもLINEが送れますね。

## ■デモ動画
https://twitter.com/shoichi1031da/status/1551673648855109633

## ■必要なもの

<ul>
<li>IchigoJam実機</li>
<li>MixJuice実機</li>
<li>LINE Notifyのアクセストークン</li>
</ul>

## ■使い方手順

### 1. 2つのサンプルコード（File0とFile1）をIchigoJamに保存する

＜サンプルコード＞

https://github.com/shoichi1031da/ichigojam-line-api/tree/main/ichigojam-sample-code

2ファイルとも長いプログラムなので、簡単にIchigoJamに読み込むには「いちごどろっぷ」をご利用ください。

https://github.com/shoichi1031da/mixjuice-share-code-app/blob/main/README.md


### 2. LINE Norifyでアクセストークンを発行する

▼参考記事▼

https://qiita.com/chivi_dump/items/a62a7b8c32e6ea894a09

### 3. 発行したアクセストークンをIchigoJamのコード(File0の行番号70）に追加する

手打ちでもOKですが、「いちごどろっぷ」を使えば簡単です。下記プログラムにアクセストークンを貼り付けて、いちごどろっぷで共有してください。

70 '{"token":"LINE Notifyのアクセストークン","msg":"#"}

### 4. File0番のプログラムを実行し、メッセージを打ち込んでエンターを押すとLINEに送信されます。

## ■注意
IchigoJamのカタカナはFile1番でエンコードしているため使えますが、IchigoJamの絵文字は未対応です。送っても文字化けします。

参考：https://hanadojo-sihan.hatenablog.com/entry/2020/10/13/091449

IchigoJam側でエンコードする必要があるため、絵文字を実装するにはIchigoJamのプログラムがもう1ファイル必要です。時間があったら作ります。（プルリク歓迎！）

その他質問などはTwitterからお願いします。

https://twitter.com/shoichi1031da

