import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default function SolarSystem() {
  return (
    <article className="cursor-default text-center mt-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:mx-24" data-testid="solar-system">
      <Title headline="Planetas" className="text-xl font-bold md:col-span-full" />
      {Planets.map(({ name, image }) => (
        <PlanetCard key={ name } planetName={ name } planetImage={ image } />
      ))}
    </article>
  );
}
