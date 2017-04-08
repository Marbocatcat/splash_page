import React from 'react';

export default class ValueDescription extends React.Component {
  render() {
    return (
      <p className="value-description">
        {this.props.description}
      </p>
    )
  }
}
