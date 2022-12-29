const habitsContainer = document.querySelector('#habit-container');
const form = document.querySelector('form');

const baseURL = `http://localhost:4000/api/habits`

const habitsCallback = ({data: habits}) => displayHabits(habits);
const errCallback = err => console.log(err.response.data);
const getAllHabits = () => axios.get(baseURL).then(habitsCallback).catch(errCallback);
const createHabit = body => axios.post(baseURL, body).then(habitsCallback).catch(errCallback);
const deleteHabit = id => axios.delete(`${baseURL}/${id}`).then(habitsCallback).catch(errCallback)

function submitHandler(e) {
  e.preventDefault() 

  let habit = document.querySelector('#habit')
  let image = document.querySelector('#image')

  let bodyObj = {
      habit: habit.value,
      image: image.value
  }

  createHabit(bodyObj)

  habit.value = ''
  image.value = ''
}

function createHabitCard(habit) {
  const habitCard = document.createElement('div')
  habitCard.classList.add('habit-card')
  habitCard.innerHTML = `<img alt='habit image' src=${habit.image} />
  <p>${habit.habit}</p>
  <button onclick="deleteHabit(${habit.id})">delete</button>`
  habitsContainer.appendChild(habitCard)
}

function displayHabits(arr) {
  habitsContainer.innerHTML = ``
  for (let i = 0; i < arr.length; i++) {
      createHabitCard(arr[i])
  }
}

form.addEventListener('submit', submitHandler)

getAllHabits()