import React from 'react';
import PropTypes from 'prop-types';

const TeslaStats = ({ carstats }) => {
  const listItems = carstats.map((stat, index) => (
    <li key={index.toString()}>
      <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
      <p>{stat.miles}</p>
    </li>
  ))
  return (
    <div className="tesla-stats">
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

TeslaStats.propTypes = {
  carstats: PropTypes.array
}

export default TeslaStats;