import React from "react";
import data from "../Assest/Data.png";
import data1 from "../Assest/data1.png";
import user from "../Assest/user.jpg";

const RightMenu = () => {
  return (
    <div className="rightmenu">
      <div className="containermenu1">
        <h2>Upcoming Certifications</h2>
        <div style={{ display: "flex" }} className="content">
          <div className="part1" style={{ display: "flex" }}>
            <div className="info">
              <img style={{ height: "3rem" }} src={data} alt="data" />
            </div>

            <div class="info-div">
              <h5 class="certi">CERTIFICATION | ATTEMPT 1</h5>
              <h3 class="h3class">
                DATA ANALYSIS <br /> CERTIFICATION
              </h3>
              <h4 class="status">COMPLETED | 21 MAR 2022</h4>
            </div>
          </div>
          <div className="part2">
            <div class="data-div2">
              <h4 style={{ marginLeft: "2.5rem" }} class="exam">
                Exam Structure
              </h4>
              <ul class="list">
                <li>Round 1</li>
                <div className="chk">
                  <li class="opt">MCQS</li>
                  <li class="opt">Coding</li>
                </div>
              </ul>
              <ul class="list">
                <li>Round 2</li>
                <div className="chk">
                  <li class="opt">Project</li>
                </div>
              </ul>
            </div>
          </div>
          <div class="details">
            <h4 className="details2"> VIEW EXAM DETAILS</h4>
          </div>
        </div>
      </div>
      <div className="containermenu2">
        <h2>Continue Learning</h2>
        <div class="inside-container-2">
          <div class="dual-container">
            <div class="dual1">
              <div class="inside-dual1" style={{ display: "flex" }}>
                <div class="vis-div">
                  <img src={data1} alt="vis" class="data1" />
                </div>
                <div class="vis-div-inside">
                  <div class="info-div2">
                    <h3 class="data2">
                      DATA WRANGLING &<br /> VISUALIZATION
                    </h3>
                  </div>
                  <div class="user-name">
                    <img src={user} alt="user" class="user-img" />
                    <h4 class="test-i">Test Instructor</h4>
                  </div>
                  <div className="holding">
                    <div className="rating1">
                      <p className="botl3">Live Sessions</p>
                      <div className="blueline1"></div>
                    </div>
                    <div className="rating1">
                      <p className="botl3">Assigments</p>
                      <div className="blueline2"></div>
                    </div>
                    <div className="rating1">
                      <p className="botl3">MCQ Quiz</p>
                      <div className="blueline3"></div>
                    </div>
                  </div>
                </div>
                <div id="botleft2">
                  <p className="shift" id="botr1">
                    Today's Plan
                  </p>
                  <p className="shift shift2" id="botr2">
                    21 March 2022
                  </p>
                  <p className="shift" id="botr3">
                    <strong>
                      {" "}
                      Data Transformation using <br />
                      Pandas - 3
                    </strong>
                  </p>
                  <div className="up" style={{ display: "flex" }}>
                    <p className="shift" id="botr4">
                      Daily Feedback
                    </p>
                    <p className="shift" id="botr41">
                      <i>opens at 7:30 PM</i>{" "}
                    </p>
                  </div>

                  <div class="details3">
                    <h4 className="details4"> JOIN LIVE SESSION</h4>
                  </div>
                  <p className="shift" id="botr6">
                    BEGINS AT 7:30 PM
                  </p>
                </div>
                <div id="bottomrightbox">
                  <p id="bt1">Progress Overview</p>
                  <div id="bt2">
                    <b id="btl1">0%</b>
                    <b id="btr1">Overall Grade</b>
                    
                  </div>
                  
                  <div id="bt3">
                    <b id="btl2">0%</b>
                    <b id="btr2">Attendance</b>
                  </div>

                  <p id="bt4">VIEW DETAILED PROGRESS</p>
                </div>
              </div>
              <div class="inside-dual12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
