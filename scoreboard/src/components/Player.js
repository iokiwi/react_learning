import React, { memo } from "react";
import Counter from "./Counter";
import PropTypes from 'prop-types';

const Player = (props) => {

  return (
    <div className="player">
      {console.log(props.name + ' rendered')}
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

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number,
  removePlayer: PropTypes.func,
  changeScore: PropTypes.func
}

const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score
}

export default memo(Player, playerPropsAreEqual);
