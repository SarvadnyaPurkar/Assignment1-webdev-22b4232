
        const quizData = [
            {
                question: "Who is the current World Chess Champion?",
                options: ["Magnus Carlsen", "Fabiano Caruana", "Hikaru Nakamura", "Viswanathan Anand"],
                answer: "Magnus Carlsen"
            },
            {
                question: "What is the goal of chess?",
                options: ["To capture the opponent's king", "To checkmate the opponent's king", "To capture all opponent's pieces", "To have the most pawns"],
                answer: "To checkmate the opponent's king"
            },
            {
                question: "Who is the current World Chess Champion?",
                options: ["Magnus Carlsen", "Fabiano Caruana", "Hikaru Nakamura", "Viswanathan Anand"],
                answer: "Magnus Carlsen"
            },
            {
                question: "What is the goal of chess?",
                options: ["To capture the opponent's king", "To checkmate the opponent's king", "To capture all opponent's pieces", "To have the most pawns"],
                answer: "To checkmate the opponent's king"
            },
            {
                question: "Who is the current World Chess Champion?",
                options: ["Magnus Carlsen", "Fabiano Caruana", "Hikaru Nakamura", "Viswanathan Anand"],
                answer: "Magnus Carlsen"
            },
            {
                question: "What is the goal of chess?",
                options: ["To capture the opponent's king", "To checkmate the opponent's king", "To capture all opponent's pieces", "To have the most pawns"],
                answer: "To checkmate the opponent's king"
            },
            
        ];

        const playQuizBtn = document.getElementById('playQuizBtn');
        const quizContainer = document.getElementById('quizContainer');
        const quizQuestionsContainer = document.getElementById('quizQuestions');
        const submitQuizBtn = document.getElementById('submitQuizBtn');
        const quizResult = document.getElementById('quizResult');

        playQuizBtn.addEventListener('click', function() {
           
            quizQuestionsContainer.innerHTML = '';

            quizData.forEach((questionData, index) => {
                const questionElement = document.createElement('div');
                questionElement.classList.add('question');
                questionElement.innerHTML = `
                    <h3>Question ${index + 1}: ${questionData.question}</h3>
                    <ul>
                        ${questionData.options.map(option => `<li><label><input type="radio" name="question${index}" value="${option}"> ${option}</label></li>`).join('')}
                    </ul>
                `;
                quizQuestionsContainer.appendChild(questionElement);
            });

            
            quizContainer.style.display = 'block';
            playQuizBtn.style.display = 'none';
        });

        submitQuizBtn.addEventListener('click', function() {
            let score = 0;
            const questionElements = document.querySelectorAll('.question');

            questionElements.forEach((questionElement, index) => {
                const selectedOption = questionElement.querySelector('input[type="radio"]:checked');
                if (selectedOption) {
                    const selectedAnswer = selectedOption.value;
                    if (selectedAnswer === quizData[index].answer) {
                        score++;
                    }
                }
            });

            
            quizResult.textContent = `Your score: ${score} out of ${quizData.length}`;

           
        });


        let slideIndex = 0;

function moveSlides(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const slideWidth = slides[0].clientWidth;
    const newTransform = `translateX(${-slideIndex * slideWidth}px)`;

    document.querySelector('.slides').style.transform = newTransform;
}

   