const habits = require('./db.json');
let globalId = 1;

module.exports = {
    getHabits: (req, res) => {
        res.status(200).send(habits);
    },
    deleteHabit: (req, res) => {
        let {
            habitId: id
        } = req.params;

        let habitIndex = habits.findIndex(element => element.id === +id);
        
        console.log('Habit Id: ', id);
        console.log('Habit Index: ', habitIndex);

        habits.splice(habitIndex, 1);
        res.status(200).send(habits);
    },
    createHabit: (req, res) => {
        let {habit, image} = req.body;

        let newHabit = {
            id: globalId,
            habit,
            image,
        }
        habits.push(newHabit);

        res.status(200).send(habits);
        console.log(habit);
        globalId++;
    },
}