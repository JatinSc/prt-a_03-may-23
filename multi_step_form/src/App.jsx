import { React, useState, useContext } from "react";
import FormContext from "./FormContext/FormContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ProgressBar from 'react-bootstrap/ProgressBar';

import Modal from "react-bootstrap/Modal";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import "./App.css";
import Page4 from "./pages/Page4";

const App = () => {
  const [page, setPage] = useState(1);
  const { formData, setFormData } = useContext(FormContext);
  const [show, setShow] = useState(false);
  const [progress , setProgress] = useState(0)
  const [submit , setSubmit] = useState(false)

  const validateForm = () => {
    if (page == 1) {
      if (
        !formData.fName ||
        !formData.lName ||
        !formData.email ||
        !formData.password
      ) {
        setShow(true);
        setTimeout(() => {
          setShow(false)
        }, 3000);
      } else {
        setPage((previous) => previous + 1);
        setProgress(35)
      }
    }
    if (page == 2) {
      if (
        !formData.dob ||
        !formData.gender ||
        !formData.number ||
        !formData.address
      ) {
        setShow(true);
        setTimeout(() => {
          setShow(false)
        }, 3000);
      } else {
        setPage((previous) => previous + 1);
        setProgress(75)
      }
    }
    if (page == 3) {
      if (
        !formData.education ||
        !formData.employment ||
        !formData.income ||
        !formData.marital
      ) {
        setShow(true);
        setTimeout(() => {
          setShow(false)
        }, 3000);
      } else {
        setPage((previous) => previous + 1);
        setProgress(100)
      }
    }
  };
 const refresh = () =>{
  setFormData({
    fName: "",
    lName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    number: "",
    address: "",
    education: "",
    employment: "",
    income: "",
    marital: ""
  })
 }
  return (
    <><header>MULTI_STEP_FORM</header>
      <div className="container">
        {show && (
          
          <ToastContainer position="top-end" className="p-3">
        <Toast bg="primary" onClose={() => setShow(false)} show={show} delay={3000}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto" style={{color:"#0971E2"}}>Alert !!!</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body style={{color:"white"}}>All the fields are mandatory !</Toast.Body>
        </Toast>
        </ToastContainer>
        )}
        {
          <Modal
          show={submit} onHide={()=>setSubmit(false)}
          size="sm"
          bg="primary"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{color:"green"}} id="contained-modal-title-vcenter">
              Multi Step Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 style={{color:"#3CDE26"}}>Thanks for your time !</h4>
            <p style={{color:"#076605"}}>
             Form Submitted Successfully
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button style={{backgroundColor:"#0BAD0A"}}
            onClick={()=> setSubmit(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
        }
        <div className="content">
          {page == 1 ? (
            <Page1 />
          ) : page == 2 ? (
            <Page2 />
          ) : page == 3 ? (
            <Page3 />
          ) : (
            <Page4 />
          )}
        </div>
        
      </div><br/>
      <div className="btn">
          <Button
            disabled={page == 1 ? true : false}
            variant="secondary"
            onClick={() => setPage(page - 1)}
          >
            Back
          </Button>
          <Button
            disabled={page == 4 || show ? true : false}
            onClick={()=> validateForm()}
            variant="primary mx-4"
            type="submit"
          >
            Next
          </Button>
          <Button
            disabled={page < 4 || show ? true : false}
            style={{backgroundColor:"#1DBD06"}}
            type="submit"
            onClick={() => {setSubmit(true); setPage(1) ; refresh() ;setProgress(0)}}
          >
            Submit
          </Button>
        </div>
      <p id="page">{`Page : ${page}/4`}</p>
      <ProgressBar animated now={progress} />
    </>
  );
};

export default App;
