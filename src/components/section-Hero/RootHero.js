import React from 'react';
import Heading from './Heading';
import Phones from './Phones';


export default class RootHero extends React.Component {
  render() {
    const source="../image/iphone.png";
    const greet = "Stop coding non-responsive sites. Let users view sites from anywhere.";
    const invite = "Try Skeleton";
    
    return(
      <div className="section hero">
        <div className="container">
          <div className="row">
              <Heading greet={greet} invite={invite}/>
              <Phones source={source}/>
          </div>
        </div>
      </div>
    )
  }
}
