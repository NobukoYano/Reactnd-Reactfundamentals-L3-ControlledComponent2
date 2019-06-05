import React from 'react';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.
*/
const DelItem = props => {
  const handleDeleteLastItem = event => {
    props.onDeleteLastItem();
  };

  return (
    <button onClick={handleDeleteLastItem} disabled={props.buttonDisabled}>
      Delete Last Item
    </button>
  );
};

DelItem.propTypes = {
  buttonDisabled: PropTypes.func.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired,
};

export default DelItem;