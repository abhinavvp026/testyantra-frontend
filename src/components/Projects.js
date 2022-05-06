import React from "react";

function Projects({ handleChange, values }) {
  return (
    <div>
      <div>
        <form>
          <div>
            <h1>Projects Developed</h1>
          </div>
          <div>
            <h2>Project 1</h2>
            <input
              type="text"
              class="form-control"
              placeholder="Title*"
              required
              value={values.projectOneTitle}
              onChange={handleChange("projectOneTitle")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Link*"
              required
              value={values.projectOneLink}
              onChange={handleChange("projectOneLink")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Description*"
              required
              value={values.projectOneDescription}
              onChange={handleChange("projectOneDescription")}
            />
          </div>
          <div>
            <h2>Project 2</h2>
            <input
              type="text"
              class="form-control"
              placeholder="Title*"
              required
              value={values.projectTwoTitle}
              onChange={handleChange("projectTwoTitle")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Link*"
              required
              value={values.projectTwoLink}
              onChange={handleChange("projectTwoLink")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Description*"
              required
              value={values.projectTwoDescription}
              onChange={handleChange("projectTwoDescription")}
            />
          </div>
          <div>
            <h2>Project 3</h2>
            <input
              type="text"
              class="form-control"
              placeholder="Title"
              value={values.projectThreeTitle}
              onChange={handleChange("projectThreeTitle")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Link"
              value={values.projectThreeLink}
              onChange={handleChange("projectThreeLink")}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Description"
              value={values.projectThreeDescription}
              onChange={handleChange("projectThreeDescription")}
            />
          </div>
        </form>
        <footer>
          <h6>Page No:3</h6>
        </footer>
      </div>
    </div>
  );
}

export default Projects;
