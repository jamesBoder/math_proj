// Javascript
document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  var currentQuestion;

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
    }
  }

  $('#answer').on('keyup', function(event) {
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });

  renderNewQuestion();















});