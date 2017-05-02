import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="homeColor">Je suis sur la Home Page.
    <p><Link to="/contact"> Voici un lien vers la page de contact </Link></p>
    <p><Link to="/contact/Flo"> Voici un lien vers la page de contact de Flo</Link></p>
    <p><Link to="/counter"> Voici un lien vers la page du compteur pour redux</Link></p>
  </div>
);

export default Home;
