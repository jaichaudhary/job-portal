import React, { useState } from "react";
import { jobsData } from "./api/dummyData";
import { UilAngleLeft } from "@iconscout/react-unicons";
import { UilShareAlt } from "@iconscout/react-unicons";

function Jobs() {
  const [isItemClicked, setIsItemClicked] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  return (
    <div className="jobs">
      <div className="jobs__headParent">
        <div className="jobs__heading">Jobs 2741</div>
        <div className="jobs__filter">
          <div className="jobs__filterBtn">
            <div className="jobs__ftext">Filter 0</div>
          </div>
          <div className="jobs__filterBtn">
            <div className="jobs__ftext"> Newest First</div>
          </div>
        </div>
      </div>
      <div className="jobs__details">
        <div className="jobs__left">
          {jobsData &&
            jobsData.map((item, index) => {
              return (
                <div
                  key={index + item.company}
                  onClick={() => {
                    setIsItemClicked(true);
                    setClickedItem(item);
                  }}
                  className="jobs__card"
                >
                  <div className="jobs__title"> {item.title}</div>
                  <div className="jobs__salary"> {item.salary}</div>
                  <div className="jobs__role"> {item.role}</div>
                  <div className="jobs__cardBottom">
                    <div className="jobs__salary"> {item.company}</div>
                    <div className="jobs__time">2 days ago</div>
                  </div>
                </div>
              );
            })}
        </div>

        {isItemClicked && (
          <div className="jobs__right">
            <div className="jobs__fixedItem ">
              <div
                onClick={() => {
                  setIsItemClicked(false);
                }}
              >
                <UilAngleLeft color={"black"} />
              </div>

              <UilShareAlt color={"black"} />
            </div>
            {clickedItem && (
              <div>
                <div className="jobs__detailsCard">
                  <div className="jobs__title jobs__detailsTitle">
                    {clickedItem.title}
                  </div>
                  <div className="jobs__salary jobs__detailsSalary">
                    {clickedItem.salary}
                  </div>
                  <div className="jobs__role">{clickedItem.role}</div>
                  <div className="jobs__cardBottom">
                    <div className="jobs__salary jobs__detailsSalary">
                      {clickedItem.company}
                    </div>
                    <div className="jobs__time">2 days ago</div>
                  </div>
                  <div>
                    <div className="jobs__item">
                      <div className="jobs__itemBtn">
                        <div className="jobs__ftext">{`${clickedItem.jobType} work`}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="jobs__skills">Core competencies</div>
                    <div className="jobs__item">
                      {clickedItem.tech_stack.map((item, index) => {
                        return (
                          <div key={index + item} className="jobs__itemBtn">
                            <div className="jobs__ftext">{item}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="jobs__skills">Expertise</div>
                    <div className="jobs__item">
                      <div className="jobs__itemBtn">
                        <div className="jobs__ftext">
                          {clickedItem.expertise}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="jobs__skills">
                      Working conditions and benefits
                    </div>
                    <div className="jobs__item">
                      {clickedItem.benefits.map((item, index) => {
                        return (
                          <div key={index + item} className="jobs__itemBtn">
                            <div className="jobs__ftext">{item}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="jobs__skills">Teams</div>
                    <div className="jobs__item">
                      <div className="jobs__ftext">{clickedItem.team}</div>
                    </div>
                  </div>

                  <div>
                    <div className="jobs__skills">Responsibilities</div>
                    <div className="jobs__item">
                      <div className="jobs__ftext">
                        {clickedItem.responsibilities}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="jobs__skills">About the project</div>
                    <div className="jobs__item">
                      <div className="jobs__ftext">{clickedItem.about}</div>
                    </div>
                  </div>

                  <div>
                    <div className="jobs__skills">Company description</div>
                    <div className="jobs__item">
                      <div className="jobs__ftext">
                        {clickedItem.description}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jobs__apply">
                  <div className="jobs__applyBtn"> Fill my resume</div>
                </div>

                <div className="jobs__match">
                  <div className="jobs__skills">Best job match 12</div>

                  <div className="jobs__recommendations">
                    {jobsData &&
                      jobsData.map((item, index) => {
                        return (
                          <div
                            key={index + item.company}
                            onClick={() => {
                              setIsItemClicked(true);
                              setClickedItem(item);
                            }}
                            className="jobs__card card_width"
                          >
                            <div className="jobs__title"> {item.title}</div>
                            <div className="jobs__salary"> {item.salary}</div>
                            <div className="jobs__role"> {item.role}</div>
                            <div className="jobs__salary"> {item.jobType}</div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;
