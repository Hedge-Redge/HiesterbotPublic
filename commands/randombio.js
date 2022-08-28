function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

function polRandomizer ()
{

    const titles = ["Full Name", "Initial State", "Initial Team Color", "Initial Ideology", "Draft Year", "Bio"];
    let polList =


    polList = shuffleArray(polList);

    let thePol = '';
    let count = 0;
    while(count < titles.length)
    {
        let theString = titles[count] + ": " + polList[0][count] + '\n';
        thePol += theString;
        count+=1;
    }

    return thePol;
}
polRandomizer();

module.exports =
    {
        name: 'randombio',
        description: 'Gives the user a random politician',
        execute(message, args)
        {
            message.channel.send(polRandomizer());
        }
    }