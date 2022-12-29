const habits = require('./db.json');
let globalId = 11;

module.exports = {
    // Make key-value pairs

    gethabits: (req, res) => {
        res.status(200).send(habits);
    },
    deletehabit: (req, res) => {
        let {
            habitId: id
        } = req.params;

        let habitIndex = habits.findIndex(element => element.id === +id);
        
        console.log('Habit Id: ', id);
        console.log('Habit Index: ', habitIndex);

        habits.splice(habitIndex, 1);
        res.status(200).send(habits);
    },
    // updatehabit: (req, res) => {
    //     let {
    //         habitId
    //     } = req.params; // habit id: 1
    //     let {
    //         type
    //     } = req.body; // plus || minus

    //     let habitIndex = habits.findIndex(el => el.id === +habitId);

    //     let habit = habits[habitIndex];

    //     // Error Checking
    //     if (habit.rating >= 5 && type === 'plus') {
    //         res.status(400).send('Cannot go above 5');
    //     } else if (habit.rating === 0 && type === 'minus') {
    //         res.status(400).send('Cannot go below 0');
    //     } else if (type === 'plus'){
    //         habit.rating++;
    //         res.status(200).send(habits);
    //     } else if (type === 'minus'){
    //         habit.rating--;
    //         res.status(200).send(habits);
    //     } else {
    //         res.status(400);
    //     }
    // },
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