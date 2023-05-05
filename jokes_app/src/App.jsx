import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "./components/Spinner";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Notify from "./components/Notify";

const App = () => {
  const [joke, setJoke] = useState({ setup: "", punchLine: "" });
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const [MLoading, setMLoading] = useState(false);
  const [bMarkData, setBMarkData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [notify,setNotify] =useState(false)
  const getJoke = async () => {
    setNotify(false)
    setShow(true);
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const result = await res.json();
    if (result.id) {
      setJoke({ setup: result.setup, punchLine: result.punchline });
      setShow(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  const bookmark = () => {
      data.push(joke);
      localStorage.setItem("jokes", JSON.stringify(data));
  };

  const getBookMarked = async () => {
    setMLoading(true);
    const item = await JSON.parse(localStorage.getItem("jokes"));
    if (item) {
      console.log(item);
      setBMarkData(item);
      setMLoading(false);
    }
  };
  return (
    <>
      <div className="main">
        <i
          class="bx bxs-bookmarks bx-border-circle bx-tada-hover"
          onClick={() => {
            setShowModal(true), getBookMarked();
          }}
        ></i>
        <div className="container">
          <header>Jokes Application</header>
          <div className="content">
            {!show ? (
              <>
                <p className="setup">{joke.setup}</p>
                <p className="punchline">{joke.punchLine}</p>
              </>
            ) : (
              <Spinner />
            )}
          </div>
          <div className="btn">
            <button class="newJoke noselect" onClick={getJoke}>
              <span class="text">New Joke</span>
              <span class="icon">
                <i class="bx bx-refresh bx-spin-hover"></i>
              </span>
            </button>
            <button class="bookmark noselect" onClick={()=> {bookmark(),setNotify(true)}}>
              <span class="text">BookMark</span>
              <span class="icon">
                <i class="bx bx-bookmark-plus bx-tada-hover"></i>
              </span>
            </button>
          </div>
          <div className="footer">
            <p>Author : Jatin</p>
            <a href="https://github.com/JatinSc/prt-a_03-may-23/tree/master/jokes_app" target="blank">Source Code ❤️</a>
          </div>
        </div>
      </div>
      {
notify?<Notify/>:null
      }
      {showModal ? (
        <>
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header
              style={{ borderBottom: "2px solid #0c90e2" }}
              closeButton
            >
              <Modal.Title id="example-custom-modal-styling-title">
                <div style={{ display: "flex" }}>
                  <i class="bx bxs-book-bookmark bx-lg"></i>
                  <p className="header">Bookmarks</p>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {!MLoading ? (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Joke</th>
                      <th>Punchline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bMarkData.map((data, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{data?.setup}</td>
                        <td>{data?.punchLine}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <Spinner />
              )}
            </Modal.Body>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default App;
