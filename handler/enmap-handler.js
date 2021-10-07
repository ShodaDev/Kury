module.exports = client => {
    client.on("message", (message) => {
        client.prefix.ensure(message.guild.id, {
            prefix: ""
        });
    });
}

/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND KIROO DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/