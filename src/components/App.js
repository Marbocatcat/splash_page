import React from 'react';
import RootHero from './section-Hero/RootHero';
import RootValues from './section-Values/RootValues';
import RootHelp from './section-GetHelp/RootHelp';
import RootCategories from './section-Categories/RootCategories';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <RootHero />
        <RootValues />
        <RootHelp />
        <RootCategories />
      </div>
    )
  }
}

;
