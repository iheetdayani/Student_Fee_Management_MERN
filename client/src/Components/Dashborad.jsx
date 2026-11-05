import { useState, useEffect } from "react";
import { GetAllStudents } from "../Services/StudentFeeservice";
function Dashborad() {
  const [Students, SetStudents] = useState([]);
  const loadStudents = async () => {
    try {
      const response = await GetAllStudents();
      SetStudents(response.data);

    } catch (error) {
      console.error(error.message);
      console.log("Error while Fetch Students");
    }
  }
  useEffect(() => {
    loadStudents();
  }, []);
  const BasicFee = (student) => {
    return Number(student.tuitionFee) + Number(student.examFee);
  };
  const Scholarship = (student) => {
    return Number(student.scholarship);
  };
  const FinalFee = (student) => {
    return BasicFee(student) - Scholarship(student);
  };
  return (

    <>
      <nav className="navbar navbar-dark bg-success shadow">
        <div className="container-fluid px-4 py-2">
          <span className="navbar-brand fw-bold fs-4">
            <i className="bi bi-mortarboard-fill me-2"></i>
            StudentFee Analyzer
          </span>

          <span className="badge bg-white text-success px-3 py-2">
            Admin Dashboard
          </span>
        </div>
      </nav>

      <div className="container-fluid bg-light min-vh-100 p-4">

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div>
            <h2 className="fw-bold text-dark mb-2">
              Student Fee Details
            </h2>
            <p className="text-secondary mb-0">
              View student information and fee calculations.
            </p>
          </div>

          <span className="badge bg-success rounded-pill fs-6 px-4 py-3">
            <i className="bi bi-people-fill me-2"></i>
            Total Students: {Students.length}
          </span>
        </div>

        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

          <div className="card-header bg-white border-0 p-4">
            <h5 className="fw-bold mb-1">
              <i className="bi bi-table text-success me-2"></i>
              All Students
            </h5>
            <p className="text-secondary small mb-0">
              Complete student fee records
            </p>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">

              <thead className="table-success">
                <tr>
                  <th className="ps-4 py-3">Name</th>
                  <th>Course</th>
                  <th>Semester</th>
                  <th>Tuition Fee</th>
                  <th>Exam Fee</th>
                  <th>Scholarship</th>
                  <th>Basic Fee</th>
                  <th>Scholarship Amount</th>
                  <th>Final Fee</th>
                </tr>
              </thead>

              <tbody>
                {Students.map((student) => (
                  <tr key={student._id}>
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="rounded-circle bg-success-subtle text-success fw-bold d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px", minWidth: "40px" }}
                        >
                          {student.name?.charAt(0).toUpperCase()}
                        </div>

                        <span className="fw-semibold text-dark">
                          {student.name}
                        </span>
                      </div>
                    </td>

                    <td>
                      <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
                        {student.course}
                      </span>
                    </td>

                    <td>
                      <span className="badge bg-light text-dark border px-3 py-2">
                        {student.semester}
                      </span>
                    </td>

                    <td className="text-nowrap">
                      ₹{Number(student.tuitionFee).toLocaleString("en-IN")}
                    </td>

                    <td className="text-nowrap">
                      ₹{Number(student.examFee).toLocaleString("en-IN")}
                    </td>

                    <td className="text-nowrap text-success fw-semibold">
                      ₹{Number(student.scholarship).toLocaleString("en-IN")}
                    </td>

                    <td className="text-nowrap fw-semibold">
                      ₹{BasicFee(student).toLocaleString("en-IN")}
                    </td>

                    <td className="text-nowrap text-success fw-semibold">
                      ₹{Scholarship(student).toLocaleString("en-IN")}
                    </td>

                    <td className="text-nowrap">
                      <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                        ₹{FinalFee(student).toLocaleString("en-IN")}
                      </span>
                    </td>
                  </tr>
                ))}

                {Students.length === 0 && (
                  <tr>
                    <td colSpan="9" className="text-center py-5">
                      <i className="bi bi-inbox fs-1 text-secondary"></i>
                      <h6 className="text-secondary mt-3">
                        No student records found.
                      </h6>
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

          <div className="card-footer bg-white border-0 p-3">
            <small className="text-secondary">
              <i className="bi bi-info-circle me-2"></i>
              Showing {Students.length} student records
            </small>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashborad
