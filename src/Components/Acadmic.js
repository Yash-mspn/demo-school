import React from "react";

const Acadmic = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="container-fluid d-flex latest_card_box_add p-0">
          <div className="admssionleft text-left">
            <div className="title">
              <h3
                className="text-center"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Academic Procedure
              </h3>

              <p>
                Naveen Vidya Bharti Hr. Sec. School provides children with a
                play-based or emergent curriculum, which is child-centred and
                teacher framed.Our educators develop large and small group
                instruction as well as learning centres, based on observed
                student abilities, skills and interests.Age-appropriate
                instruction, activities, and/or centres will be provided to
                children daily in: India , Foundational Literacy and Numeracy,
                and Outdoor Learning.A strong focus is put on developing
                children’s self-regulation and growing independence within a
                caring and nurturing environment that considers children’s
                social, emotional, cognitive, physical and spiritual well being.
              </p>
              <h5>
                <b>Age Requirement:</b>
              </h5>
              <p>
                Parents interested in our school must ensure that their child
                meets the age requirements; children must be the ages of 2.5
                years old or above to be eligible to apply.Parents are asked for
                their child’s proof of age at time of application.
              </p>
              <h5>
                <b>Registration:</b>
              </h5>
              <p>
                Parents are required to submit a non-refundable application form
                to the school. Registered parents are invited to visit the
                campus to understand the Goenkan culture & ethos. The mere act
                of Registration will not constitute a guaranteed admission,
                which is subject to interaction with Principal, Aptitude test
                (grade V & above) and the school rule book
              </p>
              <p>
                <b>School Timings:</b> 8.20 AM to 4.30 PM{" "}
              </p>

              <p>
                {" "}
                <b>Classes:</b> Nursery to 12th
              </p>

              <p>
                {" "}
                <b>Subjects:</b> Maths, Bio, Commerce, Agriculture(for Higher
                Sec. School students)
              </p>

              <h5>
                <b>Submission of Documents:</b>
              </h5>
              <p>
                Following Registration, duly filled Application form needs to be
                submitted along with the documents listed below within 5 days of
                the registration date.
              </p>
              <ul type="square" style={{ color: "black", padding: "0px 20px" }}>
                <li>Attested copy of Birth certificate</li>
                <li>TC from previous school (class II onwards)</li>
                <li>
                  6 passport size photos of the child and 1 each of the parents
                </li>
                <li>Vaccination card</li>
                <li>Blood group card or report</li>
                <li>Copy of Aadhar card</li>
                <li>Copy of Samagra ID</li>
                <li>Cheque Photocopy</li>
              </ul>

              <h5>
                Email to : &nbsp;
                <a href="mailto:naveenvidyabharti@gmail.com">
                  naveenvidyabharti@gmail.com
                </a>
              </h5>

              {/* <p>
                The Ministry of Education requires that there be a scheduled
                rest period each day for schoolers. Children will have the
                option of napping, resting or engaging in quiet
                activity. Educators will consider parent requests related to
                naps, but will follow child’s cues ultimately.
              </p>
              <h5>Outdoor Time:</h5>
              <p>
                The Ministry of Education requires that children spend at least
                two (2) hours per day outdoors, weather permitting.
              </p> */}
              <div className="form">
                <h5><b>Admission form:</b></h5>
                <img src="./img/form.jpg" alt="" />
                <h5><b><a href="./img/form.jpg" target="_blank">Click Here For Download Admission Form</a></b></h5>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acadmic;
