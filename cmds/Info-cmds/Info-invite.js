const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "invite",
    aliases: ["i", "inv"],
    category: "Info",
    description: "Send you the Invite link of Kury!",
    run: async (client, message, args) => {
        let inviteembed = new MessageEmbed()
        .setTitle("Invite Me!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")
        .setDescription('Click the Hyperlink down below to invite Kury with \n Normal- or with Admin- (recommended) Permissions! \n \n \n __***[Normal Perms](https://discord.com/api/oauth2/authorize?client_id=894260457739788338&permissions=277125463633&scope=bothttps://discord.com/api/oauth2/authorize?client_id=894260457739788338&permissions=277125463633&scope=bot)***__ \n __***[Admin Perms](https://discord.com/api/oauth2/authorize?client_id=894260457739788338&permissions=277125463633&scope=bothttps://discord.com/api/oauth2/authorize?client_id=894260457739788338&permissions=8&scope=bot)***__')
        message.channel.send(inviteembed)
    }
}