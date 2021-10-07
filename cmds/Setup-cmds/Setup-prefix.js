const Discord = require("discord.js");
module.exports = {
    name: "setup-prefix",
    description: "Setts a new Prefix for the Bot!",
    run: async (client, message, args) => {
        let prefix = client.config.prefix;

        const curperfix = client.prefix.get(message.guild.id, `prefix`);
        if (!curperfix) {
            prefix = client.config.prefix;
        } else {
            prefix = client.prefix.get(message.guild.id, `prefix`);
        }
        
        let perms = message.member.hasPermission("ADMINISTRATOR");
        let newprefix = args.slice(0).join(" ");
        
        if(!perms) {
            return message.reply('You have no permissions to use this Command!');
        }
        else {
            if(!args[0]) {
                message.channel.send(`The current prefix is ${prefix}`);
            }
            else {
                client.prefix.set(message.guild.id, newprefix, 'prefix')
                message.channel.send(`The new prefix is ${newprefix}`);
            }
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