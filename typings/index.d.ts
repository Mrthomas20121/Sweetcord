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

declare function callbackFunc(err:Error, res:Object): void

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

declare class Client {
  prefix:string

  constructor(opts: {
    token: string,
    autorun?: boolean,
    messageCacheLimit?: number,
    shard?: number[],
    prefix?: string
  });
  
  sendTo(options: msgOpts): void
}

declare class RichEmbed extends Object {
    embedOptions:embedMessageOpts;
}

export = Client;