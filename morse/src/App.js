import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }
  render() {
    this.handleChange = (e) => {
      console.log(e.target.value);
      this.setState({ userInput: e.target.value.trim() });
      //console.log(this.state.userInput);
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
      </div>
    );
  }
}
