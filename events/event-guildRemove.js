const { MessageEmbed } = require("discord.js");
module.exports = client => {
    client.on("guildDelete", guild => {
        let channelID = "895025747121565706";
        let channel = client.channels.cache.find(x => x.id === channelID);

        let embed = new MessageEmbed()
        .setTitle("Old Guild")
        .setColor("RED")
        .setFooter("Kury || Powered by kiroo.xyz")
        .addFields(
            {name: "Guild Owner:", value: `${guild.owner.user.tag} ¦¦ <@${guild.owner.id}> ¦¦ ${guild.owner.id}`},
            {name: "Guild Information:", value: `${guild.name}  ¦¦ ${guild.id}`},
            {name: "Guild Member-count:", value: `${guild.memberCount}`}
        )
        channel.send(embed);
    });
}