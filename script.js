let questions = [
    {
        question: "What pet did Ross own?",
        options: ["A Monkey named Marcel", "A Rabbit named Lancelot", "A Dog named Marcel", "A Cat named Marcel"],
        answer: "0"
    },
    {
        question: "What is Monica skilled at?",
        options: ["Football", "Singing", "Dancing", "Cooking"],
        answer: "3"
    },
    {
        question: "What's Joey's bedtime penguin pal's name?",
        options: ["Lucy", "Maria", "Hugsy", "Ana"],
        answer: "2"
    },
    {
        question: "What song is Phoebe known for?",
        options: ["Smelly Cat", "Smelly Dog", "Smelly Rabbit", "Smelly Worm"],
        answer: "0"
    },
    {
        question: "What Job was Ross known for?",
        options: ["Geologist", "Paleontologist", "Actor", "Salesman"],
        answer: "1"
    },
    {
        question: "What does Joey never share?",
        options: ["Women", "Food", "Bed", "Clothes"],
        answer: "1"
    },
    {
        question: "What kind of uniform does Joey wear to Monica and Chandler’s wedding?",
        options: ["Baseball player", "Fire fighter", "Soldier", "Chef"],
        answer: "2"
    },
    {
        question: "Chandler never kissed?",
        options: ["Ross", "Joey", "Kate", "Emily"],
        answer: "3"
    },
    {
        question: "Who did Rachel not date?",
        options: ["Chandler", "Ross", "Joey", "Tag"],
        answer: "0"
    },
    {
        question: "What is the name of Phoebe’s alter-ego?",
        options: ["Monica Bing", "Elaine Benes", "Phoebe Neeby", "Regina Phalange"],
        answer: "3"
    },
]

let score = document.querySelector(".score");
let questionNumber = document.querySelector(".questionNumber");
let displayQuestions = document.querySelector(".questions");
let options = document.querySelector(".options");
let answerBtn = document.querySelector(".answerbtn");
let nextBtn = document.getElementById("next");
let results = document.querySelector(".results");
let rightOrWrong = document.getElementById("feedback");
let playAgain = document.getElementById("playagain");
let playerScore = 0;
let currentQuestion = 0;
let current = 1;
nextBtn.disabled = true;

window.addEventListener("load", displayQuiz);

function displayQuiz() {
    displayQuestions.innerHTML = questions[currentQuestion].question;
    removeElements(document.querySelectorAll("br"));
    removeElements(document.querySelectorAll("label"));
    showChoices();
}

function showChoices() {
    var displayChoices = questions[currentQuestion]["options"];
    for (let i = 0; i < displayChoices.length; i++) {

        let label = document.createElement("label");
        let input = document.createElement("input");
        var br = document.createElement("br");

        input.setAttribute("type", "radio");
        input.setAttribute("name", "option");
        input.setAttribute("value", i);
        input.setAttribute("class", "optStyle");
        label.appendChild(input);
        label.appendChild(document.createTextNode(displayChoices[i]))

        options.append(label);
        options.append(br);
        console.log(input);
    }
}

answerBtn.addEventListener("click", function () {

    var optionChosen = document.getElementsByName("option");

    for (var k = 0; k < optionChosen.length; k++) {

        if (optionChosen[k].checked) {
            var playerChoice = optionChosen[k].value;
            var correctAnswer = questions[currentQuestion]["answer"];

            if (playerChoice === correctAnswer) {
                playerScore = playerScore + 1;
                score.textContent = "Score: " + playerScore;
                answerBtn.disabled = true;
                nextBtn.disabled = false;
                rightOrWrong.innerHTML = "You got it right!";
                rightOrWrong.setAttribute("class", "rightAnswer");
            } else {
                answerBtn.disabled = true;
                nextBtn.disabled = false;
                rightOrWrong.innerHTML = "You failed it.";
                rightOrWrong.setAttribute("class", "wrongAnswer");
            }

            optionChosen[k].disabled = true;
        }
    }

});

nextBtn.addEventListener("click", function () {
    currentQuestion++;
    current = current + 1;

    if (current > 10) {
        gameOver();
    } else {
        questionNumber.innerHTML = current;
        rightOrWrong.innerHTML = "";
        displayQuiz();
        answerBtn.disabled = false;
        nextBtn.disabled = true;
    }

});

function removeElements(elements) {
    for (var j = 0; j < elements.length; j++) {
        elements[j].parentNode.removeChild(elements[j]);
    }
}

function gameOver() {
    nextBtn.disabled = true;
    if (playerScore >= 8) {
        results.innerHTML = "Score: " + playerScore + ". You are a friend's guru!";
    } else if (playerScore >= 5) {
        results.innerHTML = "Score: " + playerScore + ". You need to watch friends again.";
    } else {
        results.innerHTML = "Score: " + playerScore + ". Did you even watch friends any but at all?";
    }
    playAgain.style.display = "block";
}

function reset() {
    nextBtn.disabled = false;
    answerBtn.disabled = false;
    playerScore = 0;
    currentQuestion = 0;
    current = 1;
    score.textContent = "Score: " + playerScore;
    questionNumber.innerHTML = current;
    rightOrWrong.innerHTML = "";
    results.innerHTML = "";
    playAgain.style.display = "none";
    displayQuiz();
}

