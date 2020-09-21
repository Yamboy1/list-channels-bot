const { Client } = require("discord.js");

const client = new Client();

client.on("message", message => {
    console.log("message");
    if (message.content !== "!list") return;
    console.log("here");

    message.guild.channels.cache
        .filter(channel => channel.type === "category")
        .flatMap(channel => [
            ...channel.children.filter(channel => channel.type !== "voice").sorted((a,b) => a.position - b.position),
            ...channel.children.filter(channel => channel.type === "voice").sorted((a,b) => a.position - b.position)])
        .forEach(async (channel) => await message.channel.send(`${channel.parent.name.toUpperCase()} - ${channel}`));

});

client.login(process.env.TOKEN);