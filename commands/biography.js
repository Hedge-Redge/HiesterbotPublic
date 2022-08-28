module.exports =
    {
        name: 'biography',
        description: 'Daniel Hiester biography',
        execute(message, args)
        {
            message.channel.send('Hiester\'s father, also named Daniel Hiester, emigrated from Silesia in 1737 and settled in Goshenhoppen (now Bally), Pennsylvania, afterward purchasing a tract of several thousand acres in Berks County. After completing his education, the young Hiester engaged in the mercantile business in Montgomery County, Pennsylvania.\n' +
                '\n' +
                'During the American Revolution, Hiester served as a colonel and later a brigadier general of the Pennsylvania Militia. He was a member of the Pennsylvania General Assembly from 1778 to 1781. In 1784 he was elected to the supreme executive council of Pennsylvania, and later in 1787 he was appointed as a commissioner to negotiate the Connecticut land claims dispute.\n' +
                '\n' +
                'Hiester was elected to the United States House of Representatives representing Pennsylvania, serving from March 4, 1789, until his resignation on July 1, 1796. He then moved to Hagerstown, Maryland, and was again elected to the House representing Maryland, serving from March 4, 1801, until his death in Washington, D.C., on March 7, 1804. He was among the number that voted to move the U.S. capital from Philadelphia to a place on the Potomac later named Washington, D.C.\n' +
                '\n' +
                'He was buried in Zion Reformed Graveyard in Hagerstown, Maryland and has a cenotaph at the Congressional Cemetery in Washington.');
        }
    }