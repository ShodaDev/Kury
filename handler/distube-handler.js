module.exports = client => {
    const Discord = require("discord.js");
    const Distube = require("distube");
    
    client.distube = new Distube(client, 
      {
        emitNewSongOnly: false,
        leaveOnFinish: true,
        leaveOnEmpty: true
      });
    
    const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
    
    client.distube
        .on("playSong", (message, queue, song) => {message.channel.send(
        new Discord.MessageEmbed()
            .setTitle(`**Playing song: ${song.name}**`)
            .addFields(
            { name: '\`\`Name:\`\`', value: `${song.name}`, inline: false },
            { name: '\`\`Duration:\`\`', value: `${song.formattedDuration} \n`, inline: false },
            { name: '\`\`Likes:\`\`', value: `${song.likes}`, inline: false },
            { name: '\`\`Dislikes:\`\`', value: `${song.dislikes}`, inline: false },
            { name: '\`\`Stream/Download URL:\`\`', value: `[Stream/Download it here](${song.streamURL})`, inline: false },
            { name: '\`\`QueueStatus:\`\`', value: status(queue), inline: false}
            )
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setFooter(`Requested by: ${message.author.tag} || Kury || Powered by kiroo.xyz`, message.author.avatarURL())
            .setColor("#5100FF")
        )
        console.log(`Music started on ` + message.guild.name);
        console.log(`Song: ` + song.name);
    })
    
        .on("addSong", (message, queue, song) => message.channel.send(
        new Discord.MessageEmbed()
            .setTitle(`**Added song: ${song.name}**`)
            .addFields(
            { name: '\`\`Name:\`\`', value: song.name, inline: false},
            { name: '\`\`Duration:\`\`', value: song.formattedDuration, inline: false},
            { name: '\`\`Stream/Download URL:\`\`', value: `[Stream/Download it here](${song.streamURL})`, inline: false},
            { name: '\`\`QueueStatus:\`\`', value: status(queue), inline: false}
            )
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setFooter(`Requested by: ${message.author.tag} || Kury || Powered by kiroo.xyz`, message.author.avatarURL())
            .setColor("#5100FF")
        ))
    
        .on("playList", (message, queue, playlist, song) => message.channel.send(
        new Discord.MessageEmbed()
            .setTitle(`**Playing song: ${song.name}**`)
            .addFields(
            { name: '\`\`Name:\`\`', value: `${song.name}`, inline: false },
            { name: '\`\`Duration:\`\`', value: `${song.formattedDuration} \n`, inline: false },
            { name: '\`\`Likes:\`\`', value: `${song.likes}`, inline: false },
            { name: '\`\`Dislikes:\`\`', value: `${song.dislikes}`, inline: false },
            { name: '\`\`Stream/Download URL:\`\`', value: `[Stream/Download it here](${song.streamURL})`, inline: false },
            { name: '\`\`QueueStatus:\`\`', value: status(queue), inline: false}
            )
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setFooter(`Requested by: ${message.author.tag} || Kury || Powered by kiroo.xyz`, message.author.avatarURL())
            .setColor("#5100FF")
            ))
        
        .on("addList", (message, queue, playlist) => message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(`**Added song: ${song.name}**`)
            .addFields(
            { name: '\`\`Name:\`\`', value: song.name, inline: false},
            { name: '\`\`Duration:\`\`', value: song.formattedDuration, inline: false},
            { name: '\`\`Stream/Download URL:\`\`', value: `[Stream/Download it here](${song.streamURL})`, inline: false},
            { name: '\`\`QueueStatus:\`\`', value: status(queue), inline: false}
            )
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setFooter(`Requested by: ${message.author.tag} || Kury || Powered by kiroo.xyz`, message.author.avatarURL())
            .setColor("#5100FF")
        ))
        
        .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Please Choose a song")
            .addFields( 
                { name: '\`\`Choose a number!', value: `\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n`, inline: false}
            )
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setFooter(`Requested by: ${message.author.tag} || Kury || Powered by kiroo.xyz`, message.author.avatarURL())
            .setColor("#5100FF")
        )
        })
       
        .on("searchCancel", (message) => message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(':x: | Error')
            .setDescription("Stopped the searching process!")
            .setColor("#5100FF")
            .setFooter('Kury || Powered by kiroo.xyz')
        ))
    
        
        .on("error", (message, e) => {
        console.error(e)
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(':x: | Error')
            .setDescription('An error encountered: ' + e)
            .setFooter('Kury || Powered by kiroo.xyz')
            .setColor("#5100FF")
        )
        })
    
        .on("initQueue", queue => {
            queue.autoplay = false;
            queue.volume = 75;
        })
    }
/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND KIROO DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/