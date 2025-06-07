document.addEventListener('DOMContentLoaded', function () {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    themeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const classes = this.classList;
            let bgColor;
            if (classes.contains('blue')) {
                bgColor = '#1a73e8';
            } else if (classes.contains('green')) {
                bgColor = '#34a853';
            } else if (classes.contains('purple')) {
                bgColor = '#6a0dad';
            } else if (classes.contains('reset')) {
                bgColor = '#ffffff'
            }
            body.style.backgroundColor = bgColor;
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideCount = slides.length;
    const slideWidth = slides[0].clientWidth;

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        if (index < 0) {
            currentSlide = slideCount - 1;
        } else if (index >= slideCount) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        updateIndicators();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    prevBtn.addEventListener('click', function () {
        prevSlide();
    });

    nextBtn.addEventListener('click', function () {
        nextSlide();
    });

});

const questions = [
    {
        question: "O que você deve fazer ao perceber que sua casa está em área de risco de enchente?",
        answers: [
            { id: 1, text: "Aguardar dentro de casa até a água baixar", correct: false },
            { id: 2, text: "Subir em móveis altos e esperar por socorro", correct: false },
            { id: 3, text: "Evacuar imediatamente para um local seguro", correct: true },
            { id: 4, text: "Tentar desentupir os bueiros próximos", correct: false },
        ],
    },
    {
        question: "Qual número você deve ligar para solicitar ajuda da Defesa Civil em caso de enchente?",
        answers: [
            { id: 1, text: "190", correct: false },
            { id: 2, text: "193", correct: false },
            { id: 3, text: "199", correct: true },
            { id: 4, text: "100", correct: false },
        ],
    },
    {
        question: "Qual é a principal medida preventiva para evitar doenças após uma enchente?",
        answers: [
            { id: 1, text: "Beber bastante água da torneira", correct: false },
            { id: 2, text: "Consumir alimentos que estavam na água da enchente", correct: false },
            { id: 3, text: "Lavar e desinfetar objetos que tiveram contato com a água da enchente", correct: true },
            { id: 4, text: "Deixar os objetos secarem naturalmente", correct: false },
        ],
    },
    {
        question: "Em caso de enchente, o que NÃO se deve fazer?",
        answers: [
            { id: 1, text: "Evitar contato com a água da enchente", correct: false },
            { id: 2, text: "Transitar por áreas alagadas a pé ou de carro", correct: true },
            { id: 3, text: "Desligar a energia elétrica da residência", correct: false },
            { id: 4, text: "Acompanhar alertas das autoridades", correct: false },
        ],
    },

    {
        question: "Qual das seguintes ações ajuda a prevenir enchentes em áreas urbanas?",
        answers: [
            { id: 1, text: "Cobrir rios com concreto", correct: false },
            { id: 2, text: "Construir mais ruas asfaltadas", correct: false },
            { id: 3, text: "Aumentar áreas verdes e permeáveis", correct: true },
            { id: 4, text: "Descarte de resíduos em rios", correct: false },
        ],
    },
    {
        question: "O que deve ser evitado durante uma enchente?",
        answers: [
            { id: 1, text: "Permanecer em áreas alagadas", correct: true },
            { id: 2, text: "Buscar locais elevados", correct: false },
            { id: 3, text: "Desligar aparelhos elétricos", correct: false },
            { id: 4, text: "Seguir orientações da Defesa Civil", correct: false },
        ],
    },
    {
        question: "Como as áreas verdes ajudam a prevenir alagamentos?",
        answers: [
            { id: 1, text: "Aumentando a evaporação da água", correct: false },
            { id: 2, text: "Reduzindo a quantidade de chuva", correct: false },
            { id: 3, text: "Facilitando a infiltração da água no solo", correct: true },
            { id: 4, text: "Armazenando a água em reservatórios", correct: false },
        ],
    },
    {
        question: "O que fazer após uma enchente para evitar doenças?",
        answers: [
            { id: 1, text: "Consumir alimentos que estavam submersos", correct: false },
            { id: 2, text: "Lavar e desinfetar objetos e superfícies", correct: true },
            { id: 3, text: "Utilizar a água da enchente para higiene", correct: false },
            { id: 4, text: "Evitar contato com água limpa", correct: false },
        ],
    },
    {
        question: "Como pedir ajuda durante uma enchente?",
        answers: [
            { id: 1, text: "Aguardar o socorro sem se comunicar", correct: false },
            { id: 2, text: "Utilizar sinais de fumaça", correct: false },
            { id: 3, text: "Ligar para a Defesa Civil ou Corpo de Bombeiros", correct: true },
            { id: 4, text: "Enviar mensagens por pombo-correio", correct: false },
        ],
    },

    {
        question: "Qual é a atitude mais segura ao ficar isolado por uma enchente?",
        answers: [
            { id: 1, text: "Tentar atravessar a correnteza a pé", correct: false },
            { id: 2, text: "Subir para um ponto elevado e acenar com panos coloridos", correct: true },
            { id: 3, text: "Nadar em direção à corrente para sair mais rápido", correct: false },
            { id: 4, text: "Esperar dentro de veículos submersos", correct: false },
        ],
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima pergunta";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn-quiz");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar novamente";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();



