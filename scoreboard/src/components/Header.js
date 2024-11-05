import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
      <span className="stats">Score: {props.totalScore}</span>
    </header>
  );
}

export default Header;
