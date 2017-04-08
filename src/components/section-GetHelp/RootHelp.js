import React from 'react';
import GetHelp from './GetHelp';

export default class RootHelp extends React.Component {
  render() {
    return (
      <div className="section getHelp ">
        <div className="container">
          <div className="row">
            <GetHelp />
          </div>
        </div>
      </div>
    )
  }
}
