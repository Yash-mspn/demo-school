import React from "react";
import Banner from "./Banner";
import ReactCardSlider from "./ReactCardSlider";
import Eventmain from "./newseventsection/Eventmain"

// import ReactCardSlider from 'react-card-slider-component';
// import { Carousel } from 'react-carousel-minimal';
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const sliderClick = (slider) => {};

  const slides = [
    {
      image: "./images/cr1.jpg",
      title: "Merry Christmas",
      description: "25 December",
      clickEvent: sliderClick,
    },
    {
      image: "/images/new1.jpg",
      title: "Happy New Year",
      description: "01 January ",
      clickEvent: sliderClick,
    },

    {
      image: "./images/mk.jpg",
      title: "Happy Makar sankranti",
      description: "14 January ",
      clickEvent: sliderClick,
    },

    {
      image: "./images/rep.jpg",
      title: "Republic Day",
      description: "26 January",
      clickEvent: sliderClick,
    },
    {
      image: "./img/yoga.jpeg",
      title: "Happy Mahashivratri",
      description: "18 February",
      clickEvent: sliderClick,
    },
    {
      image: "./images/fa.jpeg",
      title: "Happy Holi",
      description: "8 March",
      clickEvent: sliderClick,
    },

    {
      image: "./images/g33.jpeg",
      title: "Mahavir Jayanti",
      description: "4 April ",
      clickEvent: sliderClick,
    },

    {
      image: "./img/yoga.jpeg",
      title: "Celebrating Yoga Day",
      description: "21 june",
      clickEvent: sliderClick,
    },
    {
      image: "./img/cultural.jpeg",
      title: "Cultural Activity",
      description: "yearly",
      clickEvent: sliderClick,
    },
  ];
  return (
    <>
      <Banner />
      
      <div className="new-div">
        <div className="content_box">
          <div className="first_box bxx">
            
             
              <h1 style={{color:'HighlightText'}}>Shri Nav Niketan</h1>
           
            <div className="image_boxAb img-school">
              <img src="building.jpeg" alt="" />
            </div>

            <div className="para-content">
              <p style={{fontStyle:'italic', fontSize:'20', color:'#000000'}}>
              **Titans International School**, located at 10 Downing Street, Westminster, London, is recognized as a developmentally enriching learning environment that makes education both enjoyable and effective for children. 

Heres an overview of Titans International School:

- **Location:** Situated at the prestigious 10 Downing Street, Westminster, London, the school benefits from a prominent and inspiring setting.

- **Educational Approach:** Known for its commitment to creating a developmentally enriching space, Titans International School focuses on making learning fun and engaging for students. 

- **Foundation and Growth:** Established in 1999, the school has a long-standing tradition of providing high-quality education and continually adapting to meet the needs of its students.

Titans International School remains dedicated to offering an exceptional educational experience, combining innovative teaching methods with a supportive environment to ensure each child’s growth and success.
                {/* <Link to="/ourSchool">read more</Link> */}
              </p>
            </div>
          </div>
          <div className="second_box bxx">
            
              <h1 style={{color:'HighlightText'}}>Director's Message</h1>
           
            <div className="image_boxAb img-principle">
              <img src="chairman.jpg" alt="" />
            </div>
            <div className="para-content">
              <p style={{fontStyle:'italic', fontSize:'20', color:'#000000'}}>
              **Dear Parents and Students,**

It gives me great pleasure to welcome you to **Titans International School**. At our school, we are dedicated to nurturing a strong foundation of ethical values in all our students, emphasizing integrity and respect. 

Our commitment is to instill these core values through every aspect of our educational approach, ensuring that each student not only excels academically but also grows into a principled and respectful individual.

We look forward to a productive and enriching journey together.

Warm regards,

[Joseph]  
[Stalin]  
Titans International School
                {/* <Link to="/director"> read more</Link> */}
              </p>
            </div>
          </div>
          <div className="second_box bxx">
           
              <h1 style={{color:'HighlightText'}}>Principal's Message</h1>
          
            <div className="image_boxAb img-principle">
              <img src="principal.jpg" alt="" />
            </div>
            <div className="para-content">
              <p style={{fontStyle:'italic', fontSize:'20', color:'#000000'}}>
              **Welcome to Titans International School**, a place deeply rooted in decades of tradition and values. As educators, we recognize that children learn more from our actions and behaviors than from our words. Our commitment is to embody and model the principles of integrity, respect, and excellence in everything we do. 

Here at Titans International School, we strive to create an environment where these values are not just taught but lived, ensuring that every student not only learns but grows into a responsible and principled individual. 

We are excited to embark on this journey with you, where together, we will foster a nurturing and inspiring learning experience.

Warm regards,

[Mao]  
[Senpai]  
Titans International School
                 {/* <Link to="/principal">read more</Link> */}
              </p>
            </div>
          </div>
          {/* <div className="third_box bxx">
          <div className="bx1">
            <p>Latest From</p>
            <h1>Notice Board</h1>
          </div>

          <div className="image_boxAbc">
            <div className="animatinct" style={{ padding: "5px" }}>
              <p>1. Class Prep Admission Guideline 2023-24</p>
              <p>2. School Transport Arrangement</p>
              <p>3. School Transport Arrangement</p>
              <p>4. School Transport Arrangement</p>
              <p>5. School Transport Arrangement</p>
            </div>
          </div>
        </div> */}
        </div>

        <div className="third_content_box">
          <div className="academic_planner">
            <div className="accontent">
              <p>Academic Planner</p>
            </div>
            <div className="imgggbox1">
              <div className="igg"></div>
            </div>
          </div>
          <div className="academic_planner">
            <div className="accontent">
              <p>Class Room</p>
            </div>
            <div className="imgggbox1 imgggbox12">
              <div className="igg"></div>
            </div>
          </div>
          <div className="academic_planner">
            <div className="accontent">
              <p>Republic Day</p>
            </div>
            <div className="imgggbox1 imgggbox13">
              <div className="igg igg1">
                <img src="./republicday.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Eventmain/>

        <div className="fourth_content_box">
          <div className="fouthmain">
            <div className="fourthOne">
              <div className="ffone">
                <h3>Photo Gallery</h3>
              </div>
              <div className="ffslider">
                <Carousel className="abcd">
                  <Carousel.Item className="jhk">
                    <img
                      className="d-block"
                      src="./yogas1.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="jhk">
                    <img
                      className="d-block"
                      src="./gallery8.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item className="jhk">
                    <img
                      className="d-block"
                      src="./gallery3.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item className="jhk">
                    <img
                      className="d-block"
                      src="./gallery4.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
            

             

            

      

            
                </Carousel>
              </div>
              <div className="ffbutton">
                <Link to="/gallery">
                  <button>View More</button>
                </Link>
              </div>
            </div>
            <div className="fourthOne">
              <div className="ffone">
                <h3>Video Gallery</h3>
              </div>
              <div className="ffslider">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/vkJmQP6DfzQ?si=SAFjWiE5dpWzcRVA" 
                  title=" Video Player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="ffbutton">
                <a
                  href="https://youtu.be/vkJmQP6DfzQ?si=SAFjWiE5dpWzcRVA"
                  target="_blank"
                >
                  <button>View More</button>
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Home;
