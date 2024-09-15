import { classicAnswers, alternativeAnswers } from "./assets/answers";
import "./App.css";
import { useState } from "react";

export default function MagicBallGame() {
  const [answerStyle, setAnswerStyle] = useState("classic");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleMagicEight() {
    const randomNumber = Math.floor(Math.random() * 20);
    if (question.trim()) {
      answerStyle === "classic"
        ? setAnswer(classicAnswers[randomNumber])
        : setAnswer(alternativeAnswers[randomNumber]);
    } else {
      setAnswer("Type a question first!");
    }
  }

  function resetEightBall() {
    setQuestion("");
    setAnswer("");
  }

  return (
    <div id="magic-ball-game">
      <div
        id="app-box"
        style={{
          background:
            answerStyle === "classic"
              ? "linear-gradient(rgb(168, 241, 172), rgb(43, 65, 190))"
              : "linear-gradient(rgb(176, 238, 238), rgb(121, 88, 173))",
        }}
      >
          <h1>Magic Eight Ball</h1>
        <div>
          <select id="answer-style" name="answer-style" onChange={(e) => setAnswerStyle(e.target.value)}>
            <option value="classic">Classic</option>
            <option value="alternative">Alternative</option>
          </select>
          <br />
          <br />
          <input
            type="text"
            id="user-question"
            placeholder="Type your existential question"
            onChange={(e) => setQuestion(e.target.value)} 
            value={question} 
          />
          <br />
          <br />
          <button onClick={handleMagicEight}>Shake</button>
          <button onClick={resetEightBall}>Reset</button>
          <div
            id="magic-ball"
            style={{
              backgroundImage:
                answerStyle === "classic"
                  ? "url('images/eight-ball.webp')"
                  : "url('images/crystal-ball.png')",
            }}
          >
            <div
              id="magic-ball-message"
              style={{ width: answerStyle === "classic" ? "200px" : "300px" }}
            >
              <p>{answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
