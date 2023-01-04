const journalContainer = document.querySelector("#journal-container");
const journalForm = document.querySelector("#journalForm");
const allJournalsBtn = document.querySelector("#exampleEntry");

const journalBaseURL = `http://localhost:4000/api/journals`;

const journalsCallback = ({ data: journals }) => {
	displayJournals(journals);
}

const errCallback = (err) => {
	console.log(err.response.data);
}

const getJournals = () => {
  axios
	.get(journalBaseURL)
  .then(journalsCallback)
	.catch(errCallback);
}

const createJournal = (body) => {
	axios
	.post(journalBaseURL, body)
	.then(journalsCallback)
	.catch(errCallback);
}

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
	<h>Journal Entry for ${journal.habit} (${journal.time}) on ${journal.date}</h>
  <p>${journal.text}</p>
  `;
	journalContainer.appendChild(journalCard);
};

const displayJournals = (arr) => {
	journalContainer.innerHTML = ``;
	for (let i = 0; i < arr.length; i++) {
		createJournalCard(arr[i]);
	}
};

journalForm.addEventListener("submit", journalSubmitHandler);
allJournalsBtn.addEventListener("click", getJournals);