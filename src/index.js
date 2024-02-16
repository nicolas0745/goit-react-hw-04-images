import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
import { ImageProvider } from 'components/context/ImageContext';
import './index.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageProvider>
      <App />
    </ImageProvider>
  </React.StrictMode>
);
