const rp = require('request-promise');
const path = require('path');
const fs = require('fs');

let dataPath = path.join(__dirname, './popular-articles.json')

rp('https://reddit.com/r/popular.json')
    .then(res => {


        let articles = JSON.parse(res).data.children.map(item => item.data)  

        let articleInfo = articles.map(article => (({title, url, author}) => ({title, url, author}))(article))

        fs.writeFileSync(dataPath, JSON.stringify(articleInfo, null, 2), err => {if (err) console.log(err) })

    }).catch(function (err) {
        console.log(err)
    })