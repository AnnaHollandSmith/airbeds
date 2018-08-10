import React, { Component } from 'react';
import { ReactiveBase, DateRange } from '@appbaseio/reactivesearch'

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="housing-app"
          credentials="yLrb4YX5O:2de3f9c2-5586-434f-9a62-880139bffa79"
          type="listing"
        >
          Hello from ReactiveSearch!
        </ReactiveBase>
      </section>
    );
  }
}
export default App;

export default App;
