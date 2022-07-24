const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

    app.use(cors({
        origin: "https://fukuno.jig.jp",
        methods: "POST",
    }));

const bodyParser = require("body-parser");

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json()); 

app.post("/",(req,res) => {
    const token = req.body.token;
    const msg = req.body.msg;
        console.log(req);
        console.log(req.body);
        console.log("トークン:" + token);
        console.log("メッセージ:" + msg);
    sendLine(token,msg);
    console.log("送信完了");
    res.send("");
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