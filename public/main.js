const habitsContainer = document.querySelector("#habit-container");
const habitForm = document.querySelector("#habitForm");
const allHabitsBtn = document.querySelector("#all-habits-btn");

const habitBaseURL = `http://localhost:4000/api/habits`;

const habitsCallback = ({ data: habits }) => {
	displayHabits(habits);
};

const errCallback = (err) => {
	console.log(err.response.data);
};

const getHabits = () => {
	axios.get(habitBaseURL).then(habitsCallback).catch(errCallback);
};

const createHabit = (body) => {
	axios.post(habitBaseURL, body).then(habitsCallback).catch(errCallback);
};

const updateHabit = (id, type) => {
	axios
		.put(`${habitBaseURL}/${id}`, {
			type,
		})
		.then(habitsCallback)
		.catch(errCallback);
};

const deleteHabit = (id) => {
	axios.delete(`${habitBaseURL}/${id}`).then(habitsCallback).catch(errCallback);
};

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
	days.value = 1;
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

habitForm.addEventListener("submit", habitSubmitHandler);
allHabitsBtn.addEventListener("click", getHabits);