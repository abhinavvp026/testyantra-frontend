import React from "react";

function Experience({ handleChange, values }) {
  return (
    <div>
      <form>
        <div>
          <h1>Experience Details</h1>
        </div>
        <h3> --Experience 1</h3>
        <div className="row">
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Institute/Organisation*"
              required
              value={values.experienceOneOrg}
              onChange={handleChange("experienceOneOrg")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Position*"
              required
              value={values.experienceOnePos}
              onChange={handleChange("experienceOnePos")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Duration*"
              required
              value={values.experienceOneDur}
              onChange={handleChange("experienceOneDur")}
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            class="form-control"
            placeholder="Description*"
            required
            value={values.experienceOneDes}
            onChange={handleChange("experienceOneDes")}
          />
        </div>
        <h3> --Experience 2</h3>
        <div className="row">
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Institute/Organisation*"
              required
              value={values.experienceTwoOrg}
              onChange={handleChange("experienceTwoOrg")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Position*"
              required
              value={values.experienceTwoPos}
              onChange={handleChange("experienceTwoPos")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Duration*"
              required
              value={values.experienceTwoDur}
              onChange={handleChange("experienceTwoDur")}
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            class="form-control"
            placeholder="Description*"
            required
            value={values.experienceTwoDes}
            onChange={handleChange("experienceTwoDes")}
          />
        </div>
      </form>
      <footer>
        <h6>Page No:4</h6>
      </footer>
    </div>
  );
}

export default Experience;
