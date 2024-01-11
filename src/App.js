import React, { useState } from "react";
import Drum from "./components/Drum";

function App() {
  const [sounds] = useState([
    {
      name: "Crash",
      sound: require("./sounds/crash.wav"),
      key: "Q",
    },
    {
      name: "woo",
      sound: require("./sounds/woo.wav"),
      key: "W",
    },
    {
      name: "Rollout",
      sound: require("./sounds/rollout.wav"),
      key: "E",
    },
    {
      name: "Kick808",
      sound: require("./sounds/kick808.wav"),
      key: "A",
    },
    {
      name: "Snare2",
      sound: require("./sounds/snare2.wav"),
      key: "S",
    },
    {
      name: "hithat",
      sound: require("./sounds/hithat.wav"),
      key: "D",
    },

    {
      name: "Kick",
      sound: require("./sounds/kick.wav"),
      key: "Z",
    },
    {
      name: "Snare",
      sound: require("./sounds/Snare.wav"),
      key: "X",
    },
    {
      name: "hat",
      sound: require("./sounds/hat.wav"),
      key: "C",
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <h1>Drumkit</h1>
        <div className="drums">
          {sounds.map((sound, index) => (
            <Drum key={index} letter={sound.key} sound={sound.sound} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
