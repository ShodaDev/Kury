const Discord = require("discord.js");
module.exports = {
    name: "loop",
    category: "music",
    description: "Changes Loop Method!",
    run: async (client, message, args) => {
        let embed2 = new Discord.MessageEmbed()
        .setTitle(":x: | Error!")
        .setDescription("You are not in my Voicechannel! \n Please join it before executing the \`\`loop\`\` Command!")
        .setFooter(`Requested by: ${message.author.tag} || Kury || Powered by kiroo.xyz`, message.author.avatarURL())
        .setColor("#5100FF")


        let embed3 = new Discord.MessageEmbed()
        .setTitle(":x: | Error!")
        .setDescription("You are not a my Voicechannel! \n Please join a channel before executing the \`\`loop\`\` Command!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")


        let embed4 = new Discord.MessageEmbed()
        .setTitle(":x: | Error!")
        .setDescription("I currently **don't** play music, so you cannot loop it!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")

        let embed5 = new Discord.MessageEmbed()
        .setTitle(":x: | Error!")
        .setDescription(`Please provide a loop method \n Useage: \`\`loop <1/2/0>\`\``)
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

        if(!args[0]) {
        return message.channel.send(embed5);
        }
        let loopstate = args[0].toString();
        if (loopstate.toLowerCase() === "song") loopstate = "1";
        if (loopstate.toLowerCase() === "s") loopstate = "1";
        if (loopstate.toLowerCase() === "queue") loopstate = "2";
        if (loopstate.toLowerCase() === "off") loopstate = "0";
        if (loopstate.toLowerCase() === "o") loopstate = "0";
        if (loopstate.toLowerCase() === "track") loopstate = "1";
        if (loopstate.toLowerCase() === "q") loopstate = "2";
        if (loopstate.toLowerCase() === "qu") loopstate = "2";
        if (loopstate.toLowerCase() === "disable") loopstate = "0";
        
        loopstate = Number(loopstate);
        loopstates = {
            "0": "off",
            "1" : "song",
            "2": "queue"
        }
        
        if( 0 <= loopstate && loopstate <= 2){
            client.distube.setRepeatMode(message, parseInt(loopstate));
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('Loop-mode changed')
            .setDescription(`Changed loop-mode to \`${loopstates[loopstate]}\``)
            .setFooter("Kury || Powered by kiroo.xyz")
            .setColor("#5100FF"))
        }
        else{
            return message.channel.send(embed5);
        }
    }
}

/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND KIROO DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/