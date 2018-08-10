import React, { Component } from 'react';
import { ReactiveBase, DateRange, NumberBox } from '@appbaseio/reactivesearch'

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="housing-app"
          credentials="yLrb4YX5O:2de3f9c2-5586-434f-9a62-880139bffa79"
          type="listing"
        >

        <DateRange
          dataField="date_from"
          componentId="DateRangeSensor"
          title="When"
          numberOfMonths={1}
          queryFormat="basic_date" // yyyyMMdd
        />

       <NumberBox
        componentId="GuestSensor"
        dataField="accommodates"
        title="Guests"
        defaultSelected={2}
        data={{
          start: 1,
          end: 16
          }}
        />


          Hello from ReactiveSearch!
        </ReactiveBase>
      </section>
    );
  }
}
export default App;

