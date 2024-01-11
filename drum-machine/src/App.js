import { useState } from "react";
import Drum from "./components/Drum";

function App() {
  const [sounds] = useState([
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
  ]);

  return (
    <div className="App">
      <h1>React drumkit</h1>
      <div className="drums">
        {sounds.map((sound) => (
          <Drum letter={sound.key} sound={sound.sound} />
        ))}
      </div>
    </div>
  );
}

export default App;
