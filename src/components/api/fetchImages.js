import axios from 'axios';
const fetchImages = async (query, page) => {
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=40676480-f1eba9f42c4c8420b412d5875&image_type=photo&orientation=horizontal&per_page=12`;
  const info = await axios.get(url);
  return info;
};

export { fetchImages };
