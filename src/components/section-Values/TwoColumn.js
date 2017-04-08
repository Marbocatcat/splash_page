import React from 'react';
import ValueMultiplier from './ValueMultiplier';
import ValueHeading from './ValueHeading';
import ValueDescription from './ValueDescription';

export default class TwoColumn extends React.Component {
  render() {
    const multiplier='90%';
    const value='Multi-Device Users';
    const description="Most of the world accesses the internet on multiple devices.";

    return (
      <div className="one-third column value">
        <ValueMultiplier multiplier={multiplier}/>
        <ValueHeading value={value} />
        <ValueDescription description={description}/>
      </div>
    )
  }
}
