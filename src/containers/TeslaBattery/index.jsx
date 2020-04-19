import React, { Component } from 'react';
import { getModelData } from '../../services/';
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

  calculateStats = (models, value) => {
    const dataModels = getModelData();
    return models.map(model => {
      const { speed, temperature, climate, wheels } = value;
      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
      return {
        model, 
        miles
      };
    });
  }

  statsUpdate = () => {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
    this.setState({
      carstats: this.calculateStats(carModels, this.state.config)
    })
  }

  componentDidMount() {
    this.statsUpdate();
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