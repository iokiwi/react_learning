import React, { useRef } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

const App = () => {
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

  const nextPlayerId = useRef(5);

  const handleAddPlayer = (name) => {
    setPlayers(prevPlayers => [
      ...prevPlayers,
      {
        id: nextPlayerId.current,
        name: name,
        score: 0
      }
    ])
    nextPlayerId.current += 1
  }

  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(p => {
      if (p.id === id && p.score + delta >= 0) {
        return {
          name: p.name,
          id: p.id,
          score: p.score + delta
        }
      }
      return p
    }));
  }

  return (
    <div className="scoreboard">
      <Header
        players={players}
      />

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

      <AddPlayerForm
        addPlayer={handleAddPlayer}
      />

    </div>
  );

}

export default App;
