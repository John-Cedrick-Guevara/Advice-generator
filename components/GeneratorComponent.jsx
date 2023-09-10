import React, { useEffect, useState } from "react";

const GeneratorComponent = () => {
  const [allAdvice, setAllAdvice] = useState([]); //advide container 

  //API fetching
  function randomNumber() {
    fetch(`https://api.adviceslip.com/advice`)
      .then((res) => res.json())
      .then((data) => setAllAdvice(data.slip));
  }

  return (
    <>
      <section>
        <p>advice number #{allAdvice.length === 0 ? "1" : allAdvice.id}</p>

        <h1>{allAdvice.length === 0 ? "Don't be dumb, click the dice button to make me generate advices for you" : allAdvice.advice}</h1>

        <img
          className="devider"
          src="../public/pattern-divider-desktop.svg"
          alt=""
        />

        <div className="dice-container" onClick={randomNumber}>
          <img className="dice" src="../public/icon-dice.svg" alt="as" />
        </div>
      </section>
    </>
  );
};

export default GeneratorComponent;
