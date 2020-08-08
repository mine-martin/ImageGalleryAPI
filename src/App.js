import React, { useState, useEffect } from 'react';
import ImageCard from './components/imagecard';
import ImageSearch from './components/ImageSearch';
import DevInfo from './components/DevInfo';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=15071533-18155d3c61a8a72c9f5bc9456&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!loading && images.length === 0 && (
        <h1 className="text-4xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {loading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">...Loading</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
      <DevInfo />
    </div>
  );
}

export default App;
