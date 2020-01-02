const Discord = require('discord.io');
const Embed = require('./embed');
class Client extends Discord.Client {
  /**
   * discord.io client with prefix support
   * @arg {Object} opts
   * @arg {String} opts.token bot token
   * @arg {boolean} opts.autorun 
   * @arg {Number} opts.messageCacheLimit
   * @arg {Number[]} opts.shard
   * @arg {String} opts.prefix
   */
  constructor(opts) {
    super(opts);
    this.prefix = opts.prefix;
  }
  /**
   * send a message with or without a file,
   * this function use dio Discord.Client.sendMessage() and Discord.Client.uploadFile()
   * @param {Object} options
   * @param {string|Buffer} options.file the file you want to upload
   * @param {String} options.filename the name of the file
   * @param {String} options.to the channel where the message will be send in
   * @param {String} options.message the message that will be send
   * @param {Embed} options.embed embed in a message. can be a EasyEmbed
   * @param {(err:Error, res:Object) => void} callback
   */
  send(options, callback) {
    if(options.hasOwnProperty('file') && options.hasOwnProperty('filename')) {
      if(typeof callback === 'function') {
        this.uploadFile(options, callback);
      }
      else this.uploadFile(option)
    }
    else {
      if(typeof callback === 'function') { 
        this.sendMessage(options, callback);
      }
      else this.sendMessage(options);
    }
  }
  /** 
   * find a user by his name and add a role to this user
   * @param {Object} opts
   * @param {String} opts.username
   * @param {String} opts.channelID any channelID from your server  
   * @param {String} opts.roleName
   * @param {(err:Error, res:Object) => void} callback
   */
  addRoleToUser(opts, callback) {
    const serverID = this.channels[opts.channelID].guild_id;
    const member = this.findUser(opts)
    const roles = Object.values(this.servers[serverID].roles);
    const role = roles.find(r => r.name == opts.roleName);
    this.addToRole({
      serverID:serverID,
      userID:member.id,
      roleID:role.id
    }, callback)    
  }
    /**
   * find a user by his name and remove a role to this user
   * @param {Object} opt
   * @param {String} opt.username
   * @param {Snowflake} opt.channelID any channelID from your server  
   * @param {String} opt.roleName
   * @param {(err:Error, res:Object) => void} callback
   */
  removeRoleFromUser(opts, callback) {
    const serverID = this.channels[opts.channelID].guild_id
    const members = Object.values(this.servers[serverID].members)
    const member = members.find(m => m.username == opts.username)
    const roles = Object.values(this.servers[serverID].roles)
    const role = roles.find(r => r.name == opts.roleName)
    this.removeFromRole({
      serverID:serverID,
      userID:member.id,
      roleID:role.id
    }, callback)    
  }
  getDiscriminatorByUsername(username) {
    const users = Object.values(this.users)
    const user = users.find((u) => u.username = username)
    return user;
  }
  getDiscriminatorByUserID(userID) {
    const users = Object.values(this.users)
    const user = users.find((u) => u.id = userID)
    return user;
  }
  /**
   * @param {Object} opts
   * @param {String} opts.channelID
   * @param {String} opts.username
   */
  findUser(opts) {
    const serverID = this.channels[opts.channelID].guild_id
    const members = Object.values(this.servers[serverID].members)
    const user = members.find(m => m.username == opts.username)
    return user;
  }
}

module.exports = Client;