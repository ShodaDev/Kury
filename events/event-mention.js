const { MessageEmbed } = require("discord.js");
module.exports = client => {
    client.on("message", message => {
        let prefix = client.prefix.get(message.guild.id, "prefix")
        if(message.content.includes(client.user.id)) {
            let embed = new MessageEmbed()
            .setTitle("Yeah here I am :smile:")
            .setFooter("Kury || Powered by kiroo.xyz")
            .setColor("#5100FF")
            .setDescription(`Hello, im **Kury**! \n My prefix on this server is \`\`${prefix}\`\` \n > Just do \`\`${prefix}help\`\` to see all commands! \n > Do \`\`${prefix}play <song>\`\` to play a song!`)
            message.channel.send(embed)
        }
    });
}