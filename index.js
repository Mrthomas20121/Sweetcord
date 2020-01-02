const Client = require('./lib/Client');
const RichEmbed = require('./lib/embed');
const Permissions = require('./lib/permissions');

const Sweetcord = {
  Client,
  RichEmbed,
  Permissions // easy access to discord.io permissions
};

module.exports = Sweetcord;