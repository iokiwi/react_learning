import React from "react";
import Counter from "./Counter";

const Player = (props) => {

  // const [score, setScore]  = useState(0);

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        {props.name}
      </span>

      <Counter
        score={props.score}
        id={props.id}
        changeScore={props.changeScore}
      />
    </div>
  );
}

export default Player;