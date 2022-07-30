const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//IchigoJamから送られてきたエンコードされた文字列をデコードする
const decodeMsg = (msg) => {
    let decodedMsg = ""; //返り値
    let MSG = msg.split("#");
    for(let i in MSG){
        decodedMsg += decodeURI(MSG[i]);
    }
    return decodedMsg;
}

//IchigoJamからのPOSTされた時の処理
app.post("/",(req,res) => {
    const token = req.body.token;
    const msg = req.body.msg;
        console.log("デコード前" + msg);
    const sendMsg = decodeMsg(msg);
        console.log("トークン:" + token);
        console.log("メッセージ:" + sendMsg);

    sendLine(token,sendMsg);
    res.send("sended LINE message\n");
});

//LINE送信部
const sendLine = (token,msg) => {
    const BASE_URL = 'https://notify-api.line.me';
    const PATH =  '/api/notify';
    const params = new URLSearchParams({
        message: "\n" + msg,
    });

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        },
        body: params.toString()
    };

    const main = async () => {
        const res = await fetch(BASE_URL + PATH, config);
        console.log(res.status);
    }

    main();
}

app.listen(PORT,() => {
    console.log("listening on " + PORT);
});