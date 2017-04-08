import React from 'react';
import Categories from './Categories';

export default class Images extends React.Component {
  render() {
    return (
      <div className="row">
        <Categories source='../image/placeholder.png'/>
        <Categories source='../image/placeholder.png'/>
      </div>
    )
  }
}
