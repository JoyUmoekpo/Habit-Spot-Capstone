const habits = require("./json/habitdb.json");
const journals = require("./json/journaldb.json");

let habitId = 2;
let journalId = 2;

module.exports = {
	getHabits: (req, res) => {
		res.status(200).send(habits);
	},
	createHabit: (req, res) => {
		let { habit, image, time, days } = req.body;

		let newHabit = {
			id: habitId,
			habit,
			image,
			time,
      days
		};

		habits.push(newHabit);

		res.status(200).send(habits);
		habitId++;
	},
	updateHabit: (req, res) => {
		let { habitId: id } = req.params;

		let { type } = req.body;

		let habitIndex = habits.findIndex(
			(habit) => habit.id === +id
		);

		let habit = habits[habitIndex];

		if (habit.days >= 365 && type === "plus") {
			res.status(400).send("Cannot go above 365 days");
		} else if (type === "plus") {
			habit.days++;
			res.status(200).send(habits);
		} else {
			res.status(400);
		}
	},
	deleteHabit: (req, res) => {
		let { habitId: id } = req.params;

		let habitIndex = habits.findIndex((element) => element.id === +id);

		habits.splice(habitIndex, 1);
		res.status(200).send(habits);
	},
	getJournals: (req, res) => {
		res.status(200).send(journals);
	},
	createJournal: (req, res) => {
		let { habit, date, time, text } = req.body;
	
		let newJournal = {
			id: journalId,
			habit,
			date,
			time,
			text
		};
	
		journals.push(newJournal);
	
		res.status(200).send(journals);
		journalId++;
	}
};
