# Sweetcord
Sweetcord is a Discord Lib to create discord bots. it is built on top of Discord.io.

New functions are added on top of it meaning it is compatible with any existing discord.io bots.
if you already use discord.io for your bot
you can make your bots use sweetcord by doing the following:
```js
const Sweetcord = require('sweetcord');

const client = new Sweetcord.Client({
  token:'INSERT BOT TOKEN HERE',
  autorun:true
});
```