import React from "react";

function Educational({ handleChange, values }) {
  return (
    <div>
      <div>
        <form>
          <div>
            <h1>Education Details</h1>
          </div>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="College/University*"
                required
                value={values.college}
                onChange={handleChange("college")}
              />
              <input
                type="text"
                class="form-control"
                placeholder="Qualification*"
                required
                value={values.qualification}
                onChange={handleChange("qualification")}
              />
            </div>
            <div class="col">
              From:
              <input
                type="date"
                id="fromCollegeDate"
                placeholder="dd/mm/yyyy"
                value={values.fromCollegeDate}
                onChange={handleChange("fromCollegeDate")}
              ></input>
              <input
                type="text"
                class="form-control"
                placeholder="Description*"
                required
                value={values.collegeDescription}
                onChange={handleChange("collegeDescription")}
              />
            </div>
            <div class="col">
              To:
              <input
                type="date"
                id="toCollegeDate"
                placeholder="dd/mm/yyyy"
                value={values.toCollegeDate}
                onChange={handleChange("toCollegeDate")}
              ></input>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="School*"
                required
                value={values.school}
                onChange={handleChange("school")}
              />
              <input
                type="text"
                class="form-control"
                placeholder="Qualification*"
                required
                value={values.schoolQualification}
                onChange={handleChange("schoolQualification")}
              />
            </div>
            <div class="col">
              From:
              <input
                type="date"
                id="fromSchoolDate"
                placeholder="dd/mm/yyyy"
                value={values.fromSchoolDate}
                onChange={handleChange("fromSchoolDate")}
              ></input>
              <input
                type="text"
                class="form-control"
                placeholder="Description*"
                required
                value={values.schoolDescription}
                onChange={handleChange("schoolDescription")}
              />
            </div>
            <div class="col">
              To:
              <input
                type="date"
                id="toSchoolDate"
                placeholder="dd/mm/yyyy"
                value={values.toSchoolDate}
                onChange={handleChange("toSchoolDate")}
              ></input>
            </div>
          </div>
        </form>
        <footer>
          <h6>Page No:2</h6>
        </footer>
      </div>
    </div>
  );
}

export default Educational;
