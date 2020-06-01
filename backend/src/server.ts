import express from 'express'

const app = express();

app.get('/users', (request, response) => response.json([
    'Micaelli',
    'Ariane',
    'Rocket',
    'Seat'
]));

app.listen(3333)