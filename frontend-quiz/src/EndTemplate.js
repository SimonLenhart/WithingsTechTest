import React from "react";

/**
 * End template which gets shown when the user finished the game
 * @returns Returns the template
 */
export default function EndTemplate(props) {
  /**
   * If the user pushed the "Play Again" button, reset the game
   */
  const playAgain = () => {
    props.playAgain(true);
  };
  return (
    <div class="endTemplate">
      <h3>You ended the quiz!</h3>
      <p>Your final score is {props.score}.</p>
      <p>Feel free to play the quiz again.</p>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
}
