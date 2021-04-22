const fs = require('fs');
const fetch = require('node-fetch');

if(!fs.existsSync('result')){
    fs.mkdirSync('result')
}

fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((out)=>{
        fs.writeFile('./result/posts.json', JSON.stringify(out), (err)=>{
            if (err) throw err;
        })
    })
    .catch(err => console.log(err))
