const EasyDiscord = require('../index');
const auth = require('./auth.json');

const client = new EasyDiscord.Client({
  token: auth.token,
  autorun:true,
  prefix: ';'
});

client.on('ready', (event) => {
  console.log('Logged in as %s', client.username); // this will log a message when the bot is ready
});

client.on('message', function (user, userID, channelID, message, event) {
  if (message.startsWith(client.prefix)) { // message start with the prefix 
    var argument = message.slice(client.prefix.length).split(' ');

    // ;ping
    if (argument[0] == 'ping') {
      client.send({
        to:channelID,
        message:'Pong!'
      }, (err, res) => {
        if(err) throw err
        console.log(res)
      })
    }
    // ;embed
    else if (argument[0] == 'embed') {
      const embedTest = new EasyDiscord.Embed().SetColor(0xFFFFFF).SetTitle('embed test').SetDescription('testing embed').SetFields([{ name:'test',value:'test',inline:true}]);

      client.send({
        to:channelID,
        embed: embedTest
      })
    }
  }
});