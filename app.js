const btns = document.querySelectorAll(".question-btn");
const question = document.querySelector("question");

btns.forEach((btn) => {
	console.log(btn);
	btn.addEventListener("click", (e) => {
		//traverse the dom to find the parent to attach the class
		console.log(e.currentTarget.parentElement.parentElement);
		const targetQuestion = e.currentTarget.parentElement.parentElement;
		targetQuestion.classList.toggle("show-text");
	});
});
