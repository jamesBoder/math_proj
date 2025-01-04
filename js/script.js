// Javascript
document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  var currentQuestion;
  var timeLeft = 10;
  var interval;
  var score = 0;
  var highScore = 0;


   //Timer 
   var updateTimeLeft = function (amount) {
    timeLeft += amount;
    $('#time').text(timeLeft);

  }
  
  //Score
  var updateScore = function (amount) {
    score += amount;
    $('#score').text(score);
  };

  var updateHighScore = function (score) {
    if (score > highScore) {
      highScore = score;
      $('#highScore').text(highScore);
    }
  };

  var startGame = function () {
    if (!interval) {
      
      if (timeLeft === 0) {
        updateTimeLeft(10);
        updateHighScore(score);
        updateScore(-score);
      }

      
      interval = setInterval (function() {
        updateTimeLeft(-1);
        if (timeLeft <= 0) {
          clearInterval(interval);
          interval = undefined;
        }
      }, 1000);
    }
  }

    // Generate a random number between 1 and 100
    var randomNumberGenerator = function (size) {
      return Math.ceil(Math.random() * size);
    };
    
    var questionGenerator = function () {
      var question = {};
      var num1 = randomNumberGenerator(10);
      var num2 = randomNumberGenerator(10);
      
      question.answer = num1 + num2;
      question.equation = String(num1) + " + " + String(num2);
      
      return question;
    };

      // Display the question
  var renderNewQuestion = function () {
    
    currentQuestion = questionGenerator();
    let displayQuestion = document.getElementById('question');
    displayQuestion.innerHTML = currentQuestion.equation;
    //$('#question').text(currentQuestion.equation);
  };
  
  //Display the answer in the console
  var checkAnswer = function (userInput, answer) {
    if (userInput === answer); {
      renderNewQuestion();
      $('#answer').val('');
      updateTimeLeft(+1)
      updateScore(+1);
    }
  }

  $('#answer').on('change', function() {
    startGame();
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });

 

  renderNewQuestion();



});