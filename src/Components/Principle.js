import React, { useState, useEffect } from "react";

const Principle = () => {
  const [principleData, setPrincipleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cms.maitr-etech.com/navniketan/items/principle_message?fields=*.*');
        const data = await response.json();

        // Assuming data is structured like { data: [...] }
        if (data && data.data && data.data.length > 0) {
          setPrincipleData(data.data[0]); // Assuming you only want the first item
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    fetchData();
  }, []); // Empty dependency array to run useEffect only once on component mount

  return (
    <>
      {principleData && (
        <div className="principal">
          <div className="principal-row">
            <div className="principal-col">
              {/* Use the image from the API response */}
              {principleData.principle_image && (
                <img
                  src={principleData.principle_image.data.full_url}
                
                />
              )}
              {/* Assuming you have a name property in your API response */}
              <h5>{principleData.principle_name}</h5>
            </div>
            <div className="principal-col">
              <h2>Principle Message</h2>
              <h6>{principleData.principle_message || ''}</h6>
              <h6>
                {/* Your existing content */}
              </h6>
              <h6>
                {/* Your existing content */}
              </h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Principle;
