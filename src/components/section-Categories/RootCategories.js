import React from 'react';
import Heading from './Heading';
import Description from './Description';
import Images from './Images'


export default class RootCategories extends React.Component {
  render() {
    return (
      <div className="section categories">
        <div className="container">
          <Heading />
          <Description />
          <Images />
        </div>
      </div>
    )
  }
}
