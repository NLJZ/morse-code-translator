import React from "react";
import Data from "./data.json";
console.log(Data);

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
      this.translate(e.target.value);
    };

    this.translate = (totranslate) => {
      let textArray = totranslate.split("");
      let translation = "";
      textArray.map((element) => {
        let newThing = Data.find((e) => e.char === element);
        translation += newThing.morse + " ";
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
