import React from 'react';



export default class Phones extends React.Component {
  render() {
    return(
      <div className="one-half column phones">
        <img className="phone" src={this.props.source} alt=""/>
        <img className="phone" src={this.props.source} alt=""/>
      </div>
    )
  }
}
