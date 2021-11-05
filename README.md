
<!--
        QUIZ GAME!

        RULES:
        / The player must guess correctly a certain amount of questions
        / Each correct answer gives him one point
        / Answers could be multiple or true/false
        / At the end of the game, the user must know his/her total score

        QUESTIONS:
        / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
        / Could be multiple of boolean (true / false)

        HINTS:
        / Keep a global variable score for the user score
        / Keep a variable questionNumber for the question the user is answering
        / When questionNumber is bigger then the available questions, present the score
        / Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know how to do it!)
        / Start with the easier version and THEN implement the EXTRAs
        / Please debug everything / try it on the console to be sure of what to expect from your code

        EXTRA:
        / Show if the answer provided was the wrong one or correct it after clicking
        / Present the questions one at a time instead of having all of them displayed together
        / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)
    
        /* WHEN YOU ARE FINISHED
          Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
        */
    -->





     // HINTS
        // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
        // For each question, create a container for wrapping it; then create a radio button
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
        // with, as options, both the correct answer and the incorrect ones
        // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
        //
        // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
        // Display the first question with the text and the radio buttons
        // when the user selects an answer, pick the next question from the array and replace the old one with it
        // saving the user's choice in a variable
      };

      // How to calculate the result? You can do it in 2 ways:
      // If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
      // If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
    </script>