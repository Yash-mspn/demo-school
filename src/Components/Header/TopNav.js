import React from "react";

const TopNav = () => {
  let flag = 0;

  const openmenu = () => {
    let menubar = document.querySelector(".menu-bar");
    if (flag === 0) {
      menubar.style.display = "block";
      flag = 1;
    } else {
      menubar.style.display = "none";
      flag = 0;
    }
  };

  return (
    <>
      <div className="toptop">
        <div className="tonavbar1">
          <img
            src="./logo.jpg"
            alt=""
            style={{
              backgroundColor: "transparent",
              borderRadius: "30%",
              padding: "5px",
              width: "100px", // Adjust width as needed
              height: "100px", // Adjust height as needed
            }}
          />
          <div className="imp">
            <h1 style={{ color: "#ffffff", fontFamily:'serif' }}>
              Shri Nav Niketan School
            </h1>
            <p style={{ color: "#ffffff" }}>
              Spreading Education in Excellence<br></br>
              SINCE 1976
            </p>
          </div>
        </div>
        <div className="menuimageicon">
          <i class="ri-menu-line" onClick={() => openmenu()}></i>
        </div>
      </div>
    </>
  );
};

export default TopNav;
