import React from 'react';
import GetButton from '../section-GetHelp/GetButton';
import Hero from './Hero';


export default class Heading extends React.Component {
  render() {
    return (
      <div className="one-half column">
        <Hero hero={this.props.greet}/>
        <GetButton invite={this.props.invite} />
      </div>
    )
  }
}
