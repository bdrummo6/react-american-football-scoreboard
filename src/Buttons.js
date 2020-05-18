// Stretch added Buttons component file
import React from 'react';

// Stretch: Created change quarter buttons
const Buttons = (props) => {
   const btnContainerStyles = { // Style for different button sections
     width: '95%',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'space-between',
   };
   const btnStyles = { // Sets styles for the quarter buttons so they are like the other buttons
      width: '90%',
      margin: '4%',
      borderRadius: '2px',
      textAlign: 'center'
   };
   return (
      <div className='container'>
         {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
         <section className='buttons'>
            <div className='awayButtons' style={btnContainerStyles}>
               <button onClick={() => {props.setAwayScore(props.awayScore + 7);}} className='awayButtons__touchdown' style={btnStyles}>Away Touchdown</button>
               <button onClick={() => {props.setAwayScore(props.awayScore + 3);}} className='awayButtons__fieldGoal' style={btnStyles}>Away Field Goal</button>
               <button onClick={() => {props.setAwayScore(props.awayScore - props.awayScore);}} className='awayButtons__resetScore' style={btnStyles}>Reset Score</button>
            </div>

            <div className='quarterButtons' style={btnContainerStyles}>
               <button onClick={() => {
                  if(props.quarter < 4) {
                  props.setQuarter(props.quarter + 1);
                  } else {
                  props.setQuarter(4);
                  }}} className='quarterButtons__increase' style={btnStyles}>
                  Quarter +
               </button>

               <button onClick={() => {
                  if (props.quarter > 1) {
                     props.setQuarter(props.quarter - 1);
                  } else {
                     props.setQuarter(1);
                  }
                  }} className='quarterButtons__decrease' style={btnStyles}>
                  Quarter -
               </button>
            </div>

            <div className='downButtons' style={btnContainerStyles}>
               <button onClick={() => {
                  if(props.down < 4) {
                     props.setDown(props.down + 1);
                  } else {
                     props.setDown(4);
                  }}} className='downButtons__increase' style={btnStyles}>
                  Down +
               </button>

               <button onClick={() => {
                  if (props.down > 1) {
                     props.setDown(props.down - 1);
                  } else {
                     props.setDown(1);
                  }
               }} className='downButtons__decrease' style={btnStyles}>
                  Down -
               </button>
            </div>

            <div className='homeButtons' style={btnContainerStyles}>
               <button onClick={() => {props.setHomeScore(props.homeScore + 7);}} className='homeButtons__touchdown' style={btnStyles}>Home Touchdown</button>
               <button onClick={() => {props.setHomeScore(props.homeScore + 3);}} className='homeButtons__fieldGoal' style={btnStyles}>Home Field Goal</button>
               <button onClick={() => {props.setHomeScore(props.homeScore - props.homeScore );}} className='homeButtons__resetScore' style={btnStyles}>Reset Score</button>
            </div>
         </section>
      </div>
   );
};

export default Buttons;
