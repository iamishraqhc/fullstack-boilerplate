const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// a sample usage shown. Change it and add your own
app.get('/himym', (req, res) => {
    const customData = [
        {
            id: 1,
            firstName: 'Ted',
            lastName: 'Mosby'
        },
        {
            id: 2,
            firstName: 'Barney',
            lastName: 'Stinson'
        },
        {
            id: 3,
            firstName: 'Robin',
            lastName: 'Scherbatsky'
        },
        {
            id: 4,
            firstName: 'Marshall',
            lastName: 'Eriksen'
        },
        {
            id: 5,
            firstName: 'Lily',
            lastName: 'Aldrin'
        }
    ]

    res.json(customData)
})

app.get('/friends', (req, res) => {
    const customData = [
        {
            id: 1,
            firstName: 'Rachel',
            lastName: 'Green'
        },
        {
            id: 2,
            firstName: 'Ross',
            lastName: 'Geller'
        },
        {
            id: 3,
            firstName: 'Monica',
            lastName: 'Geller'
        },
        {
            id: 4,
            firstName: 'Chandler',
            lastName: 'Bing'
        },
        {
            id: 5,
            firstName: 'Phoebe',
            lastName: 'Buffay'
        },
        {
            id: 6,
            firstName: 'Joey',
            lastName: 'Tribiani'
        }
    ]

    res.json(customData)
})

const PORT = 5000

app.listen(PORT, () => `Server is running on port ${PORT}`)
