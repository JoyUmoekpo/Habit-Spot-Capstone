const express = require('express');
const cors = require('cors');
const {getHabits, createHabit, updateHabit, deleteHabit, getJournals, createJournal} = require('./server/js/controller.js');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/habits', getHabits);
app.post('/api/habits/', createHabit);
app.put("/api/habits/:habitId", updateHabit);
app.delete('/api/habits/:habitId', deleteHabit);

app.get('/api/journals', getJournals);
app.post('/api/journals/', createJournal);

app.listen(4000, () => console.log(`Your server's running on port 4000!`));
