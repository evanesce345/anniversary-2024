import { useState } from "react";
import Question from "./Question";
import "./App.css";

function App() {
  const [yesCount, setYesCount] = useState(0);
  const [no, setNo] = useState(false);

  const handleIncreaseYes = () => setYesCount(yesCount + 1);
  const handleSetNo = () => setNo(true);

  const createHearts = () => {
    // heart
    document.addEventListener("mousemove", function (e) {
      const root = document.getElementById("root");
      const heart = document.createElement("span");
      const x = e.offsetX;
      const y = e.offsetY;
      heart.style.left = x + "px";
      heart.style.top = y + "px";

      const size = Math.random() * 80;
      heart.style.width = 20 + size + "px";
      heart.style.height = 20 + size + "px";

      const transformValue = Math.random() * 360;
      heart.style.transform = "rotate(" + transformValue + "deg)";

      root!.appendChild(heart);

      setTimeout(function () {
        heart.remove();
      }, 1000);
    });
  };

  if (no) {
    // Oh...
    setTimeout(
      () => (document.getElementById("1")!.style.display = "none"),
      2000
    );

    // Well then...
    setTimeout(
      () => (document.getElementById("2")!.style.display = "block"),
      2000
    );
    setTimeout(
      () => (document.getElementById("2")!.style.display = "none"),
      4000
    );

    // Happy
    setTimeout(() => {
      document.getElementById("3")!.style.display = "block";
      createHearts();
    }, 4000);
  }

  if (yesCount == 5) {
    // You win
    setTimeout(
      () => (document.getElementById("4")!.style.display = "none"),
      2000
    );

    // Happy
    setTimeout(() => {
      document.getElementById("5")!.style.display = "block";
      createHearts();
    }, 2000);
  }

  if (no) {
    return (
      <>
        <h1 id="1">Oh... I didn't expect you to click no that early</h1>
        <h1 id="2" style={{ display: "none" }}>
          Well then...
        </h1>
        <h1 id="3" style={{ display: "none" }}>
          Happy Anniversary Baby!
        </h1>
      </>
    );
  }

  if (yesCount == 0) {
    return (
      <Question
        question="Do you love me more?"
        yes="Of course"
        no="I don't think so"
        handleIncreaseYes={handleIncreaseYes}
        handleSetNo={handleSetNo}
        large="normal"
        small="normal"
      ></Question>
    );
  }

  if (yesCount == 1) {
    return (
      <Question
        question="Are you sure?"
        yes="100%"
        no="Uh... no?"
        handleIncreaseYes={handleIncreaseYes}
        handleSetNo={handleSetNo}
        large="large"
        small="small"
      ></Question>
    );
  }

  if (yesCount == 2) {
    return (
      <Question
        question="I think you might be lying"
        yes="I'm not dude I swear"
        no="Fine, I'm lying"
        handleIncreaseYes={handleIncreaseYes}
        handleSetNo={handleSetNo}
        large="larger"
        small="smaller"
      ></Question>
    );
  }

  if (yesCount == 3) {
    return (
      <Question
        question="Okay, last chance"
        yes="I love you more"
        no="You love me more"
        handleIncreaseYes={handleIncreaseYes}
        handleSetNo={handleSetNo}
        large="largest"
        small="smallest"
      ></Question>
    );
  }

  if (yesCount == 4) {
    return (
      <Question
        question="Alright alright, seriously, last one"
        yes="Bruh"
        no="You win"
        handleIncreaseYes={handleIncreaseYes}
        handleSetNo={handleSetNo}
        large="largestest"
        small="smallestest"
      ></Question>
    );
  }

  if (yesCount == 5) {
    return (
      <>
        <h1 id="4">Alright fine, you win</h1>
        <h1 id="5" style={{ display: "none" }}>
          Happy Anniversary Baby!
        </h1>
      </>
    );
  }
}

export default App;
