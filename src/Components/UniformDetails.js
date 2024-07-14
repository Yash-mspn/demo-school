import React from 'react'

const UniformDetails = () => {
  const slides = [
     
    { title: "./uniform1.jpg", description: 'View Gallery' },
    { title: "./uniform2.jpg ", description: 'View Gallery' },
    { title: " ./is8.jpg ", description: 'View Gallery' },
    { title: " ./uniform2.jpg ", description: 'View Gallery' },
    { title: "./is15.jpg  ", description: 'View Gallery' },
    { title: " ./is16.jpg ", description: 'View Gallery' },
    

];
  return (
    <div>
       <div className="container-fluid">
          <div className="first">
          {slides.map((item, i) => {
              return (
                <div key={i} className="one">
                  <img 
                    src={item?.title}
                    className="mt-3 imght "
                    alt="no_img"
                  />
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}

export default UniformDetails