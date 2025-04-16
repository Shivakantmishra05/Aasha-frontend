// Hero slideshow logic
const slides = [
  'hero1.jpg',
  'hero2.jpg',
  'hero3.jpg'
];

let currentSlide = 0;
const hero = document.querySelector('.hero-section'); // Ensure the correct class name here

function changeSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  hero.style.backgroundImage = `url('${slides[currentSlide]}')`;
}

setInterval(changeSlide, 5000); // Change slide every 5 seconds

// Chatbot Logic
const chatbot = document.getElementById("chatbot");
const chatLog = document.getElementById("chat-log");

const faqAnswers = {
  "where does the donation go": "Your donation helps provide food and books to people in need across India.",
  "can i donate food directly": "Yes! Please contact us via the Volunteer page to schedule a food drop.",
  "how can i volunteer": "Head over to the 'Be a Volunteer' page and fill out the form!",
  "is my money safe": "Absolutely! We ensure every donation is securely processed and transparently used.",
  "do i get any receipt": "Yes, once your donation is processed, we send you a receipt via email."
};

function toggleChat() {
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

function autoQuestion(question) {
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerText = question;
  chatLog.appendChild(userMsg);

  const lowerText = question.toLowerCase();
  let reply = "Sorry, I didn't get that. Try asking one of the suggested questions.";
  for (let key in faqAnswers) {
    if (lowerText.includes(key)) {
      reply = faqAnswers[key];
      break;
    }
  }

  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.innerText = reply;
  chatLog.appendChild(botMsg);

  chatLog.scrollTop = chatLog.scrollHeight;
}
