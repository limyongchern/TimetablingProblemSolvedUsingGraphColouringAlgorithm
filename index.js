//import
const code = require('./code')
const express = require('express')
const app = express()
const bodyParser = require ('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

function startServer(){
    app.listen(4000);
    console.log ('SERVER UP on port 4000')
}
// do in ubuntu
app.get('/firstpage' , function(req,res) { 
    res.sendFile('/home/yong/Desktop/fyp/TimetablingApp.html')
});

app.post('/Submit', function(req,res){
    let inputname1 = req.body.examiners1;
    let inputname2 = req.body.examiners2;
    let inputname3 = req.body.examiners3;
    let input = req.body.startTime1;
    let input2 = req.body.endTime1;
    let input3 = req.body.startTime2;
    let input4 = req.body.endTime2;
    let input5 = req.body.startTime3;
    let input6 = req.body.endTime3;
    let input7 = req.body.startTime4;
    let input8 = req.body.endTime4;
    let input9 = req.body.startTime5;
    let input10 = req.body.endTime5;
    let input11 = req.body.startTime6;
    let input12 = req.body.endTime6;
    code.main(inputname1,inputname2,inputname3,input,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12);
})

startServer();