const express = require('express');
const app = express();
var port = 3000;
app.use(express.urlencoded());




app.get('/', (req, res, next)=>{
    res.send('<h1>Hello </h1>');
});
app.get('/about', (req, res, next)=>{
    res.send('<h1>This is about me, i am Vullnet</h1>');
});

app.get('/cus?tom.stuff', (req, res, next)=>{
    res.send('<h1>Custom stuff </h1>');  
});
app.get('/c+us?tom.stuff', (req, res, next)=>{
    res.send('<h1>Really custom stuff </h1>');  
});
app.get('/user/:name-:age', (req, res, next)=>{ // age: it becomes a variable. 
    res.send("<h1>Hello  "+ req.param.name + " </h1>You are " +  req.params['age'] + "years old.");  // geting the data is request, data sending is response. 
}); // how you use parameters. 

app.post('/proessesForm', (req, res, next)=>{
    res.send("This is the result of the form");
});
app.user('/static', express.static('statitc'))








// * it means anything. any conctent in between. 



// it used as function  next is a call to another function. // ? means option that regular expression. 



//var.delete  what to use. // 

app.listen(port, ()=>{
    console.log(`Server stared on port ${port}`); 
}); // the port where it runs,  it is same function (){};