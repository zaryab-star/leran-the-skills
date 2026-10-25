
const languageToggle =
    document.getElementById("languageToggle") ||
    document.querySelector(".language-button");

const menuToggle = document.getElementById("menuToggle");

const navLinks =
    document.getElementById("mainNav") ||
    document.getElementById("navLinks");

const toast = document.getElementById("toast-container");
let currentLanguage = "en";
let toastTimeout;

document.getElementById("currentYear").textContent =
  new Date().getFullYear();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function closeMobileMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

function changeLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
  document.body.classList.toggle("urdu-mode", language === "ur");

  document.querySelectorAll("[data-en][data-ur]").forEach(element => {
    element.innerHTML =
      language === "ur" ? element.dataset.ur : element.dataset.en;
  });

  languageToggle.textContent = language === "en" ? "اردو" : "English";
  closeMobileMenu();
}

languageToggle.addEventListener("click", () => {
  changeLanguage(currentLanguage === "en" ? "ur" : "en");
});

// Functional calculator
function openCalculator() {
  const old = document.getElementById("toolModal");
  if (old) old.remove();

  const modal = createModal("Calculator", `
    <label for="calcDisplay">Enter a calculation</label>
    <input id="calcDisplay" class="tool-input" placeholder="Example: 12*(5+2)" autocomplete="off">
    <button class="tool-action" id="calculateButton">Calculate</button>
    <p class="tool-result" id="calcResult">Your answer will appear here.</p>
    <p class="tool-help">Use numbers, +, -, *, /, parentheses and decimal points.</p>
  `);

  document.getElementById("calculateButton").addEventListener("click", () => {
    const expression = document.getElementById("calcDisplay").value.trim();
    const result = document.getElementById("calcResult");

    // Accept only basic arithmetic characters; never use eval().
    if (!expression || !/^[\d+\-*/().\s]+$/.test(expression)) {
      result.textContent = "Please enter a valid arithmetic expression.";
      return;
    }

    try {
      const answer = safeCalculate(expression);
      result.textContent = Number.isFinite(answer)
        ? "Answer: " + answer
        : "Please check your calculation.";
    } catch {
      result.textContent = "Invalid calculation. Please check the expression.";
    }
  });

  document.getElementById("calcDisplay").addEventListener("keydown", event => {
    if (event.key === "Enter") {
      document.getElementById("calculateButton").click();
    }
  });
}

// Small arithmetic parser, avoiding eval()
function safeCalculate(expression) {
  const tokens = expression.match(/\d*\.?\d+|[()+\-*/]/g);
  if (!tokens || tokens.join("") !== expression.replace(/\s/g, "")) {
    throw new Error("Invalid expression");
  }

  let position = 0;

  function factor() {
    const token = tokens[position++];

    if (token === "+") return factor();
    if (token === "-") return -factor();

    if (token === "(") {
      const value = sum();
      if (tokens[position++] !== ")") throw new Error("Missing bracket");
      return value;
    }

    if (token !== undefined && /^\d*\.?\d+$/.test(token)) {
      return Number(token);
    }

    throw new Error("Invalid number");
  }

  function product() {
    let value = factor();

    while (tokens[position] === "*" || tokens[position] === "/") {
      const operator = tokens[position++];
      const next = factor();

      if (operator === "/" && next === 0) {
        throw new Error("Cannot divide by zero");
      }

      value = operator === "*" ? value * next : value / next;
    }

    return value;
  }

  function sum() {
    let value = product();

    while (tokens[position] === "+" || tokens[position] === "-") {
      const operator = tokens[position++];
      const next = product();
      value = operator === "+" ? value + next : value - next;
    }

    return value;
  }

  const answer = sum();
  if (position !== tokens.length) throw new Error("Unexpected token");
  return answer;
}

// Functional word counter
function openWordCounter() {
  createModal("Word Counter", `
    <label for="wordText">Paste or type your text</label>
    <textarea id="wordText" class="tool-input" rows="7"
      placeholder="Start typing here..."></textarea>
    <div class="counter-grid">
      <div><strong id="wordCount">0</strong><span>Words</span></div>
      <div><strong id="charCount">0</strong><span>Characters</span></div>
      <div><strong id="charNoSpace">0</strong><span>Without spaces</span></div>
      <div><strong id="sentenceCount">0</strong><span>Sentences</span></div>
    </div>
  `);

  const input = document.getElementById("wordText");

  function updateCounts() {
    const text = input.value.trim();
    const words = text ? text.split(/\s+/).filter(Boolean) : [];
    const sentences = text
      ? text.split(/[.!?۔]+/).filter(part => part.trim()).length
      : 0;

    document.getElementById("wordCount").textContent = words.length;
    document.getElementById("charCount").textContent = input.value.length;
    document.getElementById("charNoSpace").textContent =
      input.value.replace(/\s/g, "").length;
    document.getElementById("sentenceCount").textContent = sentences;
  }

  input.addEventListener("input", updateCounts);
}

// Functional study timer
let timerInterval = null;
let remainingSeconds = 25 * 60;
let running = false;

function openStudyTimer() {
  stopTimer();

  remainingSeconds = 25 * 60;
  running = false;

  createModal("Study Timer", `
    <p class="tool-help">Focus on your study. Take a short break when your session ends.</p>
    <div class="timer-display" id="timerDisplay">25:00</div>
    <div class="timer-presets">
      <button class="tool-action preset" data-minutes="5">5 min</button>
      <button class="tool-action preset" data-minutes="15">15 min</button>
      <button class="tool-action preset" data-minutes="25">25 min</button>
      <button class="tool-action preset" data-minutes="45">45 min</button>
    </div>
    <div class="timer-controls">
      <button class="tool-action" id="timerStart">Start</button>
      <button class="tool-action secondary-action" id="timerReset">Reset</button>
    </div>
    <p class="tool-result" id="timerMessage">Ready when you are!</p>
  `);

  document.querySelectorAll(".preset").forEach(button => {
    button.addEventListener("click", () => {
      stopTimer();
      remainingSeconds = Number(button.dataset.minutes) * 60;
      updateTimerDisplay();
      document.getElementById("timerMessage").textContent = "Timer set.";
      document.getElementById("timerStart").textContent = "Start";
    });
  });

  document.getElementById("timerStart").addEventListener("click", () => {
    if (running) {
      stopTimer();
      document.getElementById("timerStart").textContent = "Resume";
      document.getElementById("timerMessage").textContent = "Timer paused.";
      return;
    }

    if (remainingSeconds <= 0) remainingSeconds = 25 * 60;

    running = true;
    document.getElementById("timerStart").textContent = "Pause";
    document.getElementById("timerMessage").textContent = "You can do it!";

    timerInterval = setInterval(() => {
      remainingSeconds--;
      updateTimerDisplay();

      if (remainingSeconds <= 0) {
        stopTimer();
        document.getElementById("timerStart").textContent = "Start again";
        document.getElementById("timerMessage").textContent =
          "Session complete! Great work.";
      }
    }, 1000);
  });

  document.getElementById("timerReset").addEventListener("click", () => {
    stopTimer();
    remainingSeconds = 25 * 60;
    updateTimerDisplay();
    document.getElementById("timerStart").textContent = "Start";
    document.getElementById("timerMessage").textContent = "Timer reset.";
  });
}

function stopTimer() {
  if (timerInterval !== null) clearInterval(timerInterval);
  timerInterval = null;
  running = false;
}

function updateTimerDisplay() {
  const display = document.getElementById("timerDisplay");
  if (!display) return;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  display.textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}

// Shared modal for study tools
function createModal(title, content) {
  const old = document.getElementById("toolModal");
  if (old) old.remove();

  const modal = document.createElement("div");
  modal.id = "toolModal";
  modal.className = "tool-modal";
  modal.innerHTML = `
    <div class="tool-modal-card" role="dialog" aria-modal="true"
      aria-labelledby="toolModalTitle">
      <button class="modal-close" id="modalClose" aria-label="Close">×</button>
      <h2 id="toolModalTitle"></h2>
      <div id="toolModalContent"></div>
    </div>
  `;

  document.body.appendChild(modal);
  document.getElementById("toolModalTitle").textContent = title;
  document.getElementById("toolModalContent").innerHTML = content;

  document.getElementById("modalClose").addEventListener("click", () => {
    stopTimer();
    modal.remove();
  });

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      stopTimer();
      modal.remove();
    }
  });

  return modal;
}

// Open tools from the existing cards


document.querySelectorAll(".tool-card").forEach((card, index) => {
  card.style.cursor = "pointer";
  card.setAttribute("tabindex", "0");

  function openTool() {
    switch (index) {
      case 0:
        openStudyNotes();
        break;
      case 1:
        openQuiz();
        break;
      case 2:
        openStudyTimer();
        break;
      case 3:
        openFlashcards();
        break;
      case 4:
        openCalculator();
        break;
      case 5:
        openWordCounter();
        break;
      case 7:
        openProgressTracker();
        break;
      default:
        showToast(
          currentLanguage === "ur"
            ? "PDF resources aglay phase mein add honge."
            : "PDF study resources will be added in a later phase."
        );
    }
  }

  card.addEventListener("click", openTool);

  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openTool();
    }
  });
});



document.querySelectorAll(".subject-card .text-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showToast(currentLanguage === "ur"
      ? "اس مضمون کے اسباق اگلے مرحلے میں شامل ہوں گے۔"
      : "Subject lessons will be added in a later phase.");
  });
});

document.querySelectorAll('a[href="#account"], .login-button').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    document.getElementById("account").scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    showToast(currentLanguage === "ur"
      ? "اکاؤنٹ اگلے مرحلے میں فعال ہوگا۔"
      : "Accounts will be connected in a later phase.");
  });
});

changeLanguage("en");

/* =====================================
   FLASHCARDS
===================================== */

const learningFlashcards = [
  {
    question: "What is a variable in programming?",
    answer: "A named place used to store a value or data."
  },
  {
    question: "What does CPU stand for?",
    answer: "Central Processing Unit."
  },
  {
    question: "What is an IP address?",
    answer: "A numerical address used to identify a device on a network."
  },
  {
    question: "What is cybersecurity?",
    answer: "The practice of protecting systems, networks and data from digital threats."
  },
  {
    question: "What is HTML used for?",
    answer: "HTML structures the content of web pages."
  },
  {
    question: "What is a fraction?",
    answer: "A number representing part of a whole, such as 1/2."
  }
];

let flashcardIndex = 0;
let flashcardRevealed = false;

function openFlashcards() {
  flashcardIndex = 0;
  flashcardRevealed = false;

  createModal("Flashcards", `
    <p class="tool-help">Read the question, then reveal the answer.</p>
    <div class="flashcard-box" id="flashcardBox" role="button"
      tabindex="0" aria-label="Reveal flashcard answer">
      <span class="flashcard-label" id="flashcardLabel">QUESTION</span>
      <h3 id="flashcardQuestion"></h3>
      <p id="flashcardAnswer" hidden></p>
      <span class="flashcard-hint" id="flashcardHint">Click to reveal answer</span>
    </div>
    <p class="flashcard-count" id="flashcardCount"></p>
    <div class="timer-controls">
      <button class="tool-action secondary-action" id="flashcardPrev">← Previous</button>
      <button class="tool-action" id="flashcardReveal">Reveal Answer</button>
      <button class="tool-action secondary-action" id="flashcardNext">Next →</button>
    </div>
  `);

  function renderFlashcard() {
    const card = learningFlashcards[flashcardIndex];

    document.getElementById("flashcardQuestion").textContent = card.question;
    document.getElementById("flashcardAnswer").textContent = card.answer;
    document.getElementById("flashcardAnswer").hidden = !flashcardRevealed;
    document.getElementById("flashcardLabel").textContent =
      flashcardRevealed ? "ANSWER" : "QUESTION";
    document.getElementById("flashcardHint").textContent =
      flashcardRevealed ? "Answer revealed!" : "Click to reveal answer";
    document.getElementById("flashcardCount").textContent =
      `Card ${flashcardIndex + 1} of ${learningFlashcards.length}`;
    document.getElementById("flashcardReveal").textContent =
      flashcardRevealed ? "Hide Answer" : "Reveal Answer";
  }

  function revealFlashcard() {
    flashcardRevealed = !flashcardRevealed;
    renderFlashcard();
  }

  document.getElementById("flashcardReveal")
    .addEventListener("click", revealFlashcard);

  document.getElementById("flashcardBox")
    .addEventListener("click", revealFlashcard);

  document.getElementById("flashcardBox")
    .addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        revealFlashcard();
      }
    });

  document.getElementById("flashcardPrev").addEventListener("click", () => {
    flashcardIndex =
      (flashcardIndex - 1 + learningFlashcards.length) %
      learningFlashcards.length;
    flashcardRevealed = false;
    renderFlashcard();
  });

  document.getElementById("flashcardNext").addEventListener("click", () => {
    flashcardIndex = (flashcardIndex + 1) % learningFlashcards.length;
    flashcardRevealed = false;
    renderFlashcard();
  });

  renderFlashcard();
}


/* =====================================
   MCQ QUIZ
===================================== */

const learningQuestions = [
  {
    question: "Which language is mainly used to structure web pages?",
    options: ["HTML", "Python", "SQL", "C++"],
    answer: 0,
    explanation: "HTML provides the structure and content of web pages."
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Computer Personal Unit",
      "Central Processing Unit",
      "Control Program Utility",
      "Central Power User"
    ],
    answer: 1,
    explanation: "CPU stands for Central Processing Unit."
  },
  {
    question: "Which device connects different networks?",
    options: ["Keyboard", "Monitor", "Router", "Mouse"],
    answer: 2,
    explanation: "A router forwards data between networks."
  },
  {
    question: "Which is a strong security practice?",
    options: [
      "Sharing passwords",
      "Reusing one password everywhere",
      "Ignoring updates",
      "Using unique passwords"
    ],
    answer: 3,
    explanation: "Unique passwords help reduce the risk from a compromised account."
  },
  {
    question: "What is 12 × 8?",
    options: ["84", "96", "108", "88"],
    answer: 1,
    explanation: "12 multiplied by 8 equals 96."
  },
  {
    question: "Which word is a noun?",
    options: ["Quickly", "Beautiful", "Teacher", "Run"],
    answer: 2,
    explanation: "Teacher is a noun because it names a person or role."
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1,
    explanation: "Mars is commonly called the Red Planet."
  }
];

let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function openQuiz() {
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  createModal("MCQ Quiz", `
    <div class="quiz-topline">
      <span id="quizProgress">Question 1 of ${learningQuestions.length}</span>
      <span id="quizScore">Score: 0</span>
    </div>
    <div class="quiz-track"><div id="quizProgressFill"></div></div>
    <h3 class="quiz-question" id="quizQuestion"></h3>
    <div id="quizOptions" class="quiz-options"></div>
    <p class="tool-result" id="quizFeedback" aria-live="polite">
      Choose the best answer.
    </p>
    <button class="tool-action" id="quizNext" disabled>Next Question →</button>
  `);

  function renderQuestion() {
    const item = learningQuestions[quizIndex];
    quizAnswered = false;

    document.getElementById("quizProgress").textContent =
      `Question ${quizIndex + 1} of ${learningQuestions.length}`;

    document.getElementById("quizScore").textContent = `Score: ${quizScore}`;

    document.getElementById("quizProgressFill").style.width =
      `${(quizIndex / learningQuestions.length) * 100}%`;

    document.getElementById("quizQuestion").textContent = item.question;
    document.getElementById("quizFeedback").textContent =
      "Choose the best answer.";
    document.getElementById("quizNext").disabled = true;
    document.getElementById("quizNext").textContent =
      quizIndex === learningQuestions.length - 1
        ? "See Results"
        : "Next Question →";

    const optionsContainer = document.getElementById("quizOptions");
    optionsContainer.replaceChildren();

    item.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

      button.addEventListener("click", () => {
        if (quizAnswered) return;
        quizAnswered = true;

        const buttons = optionsContainer.querySelectorAll("button");
        buttons.forEach((b, i) => {
          b.disabled = true;
          if (i === item.answer) b.classList.add("correct");
          if (i === index && index !== item.answer) {
            b.classList.add("incorrect");
          }
        });

        if (index === item.answer) {
          quizScore++;
          document.getElementById("quizFeedback").textContent =
            `Correct! ${item.explanation}`;
        } else {
          document.getElementById("quizFeedback").textContent =
            `Not quite. ${item.explanation}`;
        }

        document.getElementById("quizScore").textContent =
          `Score: ${quizScore}`;

        document.getElementById("quizNext").disabled = false;
      });

      optionsContainer.appendChild(button);
    });
  }

  document.getElementById("quizNext").addEventListener("click", () => {
    if (!quizAnswered) return;

    if (quizIndex < learningQuestions.length - 1) {
      quizIndex++;
      renderQuestion();
    } else {
      showQuizResults();
    }
  });

  function showQuizResults() {
    const percentage = Math.round(
      (quizScore / learningQuestions.length) * 100
    );

    document.getElementById("quizProgress").textContent = "Quiz completed";
    document.getElementById("quizScore").textContent = `Score: ${quizScore}`;
    document.getElementById("quizProgressFill").style.width = "100%";
    document.getElementById("quizQuestion").textContent =
      percentage >= 70 ? "Great work! 🎉" : "Keep practising! 🌱";

    document.getElementById("quizOptions").replaceChildren();

    document.getElementById("quizFeedback").textContent =
      `You scored ${quizScore} out of ${learningQuestions.length} (${percentage}%).`;

    const nextButton = document.getElementById("quizNext");
    nextButton.disabled = false;
    nextButton.textContent = "Try Again";

    nextButton.onclick = () => openQuiz();
  }

  renderQuestion();
}

console.log("Leran the skills is ready!");

/* =====================================
   STUDY NOTES
===================================== */

const notesStorageKey = "leranSkillsStudyNotes";

function getSavedNotes() {
  try {
    return JSON.parse(localStorage.getItem(notesStorageKey) || "[]");
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(notesStorageKey, JSON.stringify(notes));
}

function openStudyNotes() {
  createModal("My Study Notes", `
    <label for="noteTitle">Note title</label>
    <input id="noteTitle" class="tool-input" maxlength="100"
      placeholder="Example: Introduction to Networking">

    <label for="noteBody">Your notes</label>
    <textarea id="noteBody" class="tool-input" rows="5"
      placeholder="Write what you learned today..."></textarea>

    <button class="tool-action" id="saveNoteButton">Save Note</button>
    <p class="tool-result" id="notesMessage" aria-live="polite"></p>

    <h3 class="notes-heading">Saved Notes</h3>
    <div id="savedNotesList"></div>
  `);

  let editingId = null;

  function renderNotes() {
    const list = document.getElementById("savedNotesList");
    const notes = getSavedNotes();
    list.replaceChildren();

    if (!notes.length) {
      list.textContent = "No notes yet. Create your first note above.";
      return;
    }

    notes.forEach(note => {
      const item = document.createElement("div");
      item.className = "saved-note";

      const title = document.createElement("h4");
      title.textContent = note.title;

      const body = document.createElement("p");
      body.textContent = note.body;

      const editButton = document.createElement("button");
      editButton.className = "tool-action secondary-action";
      editButton.textContent = "Edit";

      editButton.addEventListener("click", () => {
        editingId = note.id;
        document.getElementById("noteTitle").value = note.title;
        document.getElementById("noteBody").value = note.body;
        document.getElementById("saveNoteButton").textContent = "Update Note";
        document.getElementById("noteTitle").focus();
      });

      const deleteButton = document.createElement("button");
      deleteButton.className = "tool-action delete-note";
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", () => {
        const updated = getSavedNotes().filter(n => n.id !== note.id);
        saveNotes(updated);

        if (editingId === note.id) editingId = null;

        renderNotes();
        document.getElementById("notesMessage").textContent = "Note deleted.";
      });

      const actions = document.createElement("div");
      actions.className = "note-actions";
      actions.append(editButton, deleteButton);

      item.append(title, body, actions);
      list.appendChild(item);
    });
  }

  document.getElementById("saveNoteButton").addEventListener("click", () => {
    const title = document.getElementById("noteTitle").value.trim();
    const body = document.getElementById("noteBody").value.trim();
    const message = document.getElementById("notesMessage");

    if (!title || !body) {
      message.textContent = "Please enter both a title and your notes.";
      return;
    }

    const notes = getSavedNotes();

    if (editingId !== null) {
      const index = notes.findIndex(n => n.id === editingId);

      if (index !== -1) {
        notes[index] = { ...notes[index], title, body };
      }
    } else {
      notes.unshift({
        id: Date.now().toString(),
        title,
        body,
        createdAt: new Date().toISOString()
      });
    }

    saveNotes(notes);

    editingId = null;
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteBody").value = "";
    document.getElementById("saveNoteButton").textContent = "Save Note";

    message.textContent = "Your note has been saved!";
    renderNotes();
  });

  renderNotes();
}


/* =====================================
   TOPIC COMPLETION & PROGRESS
===================================== */

const topicsStorageKey = "leranSkillsCompletedTopics";

const learningTopics = [
  { subject: "Programming", topic: "Programming Fundamentals" },
  { subject: "Programming", topic: "Variables and Data Types" },
  { subject: "Programming", topic: "Conditions and Loops" },
  { subject: "Networking", topic: "Networking Basics" },
  { subject: "Networking", topic: "IP Addresses" },
  { subject: "Networking", topic: "Routers and Switches" },
  { subject: "Cybersecurity", topic: "Cybersecurity Basics" },
  { subject: "Cybersecurity", topic: "Passwords and Authentication" },
  { subject: "Mathematics", topic: "Fractions and Percentages" },
  { subject: "English", topic: "Grammar Fundamentals" },
  { subject: "General Knowledge", topic: "Science and the World" }
];

function getCompletedTopics() {
  try {
    return JSON.parse(localStorage.getItem(topicsStorageKey) || "[]");
  } catch {
    return [];
  }
}

function openProgressTracker() {
  createModal("My Learning Progress", `
    <p class="tool-help">
      Tick a topic when you have studied and understood it.
    </p>
    <div class="progress-summary">
      <strong id="completedTopicCount">0 / ${learningTopics.length}</strong>
      <span>Topics completed</span>
      <div class="progress-track">
        <div id="topicProgressFill"></div>
      </div>
      <strong id="topicProgressPercent">0%</strong>
    </div>
    <div id="topicChecklist"></div>
    <button class="tool-action secondary-action" id="resetTopicsButton">
      Reset topic progress
    </button>
    <p class="tool-help">
      This progress is saved only in this browser for now.
    </p>
  `);

  function renderTopics() {
    const completed = getCompletedTopics();
    const list = document.getElementById("topicChecklist");
    list.replaceChildren();

    learningTopics.forEach((item, index) => {
      const row = document.createElement("label");
      row.className = "topic-row";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = completed.includes(index);

      const text = document.createElement("span");
      text.innerHTML = "";

      const subject = document.createElement("small");
      subject.textContent = item.subject;

      const name = document.createElement("span");
      name.textContent = item.topic;

      const description = document.createElement("span");
      description.className = "topic-text";
      description.append(subject, name);

      checkbox.addEventListener("change", () => {
        const current = getCompletedTopics();
        const updated = checkbox.checked
          ? [...new Set([...current, index])]
          : current.filter(id => id !== index);

        localStorage.setItem(topicsStorageKey, JSON.stringify(updated));
        renderTopics();
      });

      row.append(checkbox, description);
      list.appendChild(row);
    });

    const count = completed.length;
    const percent = Math.round((count / learningTopics.length) * 100);

    document.getElementById("completedTopicCount").textContent =
      `${count} / ${learningTopics.length}`;

    document.getElementById("topicProgressPercent").textContent =
      `${percent}%`;

    document.getElementById("topicProgressFill").style.width =
      `${percent}%`;
  }

  document.getElementById("resetTopicsButton").addEventListener("click", () => {
    localStorage.removeItem(topicsStorageKey);
    renderTopics();
  });

  renderTopics();
}
function openSubject(subject) {
    alert("You selected: " + subject);
}