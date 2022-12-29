const express = require('express');
const cors = require('cors');
const {getHabits, createHabit, deleteHabit} = require('./controller.js');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/habits', getHabits);
app.post('/api/habits/', createHabit);
app.delete('/api/habits/:habitId', deleteHabit);

app.listen(4000, () => console.log(`Your server's running on port 4000!`));
