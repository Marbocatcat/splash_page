import React from 'react';

export default class GetButton extends React.Component {
  render() {
    return (
      <div>
        <a href="http://getskeleton.com" className="button button-primary">
          {this.props.invite}
        </a>
      </div>
    )
  }
}
