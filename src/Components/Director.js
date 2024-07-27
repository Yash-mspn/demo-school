import React, { useState, useEffect } from 'react';
import "./css/Director.css"

const Director = () => {
  const [directorData, setDirectorData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cms.mait-retech.com/navniketan/items/director_message?fields=*.*');
        const data = await response.json();
        // Assuming the data structure remains the same, you can access the required information
        const directorInfo = {
          directorName: data.data[0].director_name,
          directorMessage: data.data[0].director_message,
          fullUrl: data.data[0].director_image.data.full_url,
        };
        setDirectorData(directorInfo);
      } catch (error) {
        console.error('Error fetching director message:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  if (!directorData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="director-sid">
        <div className="director-sid-row">
          <div className="director-sid-col">
            <img src={directorData.fullUrl} />
            <h4>{directorData.directorName}</h4>
          </div>
          <div className="director-sid-col">
            <h2>Director Message</h2>
            <h6>
            {directorData.directorMessage}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Director;
