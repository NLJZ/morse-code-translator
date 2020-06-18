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
      console.log(textArray);
      textArray.map((element) => {
        let newThing = Data.find((e) => e.char === element.toLowerCase());
        if (newThing === undefined) {
          return newThing === "";
        }
        translation += newThing.morse + " ";
        return true;
      });

      this.setState({
        morse: translation,
      });
    };

    return (
      <div className="App">
        <h1>Morse Code Translator</h1>
        <form>
          <textarea
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            placeholder="type something"
          />
        </form>
        <p>{this.state.morse}</p>
      </div>
    );
  }
}
