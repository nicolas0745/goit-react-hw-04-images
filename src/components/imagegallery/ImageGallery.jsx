import { useRef } from 'react';
import { useImages } from 'components/context/ImageContext';

const ImageGallery = ({ list }) => {
  const { openModal } = useImages();
  const imgRefs = useRef([]);
  const onHandleClick = index => {
    const element = imgRefs.current[index];
    openModal(element.dataset.largeurl, element.alt);
  };
  return (
    <ul className="imageGallery">
      {list.map((item, index) => (
        <li className="imageGalleryItem" key={index}>
          <img
            src={item.webformatURL}
            alt={item.tags}
            className="imageGalleryItem-image"
            data-largeurl={item.largeImageURL}
            ref={el => (imgRefs.current[index] = el)}
            onClick={() => onHandleClick(index)}
          />
        </li>
      ))}
    </ul>
  );
};

export { ImageGallery };
