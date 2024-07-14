import React from 'react'
import useSWR from 'swr';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Toppercarousel() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const url = "https://cms.maitretech.com/navniketan/items/toppers?fields=*.*.*";


  const { data, error } = useSWR(url, fetcher);
  if (error) {
    return <div>Error...</div>
  }
  if (!data) {
    return <div>No data...</div>
  }
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} style={{ padding: '0px 10px', margin: '5px 5px' }}>

      
      {data.data.map((item, i) => {
        return <div style={{ background: '#e9e9e9' }} key={i}>
          <center className='toppername'> {item.name} </center>
          <img
            className="d-block"
            src={item?.photo?.data?.full_url}
            alt="First slide"
            style={{
              width: '85%',
              display: 'flex',
              margin: 'auto',
              justifyContant: 'center',
              height: '220px',
              border: '1px solid #9E9E9E',
              padding: '7px',
              backgroundColor: '#fff',
              borderRadius: '5px'
            }}
          />
          <p className='classpercent'> <b>Class {item.class} <br /> {item.subject} ({item.percent}%) </b></p>
        </div>

      })}

    </Carousel>
  )
}

export default Toppercarousel
