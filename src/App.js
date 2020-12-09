import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊 ": "Smiling",
  "😲": "disbelief",
  "😨": "Fearful",
  "😵": "Dizzy",
  "🤖": "Robot",
  "😳": "Flushed",
  "🎄": " Christmas Tree",
  "❤️": " Read Heart or Love",
  "🥺": " Pleading Face",
  "✨": " Sparkles",
  "🔥": " Lit!",
  "🍇": " Grapes",
  "😂 ": " Face with Tears Of Joy",
  "🙂": " Slightly smiling with joy",
  "🙃": " Upside Down Face",
  "😋": " Yummy",
  "😜": " Oops!",
  "🤫": " Shushing face",
  "🤨": " HUH? OR HMM?",
  "😑": " ExpressionLESS",
  "😬": "  Grimming Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "🤕": "Injured",
  "🤢": " Nauseated Face",
  "🤮 ": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🤯": "Exploding Head OR Surprised",
  "🥳": "Party Time",
  "🧐": "Face With Monacle",
  "😧": "Anguished Face",
  "😢": "Crying Face",
  "😭": "Ludly Crying Face"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our  Data Base";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "lightblue" }}>Emoji Interpretor</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3 style={{ color: "lightblue" }}>Emojis we know:</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
