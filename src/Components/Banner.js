import React, { useEffect, useState } from "react";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    fetch('https://cms.maitretech.com/navniketan/items/slider?fields=*.*.*')
      .then(response => response.json())
      .then(data => {
        // Assuming the slides array is in the data property
        const apiSlides = data.data || [];

        // Set the slides state
        setSlides(apiSlides);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner jaimataran">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === selectedSlide ? 'active' : ''}`}
              data-bs-interval="5000"
            >
              <img src={slide?.slider_images?.data?.full_url} className="d-block w-100" alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
          onClick={() => setSelectedSlide((selectedSlide - 1 + slides.length) % slides.length)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
          onClick={() => setSelectedSlide((selectedSlide + 1) % slides.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
