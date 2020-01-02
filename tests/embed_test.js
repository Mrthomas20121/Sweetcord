const Embed = require('../index').Embed;
const Client = require('../index').Client;
const testEmbed = new Embed().SetColor(0xFFFFFF).SetTitle('embed test').SetDescription('testing embed').SetFields([{ name:'test',value:'test',inline:true}]).SetThumbnailImage('./test.jpg').SetAuthorName('Mrthomas20121');
testEmbed.sendTo(Client, 'channelID', (err, res) => {
  if(err) throw err;
  
});

console.log(JSON.stringify(testEmbed, null, 2));

// expected Result
// {
//   "color": 16777215,
//   "title": "embed test",
//   "description": "testing embed",
//   "fields": [
//     {
//       "name": "test",
//       "value": "test",
//       "inline": true
//     }
//   ],
//   "thumbnail": {
//     "url": "./test.jpg"
//   },
//   "author": {
//     "name": "Mrthomas20121"
//   }
// }