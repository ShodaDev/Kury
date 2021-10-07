module.exports = client => {
    client.on("guildCreate", (guild) => {
        let k = "k!"
        client.prefix.set(guild.id, k, "prefix")
      })
      
}