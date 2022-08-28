module.exports =
    {
        name: 'hiesterbun',
        description: 'Hiester with a man bun!',
        execute(message, args, Discord) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#304281')
                .setTitle('Daniel Hiester with a man bun')
                // .setURL('https://youtube.com/codelyon')
                // .setAuthor('Rezi')
                // .setDescription('This is an embed for the server rules')
                // .addFields(
                //     {name: 'Rule1', value: 'Be nice'},
                //     {name: 'Rule2', value: 'DOnt be nice'}
                // )
                .setImage('https://content.invisioncic.com/z310579/monthly_2022_03/HiesterBun.jpg.d4bb1b2180d13e6aae3bf75d9fed2b53.jpg')
                // .setFooter("Make sure to check out the rules channel");
            message.channel.send({embeds: [newEmbed]});
        }
    }