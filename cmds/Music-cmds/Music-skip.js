const Discord = require("discord.js");
module.exports = {
    name: "skip",
    category: "music",
    description: "Skips a Song!",
    run: async (client, message, args) => {
        let embed1 = new Discord.MessageEmbed()
        .setTitle("Music Skipped")
        .setDescription("Skipped to the next song!")
        .setFooter(`Requested by: ${message.author.tag} || Kury || Powered by kiroo.xyz`, message.author.avatarURL())
        .setColor("#5100FF")


        let embed2 = new Discord.MessageEmbed()
        .setTitle(":x: | Error!")
        .setDescription("You are not in my Voicechannel! \n Please join it before executing the \`\`skip\`\` Command!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")


        let embed3 = new Discord.MessageEmbed()
        .setTitle(":x: | Error!")
        .setDescription("You are not a my Voicechannel! \n Please join a channel before executing the \`\`skip\`\` Command!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")


        let embed4 = new Discord.MessageEmbed()
        .setTitle(":x: | Error!")
        .setDescription("I currently **don't** play music, so you cannot skip it!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")


        const { channel } = message.member.voice; 
        if(!channel)
        return message.channel.send(embed3);

        if(!client.distube.getQueue(message)) {
        return message.channel.send(embed4);
        }
        if(client.distube.getQueue(message) && channel.id !== message.guild.me.voice.channel.id) {
        return message.channel.send(embed2);
        }

        client.distube.skip(message); 
        message.channel.send(embed1)
        
        
    }
}

/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND KIROO DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/