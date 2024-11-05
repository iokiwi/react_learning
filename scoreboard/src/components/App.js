import React from "react";
import Header from "./Header";
import Player from "./Player";

const App = () => {

  const [totalScore, setTotalScore] = React.useState(0)

  const [players, setPlayers] = React.useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(p => {
      if (p.id === id) {
        return {
          name: p.name,
          id: p.id,
          score: p.score + delta < 0 ? 0 : p.score + delta
        }
      }
      return p
    }));
    setTotalScore(players.reduce((sum, player) => { return sum + player.score}, 1))
  }

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.length}
        totalScore={totalScore}
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          id={player.id}
          score={player.score}
          key={player.id.toString()}
          changeScore={handleScoreChange}
          removePlayer={handleRemovePlayer}
        />
      )}
    </div>
  );

}

export default App;
