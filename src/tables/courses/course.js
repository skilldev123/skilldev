import TextTruncate from "../truncate";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Table, Popup } from "semantic-ui-react";


// import { useNavigate } from "react-router-dom";

export default function Course(props) {
  const jwt = localStorage.getItem("jwt");
  const state = localStorage.getItem("state");
  let ClustName = props.clust ? props.clust : (state==="Bihar")? "PATNA": "CHENNAI";
  const fId = props.form_id;
  const [data, setData] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
    // const apiUrl = `${apiUrl}/course/byCluster?Cluster=${ClustName}`;
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    axios
      .get(`${apiUrl}/course/byCluster?Cluster=${ClustName}&form_Id=${fId}`, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ClustName, jwt, apiUrl, fId]);

  function renderIcon(val) {
    let color;
    if (val === 0) {
      color = "grey";
      return <Icon color={color} name="square outline" size="small" />;
    } else if (val === 1) {
      color = "blue";
      return <Icon color={color} name="check circle" size="small" />;
    }
    
  }
  




  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }

  const headerTitles = [
    
    "Jr. Product Designer- Generic",
    "Jr. Product Designer and Developer -Generic",
    "Fundamentals of Innovation and Design Thinking ",
    "Auto Electrical Design Technician",
    "Product Verifier and Analyst - Generic",
    "Automobile Teardown and Benchmarking Jr. Technician",
    "Advanced Automobile Jr. Technician ",
    "Automobile Repair & Maintenance Jr Technician",
    "Auto Electrical Maintenance Jr. Technician",
    "Battery Electric Vehicle Jr. Technician",
    "Internet of Things Application Jr. Technician ",
    "Jr. CAM Programmer CNC Lathe",
    "Jr. CAM Programmer CNC Milling & Turn Mill",
    "CNC Milling Machine Jr. Technician and Programmer",
    "CNC Lathe Machine Jr. Technician and Programmer",
    "Advance CNC Machining (Rotary 4th Axis and 5th Axis Mill)",
    "Additive Manufacturing Process Jr. Technician Using Extended Learning Technique",
    "Jr. Welding Technician Using Simulated Learning Technique",
    "Advanced Painting Technician Using Simulated Learning Technique",
    "Process Control & Automation Technician",
    "Jr. Robot Operator and Programmer - Material Handling",
    "Jr. Robot Operator and Programmer - Arc Welding",
    "Advanced Plumbing Technician",
  ];

  const job = [
    "Jr_Product_Designer",
    "Jr_Prod_Designer_Developer",
    "Innovation_Design_Thinking",
    "Auto_Electrical_Design_Technician",
    "Product_Verifier_Analyst",
    "Auto_Teardown_Benchmarking",
    "Advanced_Automobile",
    "Auto_Repair_Maintainance",
    "Auto_Electrical_Maintainance",
    "Battery_EV_Technician",
    "IOT_Application_Technician",
    "CAM_Prog_CNC_Lathe",
    "CAM_Programmer_CNC_Milling",
    "CNC_Milling_Machine_Technician",
    "CNC_Lathe_Machine",
    "Advance_CNC_Machining",
    "Additive_Manufacturing_Process",
    "Welding_Technician",
    "Advanced_Painting_Technician",
    "Process_Control_Automation",
    "Robot_Operator_Programmer_Material",
    "Robot_Operator_Programmer_Arc",
    "Advanced_Plumbing_Technician",
  ];

  return (
    <>
      <div className="coursecontainer">
        <div>
          <h2 className="formheader4">Courses</h2>
          <div className="legend">
            Yet to start: <Icon color="grey" name="square outline" size="small" />{" "}
            Started:
            <Icon color="blue" name="check circle" size="small" />
          </div>
        </div>
        <Table className="coursestable" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">ITI NAME</Table.HeaderCell>
              {headerTitles.map((title, index) => (
                <Table.HeaderCell key={index} className="th2">
                   <TextTruncate text={title} limit={15} />
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell collapsing className="itiname">
                    {data.ITI_Name}
                  </Table.Cell>

                  {job.map((jobTitle) => (
                    <Table.Cell key={jobTitle} textAlign="center" selectable>
                      {data[jobTitle].changeStatus === 1 ? (
                        <Popup
                          hoverable
                          trigger={
                            <div>{renderIcon(data[jobTitle].changeStatus)}</div>
                          }
                          content={
                            <div style={{ width: "15vw", height: "10vh" }}>
                              <p>
                                Start Date:{" "}
                                {formatDate(data[jobTitle].startDate)}
                              </p>
                              <p>
                                End Date: {formatDate(data[jobTitle].endDate)}
                              </p>
                            </div>
                          }
                        />
                      ) : (
                        <Popup
                          hoverable
                          trigger={
                            <div>{renderIcon(data[jobTitle].changeStatus)}</div>
                          }
                          content={
                            <div style={{ width: "10vw", height: "5vh" }}>
                                No Data available!
                            </div>
                          }
                        />
                    
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
