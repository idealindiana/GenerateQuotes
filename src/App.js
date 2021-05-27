import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [
        {
          quote:
            "Be not afraid of growing slowly, be afraid only of standing still.",
          author: "- Chinese"
        },
        {
          quote:
            "It is not enough to be busy... The question is: what are we busy about?",
          author: "- Henry David Thoreau"
        },
        {
          quote: "Be yourself; everyone else is already taken.",
          author: "- Oscar Wilde"
        },
        {
          quote: "The way to get started is to quit talking and begin doing.",
          author: "- Walt Disney"
        },
        {
          quote:
            "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
          author: "- Benjamin Franklin"
        },
        {
          quote: "Whoever is happy will make others happy too.",
          author: "- Anne Frank"
        }
      ]
    };
  }
  nextQuote = () => {
    let newQ = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      quote: this.state.quotes[newQ].quote,
      author: this.state.quotes[newQ].author
    });
    console.log();
  };

  render() {
    return (
      <div className="wrapper">
        <div className="box">
          <h1>{this.state.quote}</h1>
          <h2>{this.state.author}</h2>
        </div>
        <button onClick={this.nextQuote}>Next Quote</button>
      </div>
    );
  }
}
export default App;
