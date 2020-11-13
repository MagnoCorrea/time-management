import React, { Component } from "react";

import TimeCard from "../components/TimeCard"
import json from "../data/hw001.json";
import SiteWrapper from "../pages/SiteWrapper"

class Home extends Component {
  render() {
    return (
      <SiteWrapper>
          {json.data.map((item) =>(
            <TimeCard data={item}></TimeCard>
          )
          )}
      </SiteWrapper>
    );
  }
}
export default Home;