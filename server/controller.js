const habits = require('./db.json');
let globalId = 2;

module.exports = {
    getHabits: (req, res) => {
        res.status(200).send(habits);
    },
    deleteHabit: (req, res) => {
        let {
            habitId: id
        } = req.params;

        let habitIndex = habits.findIndex(element => element.id === +id);

        habits.splice(habitIndex, 1);
        res.status(200).send(habits);
    },
    createHabit: (req, res) => {
        let {habit, image, time} = req.body;

        let newHabit = {
            id: globalId,
            habit,
            image,
            time
        }

        habits.push(newHabit);

        res.status(200).send(habits);
        globalId++;
    },
}