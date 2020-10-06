const axios = require('axios');
const response = require('./jsonReportParser');
const {hook} = require('../config/slack.config')

const statuses = response.status.map(stat => {
    if (stat.passed) {
        return {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `*Name:* ${stat.name} :white_check_mark:`
            }
        }
    } else {

        let failure = '';
        stat.failure.forEach(fail => {
            failure += `*Test:* ${fail.test} \n *Error:* ${fail.error} \n\n`
        })

        return {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `*Name:* ${stat.name} :warning: \n ${failure}\n\n`
            }
        }
    }
})

const slackMessage = {
    blocks: [
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Hello, here's the report for newman run of *${response.summary.name}*:`
            }
        },
        {
            type: 'divider'
        },
        ...statuses
    ]
}

module.exports = () => {
    axios.post(hook, slackMessage)
        .then(response => console.log(response.data))
        .catch(err => console.log('error :', err))
}
