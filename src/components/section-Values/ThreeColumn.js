import React from 'react';
import ValueMultiplier from './ValueMultiplier';
import ValueHeading from './ValueHeading';
import ValueDescription from './ValueDescription';

export default class ThreeColumn extends React.Component {
  render() {
    const multiplier="66%";
    const value="Sad Users";
    const description="Percentage of users more likely to purchase mobile friendsly sites.";
    
    return (
      <div className="one-third column value">
        <ValueMultiplier multiplier={multiplier} />
        <ValueHeading value={value} />
        <ValueDescription description={description} />
      </div>
    )
  }
}
