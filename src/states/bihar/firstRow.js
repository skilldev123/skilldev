import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from "recharts";
import axios from "axios";
import { useEffect, useState } from "react";

//for layout Container from react-bootstrap

import Table from "react-bootstrap/Table";

import { useNavigate } from "react-router-dom";
import "../../App.css";

let civilTechCompleted = 0;
let civilWorkshopCompleted = 0;

let delTechCompleted = 0;
let delWorkshopCompleted = 0;

let insTechCompleted = 0;
let insWorkshopCompleted = 0;

export default function Chart() {
  let navigate = useNavigate();
  const username = localStorage.getItem("username");
  const jwt = localStorage.getItem("jwt");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };

    Promise.all([
      axios.get(`${apiUrl}/college/test/?formCode=1000`, { headers }),
      axios.get(`${apiUrl}/college/test/?formCode=2000`, { headers }),
      axios.get(`${apiUrl}/college/test/?formCode=3000`, { headers }),
    ])
      .then((responses) => {
        setData1(responses[0].data);
        setData2(responses[1].data);
        setData3(responses[2].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jwt, apiUrl]);

  if (
    data1 &&
    data1.length > 1 &&
    data2 &&
    data2.length > 1 &&
    data3 &&
    data3.length > 1
  ) {
    civilTechCompleted = (data1[1].tech_actual / 9).toFixed(2);
    civilWorkshopCompleted = ((data1[1].wks_actual / 48) * 5).toFixed(2);

    delTechCompleted = (data2[1].tech_actual / 9).toFixed(2);
    delWorkshopCompleted = ((data2[1].wks_actual / 51) * 5).toFixed(2);

    insTechCompleted = (data3[1].tech_actual / 9).toFixed(2);
    insWorkshopCompleted = ((data3[1].wks_actual / 51) * 5).toFixed(2);
  }

  const civildata = [
    { name: "Techlab", Techlab: civilTechCompleted },
    { name: "Workshop", Workshop: civilWorkshopCompleted },
  ];
  const deldata = [
    { name: "Techlab", Techlab: delTechCompleted },
    { name: "Workshop", Workshop: delWorkshopCompleted },
  ];
  const insdata = [
    { name: "Techlab", Techlab: insTechCompleted },
    { name: "Workshop", Workshop: insWorkshopCompleted },
  ];

  const handleUpload = () => {
    if (username.startsWith("reg")) {
      window.alert("Sorry! You are not authorized to access this feature");
    }else{
      navigate("/uploadImageBihar");
    }
  
  };

  const [highlighted1, setHighlighted1] = useState(false);
  const [highlighted2, setHighlighted2] = useState(false);
  const [highlighted3, setHighlighted3] = useState(false);

  const handleEnter1 = () => {
    setHighlighted1(true);
  };

  const handleLeave1 = () => {
    setHighlighted1(false);
  };
  const handleEnter2 = () => {
    setHighlighted2(true);
  };
 
  const handleLeave2 = () => {
    setHighlighted2(false);
  };
  const handleEnter3 = () => {
    setHighlighted3(true);
  };

  const handleLeave3 = () => {
    setHighlighted3(false);
  };

  return (
    <>
      <div className="chartcontainer">
          <div className="firstcontainer">
          <div className="namer">
            <p className="names">Phase 1</p>
            <p className="names">(60 ITIs)</p>
            <p className="names">Project overview</p>
          </div>
          <div className="uploadimage" onClick={handleUpload}>
            Upload Site-Status Photo
          </div>
          </div>
          
  
        <div>
          <Table bordered hover className="childtable1">
            <thead>
              <tr className="headingfirst">
                <td className="myDiv2">Execution Activity</td>
              </tr>
            </thead>
            <tbody>
              <tr
                className="rowf1"
                onMouseEnter={handleEnter1}
                onMouseLeave={handleLeave1}
              >
                <td className="fontsize">Overall Civil Readiness %</td>
              </tr>
              <tr
                className="rows1"
                onMouseEnter={handleEnter2}
                onMouseLeave={handleLeave2}
              >
                <td className="fontsize">Overall Delivery Readiness %</td>
              </tr>
              <tr
                className="rowt1"
                onMouseEnter={handleEnter3}
                onMouseLeave={handleLeave3}
              >
                <td className="fontsize">Overall Installation Readiness %</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div>
          <Table bordered hover className="childtable2">
            <thead>
              <tr className="headingfirst">
                <td id="myDiv">TECHLAB</td>
                <td className="myDiv2">WORKSHOP</td>
              </tr>
            </thead>
            <tbody>
              <tr className="rowf">
                <td className="aa">{civilTechCompleted} %</td>
                <td className="bb"> {civilWorkshopCompleted} %</td>
              </tr>
              <tr className="rows">
                <td className="aa">{delTechCompleted} %</td>
                <td className="bb">{delWorkshopCompleted} %</td>
              </tr>
              <tr className="rowt">
                <td className="aa">{insTechCompleted} %</td>
                <td className="bb">{insWorkshopCompleted} %</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="threecharts">
          <div
            className={
              highlighted1 ? "chart-container highlighted" : "barchart"
            }
          >
            <BarChart width={200} height={160} data={civildata}>
              <XAxis dataKey="name" />
              <YAxis type="number" domain={[0, 100]} />
              <Tooltip />

              <Bar
                isAnimationActive={false}
                dataKey="Techlab"
                stackId="a"
                fill="#ffc000"
              >
                <LabelList
                  className="labellist"
                  dataKey="Techlab"
                  position="top"
                />
              </Bar>
              <Bar
                isAnimationActive={false}
                dataKey="Workshop"
                stackId="a"
                fill="#2f5597"
              >
                <LabelList dataKey="Workshop" position="top" />
              </Bar>
            </BarChart>
            <div className="textbelow">Civil Readiness %</div>
          </div>
          <div
            className={
              highlighted2 ? "chart-container highlighted" : "barchart"
            }
          >
            <BarChart width={200} height={160} data={deldata}>
              <XAxis dataKey="name" />
              <YAxis type="number" domain={[0, 100]} />
              <Tooltip />

              <Bar
                isAnimationActive={false}
                dataKey="Techlab"
                stackId="a"
                fill="#ffc000"
              >
                <LabelList
                  className="labellist"
                  dataKey="Techlab"
                  position="top"
                />
              </Bar>
              <Bar
                isAnimationActive={false}
                dataKey="Workshop"
                stackId="a"
                fill="#2f5597"
              >
                <LabelList dataKey="Workshop" position="top" />
              </Bar>
            </BarChart>
            <div className="textbelow">Delivery Readiness %</div>
          </div>
          <div
            className={
              highlighted3 ? "chart-container highlighted" : "barchart"
            }
          >
            <BarChart width={200} height={160} data={insdata}>
              <XAxis dataKey="name" />
              <YAxis type="number" domain={[0, 100]} />
              <Tooltip />

              <Bar
                isAnimationActive={false}
                dataKey="Techlab"
                stackId="a"
                fill="#ffc000"
              >
                <LabelList
                  className="labellist"
                  dataKey="Techlab"
                  position="top"
                />
              </Bar>
              <Bar
                isAnimationActive={false}
                dataKey="Workshop"
                stackId="a"
                fill="#2f5597"
              >
                <LabelList dataKey="Workshop" position="top" />
              </Bar>
            </BarChart>
            <div className="textbelow">Installation Readiness %</div>
          </div>
          {/* <h1 className="stats">Overall Civil Status</h1> */}
        </div>
      </div>
    </>
  );
}
