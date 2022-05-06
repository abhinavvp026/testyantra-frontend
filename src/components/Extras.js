import React from "react";

function Extras({ handleChange, values }) {
  return (
    <div>
      <form>
        <div>
          <h1>Extra Details</h1>
        </div>
        <h3> --Skills\Languages</h3>
        <div className="row">
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Skill1*"
              value={values.skill1}
              onChange={handleChange("skill1")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="skill2*"
              value={values.skill2}
              onChange={handleChange("skill2")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Skill3*"
              value={values.skill3}
              onChange={handleChange("skill3")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Skill4*"
              value={values.skill4}
              onChange={handleChange("skill4")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="skill5*"
              value={values.skill5}
              onChange={handleChange("skill5")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Skill6*"
              value={values.skill6}
              onChange={handleChange("skill6")}
            />
          </div>
        </div>
        <h3> --Interest</h3>
        <div className="row">
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Interest1*"
              value={values.interest1}
              onChange={handleChange("interest1")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Interest2*"
              value={values.interest2}
              onChange={handleChange("interest2")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Interest3*"
              value={values.interest3}
              onChange={handleChange("interest3")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Interest4*"
              value={values.interest4}
              onChange={handleChange("interest4")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Interest5*"
              value={values.interest5}
              onChange={handleChange("interest5")}
            />
          </div>
          <div className="col">
            <input
              type="text"
              class="form-control"
              placeholder="Interest6*"
              value={values.interest6}
              onChange={handleChange("interest6")}
            />
          </div>
        </div>
      </form>
      <footer>
        <h6>Page No:4</h6>
      </footer>
    </div>
  );
}

export default Extras;
