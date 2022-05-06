import "./App.css";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Personal from "./components/Personal";
import Educational from "./components/Educational";
import { useState } from "react";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Extras from "./components/Extras";
import Download from "./Download";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    website: "",
    linkedin: "",
    facebook: "",
    gitHub: "",
    twitter: "",
    instagram: "",
    college: "",
    fromCollegeDate: "",
    toCollegeDate: "",
    qualification: "",
    collegeDescription: "",
    school: "",
    fromSchoolDate: "",
    toSchoolDate: "",
    schoolQualification: "",
    schoolDescription: "",
    projectOneTitle: "",
    projectOneLink: "",
    projectOneDescription: "",
    projectTwoTitle: "",
    projectTwoLink: "",
    projectTwoDescription: "",
    projectThreeTitle: "",
    projectThreeLink: "",
    projectThreeDescription: "",
    experienceOneOrg: "",
    experienceOnePos: "",
    experienceOneDur: "",
    experienceOneDes: "",
    experienceTwoOrg: "",
    experienceTwoPos: "",
    experienceTwoDur: "",
    experienceTwoDes: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
  });
  const [Step, setStep] = useState(1);
  const nextStep = () => {
    if (Step < 6) {
      if (values.firstName == "") {
        alert("please provide the First Name");
      } else {
        if (values.lastName == "") {
          alert("please enter the second Name");
        } else {
          if (values.email.includes("@")) {
            if (values.phoneNumber.length == 10) {
              setStep(Step + 1);
            } else {
              alert("please enter the proper phone number");
            }
          } else {
            alert("please enter the proper Email");
          }
        }
      }
    } else if (Step == 7) {
      console.log("sorry");
    }
  };
  const prevStep = () => {
    if (Step > 1) {
      setStep(Step - 1);
    }
  };
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  return (
    <div className="App">
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              style={{
                marginRight: 20,
              }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              align="center"
              variant="h6"
              style={{
                flexGrow: 1,
              }}
            >
              Resume Builder
            </Typography>
            <Button color="inherit">LogIn</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        {
          {
            1: (
              <Personal handleChange={handleChange} values={values}></Personal>
            ),
            2: (
              <Educational
                handleChange={handleChange}
                values={values}
              ></Educational>
            ),
            3: (
              <Projects handleChange={handleChange} values={values}></Projects>
            ),
            4: (
              <Experience
                handleChange={handleChange}
                values={values}
              ></Experience>
            ),
            5: <Extras handleChange={handleChange} values={values}></Extras>,
            6: <Download values={values}></Download>,
          }[Step]
        }
      </div>
      <div className="row">
        <div className="col">
          {Step > 1 ? (
            <button type="button" class="btn btn-danger" onClick={prevStep}>
              Back
            </button>
          ) : null}
        </div>
        <div className="col">
          {Step == 5 ? (
            <button type="button" class="btn btn-primary" onClick={nextStep}>
              "Download"
            </button>
          ) : Step == 6 ? null : (
            <button type="button" class="btn btn-danger" onClick={nextStep}>
              "Next"
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
