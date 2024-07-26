import React from 'react'

const AdmissionProcedure = () => {
  return (
    <div>
        <div className="container-fluid p-0">
        <div className="container-fluid d-flex latest_card_box_add p-0">
          <div className="admssionleft text-left">
            <div className="title">
              <h3
                className="text-center"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Admission Procedure
              </h3>
              <h4>Rule for Admission</h4>

              <p>
1. **Merit-Based Admission:** Admission is granted based on merit. 

2. **Registration and Submission:**
   - Complete the registration cum admission form.
   - Submit the form to the School Office by the specified date.

3. **Age Requirements:**
   - **Class 1:** Students must be above 5 years of age.
   - **Higher Classes:** Add one year for each subsequent class. For example, to enter Class 2, students must be at least 6 years old, and so on.

4. **Transfer Certificate:**
   - A Transfer Certificate from the last school attended, countersigned by an appropriate authority, is required for admission.
   - No student will be allowed to attend classes until formal admission is completed.

5. **Provisional Admission:**
   - Students coming from unrecognized schools may receive provisional admission.
   - Eligibility is subject to approval by the educational authorities of the District.

6. **Late Admission Fees:**
   - If admission occurs after the start of the school year, fees for the entire First Term will be charged unless otherwise directed by the Principal.

These guidelines ensure that the admission process is clear, transparent, and in accordance with both school policies and government regulations.
              </p>
              <h5>
                <b>A student may be removed by the school authorities on any of the following grounds:</b>
              </h5>
        
              <ul type="square" style={{ color: "black", padding: "0px 20px" }}>
                <li>Behavioral problem.</li>
                <li>Moral breach considered serious by the school authorities.</li>
                <li>
                Failing two times in the same class.
                </li>
              </ul>
             
              <h5>
                <b>Follow Instructions</b>
              </h5>
              <ul type="square" style={{ color: "black", padding: "0px 20px" }}>
                <li>Issue of Registration form does not guarantee admission.</li>
                <li>Registration fee is not refundable.</li>
                <li>
                Registration form is not transferable.
                </li>
                <li>
                The following documents are to be submitted at the time of final completion of admission
                </li>
              </ul>
             

              

            

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
                <li>6 passport size photos of the child and 1 each of the parents</li>
                <li>
                Copy of Address proof
                </li>
                <li> Vaccination card</li>
                <li>Blood group card or report</li>
                <li>Copy of Aadhar card</li>
               
                <li>Cheque Photocopy</li>
              </ul>

              <h5>
                Email to : &nbsp;
                <p className="linkwrap">
                <b className="bbb">Email:</b>{" "}
                <a
                  className="linkwrap mnc"
                  href="mailto: admissions@titansinternational.com "
                >
                  admissions@titansinternationalschool.com
                </a>{" "}
              </p>
              </h5>

              <h5>Get Admission procedure</h5>
              <p>
              For admissions to Buniyad (the pre primary section) the procedure is as follows:
              </p>
              <p>
              As part of the admission process at Naveen Vidya Bharti Hr. Sec. School, the following meeting is conducted:

1. **Meeting Invitation:** Both the child and their parents will be invited to a brief meeting with the Director or Head of Buniyad.

2. **Purpose of the Meeting:**
   - **Parental Involvement:** The meeting will assess the level of parental involvement in the childs upbringing.
   - **Collaborative Approach:** It will also determine how well parents can collaborate with the school to support the childs holistic education.

This interaction helps ensure that there is a shared commitment to the child's development and aligns both the family's and the schools educational goals.
              </p>
              {/* <div className="form">
                <h5><b>Admission form:</b></h5>
                <img src="./img/form.jpg" alt="" />
                <h5><b><a href="./img/form.jpg" target="_blank">Click Here For Download Admission Form</a></b></h5>
              </div> */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdmissionProcedure