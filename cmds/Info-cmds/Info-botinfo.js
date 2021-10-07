const { MessageEmbed, version } = require("discord.js");
let os = require("os");
module.exports = {
    name: "botinfo",
    aliases: ["bf", "binfo", "b-info", "about"],
    description: "Show some information about Kury!",
    run: async (client, message, args) => {

        let infoembed = new MessageEmbed()
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")
        .setTitle("Informations")
        .addFields(
            {name: "Developer:", value: `Shoda#1966 ¦¦ <@544176059516583946> ¦¦ 544176059516583946`},
            {name: "Guilds:", value: `${client.guilds.cache.size}`},
            {name: "Users:", value: `${client.users.cache.size}`},
            {name: "Plattform:", value: `Debian 9`},
            {name: "CPU useage:", value: `\`\`${os.cpus().map((i) => `${i.model}`)[0]}\`\`%`},
            {name: "RAM useage:", value: `\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\`\`%`},
            {name: "Discord.js version:", value: `v${version}`},
            {name: "Uptime:", value: `${duration(client.uptime)}`}
        )

        message.channel.send(infoembed);

        function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString()
            const min = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${days.padStart(1, '0')} Days, ${hrs.padStart(2, '0')} Hours, ${min.padStart(2, '0')} Minutes, ${sec.padStart(2, '0')} Seconds`
          }
    }
}