import React, { useState } from 'react';
import bgImg from '../assets/bg8.webp'
import bgImg1 from '../assets/Chinese-SMS-scam.jpg'


function Faqs() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      question: "What is phishing?",
      options: ["A type of fishing", "A cyber attack", "A cooking method", "A sport"],
      answer: "A cyber attack"
    },
    {
      question: "How can you recognize a phishing email?",
      options: ["Unknown sender", "Suspicious links", "Unsolicited attachments", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is a phishing attack typically used to steal?",
      options: ["Personal information", "Fishing equipment", "Cooking recipes", "Sports gear"],
      answer: "Personal information"
    },
    {
      question: "Which of the following is a common sign of a phishing email?",
      options: ["Contains spelling errors", "Is sent from a trusted friend", "Offers free concert tickets", "Includes a company logo"],
      answer: "Contains spelling errors"
    },
    {
      question: "How can you protect yourself from phishing attacks?",
      options: ["Click on all links in emails", "Ignore security updates", "Verify the sender's email address", "Share your password openly"],
      answer: "Verify the sender's email address"
    },
    {
      question: "What should you do if you suspect a phishing attack?",
      options: ["Reply to the email", "Delete the email immediately", "Forward it to friends", "Ignore it and continue browsing"],
      answer: "Delete the email immediately"
    },
    {
      question: "Which of these is a type of phishing that targets specific individuals?",
      options: ["General phishing", "Spear phishing", "Whale phishing", "Catfishing"],
      answer: "Spear phishing"
    }
  ];

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    
    <div style={{backgroundImage:`url(${bgImg})`}} className="Phishing Guide Faqs z-10 min-h-screen flex flex-col items-center p-4">
      <div id="home" className="w-full max-w-4xl mt-6 p-6 bg-white rounded shadow-md">
        <Hero />
      </div>
      <div id="roadmap" className="w-full max-w-4xl mt-6 p-6 bg-white rounded shadow-md">
        <PhishingRoadmap />
      </div>
      <div id="quiz" className=" w-full max-w-4xl mt-6 p-6 bg-white rounded shadow-md">
        <Quiz
          questions={questions}
          score={score}
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}

        />
      </div>
      
    </div>
    
  );
}

function Hero() {
  return (
    <div className="hero-section text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Phishing Awareness</h1>
      <h2 className="text-2xl font-bold mb-4">What is Phishing?</h2>
      <p className="text-gray-700">Phishing is a cybercrime where attackers pose as legitimate institutions to trick you into
revealing sensitive information. This can include your passwords, credit card numbers, or
other personal data. These attacks often come in the form of fake emails, texts, or websites
that seem genuine but are designed to steal your information</p>
      <img className="mx-auto mt-6 w-20" src="src\assets\Scam.jpg" alt="Hero" />
    </div>
  );
}

function PhishingRoadmap() {
  return (
    <>
    <div className="phishing-roadmap">
      <h2 className="text-3xl font-semibold mb-4">How Common Users Get Attacked Using Phishing</h2>
      <div className="step mb-6">
        <h3 className="text-2xl font-bold mb-2">Step 1: Baiting</h3>
        <p className="text-gray-700 mb-4">Phishers send an email or message with a tempting offer or alarming notice to get users to click on a link or download an attachment.</p>
        <img className="w-60 mx-auto mb-4" src="src\assets\bait.gif" alt="Baiting" />
      </div>
      <div className="step mb-6">
        <h3 className="text-2xl font-bold mb-2">Step 2: Hooking</h3>
        <p className="text-gray-700 mb-4">Once the user clicks the link, they are directed to a fake website that looks legitimate. Here, they are prompted to enter sensitive information.</p>
        <img className="w-60 mb-4 mx-auto" src="src\assets\hook.png" alt="Hooking" />
      </div>
      <div className="step mb-6">
        <h3 className="text-2xl font-bold mb-2">Step 3: Harvesting</h3>
        <p className="text-gray-700 mb-4">The information entered by the user is captured by the phisher, who now has access to the user's sensitive data.</p>
        <img className="w-60 mb-4 mx-auto" src="src\assets\harvest.webp" alt="Harvesting" />
      </div>
      <div className="step mb-6">
        <h3 className="text-2xl font-bold mb-2">Step 4: Exploitation</h3>
        <p className="text-gray-700 mb-4">The phisher uses the harvested information to commit fraud, steal money, or perform identity theft.</p>
        <img className="w-60 mb-4 mx-auto" src="src\assets\explot.webp" alt="Exploitation" />
      </div>
    </div>
    <div className="phishing-roadmap border-t-8 border-black  pt-10">
      <h2 className="text-3xl font-semibold mb-4">How to Protect from Phishing
      </h2>
      <div className="step mb-6">
        <h3 className="text-2xl font-bold mb-2">1. Check the Sender's Email Address</h3>
        <p className="text-gray-700 mb-4">Phishing emails often come from addresses
that are similar to, but not exactly the same as, legitimate ones. Look for minor
misspellings or extra characters</p>
        {/* <img className="w-60 mx-auto mb-4" src="src\assets\ch.webp" alt="Baiting" /> */}
      </div>
      <div className="step mb-6">
        <h3 className="text-2xl font-bold mb-2">2. Use SmartGuard to identify Phishing Links</h3>
        <p className="text-gray-700 mb-4">Whenever you come across a
suspicious link, use SmartGuard to check whether the website is
safe or not.
</p>
        {/* <img className="w-60 mb-4 mx-auto" src="src\assets\ph.jpg" alt="Hooking" /> */}
      </div>
      <div className="step mb-6">
        <h3 className="text-2xl font-bold mb-2">3. Install SmartGuard Extension to get on-the-go Phishing Detection:</h3>
        <p className="text-gray-700 mb-4">Install the
SmartGuard extension to automatically detect and block phishing attempts. Our
advanced algorithms can identify even the most sophisticated phishing schemes</p>
        {/* <img className="w-60 mb-4 mx-auto" src="src\assets\" alt="Harvesting" /> */}
      </div>
      <div className="step mb-6">
        <h3 className="text-2xl font-bold mb-2">4. Be Wary of Urgent or Threatening Language</h3>
        <p className="text-gray-700 mb-4">Phishers often try to create a sense
of urgency to trick you into acting without thinking. Be skeptical of messages that
claim you must act immediately.
</p>
        {/* <img className="w-60 mb-4 mx-auto" src="src\assets\explot.webp" alt="Exploitation" /> */}
      </div>
      <div className="step mb-6">
        <h3 className="text-2xl font-bold mb-2">5. Watch for Typos and Poor Grammar:</h3>
        <p className="text-gray-700 mb-4">Professional companies rarely send out
communications with spelling or grammatical errors. These mistakes are often signs
of a phishing attempt.

</p>
        {/* <img className="w-60 mb-4 mx-auto" src="src\assets\explot.webp" alt="Exploitation" /> */}
      </div>
    </div>
    </>
  );
}

function Quiz({ questions, score, currentQuestion, handleAnswer }) {
  return (
    <div className="quiz-section">
      <h2 className="text-3xl font-semibold mb-4">Quiz</h2>
      {currentQuestion < questions.length ? (
        <div>
          <p className="text-gray-700">{questions[currentQuestion].question}</p>
          <div className="mt-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="bg-blue-600 text-white px-4 py-2 m-2 rounded hover:bg-blue-700"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-gray-700">Quiz complete! Your score is {score} out of {questions.length}.</p>
        </div>
      )}
      
    </div>
  );
}

export default Faqs;
