const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "bug-report",
    description: "Report a Kury bug!",
    run: async (client, message, args ) => {
        let bug = args.join(" ");
        let channelID = "895020045997064273";
        let channel = client.channels.cache.find(x => x.id === channelID);

        if(!args[0]) {
            let embed = new MessageEmbed()
            .setFooter("Kury || Powered by kiroo.xyz")
            .setColor("#5100FF")
            .setTitle(":x: | Error")
            .setDescription("Please give a bug, you want to report in Kury!")

            message.channel.send(embed);
        }

        if(args[0]){
            let bugsendembed = new MessageEmbed()
            .setFooter("Kury || Powered by kiroo.xyz")
            .setColor("#5100FF")
            .setTitle("Bug Report send")
            .setDescription("Your bug was send directly to Kiroo Development!")
            
            message.channel.send(bugsendembed);

            let bugembed = new MessageEmbed()
            .setFooter("Kury || Powered by kiroo.xyz")
            .setColor("#5100FF")
            .setTitle("New Bug Report")
            .addFields(
            {name: `__**Bug from:**__`, value: `${message.author.tag} ¦¦ <@${message.author.id}> ¦¦ ${message.author.id}`},
            {name: "__**Bug:**__", value: `${bug}`}
            )
            channel.send(bugembed);
        }
    }
}