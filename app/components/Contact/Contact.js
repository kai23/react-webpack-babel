import React from 'react';
import { Link } from 'react-router-dom';

// match est une props donnée par le react-router
// Elle permet de récupérer (entre autre) les params d'une route
// https://reacttraining.com/react-router/web/api/match


const Contact = ({ match }) => (
  <div className="colorContact">
    <p>Je suis sur la page de contact {match.params.name && `de ${match.params.name}`}.</p>
    <Link to="/"> Revenir sur la Home Page </Link></div>
);

export default Contact;
