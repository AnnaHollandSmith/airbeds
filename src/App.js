import React, { Component } from 'react';
import { ReactiveBase, DateRange, NumberBox, RangeSlider } from '@appbaseio/reactivesearch'

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

        <RangeSlider
          componentId="PriceSensor"
          dataField="price"
          title="Price Range"
          range={{
            start: 10,
            end: 250
          }}
          rangeLabels={{
            start: "£10",
            end: "£250"
          }}
          defaultSelected={{
            start: 10, 
            end: 50
          }}
          stepValue={10}
          react={{
            and: ["DateRangeSensor"]
          }}
        />


          Hello from ReactiveSearch!
        </ReactiveBase>
      </section>
    );
  }
}
export default App;

