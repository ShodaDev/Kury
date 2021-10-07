const { MessageEmbed } = require("discord.js");
module.exports = client => {
    client.on("guildCreate", guild => {
        let channelID = "895025747121565706";
        let channel = client.channels.cache.find(x => x.id === channelID);

        let embed = new MessageEmbed()
        .setTitle("New Guild")
        .setColor("GREEN")
        .setFooter("Kury || Powered by kiroo.xyz")
        .addFields(
            {name: "Guild Owner:", value: `${guild.owner.user.tag} ¦¦ <@${guild.owner.id}> ¦¦ ${guild.owner.id}`},
            {name: "Guild Information:", value: `${guild.name}  ¦¦ ${guild.id}`},
            {name: "Guild Member-count:", value: `${guild.memberCount}`}
        )
        channel.send(embed);
    });
}