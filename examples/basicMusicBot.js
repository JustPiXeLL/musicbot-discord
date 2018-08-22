const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

Music.start(client, {
  youtubeKey: "AIzaSyBSy_w7e478JY_bVNQVMpyIh6os_LigvGc"
});

client.login("discord_AppToKEn");
