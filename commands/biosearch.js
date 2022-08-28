const titles = ["Full Name", "Initial State", "Initial Team Color", "Initial Ideology", "Draft Year", "Bio"];
let polList =


module.exports =
    {
        name: 'biosearch',
        description: 'search for a politician bio!',
        execute(message, restOfMessage)
        {
            let thePol = '';
            let count = 0;
            for(i of polList)
            {
                let toUse = i[0].replace(/\s+/g, '');
                restOfMessage = restOfMessage.replace(/\s+/g, '');
                if(toUse.toLowerCase() === restOfMessage.toLowerCase())
                {
                    while(count < titles.length)
                    {
                        let theString = titles[count] + ": " + i[count] + '\n';
                        thePol += theString;
                        count+=1;
                    }
                }
            }
            if(thePol.length!==0 && thePol.length < 2000)
            {
                message.channel.send(thePol);
            }
            else if(thePol.length > 2000)
            {
                message.channel.send("Sorry, this politician's bio is so long that Hiesterbot kills itself upon reading. Please try another.");
            }
            else
            {
                message.channel.send("Politician not found. Please try again.")
            }

        }
    }