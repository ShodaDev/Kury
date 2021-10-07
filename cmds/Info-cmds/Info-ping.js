const { MessageEmbed, Message } = require("discord.js");
module.exports = {
  name: "ping",
  category: "Information", 
  aliases: ["latency"], 
  description:"Shows you the Bot AND API Ping!",
  run: async (client, message, args) => {
   
   //get the date NOW
   var date = Date.now();

   //send Message
   message.channel.send(new MessageEmbed()
   .setDescription("Pinging...")
   .setColor("#5100FF"))
   //edit the Message
   .then( msg => {
     msg.edit(new MessageEmbed()
     .setDescription(`Ping: \`${Math.round(Date.now() - date)}ms\`\n\n Api Latency: \`${Math.round(client.ws.ping)}ms\``)
     .setColor("#5100FF"));
   });
  }
}

/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND KIROO DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/