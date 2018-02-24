const Discord = require('discord.js');
const PREFIX = "$";

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "fucc u"
];
var bot = new Discord.Client();

bot.on("ready",function() {
    console.log("READY");
});

bot.on('message',function(message){
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("Best bot created by Ondriy!");
            break;
        case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.round(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't read this!");
        break;
        
        default:
            message.channel.sendMessage("Invalid command.");    
    }

});

bot.login('NDE2NjgyMjM2OTQzNzk0MTc4.DXIFPw.3OfznYDr7ccCI16awzrlNq7LjPM');
