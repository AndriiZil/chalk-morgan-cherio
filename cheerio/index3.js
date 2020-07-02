const cheerio = require('cheerio');

let template = `
  <div id="main">
    <h1 id="message"></h1>
  </div>
`
const $ = cheerio.load(template);

$('h1').append('New welcome message!');

template = $.html();

console.log(template);