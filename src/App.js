import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate my-10">
        Image Gallery
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </div>
    </div>
  );
}

export default App;
