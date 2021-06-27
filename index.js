const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("봇이 켜졌슴당");
})

client.on("message", (message) => {
    if(message.content.substring(0,3) === "!투표") {
        
        const description = message.content.substring(3);

        const embed = new Discord.MessageEmbed()
        .setTitle("👇 투표합시다 😅")
        .setDescription(description)
        .setColor("RED");

        message.channel.send(embed)
        .then((msg) => {
            msg.react("👍") 
        });

    }
})

client.login("ODEwNDg4NzU1NzQzNjIxMTUx.YCkYeQ.ohYsuanCYynf4b9pNMdB3aFLK9Y");