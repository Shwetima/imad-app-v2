var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
    title:'Article one|Shwetima Sakshi',
    heading:'Article one',
    date: 'April 1st,2017',
    content:`<p>
            this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
        </p>
        <p>
            this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
        </p>
        <p>
            this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
        </p>`
},
'article-two':{
      title:'Article two|Shwetima Sakshi',
    heading:'Article two',
    date: 'April 1st,2017',
    content:`<p>
            this is the content for my second article.
        </p>`
    
    
},
'article-three':{
    
      title:'Article three|Shwetima Sakshi',
    heading:'Article three',
    date: 'April 1st,2017',
    content:`<p>
            this is the content for my third article.
        </p>`
}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate= `<html>
   <html>
    <head>
        <title>
                ${title}
        </title>
  <meta name="viewport" content="width-device-width, initial scale=1"/>
   <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
      <div>
        <a href="/">home</a>
       </div>
       <hr/>
     <h3>${heading}</h3>
    <div> ${date}</div>
    <div>
       ${content}
    </div>
    </div>
    
      </body>    
    
</html>`;
return htmlTemplate;
}


/*app.get('/', function (req, res) {
  res.send(createTemplate(article-one));
});*/

app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
