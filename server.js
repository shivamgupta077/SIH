const express     = require ('express');
const bodyParser  = require('body-parser');
const path = require('path');
const app		  = express();
const port = 8000;

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });


app.listen(port, () => {
    console.log("We are live on " + port);
})