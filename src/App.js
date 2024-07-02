import { useEffect, useState } from "react";
import $ from "jquery";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

//audio bank provided by freeCodeCamp
const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",

    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];
// const
const BANKONE = "BANK ONE";
const BANKTWO = "BANK TWO";
const DEFAULT_VOLUME = 0.2;

function App() {
  const [bank, setBank] = useState({ no: BANKONE, bank: bankOne });
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [displayKey, setDisplayKey] = useState("");

  function hanldeChangeBank(e) {
    e.preventDefault();
    setBank((current) =>
      current.no == BANKONE
        ? { no: BANKTWO, bank: bankTwo }
        : { no: BANKONE, bank: bankOne }
    );
  }

  function handlePlayAudio(e) {
    e.preventDefault();
    const targeted = bank.bank.findIndex(
      (item) =>
        item.keyTrigger.toLowerCase() == e.key?.toLowerCase() || // check press
        item.id.toLowerCase() == e.target.id?.toLowerCase() || // check click parent
        item.id.toLowerCase() == e.target.parentNode.id?.toLowerCase() // check click child
    );

    if (targeted !== -1) {
      const selector = `audio#${bank.bank[targeted].keyTrigger}`;
      $(selector)[0].volume = volume;
      $(selector)[0].play();
      setDisplayKey(bank.bank[targeted].id);
    }
  }

  function handleChangeVol(e) {
    setVolume(e.target.value);
  }

  function handleOnPlay(e) {
    // console.log(e.target.parentNode.classList.contains("playing"));
    !e.target.parentNode.classList.contains("playing") &&
      e.target.parentNode.classList.add("playing");
  }
  function handleOnPause(e) {
    e.target.parentNode.classList.contains("playing") &&
      e.target.parentNode.classList.remove("playing");
  }

  useEffect(() => {
    window.addEventListener("keypress", handlePlayAudio);
    return () => {
      window.removeEventListener("keypress", handlePlayAudio);
    };
  }, [displayKey, volume]);

  return (
    <div className="App container">
      <div id="drum-machine" className="container">
        <div className="container container_h" id="drum-machine__label">
          <h3>drum-machine-fcc</h3>
          <FontAwesomeIcon icon={faFreeCodeCamp} />
        </div>
        <div id="display" className="container">
          <p>{displayKey}</p>
        </div>
        <div id="volumn-selector__wrapper" className="container">
          <input
            id="volumn-selector"
            type="range"
            value={volume}
            min={0}
            max={1}
            step={0.01}
            onChange={handleChangeVol}
          />
        </div>
        <div id="bank-selector" className="container">
          <div id="bank-selector__title">Bank</div>
          <div id="bank-selector__label">{bank.no}</div>
          <div id="bank-selector__slider" onClick={hanldeChangeBank}>
            <div
              id="bank-selector__slider__knob"
              className={bank.no == BANKONE ? "left" : "right"}
            ></div>
          </div>
        </div>
        <div className="container container_h drum-pad__wrapper">
          {bank.bank.map((item) => (
            <div
              className="drum-pad container"
              key={`${bank.no}-${item.id}-${item.keyTrigger}`}
              id={item.id}
              onClick={handlePlayAudio}
            >
              <audio
                id={item.keyTrigger}
                src={item.url}
                className="clip"
                preload="auto"
                onPlay={handleOnPlay}
                onPause={handleOnPause}
                // controls
              ></audio>
              <p>{item.keyTrigger}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
