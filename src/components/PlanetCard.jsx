import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <section className="m-4 text-center" data-testid="planet-card">
        <h3 className="text-lg" data-testid="planet-name">{planetName}</h3>
        <img className="bg-gradient-planetCard py-6 mx-auto" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </section>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
