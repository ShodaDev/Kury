module.exports = {
    name: "play",
    aliases: ["p"],
    inVoiceChannel: true,
    category: "music",
    description: "Plays a Song!",
    run: async (client, message, args) => {
       let song = args.join(" ")
       client.distube.play(message, song);
       
    }
}

/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND KIROO DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/