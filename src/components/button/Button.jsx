const Button = ({ onHandleClick }) => {
  return (
    <button className="button" onClick={onHandleClick}>
      Load More
    </button>
  );
};

export { Button };
