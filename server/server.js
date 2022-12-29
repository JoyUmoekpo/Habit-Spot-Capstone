const express = require('express');
const cors = require('cors');
const {getHabits, deleteHabit, createHabit, getJournals, deleteJournal, updateJournal, createJournal} = require('./controller.js');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/Habits', getHabits);
app.delete('/api/Habits/:HabitId', deleteHabit);
app.put('/api/Habits/:HabitId', updateHabit);
app.post('/api/Habits/', createHabit);

app.get('/api/Journals', getJournals);
app.delete('/api/Habits/:JournalId', deleteJournal);
app.put('/api/Habits/:JournalId', updateJournal);
app.post('/api/Journals/', createJournal)

app.listen(4000, () => console.log(`Your server's running on port 4000!`));
