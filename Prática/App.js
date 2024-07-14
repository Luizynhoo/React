import React, { Component } from "react";
import Feed from "./components/feed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Luiz", curtidas: 17, comentarios:2},
        { id: 2, username: "Lucas", curtidas: 578, comentarios:32},
        { id: 3, username: "Sophia", curtidas: 413, comentarios:12},
        { id: 3, username: "José", curtidas: 1, comentarios:0},
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              id={item.id}
              username={item.username}
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
