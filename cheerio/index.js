const cheerio = require('cheerio');

const template = `
  <div id='main'>
    <h1 id='message'>Welcome on our site</h1>
  </div>
`
const $ = cheerio.load(template);

console.log($('h1').text()) // => Welcome on our site