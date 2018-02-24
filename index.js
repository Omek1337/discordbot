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

bot.on("guildMemberAdd",function(member) {
    member.guild.channels.find("name","general").sendMessage(member.toString() + "welcome bitch");

    member.addRole(member.guild.roles.find("name", "bitch"));
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
        case "corgi":
        var embed = new Discord.RichEmbed()

        .setTitle("The Welsh Corgi, sometimes known as just a Corgi , Welsh for dwarf dog; plural corgis")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0xFF0683)
      //  embed.setDescription("")

        .setFooter("Best dogs ever:3", "http://www.pethealthnetwork.com/sites/default/files/styles/large/public/the-cardigan-welsh-corgi100642967.png?itok=82xzyFrN")
        .setImage("http://cdn.akc.org/corgi-4.jpg")
        .setThumbnail("http://zverenki.com/Content/Articles/images/1259039588_welsh_corgi_pembroke.jpg")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .addBlankField(true)
        .addField("Welsh Corgi", "The Pembroke is the more popular breed of dog, with the Cardigan Welsh Corgi appearing on The Kennel Club's list of Vulnerable Native Breeds. There are several physical differences between the two types according to the breed standards: the Cardigan is larger overall, both in weight and in height. Traditionally, the tails were of different shapes, but docking had previously been used.")
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        .addBlankField(true)
        .addField("History", "Welsh Corgis have historically been used as herding dogs, specifically for cattle. They are of the type of herding dog referred to as heelers, meaning that they would nip at the heels of the larger animals to keep them on the move.", true)
        /*
         * Blank field, useful to create some space.
         */
        .addBlankField(true)
        .addField("Health", "According to the Kennel Club Purebred Dog Health Survey conducted in 2004, the two breeds had similar average lifespans: the median age at death was 12 years 3 months for Pembrokes, and 12 years 2 months for Cardigans. The main causes of death were similar in both breeds: the primary causes were canine cancer and old age. However, the Pembroke breed showed a higher proportion of deaths attributed to either kidney failure or a urethral obstruction.", true);
            message.channel.send({embed});
        break;
        case "shutka":
            var embed = new Discord.RichEmbed()
            .setColor(0xFF0253)
            .setTimestamp()
            .addField("Лупа и Пупа пошли получать зарплату ",":money_with_wings::walking:")
            .addField("Но в бухалтерии все перепутали",":astonished::weary:")
            .addField("В итоге ",":ok_woman::bow:")
            .addField(" Лупа получил за Пупу"," :yum::ok_hand:")
            .addField("а Пупа ЗАЛУПУ",":sweat_drops::money_mouth:")
            .addField(":poop: :poop: :poop: :poop: :poop:",":)")
            message.channel.send({embed});
        break;
        default:
            message.channel.sendMessage("Invalid command.");    
    }

});

bot.login('NDE2NjgyMjM2OTQzNzk0MTc4.DXIFPw.3OfznYDr7ccCI16awzrlNq7LjPM');
