const question = document.getElementById('question')
let options = document.querySelectorAll('.option')
let answers = document.querySelector('.answers')

let questionCounter = 0;
let availableQuestions = []
let score = 0;

console.log(options)

const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

  

    const startGame = function(){
        
        questionCounter =0;
        score= 0;
        availableQuestions = [...questions];
        console.log(availableQuestions)
        getNewQuestion();
        answers.removeChild(newP,newP2,newP3,newP4)
    }
window.onload = function () {
    
  };

    const getNewQuestion = function(){

        questionCounter ++;
        const questionIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionIndex]
        question.innerText = currentQuestion.question

        let correctAnswer = currentQuestion.correct_answer
        let incorrectAnswers = currentQuestion.incorrect_answers
        let newP = document.createElement('p')
        let newP2 = document.createElement('p')
        let newP3 = document.createElement('p')
        let newP4 = document.createElement('p')
        newP.innerText = correctAnswer
        newP2.innerText = incorrectAnswers[2]
        newP3.innerText = incorrectAnswers[1]
        newP4.innerText = incorrectAnswers[0]
        answers.appendChild(newP)
        answers.appendChild(newP2)
        answers.appendChild(newP3)
        answers.appendChild(newP4)

                     
        //for(let i=0; i< options.length; i++){
        //options[i].innerText = currentQuestion = correctAnswer + incorrectAnswers
            
        // }
        
    }



  startGame();
  