//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [awayScore, setAwayScore] = useState(0); // Sets the initial state (score) to 0
  const [homeScore, setHomeScore] = useState(0); // Sets the initial state (score) to 0
  // Stretch: set the initialState of the other items in the app
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  
  const [clock] = useState('15:00');

  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(20);
  
  document.title = 'React Football Scoreboard';

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="away">
            <h2 className="away__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="away__score">{awayScore}</div>
          </div>
          <div className="timer">{clock}</div>
          <div className="home">
            <h2 className="home__name">Tigers</h2>
            <div className="home__score">{homeScore}</div>
          </div>
        </div>
        <BottomRow
           // Allows the values in BottomRow.js to be modified
           down={down}
           setDown={setDown}
           quarter={quarter}
           setQuarter={setQuarter}
           toGo={toGo}
           setToGo={setToGo}
           ballOn={ballOn}
           setBallOn={setBallOn}
        />
      </section>

      <Buttons
        awayScore={awayScore}
        setAwayScore={setAwayScore}
        quarter={quarter}
        setQuarter={setQuarter}
        down={down}
        setDown={setDown}
        homeScore={homeScore}
        setHomeScore={setHomeScore}
      />
    </div>
  );
}

export default App;
