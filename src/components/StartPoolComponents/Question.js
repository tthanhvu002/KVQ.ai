import ethIcon from '../../img/eth.svg'
const questions = [
    {
        section:1,
        items:[
            {
                label: `Please select types of games `,
                type:'select',
                option: ['Premier League, Laliga']
            },
            {
                label: `Please select which game to create Pool for`,
                type:'text',
            },
            {
                label: '',
                type: 'select',
                option: [
                    {
                        match:'Tottenham - Wolves',
                        time: '20 Aug 2022 18:30 UTC + 7'
                    },
                    {
                        match:'Tottenham - Wolves',
                        time: '20 Aug 2022 18:30 UTC + 7'
                    },
                    
                ]
            },
            {
                label: 'Enable Handicap',
                type:'checkbox'
            },
            {
                type: 'text',
                placeholder:'Title',
                label: ''
            },
            {
                type:'textarea',
                placeholder:'Description',
                label: ''
            }
        ]
    },
    {
        section:2,
        items:[
            {
                label: `Please select the currency for the Pool`,
                type:'select',
                option: [
                    ` ${ethIcon} ETH `
                ]
            },
            {
                label: `Pool Creation Fee in CAL`,
                type:'number',
                placeholder:54
            },
            {
                label: `Max Pool Size in ETH`,
                type:'custom',
                placeholder:'63200'
            },
            {
                label: 'Min pool size',
                type: 'number',
                placeholder: 0
            },
            {
                label: `Pool Fee (%), max: 95%`,
                type: 'number',
                placeholder: 10
            },
            {
                label: `Minimum Bet Size in ETH per player`,
                type: 'number',
                placeholder: 0
            },
            {
                label:'Private Pool',
                type:'checkbox'
            }

        ]
    },
    
]

export default questions