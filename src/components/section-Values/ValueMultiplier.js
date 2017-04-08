import React from 'react';

export default class ValueMultiplier extends React.Component {
  render() {
    return (
      <h2 className="value-multiplier">
        {this.props.multiplier}
      </h2>
    )
  }
}
