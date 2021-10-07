const Discord = require("discord.js");
module.exports = {
    name: "nowplaying",
    aliases: ["np"],
    category: "music",
    description: "Shows the current playing Song!",
    run: async (client, message, args) => {
        let embed2 = new Discord.MessageEmbed()
        .setTitle(":x: | Error!")
        .setDescription("You are not in my Voicechannel! \n Please join it before executing the \`\`nowplaying\`\` Command!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")


        let embed3 = new Discord.MessageEmbed()
        .setTitle(":x: | Error!")
        .setDescription("You are not a my Voicechannel! \n Please join a channel before executing the \`\`nowplaying\`\` Command!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")


        let embed4 = new Discord.MessageEmbed()
        .setTitle(":x: | Error!")
        .setDescription("I currently **don't** play music, so you cannot see which song is currently playing!")
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

        let queue = client.distube.getQueue(message);
        let song = queue.songs[0];
        const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Now playing:")
        .addFields(
            { name: '\`\`Name:\`\`', value: `${song.name}`, inline: false },
            { name: '\`\`Duration:\`\`', value: `${song.formattedDuration} \n`, inline: false },
            { name: '\`\`Likes:\`\`', value: `${song.likes}`, inline: false },
            { name: '\`\`Dislikes:\`\`', value: `${song.dislikes}`, inline: false },
            { name: '\`\`Stream/Download URL:\`\`', value: `[Stream/Download it here](${song.streamURL})`, inline: false },
            { name: '\`\`QueueStatus:\`\`', value: status(queue), inline: false}
        )
        .setFooter(`Requested by: ${message.author.tag} || Kury || Powered by kiroo.xyz`, message.author.avatarURL())
        .setColor("#5100FF")
        .setURL(song.url)
)
        
        
    }
}

/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND KIROO DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/