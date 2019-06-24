const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(100);
message.channel.send("100 mesaj sildim").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: '100 Mesajı Anında Siler',
  usage: 'temizle <miktar>'
};
