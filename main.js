const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = "!";
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('HiesterBot is up and online');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    let restOfMessage = "";
    for (i of args)
    {
        restOfMessage+= i + " ";
    }

    if(command === 'biography') {client.commands.get('biography').execute(message, args);}
    else if(command === 'daniel'){client.commands.get('daniel').execute(message, args);}
    else if(command === 'hiesterbun'){client.commands.get('hiesterbun').execute(message, args, Discord);}
    else if(command === 'randompol'){client.commands.get('randompol').execute(message, args);}
    else if(command === 'commandslist'){client.commands.get('commandslist').execute(message, args, Discord);}
    else if(command === 'polsearch'){client.commands.get('polsearch').execute(message, restOfMessage);}
    else if(command === 'biosearch'){client.commands.get('biosearch').execute(message, restOfMessage);}
    else if(command === 'randombio'){client.commands.get('randombio').execute(message, restOfMessage);}
    else if(command === 'randomtrait'){client.commands.get('randomtrait').execute(message, restOfMessage);}
    else if(command === 'traitsearch'){client.commands.get('traitsearch').execute(message, restOfMessage);}
    else if(command === 'midway'){client.commands.get('midway').execute(message, restOfMessage);}
    else if(command === 'peakstats'){client.commands.get('peakstats').execute(message, restOfMessage);}
})


