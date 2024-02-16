import PropTypes from 'prop-types';

const Button = ({ onHandleClick }) => {
  return (
    <button className="button" onClick={onHandleClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onHandleClick: PropTypes.func,
};

export { Button };
