import React from 'react';

export default class Categories extends React.Component {
  render() {
    return (
      <div className="one-half column category">
        <img src={this.props.source} alt="" className="u-max-full-width"/>
      </div>
    )
  }
}
