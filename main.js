
const express = require ('express');
const bodyParser = require ('body-parser');
const ejs = require('ejs');
const https = require('https');


const app = express();

let allLinks = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
  res.render('index', {newLink:allLinks});
});

app.post('/', (req, res)=> {
  const inputLink = req.body.input;
  const url = 'https://api.shrtco.de/v2/shorten?url='+ inputLink +'/'

  https.get(url, function(response){

    response.on('data', (data)=> {
    const linkData = JSON.parse(data)
    const originalLink = linkData.result.original_link;
    const shortLinks = linkData.result.full_short_link;

    let eachLink = {
      original: originalLink.substring(0,20) + '...',
      short: shortLinks
    }
    allLinks.push(eachLink);
    res.redirect('/');
  });
});
});



app.listen(process.env.PORT || 3000);
