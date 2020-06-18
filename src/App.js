import React from "react";
import Data from "./data.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      morse: "",
    };
  }
  render() {
    this.handleChange = (e) => {
      this.setState({
        userInput: e.target.value,
      });
      translate(e.target.value);
    };

    const translate = (totranslate) => {
      let textArray = totranslate.split("");
      let translation = "";
      textArray.map((element) => {
        let newThing = Data.find((e) => e.char === element.toLowerCase());
        if (newThing === undefined) {
          return newThing === "";
        }
        translation += newThing.morse;
        return true;
      });

      this.setState({
        morse: translation,
      });
    };

    return (
      <div className="App">
        <h1>Morse Code Translator</h1>

        <textarea
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          placeholder="Type something here..."
        />
        <br />
        <textarea
          type="text"
          value={this.state.morse}
          placeholder="Morse comes out here..."
          readOnly
        />
      </div>
    );
  }
}
