import React from 'react';
import OneColumn from './OneColumn';
import TwoColumn from './TwoColumn';
import ThreeColumn from './ThreeColumn';

export default class RootValues extends React.Component {
  render() {
    return (
      <div className="section values">
        <div className="container">
          <div className="row">
            <OneColumn />
            <TwoColumn />
            <ThreeColumn />
          </div>
        </div>
      </div>
    )
  }
}
