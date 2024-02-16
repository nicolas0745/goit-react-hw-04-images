import React, { useEffect, useRef } from 'react';
import { useImages } from 'components/context/ImageContext';

const Modal = ({ src, alt }) => {
  const { openModal } = useImages();
  const modalRef = useRef();

  const onHandleClick = () => {
    console.log(modalRef.current.className);
    openModal(null, null);
  };

  const onHandleKey = e => {
    console.log(e.key);
    if (e.key === 'Escape') openModal(null, null);
  };

  useEffect(() => {
    modalRef.current.focus();
  }, []);

  return (
    <div
      className="overlay"
      tabIndex="0"
      ref={modalRef}
      onClick={onHandleClick}
      onKeyDown={onHandleKey}
    >
      <div className="modal" onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export { Modal };
