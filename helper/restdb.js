const axios = require('axios')

const restdb = axios.create({
    baseURL: 'https://fancytodo-6894.restdb.io',
    headers: {
        'Host': 'fancytodo-6894.restdb.io',
        'Content-Type': 'application/json',
        'x-apikey': process.env.REST_DB_KEY,
        'Cache-Control': 'no-cache'
    }
})

module.exports = function sendMail(data){
    return restdb({
        method: 'POST',
        url: '/mail',
        data: {
            "to": data.email,
            "subject": `Welcome to KanbanKuy ${data.name}!!`,
            "html": `<h1>Welcome to kanbankuy!</h1>
            <p>We are welcoming you to the best working tool in the world</p><br>
            <p>Prepare to be the best of what you are doing!</p>
            <p>with love. kanbankuy team.</p>`,
            "company": "KanbanKuy Team",
            "sendername": "KanbanKuy Team"
        }
    })
}