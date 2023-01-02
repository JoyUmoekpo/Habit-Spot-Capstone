const habitsContainer = document.querySelector("#habit-container");
const form = document.querySelector("form");
const allHabitsBtn = document.querySelector("#all-habits-btn");

const baseURL = `http://localhost:4000/api/habits`;

const habitsCallback = ({ data: habits }) => displayHabits(habits);

const errCallback = (err) => console.log(err.response.data);

const getAllHabits = () =>
	axios.get(baseURL).then(habitsCallback).catch(errCallback);

const createHabit = (body) =>
	axios.post(baseURL, body).then(habitsCallback).catch(errCallback);

  const updateHabit = (id, type) => axios.put(`${baseURL}/${id}`, {
    type
}).then(habitsCallback).catch(errCallback)

const deleteHabit = (id) =>
	axios.delete(`${baseURL}/${id}`).then(habitsCallback).catch(errCallback);

const submitHandler = (e) => {
	e.preventDefault();

	let habit = document.querySelector("#habit");
	let image = document.querySelector("#image");
	let time = document.querySelector("#time");

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
	habitCard.innerHTML = `<img alt='Image' src=${habit.image} class="habit-cover" />
  <p>${habit.habit}</p>
  <p>${habit.time}</p>
  <p id="days">Days: ${habit.days}</p>
  <button onclick="updateHabit(${habit.id}, 'plus')" id="days" type="plus">+</button>
  <button onclick="window.location.href='./journal.html';">Add Journal Entry</button>
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

form.addEventListener("submit", submitHandler);
allHabitsBtn.addEventListener("click", getAllHabits);
