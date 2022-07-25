const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

//IchigoJamWebはPOSTに非対応
    // app.use(cors({
    //     origin: "https://fukuno.jig.jp",
    //     methods: "POST",
    // }));

const bodyParser = require("body-parser");

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({
        extended: true
    }));

const decodeMsg = (msg) => {
    let decodeLength = 0;
    let divideMsg = [];
    let decodedMsg = "";
    for(let i = 0; i < msg.length; i++){
        if(msg.substr(i,1) == "%"){
            divideMsg[decodeLength] = msg.substr(i,9);
            i += 8;
        } else {
            divideMsg[decodeLength] = msg.substr(i,1);
        }
        decodeLength ++;
    }
    console.log("文字数：" + decodeLength);
    console.log("divideMsg:" + divideMsg);

    for(let i in divideMsg){
        decodedMsg += decodeURI(divideMsg[i]);
    }

    return decodedMsg;
}
 
app.post("/",(req,res) => {
    const token = req.body.token;
    const msg = req.body.msg;
    let sendMsg = "";
        console.log("デコード前" + msg);
    sendMsg = decodeMsg(msg);
        console.log("トークン:" + token);
        console.log("メッセージ:" + sendMsg);

    sendLine(token,sendMsg);
        console.log("送信完了");
    res.send("sended LINE message\n");
});

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
    console.log("listening at " + PORT)
});