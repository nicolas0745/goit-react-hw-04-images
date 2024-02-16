import { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export const useImages = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [urlModal, setUrlModal] = useState(null);
  const [altModal, setAltModal] = useState(null);

  const openModal = (urlModal, altModal) => {
    setUrlModal(urlModal);
    setAltModal(altModal);
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        isLoading,
        error,
        urlModal,
        altModal,
        setAltModal,
        setError,
        setImages,
        setIsLoading,
        setUrlModal,
        openModal,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
