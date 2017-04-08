import React from 'react';
import ValueMultiplier from './ValueMultiplier';
import ValueHeading from './ValueHeading';
import ValueDescription from './ValueDescription';

export default class OneColumn extends React.Component {
  render() {
    const multiplier="67%";
    const value="Purchase Increase";
    const description="Percentage of users more likely to purchase mobile friendly sites."

    return (
      <div className="one-third column value">
        <ValueMultiplier multiplier={multiplier} />
        <ValueHeading value={value} />
        <ValueDescription description={description}/>
      </div>
    )
  }
}
