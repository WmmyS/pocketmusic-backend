import fs = require('fs');
import ytdl = require('ytdl-core');

class ModuloMP3 {
  constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
    this.ytdl = ytdl(this.url);
  }

  private url: string;
  private name: string;
  private ytdl: any;

  async convertMP3Music() {
    this.ytdl.pipe(fs.createWriteStream(`/music/${this.name}.mp3`));
  }
}

module.exports = ModuloMP3;
