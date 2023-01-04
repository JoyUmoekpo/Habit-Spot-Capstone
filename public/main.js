const habitsContainer = document.querySelector("#habit-container");
const habitForm = document.querySelector("#habitForm");
const allHabitsBtn = document.querySelector("#all-habits-btn");

const journalContainer = document.querySelector('#journal-container');
const journalForm = document.querySelector('#newEntryBtn');

const habitBaseURL = `http://localhost:4000/api/habits`;
const journalBaseURL = `http://localhost:4000/api/journals`;

const habitsCallback = ({ data: habits }) => {
	displayHabits(habits);
}

const journalsCallback = ({ data: journals }) => {
	displayJournals(journals);
}

const errCallback = (err) => {
	console.log(err.response.data);
}

const getAllHabits = () => {
	axios
	.get(habitBaseURL)
	.then(habitsCallback)
	.catch(errCallback);
}

const createHabit = (body) => {
	axios
	.post(habitBaseURL, body)
	.then(habitsCallback)
	.catch(errCallback);
}

const updateHabit = (id, type) => {
	axios
		.put(`${habitBaseURL}/${id}`, {
			type,
		})
		.then(habitsCallback)
		.catch(errCallback);
}

const deleteHabit = (id) => {
	axios
	.delete(`${habitBaseURL}/${id}`)
	.then(habitsCallback)
	.catch(errCallback);
}

const createJournal = (body) => {
	axios
	.post(journalBaseURL, body)
	.then(journalsCallback)
	.catch(errCallback);
}

const habitSubmitHandler = (e) => {
	e.preventDefault();

	let habit = document.querySelector("#habit");
	let image = document.querySelector("#image");
	let time = document.querySelector("#time");
	let days = document.querySelector("#days");

	let bodyObj = {
		habit: habit.value,
		image: image.value,
		time: time.value,
		days: days.value,
	};

	createHabit(bodyObj);

	habit.value = "";
	image.value = "";
	time.value = "";
	days.value = 0;
};

const createHabitCard = (habit) => {
	const habitCard = document.createElement("div");
	habitCard.classList.add("habit-card");
	habitCard.innerHTML = `
	<img alt='Image' src=${habit.image} class="habit-cover" />
  <p>${habit.habit}</p>
  <p>${habit.time}</p>
  <p>Days: ${habit.days}</p>
  <button onclick="updateHabit(${habit.id}, 'plus')" id="days" type="plus">+</button>
  <button onclick="window.location.href='./journal.html'">Add Journal Entry</button>
  <button onclick="deleteHabit(${habit.id})">Delete Habit</button>
  `;
	habitsContainer.appendChild(habitCard);
};

const displayHabits = (arr) => {
	habitsContainer.innerHTML = ``;
	for (let i = 0; i < arr.length; i++) {
		createHabitCard(arr[i]);
	}
};

const journalSubmitHandler = (e) => {
	e.preventDefault();

	let habit = document.querySelector("#habitName");
	let date = document.querySelector("#journalDate");
	let time = document.querySelector("#journalTime");
	let text = document.querySelector("#journalText");

	let bodyObj = {
		habit: habit.value,
		date: date.value,
		time: time.value,
		text: text.value,
	};

	createJournal(bodyObj);

	habit.value = "";
	date.value = "";
	time.value = "";
	text.value = "";
};

const createJournalCard = (journal) => {
	const journalCard = document.createElement("div");
	journalCard.classList.add("journal-card");
	journalCard.innerHTML =`
  <p>${journal.habit}</p>;
  <p>${journal.date}</p>;
  <p>${journal.time}</p>;
  <p>${journal.text}</p>;
  `;
	journalContainer.appendChild(journalCard);
};

const displayJournals = (arr) => {
	journalContainer.innerHTML = ``;
	for (let i = 0; i < arr.length; i++) {
		createJournalCard(arr[i]);
	}
};

habitForm.addEventListener("submit", habitSubmitHandler);
allHabitsBtn.addEventListener("click", getAllHabits);
journalForm.addEventListener("click", journalSubmitHandler);