import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { increment, decrement } from './actions';


import Number from './Number.js';

class Counter extends Component {
  render() {
    const { incrementNb, decrementNb } = this.props;
    const { count } = this.props;
    return (
      <div>
        <p> Je vous présente le grand compteur. </p>
        <Number currentNumber={count} />
        <button onClick={() => incrementNb(1)}> J'incrémentes de 1 </button>
        <button onClick={() => decrementNb(1)} >Je décrémente de 1</button>
      </div>
    );
  }
}

Counter.propTypes = {
  incrementNb: PropTypes.func.isRequired,
  decrementNb: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

// Ici, on précise tout simplement ce que l'on veut dans nos props
// dans le premier cas, on va dire qu'on veut le compte actuel du state
// dans nos props, et qu'il s'appelera "count"
const mapStateToProps = state => ({
  count: state.counter || 0,
});

// Dans le deuxième cas, on précise quels dispatchs on veut dans nos props.
// ici, on veut rajouter les actions "increment" et "décrement" qu'on a
// explicité dans le fichier "./actions.js"
const mapDispatchToProps = dispatch => ({
  incrementNb: by => dispatch(increment(by)),
  decrementNb: by => dispatch(decrement(by)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
