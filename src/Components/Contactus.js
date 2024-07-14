import React from "react";

const Contactus = () => {
  return (
    <>
      <div className="container-fluid p-4">
        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="contactleft map text-center">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.509759697777!2d77.47134507439156!3d23.26092020739334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6a00f08280e7%3A0x8998eb98ed8d5653!2sNew%20Wisdom%20Public%20Hr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1691063211242!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.0824510097073!2d77.4141539!3d23.276453600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6837e70d0863%3A0xde0620c098a5f9ab!2sShri%20Nav%20Niketan%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1718182216786!5m2!1sen!2sin" width="600" height="450" style={{border:"0", allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
          </div>
          <div className="contactright text-left">
            <div className="titlecontact">
              <h4 className="ssss">School</h4>
              <hr />
              
              <p className="linkwrap">
                <b className="bbb">Phone:</b>{" "}
                <a className="linkwrap mnc" href="tel:  091111 81166">
                091111 81166, 091111 81177s
                 </a>{" "}
              </p>
              <p className="linkwrap">
                <b className="bbb">Email:</b>{" "}
                <a
                  className="linkwrap mnc"
                  href="mailto: shrinavniketan@rediffmail.com "
                >
                  shrinavniketan@rediffmail.com
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
