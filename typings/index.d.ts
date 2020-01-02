import { Permissions, User } from "discord.io";

declare type msgOpts = {
  to: string,
  file?: string,
  filename?: string,
  message?: string,
  embed?: embedMessageOpts|RichEmbed
}
declare type FieldObject = {
  name:String,
  value:String,
  inline:Boolean
}
declare type Snowflake = String;

declare type WebSocketEvent = {
  d: any;
  op: number;
  s: number;
  t: string;
};

declare type game = {
  name: string;
  type: number;
  url?: string;
};

declare type readyCallback = (event: WebSocketEvent) => void;
declare type messageCallback = (user: string, userID: string, channelID: string, mesage: string, event: WebSocketEvent) => void;
declare type presenceCallback = (user: string, userID: string, status: string, game: game, event: WebSocketEvent) => void;
declare type anyCallback = (event: WebSocketEvent) => void;
declare type disconnectCallback = (errMsg: string, code: number) => void;

declare type embedMessageOpts = {
  author?: {
    icon_url?: string,
    name: string,
    url?: string
  },
  color?: number,
  description?: string,
  fields?: [{
    name: string,
    value?: string,
    inline?: boolean
  }],
  thumbnail?: {
    url: string
  },
  title: string,
  timestamp?: Date
  url?: string,
  footer?: {
    icon_url?: string,
    text: string
  }
}

declare interface roleOptions {
  username:String,
  channelID:String,
  roleName:String
}

declare interface findUserOtps {
  channelID:String,
  username:String
}

declare class Client {
  prefix:string

  constructor(opts: {
    token: string,
    autorun?: boolean,
    messageCacheLimit?: number,
    shard?: number[],
    prefix?: string
  });
  
  send(options: msgOpts, callback:messageCallback): void
  addRoleToUser(opts:roleOptions, callback:anyCallback): void
  removeRoleToUser(opts:roleOptions, callback:anyCallback): void
  getDiscriminatorByUsername(username:String): User
  getDiscriminatorByUserId(userID:String): User
  findUser(opts: findUserOtps): User


}

declare class RichEmbed extends Object {
    embedOptions:embedMessageOpts;
}

export interface Sweetcord {
  Client:Client,
  RichEmbed:RichEmbed,
  Permission:Permissions
}