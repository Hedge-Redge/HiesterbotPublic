module.exports =
    {
        name: 'commandslist',
        description: 'List of commands for HiesterBot',
        execute(message, args, Discord) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#304281')
                .setTitle('List of Hiester Bot Commands')
                // .setURL('https://youtube.com/codelyon')
                .setAuthor('Rezi')
                // .setDescription('This is an embed for the server rules')
                .addFields(
                    {name: '!daniel', value: 'Bot responds with "Hiester!'},
                    {name: '!commandslist', value: 'You are here right now'},
                    {name: '!biography', value: 'Responds with biography of Daniel Hiester'},
                    {name: '!hiesterbun', value: 'Responds with the famous picture of Hiester with a man bun'},
                    {name: '!randompol', value: 'Responds with a random politician from AMPU and their basic stats'},
                    {name: '!polsearch', value: 'Search for one of the thousands of politicians in AMPU and their basic stats'},
                    {name: '!randombio', value: 'Responds with a random politician from AMPU and their biography'},
                    {name: '!biosearch', value: 'Search for one of the thousands of politicians in AMPU and their biography'},
                    {name: '!randomtrait', value: 'Responds with a random politician from AMPU and their traits'},
                    {name: '!traitsearch', value: 'Search for one of the thousands of politicians in AMPU and their traits'}
                )
            // .setFooter("Make sure to check out the rules channel");
            message.channel.send({embeds: [newEmbed]});
        }
    }