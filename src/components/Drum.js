import React, { useEffect, useCallback } from "react";

function Drum(props) {
  const play = useCallback(() => {
    const audio = new Audio(props.sound);
    audio.currentTime = 0; // Reinicia la reproducción al principio
    audio.play();
  }, [props.sound]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toUpperCase() === props.letter) {
        play();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [props.letter, play]);

  return (
    <div className="drum" onClick={play}>
      <div className="key">{props.letter}</div>
    </div>
  );
}

export default Drum;
