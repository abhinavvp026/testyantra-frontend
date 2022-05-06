import React from "react";

function Personal({ handleChange, values }) {
  return (
    <div>
      <form>
        <div>
          <h1>Personal Details</h1>
        </div>
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="First name*"
              required
              value={values.firstName}
              onChange={handleChange("firstName")}
            />
            <input
              type="email"
              class="form-control"
              placeholder="Email*"
              required
              value={values.email}
              onChange={handleChange("email")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Your website"
              value={values.website}
              onChange={handleChange("website")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="LinkedIn"
              value={values.linkedin}
              onChange={handleChange("linkedin")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="FaceBook"
              value={values.facebook}
              onChange={handleChange("facebook")}
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Last name*"
              required
              value={values.lastName}
              onChange={handleChange("lastName")}
            />
            <input
              type="number"
              class="form-control"
              placeholder="Phone Number*"
              required
              value={values.phoneNumber}
              onChange={handleChange("phoneNumber")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="GitHub"
              value={values.gitHub}
              onChange={handleChange("gitHub")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Twitter"
              value={values.twitter}
              onChange={handleChange("twitter")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Instagram"
              value={values.instagram}
              onChange={handleChange("instagram")}
            />
          </div>
        </div>
      </form>
      <footer>
        <h6>Page No:1</h6>
      </footer>
    </div>
  );
}

export default Personal;
