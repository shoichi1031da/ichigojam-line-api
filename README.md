# IchigoJam-LINE-api

https://ichigojam-line.herokuapp.com/

<img src="https://github.com/shoichi1031da/mixjuice-chat-app/blob/main/document/add_ichigojam-chara.jpg" alt="メイン" title="main"> 

誰でも簡単にIchigoJam（+ MixJuice）からLINEを送れるapiを作成しました！

※POSTメソッドを使うため、IchigoJamWebは使えません。IchigoJam実機のみです。

LINEアカウントを持っていれば無料で使えるLINE Notifyの機能で、スマホを持っていなくてもLINEが送れますね。

追記）IchigoJamのカタカナに加えて、絵文字（文字コード224〜255）にも対応しました！（ver2.0）

## ■デモ動画
https://twitter.com/shoichi1031da/status/1551673648855109633

## ■必要なもの

<ul>
<li>IchigoJam実機</li>
<li>MixJuice実機</li>
<li>LINE Notifyのアクセストークン</li>
</ul>

## ■使い方手順

### 1. 3つのサンプルコード（File0とFile1）をIchigoJamに保存する

＜サンプルコード＞

https://github.com/shoichi1031da/ichigojam-line-api/tree/main/ichigojam-sample-code

3ファイルとも長いプログラムなので、簡単にIchigoJamに読み込むには「いちごどろっぷ」をご利用ください。

https://github.com/shoichi1031da/mixjuice-share-code-app/blob/main/README.md

<ul>
<li>file0：LINE送信</li>
<li>file1：IchigoJamのカタカナエンコード</li>
<li>file2：IchigoJamの絵文字（224〜255）エンコード</li>
</ul>

※IchigoJamの絵文字が不要な方は、file2のコードとfile1の行番号40のプログラムが不要です。

### 2. LINE Norifyでアクセストークンを発行する

▼参考記事▼

https://qiita.com/chivi_dump/items/a62a7b8c32e6ea894a09

### 3. 発行したアクセストークンをIchigoJamのコード(File0の行番号70）に追加する

手打ちでもOKですが、「いちごどろっぷ」を使えば簡単です。下記プログラムにアクセストークンを貼り付けて、いちごどろっぷで共有してください。

70 '{"token":"LINE Notifyのアクセストークン","msg":"#"}

### 4. File0番のプログラムを実行し、メッセージを打ち込んでエンターを押すとLINEに送信されます。

## ■注意
IchigoJamのカタカナ、絵文字（文字コード224〜255）にも対応しました！（ver2.0）

エンコードの参考：https://hanadojo-sihan.hatenablog.com/entry/2020/10/13/091449

その他質問などはTwitterからお願いします。

https://twitter.com/shoichi1031da

