const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "girlfriend",
    aliases: ["gf", "shodasgf", "shodasgirlfriend", "yumi", "dino", "dinonugget", "dinogugget"],
    description: "Shows the girlfriend from Shoda!",
    run: async (client, message, args) => {
        let embedforthebestperson = new MessageEmbed()
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")
        .setTitle("Shoda's girlfriend Dinogugget!")
        .setDescription("Shoda's girlfriend is <@879596143514902578>! In reallife she call Alina. Shoda calls her Dinogugget because he love her so much and she is such a cute gugget! For more information, write a DM to <@544176059516583946> (Shoda#1966)!")
        
        message.channel.send(embedforthebestperson);
    }
}