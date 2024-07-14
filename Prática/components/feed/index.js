import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <div key={this.props.id}>
        <h2>{this.props.username}</h2>
        <a>
            {this.props.curtidas > 1
            ? this.props.curtidas + " curtidas"
            : this.props.curtidas + " curtida"} / {this.props.comentarios > 1 
            ? this.props.comentarios + " comentários" : ""}
        </a>
        <hr />
      </div>
    );
  }
}

export default Feed;
