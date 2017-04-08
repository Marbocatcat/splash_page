import React from 'react';

export default class ValueHeading extends React.Component {
  render() {
    return (
      <h5 className="value-heading">
        {this.props.value}
      </h5>
    )
  }
}
