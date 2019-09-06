const mongoose = require('mongoose')
const config = require('../nodemon.json')
const Event = require('../api/models/event')
const moment = require('moment-timezone');

const reset = async () => {
    mongoose.connect(config.env.MONGO_DB_CONNECTION, {useNewUrlParser : true})

    // First delete all existing records
    await Event.deleteMany()

    return Event.create([
        // Create 10 events for Gaurav Sareen (Rajesh Jha)
        // 1
        {
            title : 'C+T Poker',
            contact : 'skrishna@microsoft.com',
            start : new Date('10/04/2019 14:00'),
            end : new Date('10/04/2019 19:00'),
            building : '31',
            room : 'Cafe',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Gaurav Sareen',
            event_url : 'aka.ms/give'
        },

        // 2
        {
            title : 'C+T Bake Sale',
            contact : 'skrishna@microsoft.com',
            start : new Date('10/07/2019 9:00'),
            end : new Date('10/07/2019 14:00'),
            building : '31',
            room : 'Cafe',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Gaurav Sareen',
            event_url : 'aka.ms/give'
        },

        // 3
        {
            title : 'C+T Pool',
            contact : 'skrishna@microsoft.com',
            start : new Date('10/10/2019 9:00'),
            end : new Date('10/10/2019 19:00'),
            building : '32',
            room : 'Pool Table',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Gaurav Sareen',
            event_url : 'aka.ms/give'
        },

        // 4
        {
            title : 'C+T Trivia',
            contact : 'skrishna@microsoft.com',
            start : new Date('10/15/2019 14:30'),
            end : new Date('10/15/2019 16:30'),
            building : '31',
            room : 'Cafe',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Gaurav Sareen',
            event_url : 'aka.ms/give'
        },

        // 5
        {
            title : 'C+T Auction',
            contact : 'skrishna@microsoft.com',
            start : new Date('10/25/2019 14:00'),
            end : new Date('10/25/2019 17:00'),
            building : '32',
            room : 'Lobby',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Gaurav Sareen',
            event_url : 'aka.ms/give'
        },

        // 6
        {
            title : 'Sandwiches for Charity',
            contact : 'skrishna@microsoft.com',
            start : new Date('10/14/2019 12:00'),
            end : new Date('10/14/2019 13:00'),
            building : '32',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Gaurav Sareen',
            event_url : 'aka.ms/give',
            comments : 'We will be making PB&J sandwiches'
        },

        // 7
        {
            title : 'Train Service Dogs',
            contact : 'skrishna@microsoft.com',
            start : new Date('10/23/2019 12:00'),
            end : new Date('10/23/2019 13:00'),
            building : '32',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Gaurav Sareen',
            event_url : 'aka.ms/give',
            comments : 'We will help train service dogs for Summit Assitance Dogs'
        },

        // 8
        {
            title : 'CPR Training',
            contact : 'skrishna@microsoft.com',
            start : new Date('10/10/2019 12:00'),
            end : new Date('10/10/2019 13:00'),
            building : '32',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Gaurav Sareen',
            event_url : 'aka.ms/give',
            comments : 'You will receive CPR training from a certified professional'
        },

        // 9
        {
            title : 'Making Goody Bags',
            contact : 'skrishna@microsoft.com',
            start : new Date('10/24/2019 12:00'),
            end : new Date('10/24/2019 13:00'),
            building : '32',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Gaurav Sareen',
            event_url : 'aka.ms/give',
            comments : 'You will help make goody bags which will be distributed to low income /underpriviledged kids though Birthday Dreams'
        },

        // 10
        {
            title : 'Rescue Kittens',
            contact : 'skrishna@microsoft.com',
            start : new Date('10/09/2019 12:00'),
            end : new Date('10/09/2019 13:00'),
            building : '32',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Gaurav Sareen',
            event_url : 'aka.ms/give',
            comments : 'Come play with these adorable cute kittens'
        },

        // Create 10 events for Perry Clarke (Rajesh Jha)
        // 1
        {
            title : 'M365 Poker',
            contact : 'aalapc@microsoft.com',
            start : new Date('10/04/2019 14:00'),
            end : new Date('10/04/2019 19:00'),
            building : '31',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Perry Clarke',
            event_url : 'aka.ms/give'
        },

        // 2
        {
            title : 'M365 Bake Sale',
            contact : 'aalapc@microsoft.com',
            start : new Date('10/07/2019 14:00'),
            end : new Date('10/07/2019 19:00'),
            building : '31',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Perry Clarke',
            event_url : 'aka.ms/give'
        },

        // 3
        {
            title : 'M365 Dunk Tank',
            contact : 'aalapc@microsoft.com',
            start : new Date('10/03/2019 14:00'),
            end : new Date('10/03/2019 16:00'),
            building : '31',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Perry Clarke',
            event_url : 'aka.ms/give'
        },

        // 4
        {
            title : 'Breakfast with Perry\'s Directs',
            contact : 'aalapc@microsoft.com',
            start : new Date('10/09/2019 08:00'),
            end : new Date('10/09/2019 10:00'),
            building : '31',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Perry Clarke',
            event_url : 'aka.ms/give'
        },

        // 5
        {
            title : 'M365 Auction',
            contact : 'aalapc@microsoft.com',
            start : new Date('10/23/2019 14:00'),
            end : new Date('10/23/2019 17:00'),
            building : '31',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Perry Clarke',
            event_url : 'aka.ms/give'
        },

        // 6
        {
            title : 'Sandwiches for Charity',
            contact : 'aalapc@microsoft.com',
            start : new Date('10/16/2019 12:00'),
            end : new Date('10/16/2019 13:00'),
            building : '31',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Perry Clarke',
            event_url : 'aka.ms/give'
        },

        // 7
        {
            title : 'Save a Pony',
            contact : 'aalapc@microsoft.com',
            start : new Date('10/24/2019 12:00'),
            end : new Date('10/24/2019 13:00'),
            building : '31',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Perry Clarke',
            event_url : 'aka.ms/give'
        },

        // 8
        {
            title : 'Make Sanitary Kits',
            contact : 'aalapc@microsoft.com',
            start : new Date('10/09/2019 12:00'),
            end : new Date('10/09/2019 13:00'),
            building : '31',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Perry Clarke',
            event_url : 'aka.ms/give'
        },

        // 9
        {
            title : 'Pack lunch for Schol Kids',
            contact : 'aalapc@microsoft.com',
            start : new Date('10/30/2019 12:00'),
            end : new Date('10/30/2019 13:00'),
            building : '31',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Perry Clarke',
            event_url : 'aka.ms/give'
        },

        // 10
        {
            title : 'Venture 2 Impact',
            contact : 'aalapc@microsoft.com',
            start : new Date('10/10/2019 12:00'),
            end : new Date('10/10/2019 13:00'),
            building : '31',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Perry Clarke',
            event_url : 'aka.ms/give'
        },

        // Create 10 events for Panos Panay (Rajesh Jha)

        // 1
        {
            title : 'Surface Poker',
            contact : 'jecota@microsoft.com',
            start : new Date('10/09/2019 14:00'),
            end : new Date('10/09/2019 19:00'),
            building : '88',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Panos Panay',
            event_url : 'aka.ms/give'
        },

        // 2
        {
            title : 'Surface Painting',
            contact : 'jecota@microsoft.com',
            start : new Date('10/10/2019 14:00'),
            end : new Date('10/10/2019 16:00'),
            building : '88',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Panos Panay',
            event_url : 'aka.ms/give'
        },

        // 3
        {
            title : 'Breakfast With Panos',
            contact : 'jecota@microsoft.com',
            start : new Date('10/11/2019 8:00'),
            end : new Date('10/11/2019 10:00'),
            building : '88',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Panos Panay',
            event_url : 'aka.ms/give'
        },

        // 4
        {
            title : 'Surface Auction',
            contact : 'jecota@microsoft.com',
            start : new Date('10/23/2019 14:00'),
            end : new Date('10/23/2019 19:00'),
            building : '87',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Panos Panay',
            event_url : 'aka.ms/give'
        },

        // 5
        {
            title : 'Surface Pool Tournament',
            contact : 'jecota@microsoft.com',
            start : new Date('10/17/2019 9:00'),
            end : new Date('10/17/2019 15:00'),
            building : '88',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Fundraising',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Panos Panay',
            event_url : 'aka.ms/give'
        },

        // 6
        {
            title : 'Make First Aid Kits with American Red Cross',
            contact : 'jecota@microsoft.com',
            start : new Date('10/15/2019 11:00'),
            end : new Date('10/15/2019 13:00'),
            building : '88',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Panos Panay',
            event_url : 'aka.ms/give'
        },

        // 7
        {
            title : 'Northwest Harvest - Donate to food bank',
            contact : 'jecota@microsoft.com',
            start : new Date('10/18/2019 11:00'),
            end : new Date('10/18/2019 13:00'),
            building : '87',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Panos Panay',
            event_url : 'aka.ms/give'
        },

        // 8
        {
            title : 'Make Girl Scout Cookies',
            contact : 'jecota@microsoft.com',
            start : new Date('10/21/2019 11:00'),
            end : new Date('10/21/2019 13:00'),
            building : '88',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Panos Panay',
            event_url : 'aka.ms/give'
        },

        // 9
        {
            title : 'Tutor underprivileged kids in Math',
            contact : 'jecota@microsoft.com',
            start : new Date('10/15/2019 11:00'),
            end : new Date('10/15/2019 13:00'),
            building : '87',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Panos Panay',
            event_url : 'aka.ms/give'
        },

        // 10
        {
            title : 'Help with Weeding and Mulching in Marymoor Park',
            contact : 'jecota@microsoft.com',
            start : new Date('10/01/2019 11:00'),
            end : new Date('10/01/2019 13:00'),
            building : '88',
            room : 'Conf Room 1',
            city : 'Redmond',
            state :'WA',
            event_type : 'Micro-volunteering',
            slt_leader : 'Rajesh Jha',
            exec_sponsor : 'Panos Panay',
            event_url : 'aka.ms/give'
        },

        // Create 5 events for Jason Zander (Scott Guthrie)

        // 1
        {
            title : 'Azure Poker',
            contact : 'lekevin@microsoft.com',
            start : new Date('10/09/2019 14:00'),
            end : new Date('10/09/2019 19:00'),
            building : 'CHARLOTTE-AP1',
            room : 'Conf Room 1',
            city : 'CHARLOTTE',
            state :'NC',
            event_type : 'Fundraising',
            slt_leader : 'Scott Guthrie',
            exec_sponsor : 'Jason Zander',
            event_url : 'aka.ms/give'
        },

        // 2
        {
            title : 'Azure Ice Cream Social',
            contact : 'lekevin@microsoft.com',
            start : new Date('10/10/2019 15:00'),
            end : new Date('10/10/2019 17:00'),
            building : 'CHARLOTTE-AP1',
            room : 'Conf Room 1',
            city : 'CHARLOTTE',
            state :'NC',
            event_type : 'Fundraising',
            slt_leader : 'Scott Guthrie',
            exec_sponsor : 'Jason Zander',
            event_url : 'aka.ms/give'
        },

        // 3
        {
            title : 'Azure Soccer',
            contact : 'lekevin@microsoft.com',
            start : new Date('10/15/2019 8:00'),
            end : new Date('10/15/2019 17:00'),
            building : 'CHARLOTTE-AP1',
            room : 'Conf Room 1',
            city : 'CHARLOTTE',
            state :'NC',
            event_type : 'Fundraising',
            slt_leader : 'Scott Guthrie',
            exec_sponsor : 'Jason Zander',
            event_url : 'aka.ms/give'
        },

        // 4
        {
            title : 'Azure Trivia',
            contact : 'lekevin@microsoft.com',
            start : new Date('10/23/2019 14:00'),
            end : new Date('10/23/2019 19:00'),
            building : 'CHARLOTTE-AP1',
            room : 'Conf Room 1',
            city : 'CHARLOTTE',
            state :'NC',
            event_type : 'Fundraising',
            slt_leader : 'Scott Guthrie',
            exec_sponsor : 'Jason Zander',
            event_url : 'aka.ms/give'
        },

        // 5
        {
            title : 'Azure 5k',
            contact : 'lekevin@microsoft.com',
            start : new Date('10/02/2019 14:00'),
            end : new Date('10/02/2019 17:00'),
            building : 'CHARLOTTE-AP1',
            room : 'Conf Room 1',
            city : 'CHARLOTTE',
            state :'NC',
            event_type : 'Fundraising',
            slt_leader : 'Scott Guthrie',
            exec_sponsor : 'Jason Zander',
            event_url : 'aka.ms/give'
        },

        // Create 5 events for Julia Liuson (Scott Guthrie)
         // 1
         {
            title : 'VS Poker',
            contact : 'davebar@microsoft.com',
            start : new Date('10/09/2019 14:00'),
            end : new Date('10/09/2019 19:00'),
            building : 'NYC-TIMESSQUARE',
            room : 'Conf Room 1',
            city : 'NewYork',
            state :'NY',
            event_type : 'Fundraising',
            slt_leader : 'Scott Guthrie',
            exec_sponsor : 'Julia Liuson',
            event_url : 'aka.ms/give'
        },

        // 2
        {
            title : 'VS Ice Cream Social',
            contact : 'davebar@microsoft.com',
            start : new Date('10/10/2019 15:00'),
            end : new Date('10/10/2019 17:00'),
            building : 'NYC-TIMESSQUARE',
            room : 'Conf Room 1',
            city : 'NewYork',
            state :'NY',
            event_type : 'Fundraising',
            slt_leader : 'Scott Guthrie',
            exec_sponsor : 'Julia Liuson',
            event_url : 'aka.ms/give'
        },

        // 3
        {
            title : 'VS Soccer',
            contact : 'davebar@microsoft.com',
            start : new Date('10/15/2019 8:00'),
            end : new Date('10/15/2019 17:00'),
            building : 'NYC-TIMESSQUARE',
            room : 'Conf Room 1',
            city : 'NewYork',
            state :'NY',
            event_type : 'Fundraising',
            slt_leader : 'Scott Guthrie',
            exec_sponsor : 'Julia Liuson',
            event_url : 'aka.ms/give'
        },

        // 4
        {
            title : 'VS Trivia',
            contact : 'davebar@microsoft.com',
            start : new Date('10/23/2019 14:00'),
            end : new Date('10/23/2019 19:00'),
            building : 'NYC-TIMESSQUARE',
            room : 'Conf Room 1',
            city : 'NewYork',
            state :'NY',
            event_type : 'Fundraising',
            slt_leader : 'Scott Guthrie',
            exec_sponsor : 'Julia Liuson',
            event_url : 'aka.ms/give'
        },

        // 5
        {
            title : 'VS 5k',
            contact : 'davebar@microsoft.com',
            start : new Date('10/02/2019 14:00'),
            end : new Date('10/02/2019 17:00'),
            building : 'NYC-TIMESSQUARE',
            room : 'Conf Room 1',
            city : 'NewYork',
            state :'NY',
            event_type : 'Fundraising',
            slt_leader : 'Scott Guthrie',
            exec_sponsor : 'Julia Liuson',
            event_url : 'aka.ms/give'
        },

    ])
}

reset().catch(console.error).then((response) => {
    console.log(`Seeds successful! ${response.length} records created.`)
    return mongoose.disconnect()
})