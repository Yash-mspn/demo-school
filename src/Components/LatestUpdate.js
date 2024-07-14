import React from 'react';

const LatestUpdate = () => {
  const filteredData = [
    { id: 2, created_on: "2020-12-15T05:19:39+00:00", eventdate: "2020-12-23", title: "Books will be available on the specific date." },
    { id: 3, created_on: "2020-12-15T08:52:50+00:00", eventdate: "2020-12-21", title: "Result has been declared" },
    { id: 4, created_on: "2020-12-15T09:29:56+00:00", eventdate: "2020-12-14", title: "Annual function data has been declared" },
    { id: 5, created_on: "2021-07-14T10:19:02+00:00", eventdate: "2021-07-15", title: "Tomorrow is a holiday" },
  ];

  return (
    <div>
      <div className="page-container ltst_pdt" style={{ marginBottom: "0px" }}>
        <div className="row" style={{ margin: "60px" }}>
          <div className="">
            <h3 className="ms-4">Latest Update</h3>
            <table style={{ width: "100%", border: "1px solid black" }} className="table table-bordered table_tc">
              <thead>
                <tr>
                  <th className="r1">DATE</th>
                  <th className="r2">HEADING</th>
                  <th className="r3">INFO</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length !== 0 ? (
                  <>
                    {filteredData?.map((ei, i) => (
                      <tr key={i}>
                        <td>{ei?.eventdate}</td>
                        <td>{ei?.title}</td>
                        <td>{ei?.title}</td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr>
                    <td colSpan='3'>
                      <div id="my_box" style={{ textAlign: "center" }}>
                        <p>No Data Found!!</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestUpdate;
