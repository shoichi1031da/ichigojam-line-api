# IchigoJam-LINE-api

https://ichigojam-line.herokuapp.com/

<img src="https://github.com/shoichi1031da/ichigojam-line-api/blob/main/document/add_ichigojam-chara.jpg" alt="メイン" title="main"> 

誰でも簡単にIchigoJam（+ MixJuice）からLINEを送れるapiを作成しました！

※POSTメソッドを使うため、IchigoJamWebは使えません。IchigoJam実機のみです。

LINEアカウントを持っていれば無料で使えるLINE Notifyの機能で、スマホを持っていなくてもLINEが送れますね。

追記）IchigoJamのカタカナに加えて、絵文字（文字コード224〜255）にも対応しました！（ver2.0）

## ■デモ動画 1.INPUTコマンドによるメッセージ送信
https://twitter.com/shoichi1031da/status/1551673648855109633

## ■デモ動画 2.センサーを組み合わせたIoT制作
https://twitter.com/shoichi1031da/status/1554093631853989888

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

## ■メッセージのエンコード、デコード方法について
IchigoJam側のプログラム（File1でカタカナ、File2で絵文字）をエンコードしています。

その際に文字列の区切り文字として#を使用しています。

（例：「あ」をメッセージとして送りたい場合、「#%E3%81%82」とIchigoJam側でエンコードしてPOST送信します。）

・IchigoJam側のエンコードの参考：https://hanadojo-sihan.hatenablog.com/entry/2020/10/13/091449

・変換サイト参考：https://tech-unlimited.com/urlencode.html

エンコードされた文字列をサーバー側（app.js）でデコードし、LINEnotifyのapiに渡しています。

その他質問などはTwitterからお願いします。

https://twitter.com/shoichi1031da

