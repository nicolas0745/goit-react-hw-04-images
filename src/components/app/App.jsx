import { Searchbar } from '../searchbar/Searchbar';
import { ImageGallery } from '../imagegallery/ImageGallery';
import { Button } from '../button/Button';
import { fetchImages } from '../api/fetchImages';
import { Loader } from '../loader/Loader';
import { Modal } from '../modal/Modal';
import { useImages } from 'components/context/ImageContext';
let page = 1;
let search = '';

const App = () => {
  const {
    images,
    isLoading,
    error,
    altModal,
    urlModal,
    setError,
    setImages,
    setIsLoading,
  } = useImages();

  const onHandleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setImages([]);
    page = 1;
    search = e.target.elements[1].value.trim();
    try {
      const info = await fetchImages(search, page);
      setImages(info.data.hits);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    setIsLoading(true);
    page += 1;
    try {
      const info = await fetchImages(search, page);
      setImages([...images, ...info.data.hits]);
    } catch (error) {
      setError(error);
    } finally {
      window.scrollBy({
        top: 500,
        behavior: 'smooth',
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <Searchbar onHandleSubmit={onHandleSubmit} />
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <ImageGallery list={images} />
      {isLoading && <Loader />}
      {images.length ? <Button onHandleClick={handleClick} /> : null}
      {urlModal && <Modal src={urlModal} alt={altModal} />}
    </div>
  );
};

export { App };
