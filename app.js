const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Add env
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./src/route/mainRoute')(app);

app.listen(process.env.START_SERVER || 4000, () => 
    console.log(`Example app listening on port ${process.env.START_SERVER || 4000}`)
);

// Reply using AIML

// const express = require('express')
// const bodyParser = require('body-parser')
// const request = require('request')
// const AIMLInterpreter = require('aimlinterpreter')

// const app = express()
// const port = process.env.PORT || 4000
// const aimlInterpreter = new AIMLInterpreter({ name:'HelloBot'})

// aimlInterpreter.loadAIMLFilesIntoArray(['./test-aiml.xml'])

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.post('/webhook', (req, res) => {
//     let reply_token = req.body.events[0].replyToken
//     let msg = req.body.events[0].message.text
//     aimlInterpreter.findAnswerInLoadedAIMLFiles(msg, (answer, wildCardArray, input) => {
//         reply(reply_token, answer)
//     })
//     res.sendStatus(200)
// })

// app.listen(port)

// function reply(reply_token, msg) {
//     let headers = {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer SYvxcKZpk0KkZJjiecJeO2Rsv/JXQk2tXxTYEr/FM+sy92kre+GfEkDPVvMMJy2uF8b/kxXcmHoTIx7bsJuo4+oLarFGBKmyhF6aHmW1B5mpeF1hfCwPcOlXUVPIHu50Bg+wYMYQSreH7nFd2CapZwdB04t89/1O/w1cDnyilFU='
//     }

//     let body = JSON.stringify({
//         replyToken: reply_token,
//         messages: [{
//             type: 'text',
//             text: msg
//         }]
//     })

//     request.post({
//         url: 'https://api.line.me/v2/bot/message/reply',
//         headers: headers,
//         body: body
//     }, (err, res, body) => {
//         console.log('status = ' + res.statusCode);
//     });
// }