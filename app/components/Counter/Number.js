import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment } from './actions';

// Dans cet exemple, on montre que meme un composant "presentational" peut
// dispatch un event, car grace au Provider situé tout au dessus, il a accès à
// cette fonction.
// Ainsi, il peut également dispatcher l'event d'incrément, sans avoir forcément
// besoin de le récupérer du dessus

const Number = ({ currentNumber, dispatch }) => (
  <div>
    <p> Je vous présentes le nombre {currentNumber}.</p>
    <a onClick={() => dispatch(increment(10))}> clique ici pour incrémenter de 10 ! </a>
  </div>
);

Number.propTypes = {
  currentNumber: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Number);
