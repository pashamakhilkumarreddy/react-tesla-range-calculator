import React, { Component } from 'react';
import TeslaNotice from '../../components/TeslaNotice';
import TeslaCar from '../../components/TeslaCar';
import TeslaStats from '../../components/TeslaStats';

import './TeslaBattery.css';

export default class TeslaBattery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    }
  }
  render() {
    const { config, carstats } = this.state;
    return (
      <div className="columns is-centered is-mobile">
        <div className="column is-full">
          <h1 className="has-text-centered title">Range Per Charge</h1>
          <TeslaCar wheelsize={config.wheels} />
          <TeslaStats carstats={carstats} />
          <form action="" className="tesla-battery">

          </form>
          <TeslaNotice />
        </div>
      </div>
    )
  }
}