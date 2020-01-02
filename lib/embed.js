class RichEmbed extends Object {
  constructor(embedOptions = null) {
    super();
    if(embedOptions != null) {
      this.title = embedOptions.hasOwnProperty('title') ? embedOptions.title : "";
      this.color = embedOptions.hasOwnProperty('color') ? embedOptions.color : "";
      this.fields = embedOptions.hasOwnProperty('fields') ? embedOptions.fields : [];
      this.description = embedOptions.hasOwnProperty('description') ? embedOptions.description : "";
    }
  }
  /**
   * Set the embed title
   * @param {String} newTitle 
   */
  SetTitle(newTitle) {
    this.title = newTitle;
    return this;
  }
  /**
   * Set the embed color
   * @param {Number} newColor 
   */
  SetColor(newColor) {
    this.color = newColor;
    return this;
  }
  /**
   * 
   * @param {Object[]} newFields
   * @param {String} newFields.name
   * @param {any} newFields.value 
   * @param {boolean} newFields.inline
   */
  SetFields(newFields) {
    this.fields = newFields;
    return this;
  }
  /**
   * Set the embed description
   * @param {String} newDesc 
   */
  SetDescription(newDesc) {
    this.description = newDesc;
    return this;
  }
  /**
   * Set the embed thumbnail image
   * @param {String} thumbnail_Image 
   */
  SetThumbnailImage(thumbnail_Image) {
    this.thumbnail = {};
    this.thumbnail.url = thumbnail_Image;
    return this;
  }
  /**
   * Set the author name
   * @param {String} newName 
   */
  SetAuthorName(newName) {
    if(typeof this.author === 'undefined') {
      this.author = {};
    }
    this.author.name = newName;
    return this;
  }
  /**
   * Set the author url
   * @param {String} newUrl 
   */
  SetAuthorUrl(newUrl) {
    if(typeof this.author === 'undefined') {
      this.author = {};
    }
    this.author.url = newUrl;
    return this;
  }
  /**
   * Set the author icon url
   * @param {String} newIconUrl 
   */
  SetAuthorIconUrl(newIconUrl) {
    if(typeof this.author === 'undefined') {
      this.author = {};
    }
    this.author.icon_url = newIconUrl;
    return this;
  }
  /**
   * Set the embed date(timestamp)
   * @param {Date} newTimestamp 
   */
  SetTimestamp(newTimestamp) {
    this.timestamp = newTimestamp;
  }
  SetFooterUrl(newFooterUrl) {
    if(typeof this.footer === 'undefined') {
      this.footer = {};
    }
    this.footer.url = newFooterUrl;
  }
  SetFooterText(newFooterText) {
    if(typeof this.footer === 'undefined') {
      this.footer = {};
    }
    this.footer.text = newFooterText;
  }
}
module.exports = RichEmbed;