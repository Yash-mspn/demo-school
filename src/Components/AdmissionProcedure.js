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
              Admission is purely based on merit. admissions are to be sought through duly filled up registration cum admission form,
which is to be submitted in School Office on or before the specified date.
As per Government Rules students above 5 years of age only shall be admitted to class 1.
For Higher classes add one year for each class

No candidates shall be admitted without Transfer Certificate from the last school attended, countersigned by an appropriate authority, and in no case shall a student be permitted to attend classes pending formal admission. If a student comes from an unrecognized school he/she can be given provisional admission Eligibility test subject to approval by the educational authorities of the District in which the School is situated. In case of late admission of a student, the fee from the beginning of the First Term shall be charged unless otherwise ordered by the Principal.
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
                  href="mailto: shrinavniketan@rediffmail.com "
                >
                  shrinavniketan@rediffmail.com
                </a>{" "}
              </p>
              </h5>

              <h5>Get Admission procedure</h5>
              <p>
              For admissions to Buniyad (the pre primary section) the procedure is as follows:
              </p>
              <p>
              The child along with the parents will be invited to a brief meeting with the Director / Head of Buniyad where the two sides will interact. This interaction will determine whether the parents are involved with the upbringing of the child, and whether they will be able to participate with the school in the holistic education of the child.
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