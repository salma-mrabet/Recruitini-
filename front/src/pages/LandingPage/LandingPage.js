import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import AOS from "aos";
import "animate.css";
import About from "./AboutUs/About";
import "./aboutUs.css";

AOS.init();

export default function LandingPage(props) {
  const { user } = useAuthContext();
  return (
    <>
    <div className="main0"></div>
      <div className="main">
        <Container>
          <Row>
            <div className="intro-text ">
              <div>
                <h1 className="title ">Welcome to Recruitini</h1>
                <p className="subtitle">
                  One Safe place for your recruitement process
                </p>
                <div class="animated-title">
                  <div class="text-bottom"></div>
                </div>
                <div>
                  {!user && (
                    <div className="buttonContainer">
                      <a href="/login">
                        <Button
                          size="lg"
                          className="landingbutton"
                          variant="outline-primary"
                        >
                          Login
                        </Button>
                      </a>
                      <a href="/signup">
                        <Button
                          size="lg"
                          className="landingbutton"
                          variant="outline-primary"
                        >
                          Register
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className="main2">
        <div className="content float-left " data-aos="fade-right">
          <div className="content-left">
            <div className="item-title">
              Receive advice and career path recommendations{" "}
            </div>
            <p>Recieve advice for additional skills to work on.</p>
            <ul>
              <li>
                <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Duis aute irure dolor in reprehenderit</span>
              </li>
              <li>
                <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Excepteur sint occaecat</span>
              </li>
              <li>
                <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Amet consectetur adipiscing elit</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="content float-right" data-aos="fade-left">
                  <div className="content-right">
                    <div className="item-title">Get recommendation based on your skills</div>
                    <p>
                    deposit your cv on the platform and the most suitable offers according to the candidate’s skills

                    </p>
                    <ul>
                      <li>
                        <svg
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Duis aute irure dolor in reprehenderit</span>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Excepteur sint occaecat</span>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Amet consectetur adipiscing elit</span>
                      </li>
                    </ul>
                  </div>
                </div>
      </div>

      <div className="main3">
        <About />
      </div>
      <div className="main3"></div>
    </>
  );
}
