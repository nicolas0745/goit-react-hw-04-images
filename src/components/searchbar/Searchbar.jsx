import PropTypes from 'prop-types';

const Searchbar = ({ onHandleSubmit }) => {
  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={onHandleSubmit}>
        <button type="submit" className="searchForm-button">
          <span className="searchForm-button-label">Search</span>
        </button>

        <input
          className="searchForm-input"
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func,
};

export { Searchbar };
