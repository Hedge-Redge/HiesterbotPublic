const titles = ["Full Name", "Draft Value", "Initial State", "Initial Team Color", "Initial Ideology", "Draft Year", "Year Gains Celebrity", "Celebrity", "Charisma", "Debater", "Disharmonious", "Easily Overwhelmed", "Efficient", "Egghead", "Frail", "Integrity", "Iron Fist", "Kingmaker", "Leadership", "Likable", "Manipulative", "Military Leader", "Orator", "Pliable", "Propagandist", "Puritan", "Controversial", "Teflon", "Uncharismatic", "Unlikable", "Hale", "Cosmopolitan", "Provincial", "Lackey", "Magician", "Bookkeeper", "Numberfudger", "Geostrategist", "Naive Strategist", "Domestic Warrior", "Harmonious", "Lowbrow", "Incoherent", "Incompetent", "Delegator", "Micromanager", "Obscure", "Two-faced", "Flipflopper", "Passive", "Predictable", "Cop", "Illicit", "Domestic Apathy", "Late Bloomer", "Overeager", "Jurisprudence", "Crisis Manager", "Crisis Gov", "Crisis Admin", "Decisive General", "Master Kingmaker", "Carpetbagger"];

module.exports =
    {
        name: 'traitsearch',
        description: 'search for a politicians traits!',
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
                        if(i[count] != "" && titles[count] != "Year Gains Celebrity")
                        {
                            let theString = titles[count] + ": " + i[count] + '\n';
                            thePol += theString;
                            count+=1;
                        }
                        else
                        {
                            count+=1;
                        }
                    }
                }
            }
            thePol = thePol.split("\n");
            retString = "Traits: "
            for(i in thePol)
            {
                if(i >= 6)
                {
                    retString = retString + thePol[i].split(":")[0] + ", ";
                }
            }
            thePol = thePol.slice(0, 6).concat(retString.substring(0, retString.length - 4));
            retString = "";
            for(i of thePol)
            {
                retString = retString + i + "\n";
            }
            console.log(retString)
            if(thePol.length!==0 && retString.length > 8)
            {
                message.channel.send(retString);
            }
            else
            {
                message.channel.send("Politician not found. Please try again.")
            }

        }
    }