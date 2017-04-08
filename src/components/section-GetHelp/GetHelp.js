import React from 'react';
import GetButton from './GetButton';

export default class extends React.Component {
  render() {
    return (
      <div>
        <h3 className="section-heading">
          Need help getting started?
        </h3>
        <p className="section-description">
          Skeleton is an amazingly easy place to start to start with responsive development. If you want to learn more just visit the documentation.
        </p>
        <GetButton invite='Check Skeleton Docs'/>
      </div>
    )
  }
}
