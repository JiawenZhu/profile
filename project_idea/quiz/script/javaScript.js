const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML =
                `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            <h3>These questions are pulled from <br>
                <a href="https://hobbylark.com/party-games/Free-Fun-100-Question-Quiz-3">Free-Fun-100-Question-Quiz</a>
            </h3>    
          `
            passToGoogleSheet(score);
        }
    }
});

function passToGoogleSheet(score) {
    let name = window.prompt("Please enter your name", "Peter");
    let date = new Date().toUTCString();
    fetch('https://v1.nocodeapi.com/evanapi/google_sheets/qWTHUWXJFlNMRjPP?tabId=student-quiz-score-test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            [
                [
                    name,
                    score,
                    date
                ],
            ]
        )
    }).then(res => {
        if (res.ok) {
            console.log('SUCCESS')
            return res.json();
        }
        else {
            console.log('NOT Successful')
        }
    }).then(data => console.log(data))
}
