import React, { useState } from "react";
import Drum from "./components/Drum";

function App() {
  const [sounds] = useState([
    {
      name: "Snare3",
      sound: require("./sounds/snare3.wav"),
      key: "Q",
    },
    {
      name: "oHat",
      sound: require("./sounds/oHat.wav"),
      key: "W",
    },
    {
      name: "Conga",
      sound: require("./sounds/conga.wav"),
      key: "E",
    },
    {
      name: "Snare",
      sound: require("./sounds/snare.wav"),
      key: "A",
    },
    {
      name: "Snare2",
      sound: require("./sounds/snare2.wav"),
      key: "S",
    },
    {
      name: "Clap2",
      sound: require("./sounds/clap2.wav"),
      key: "D",
    },

    {
      name: "kick",
      sound: require("./sounds/kick.wav"),
      key: "Z",
    },
    {
      name: "Hat",
      sound: require("./sounds/hat.wav"),
      key: "X",
    },
    {
      name: "Clap",
      sound: require("./sounds/clap.wav"),
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
