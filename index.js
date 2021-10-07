const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client(
  {partials: ['MESSAGE', 'CHANNEL', 'REACTION']}
  );
const config = require("./botconfig/config.json");
const colors = require("colors");
const Enmap = require("enmap");



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./cmds");
client.config = config;



//Loging in the Client
client.login(client.config.token);



//Events
const events = fs.readdirSync("./events/");
events.forEach(event => { 
  require(`./events/${event}`)(client);
});

//Extras
const extras = fs.readdirSync("./extra/");
extras.forEach(extra => { 
  require(`./extra/${extra}`)(client);
});

//Handlers
const handlers = fs.readdirSync("./handler/");
handlers.forEach(hand => {
  require(`./handler/${hand}`)(client);
});


//Create a new Enmap
client.prefix = new Enmap({name: "prefix", dataDir: "./databases/prefix"});



/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND KIROO DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/