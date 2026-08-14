// --- Função de Scroll Suave ---
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// --- Lógica do Quiz (10 Perguntas) ---
const questions = [
    {
        question: "Qual é a minha comida favorita?",
        options: ["Hambúrguer", "Strogonoff", "Pizza", "Lasanha"],
        answer: 3 // Lembre-se: 0 é a primeira opção, 1 a segunda, etc.
    },
    {
        question: "Qual é o meu esporte favorito (de se praticar)?",
        options: ["Futebol", "Futsal", "Vôlei", "Basquete"],
        answer: 1
    },
    {
        question: "Qual apelido que eu mais gosto?",
        options: ["Bb", "Amor", "Vida", "Metido"],
        answer: 0
    },
    {
        question: "Qual é a coisa que eu mais falo?",
        options: ["Cara", "Oloko", "Suave", "Saudades da minha mulher"],
        answer: 3
    },
    {
        question: "O que eu mais gosto de fazer no nosso tempo livre?",
        options: ["Comer", "Dormir", "Ir na academia", "Jogar videogame"],
        answer: 3
    },
    {
        question: "Qual é o meu personagem favorito?",
        options: ["Home-Aranha", "Flash", "Batman", "Homem de ferro"],
        answer: 2
    },
    {
        question: "Qual é o meu Hokage favorito?",
        options: ["Hashirama", "Tobirama", "Naruto", "Minato"],
        answer: 1
    },
    {
        question: "Qual é o sonho que quero realizar com você?",
        options: ["Me casar", "Fazer você estudar em NY", "Comprar um BMW para você", "Nenhuma das alternativas"],
        answer: 1
    },
    {
        question: "Qual dessas comidas eu menos suporto?",
        options: ["Nutella", "Chocolate", "Doritos", "Ferrero Rocher"],
        answer: 0
    },
    {
        question: "O que eu mais amo em você?",
        options: ["Seu sorriso", "Seu jeito de ser", "Seus olhos", "Tudo acima"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question-text").innerText = q.question;
    
    const optionsDiv = document.getElementById("options-box");
    optionsDiv.innerHTML = ""; // Limpa opções anteriores

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "option-btn";
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].answer) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";
    document.getElementById("score").innerText = score;
    
    let msg = "";
    if (score === questions.length) msg = "Tava fácil né, meu bem? Te amoo❤️";
    else if (score >= 7) msg = "Tá tranquio, Nem todo mundo é perfeito (menos eu, brincadeira)";
    else if (score >= 4) msg = "Qual fita amor? 😭";
    else msg = "Por isso que eu falo que eu te amo mais 🙄";
    
    document.getElementById("feedback-msg").innerText = msg;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("question-box").style.display = "block";
    document.getElementById("result-box").style.display = "none";
    loadQuestion();
}

// Inicia o quiz ao carregar
loadQuestion();

// --- Controle de Música ---
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-btn");
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        playBtn.innerText = "🎵 Tocar Nossa Música";
    } else {
        music.play();
        playBtn.innerText = "⏸ Pausar";
    }
    isPlaying = !isPlaying;
}

// --- Efeito de Corações Flutuantes ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posição horizontal aleatória
    heart.style.left = Math.random() * 100 + "vw";
    
    // Tamanho aleatório para variar
    const size = Math.random() * 20 + 10; 
    heart.style.fontSize = size + "px";
    
    // Duração da animação aleatória
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    
    document.body.appendChild(heart);
    
    // Remove o coração do DOM após a animação para não pesar o site
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Cria um coração a cada 300 milissegundos
setInterval(createHeart, 300);
