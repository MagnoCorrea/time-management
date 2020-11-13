import React, { Component } from "react";

import TimeCard from "../components/TimeCard"
import json from "../data/hw001.json";

class Home extends Component {
  render() {
    return (
      <div>
          {json.data.map((item) =>(
            <TimeCard data={item}></TimeCard>
          )
          )}
      </div>
    );
  }
}
export default Home;