const { MessageEmbed } = require("discord.js");
const fs = require("fs");
module.exports = {
    name: "help",
    description: "Shows you all Commands!",
    run: async (client, message, args) => {
        //Overview Embed
        let generalhelpemebed = new MessageEmbed()
        .setTitle("Swap pages with emojis")
        .setDescription("ℹ️ Info Commands \n 🎵 Music Commands \n 🛠️ Setup Commands \n 😂 Fun Commands \n 🌌 Other Commands")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")


        //Info Embed
        let infoembed = new MessageEmbed()
        .setTitle("ℹ️ Info Commands!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")

        //Music Embed
        let musicembed = new MessageEmbed()
        .setTitle("🎵 Music Commands!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")

        //Setup Embed
        let setupembed = new MessageEmbed()
        .setTitle("🛠️ Setup Commands!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")
        
        //Fun Embed
        let funembed = new MessageEmbed()
        .setTitle("😂 Fun Commands!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")

        //Other Embed
        let otherembed = new MessageEmbed()
        .setTitle("🌌 Other Commands!")
        .setFooter("Kury || Powered by kiroo.xyz")
        .setColor("#5100FF")

        //MUSIC-FUNCTION
        let musiccmds = fs.readdirSync("./cmds/Music-cmds/").filter(file => file.endsWith(".js"))
        musiccmds.forEach( file => {
           let files =  require(`../Music-cmds/${file}`)
           musicembed.addField(`\`\`${files.name}\`\``, files.description)
        })  

        //INFO-FUNCTIONS
        let infocmds = fs.readdirSync("./cmds/Info-cmds/").filter(file => file.endsWith(".js"))
        infocmds.forEach( file => {
           let files = require(`../Info-cmds/${file}`)
           infoembed.addField(`\`\`${files.name}\`\``, files.description)
        })

         //SETUP-FUNCTIONS
         let setupcmds = fs.readdirSync("./cmds/Setup-cmds/").filter(file => file.endsWith(".js"))
         setupcmds.forEach( file => {
            let files = require(`../Setup-cmds/${file}`)
            setupembed.addField(`\`\`${files.name}\`\``, files.description)
         })
 
         //FUN-FUNCTIONS
         let funcmds = fs.readdirSync("./cmds/Fun-cmds/").filter(file => file.endsWith(".js"))
         funcmds.forEach( file => {
            let files = require(`../Fun-cmds/${file}`)
            funembed.addField(`\`\`${files.name}\`\``, files.description)
         })

          //OTHER-FUNCTIONS
          let othercmds = fs.readdirSync("./cmds/Other-cmds/").filter(file => file.endsWith(".js"))
          othercmds.forEach( file => {
             let files = require(`../Other-cmds/${file}`)
             otherembed.addField(`\`\`${files.name}\`\``, files.description)
          })

        //SEND EMBED
        msg = await message.channel.send(generalhelpemebed)
        msg.react('ℹ️')
        msg.react('🎵')
        msg.react('🛠️')
        msg.react('😂')
        msg.react('🌌')

        msg.react('◀️')
        
        client.on('messageReactionAdd', async (reaction, user, member) => {

            /**
               * @param {Message} message
               * @param {Client} client
               * @param {String[]} args
               */
            if (user.bot) {
                return;
            }
          
            
            if(reaction.emoji.name === 'ℹ️'){
                if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
              reaction.users.remove(user)
              msg.edit(infoembed)
            }
            else{
                msg.edit(infoembed)
        }
    }
          
            if(reaction.emoji.name === '🎵'){
              
                if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                    reaction.users.remove(user)
                    msg.edit(musicembed)
                  }
                  else{
                      msg.edit(musicembed)
        }
    }
              if(reaction.emoji.name === '🛠️'){
              
                if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                    reaction.users.remove(user)
                    msg.edit(setupembed)
                  }
                  else{
                      msg.edit(setupembed)
            }
        }

        if(reaction.emoji.name === '😂'){
              
            if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                reaction.users.remove(user)
                msg.edit(funembed)
              }
              else{
                  msg.edit(funembed)
        }
    }

    if(reaction.emoji.name === '🌌'){
              
        if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            reaction.users.remove(user)
            msg.edit(otherembed)
          }
          else{
              msg.edit(otherembed)
    }
}

        if(reaction.emoji.name === '◀️'){
            if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
          reaction.users.remove(user)
          msg.edit(generalhelpemebed)
        }
        else{
            msg.edit(generalhelpemebed)
    }
}
    })

    }
}

/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND KIROO DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/