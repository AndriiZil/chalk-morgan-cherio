const cheerio = require('cheerio');

let template = `
  <div id=”main”>
    <h1 id=”message”>Welcome on our site</h1>
  </div>
`
const $ = cheerio.load(template);

$('div').append('<p class="plum">Paragraph</p>');

template = $.html();

console.log(template);

