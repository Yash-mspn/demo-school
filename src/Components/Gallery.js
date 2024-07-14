import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const Gallery = () => {
  const API_ENDPOINT = 'https://cms.maitretech.com/navniketan/items/gallery?fields=*.*.*';
  const { data, error } = useSWR(API_ENDPOINT, fetcher);

  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Error loading data</div>;
  }

  if (!data) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
  }

  const images = data.data;

  return (
    <div className="container-fluid">
      <div className="first">
        {images.map((item, i) => (
          <div key={item.id || i} className="one">
            <a href={item?.images?.data?.full_url} target="_blank" rel="noopener noreferrer">
              <img
                src={item?.images?.data?.full_url || 'fallback-image-url'} // Replace 'fallback-image-url' with an actual fallback image URL
                className="mt-3 imght"
                alt={`Image ${i}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
