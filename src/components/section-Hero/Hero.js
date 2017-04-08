import React from 'react';

export default class Hero extends React.Component {
  render() {
    return(
      <h4 className="hero-heading">
        {this.props.hero}
      </h4>
    )
  }
}
