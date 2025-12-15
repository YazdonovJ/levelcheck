document.addEventListener('DOMContentLoaded', () => {
    // Top Level State
    let currentQuestionIndex = 0;
    let answers = new Array(questionsData.length).fill(null);
    let timeLeft = 30 * 60;
    let timerInterval = null;
    let isReviewMode = false;
    let fontScale = 1.0;

    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const examScreen = document.getElementById('exam-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');
    const reviewAnswersBtn = document.getElementById('review-answers-btn');

    // Exam Elements
    const timerDisplay = document.getElementById('timer');
    const hideTimerBtn = document.getElementById('hide-timer-btn');
    const questionText = document.getElementById('question-text');
    const questionStem = document.getElementById('question-stem');
    const optionsContainer = document.getElementById('options-container');
    const analysisContainer = document.getElementById('analysis-container'); // NEW
    const qNumberDisplay = document.getElementById('q-number');
    const currentQDisplay = document.getElementById('current-q-display');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Zoom Controls
    const zoomInBtn = document.getElementById('zoom-in-btn');
    const zoomOutBtn = document.getElementById('zoom-out-btn');

    // Result Elements
    const scoreNumber = document.getElementById('score-number');
    const levelTitle = document.getElementById('level-title');
    const levelDescription = document.getElementById('level-description');

    // Branding & Defaults
    document.title = "SAT Makon - Level Check";

    // --- EVENT LISTENERS ---
    if (startBtn) startBtn.addEventListener('click', startExam);
    if (reviewAnswersBtn) reviewAnswersBtn.addEventListener('click', startReviewMode);

    if (prevBtn) prevBtn.addEventListener('click', () => navigate(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigate(1));

    // Zoom Logic
    if (zoomInBtn) zoomInBtn.addEventListener('click', () => adjustZoom(0.1));
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => adjustZoom(-0.1));

    if (hideTimerBtn) {
        hideTimerBtn.addEventListener('click', () => {
            if (timerDisplay.classList.contains('hidden-text')) {
                timerDisplay.classList.remove('hidden-text');
                timerDisplay.style.visibility = 'visible';
                hideTimerBtn.textContent = 'Hide Timer';
            } else {
                timerDisplay.classList.add('hidden-text');
                timerDisplay.style.visibility = 'hidden';
                hideTimerBtn.textContent = 'Show Timer';
            }
        });
    }

    // --- MAIN FUNCTIONS ---

    function adjustZoom(delta) {
        fontScale += delta;
        if (fontScale < 0.8) fontScale = 0.8;
        if (fontScale > 1.5) fontScale = 1.5;
        document.documentElement.style.fontSize = `${16 * fontScale}px`;
    }

    function startExam() {
        startScreen.classList.remove('active');
        startScreen.classList.add('hidden');
        examScreen.classList.remove('hidden');
        examScreen.classList.add('active');

        loadQuestion(0);
        startTimer();
    }

    function startTimer() {
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            if (isReviewMode) return;
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                finishExam();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        timerDisplay.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;

        if (timeLeft < 300) {
            timerDisplay.style.color = '#ef4444'; // Red-500
        }
    }

    function loadQuestion(index) {
        currentQuestionIndex = index;
        const q = questionsData[index];

        // Content
        qNumberDisplay.textContent = q.id;
        currentQDisplay.textContent = q.id;
        questionText.innerHTML = q.context.replace(/\n/g, '<br>');
        questionStem.textContent = q.text;

        // Navigation Logic
        prevBtn.disabled = index === 0;

        if (isReviewMode) {
            nextBtn.textContent = index === questionsData.length - 1 ? 'Back to Results' : 'Next';
        } else {
            nextBtn.textContent = index === questionsData.length - 1 ? 'Finish' : 'Next';
        }

        // Options
        optionsContainer.innerHTML = '';
        const labels = ['A', 'B', 'C', 'D'];

        q.options.forEach((opt, i) => {
            const btn = document.createElement('div');
            btn.className = 'option-btn';

            // Logic for Review Mode Style
            if (isReviewMode) {
                // Correct Answer always Green
                if (i === q.correct) {
                    btn.classList.add('correct');
                }
                // User Wrong Answer Red
                else if (answers[index] === i && i !== q.correct) {
                    btn.classList.add('wrong');
                }

                // Keep selected state if needed, but correct/wrong takes precedence visually
                if (answers[index] === i) {
                    // btn.classList.add('selected'); 
                }
            } else {
                // Normal Mode
                if (answers[index] === i) {
                    btn.classList.add('selected');
                }
                btn.addEventListener('click', () => selectAnswer(index, i));
            }

            btn.innerHTML = `
                <div class="option-circle">${labels[i]}</div>
                <div class="option-text">${opt}</div>
            `;
            optionsContainer.appendChild(btn);
        });

        // Analysis Box (Only in Review Mode)
        if (isReviewMode) {
            analysisContainer.innerHTML = `
                <div class="analysis-box">
                    <strong>Analysis</strong>
                    ${q.explanation || "No explanation available."}
                </div>
            `;
        } else {
            analysisContainer.innerHTML = '';
        }
    }

    function selectAnswer(qIndex, optionIndex) {
        if (isReviewMode) return;
        answers[qIndex] = optionIndex;
        loadQuestion(qIndex);
    }

    function navigate(direction) {
        const newIndex = currentQuestionIndex + direction;

        if (newIndex >= 0 && newIndex < questionsData.length) {
            loadQuestion(newIndex);
        } else if (newIndex === questionsData.length) {
            if (isReviewMode) {
                // Return to results
                examScreen.classList.add('hidden');
                resultScreen.classList.remove('hidden');
            } else {
                // Finish exam
                if (confirm('Are you sure you want to finish the exam?')) {
                    finishExam();
                }
            }
        }
    }

    function finishExam() {
        clearInterval(timerInterval);
        examScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        calculateResult();
    }

    function calculateResult() {
        let score = 0;
        answers.forEach((ans, i) => {
            if (ans === questionsData[i].correct) {
                score++;
            }
        });

        scoreNumber.textContent = score;

        if (score <= 5) {
            levelTitle.textContent = "Beginner Level";
            levelDescription.textContent = "You are at the Beginner level. Keep practicing!";
            levelTitle.style.color = "#ef4444";
        } else if (score <= 10) {
            levelTitle.textContent = "Foundation Level";
            levelDescription.textContent = "You have a solid Foundation.";
            levelTitle.style.color = "#f59e0b";
        } else {
            levelTitle.textContent = "Pre-SAT Level";
            levelDescription.textContent = "Congratulations! You are at the Pre-SAT level.";
            levelTitle.style.color = "#10b981";
        }
    }

    function startReviewMode() {
        isReviewMode = true;
        resultScreen.classList.add('hidden');
        examScreen.classList.remove('hidden');
        loadQuestion(0);
        timerDisplay.parentElement.style.visibility = 'hidden';
    }
});
