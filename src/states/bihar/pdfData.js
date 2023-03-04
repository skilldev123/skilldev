import "./pdf.css";
import Table from "react-bootstrap/Table";
import React from "react";
import axios from "axios";
import ChildComponent from "./eightchartpdf";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Barchart2 from "./barChart2";
import { Icon } from "semantic-ui-react";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

const jwt = localStorage.getItem("jwt");
const thStyle = {
  padding: "0%",
};

class DataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      currentDate: new Date().toLocaleDateString(),

      overall1: [],
      overall2: [],
      overall3: [],

      data1: [],
      data2: [],
      data3: [],

      patnadata1: [],
      patnadata2: [],
      patnadata3: [],
      patnadata4: [],
      patnadata5: [],
      patnadata6: [],
      motiharidata1: [],
      motiharidata2: [],
      motiharidata3: [],
      motiharidata4: [],
      motiharidata5: [],
      motiharidata6: [],
      katihardata1: [],
      katihardata2: [],
      katihardata3: [],
      katihardata4: [],
      katihardata5: [],
      katihardata6: [],
      muzzdata1: [],
      muzzdata2: [],
      muzzdata3: [],
      muzzdata4: [],
      muzzdata5: [],
      muzzdata6: [],
      mungerdata1: [],
      mungerdata2: [],
      mungerdata3: [],
      mungerdata4: [],
      mungerdata5: [],
      mungerdata6: [],
      nalandadata1: [],
      nalandadata2: [],
      nalandadata3: [],
      nalandadata4: [],
      nalandadata5: [],
      nalandadata6: [],
      rohtasdata1: [],
      rohtasdata2: [],
      rohtasdata3: [],
      rohtasdata4: [],
      rohtasdata5: [],
      rohtasdata6: [],
      supauldata1: [],
      supauldata2: [],
      supauldata3: [],
      supauldata4: [],
      supauldata5: [],
      supauldata6: [],
    };
  }

  componentDidMount() {
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };

    this.interval = setInterval(() => {
      this.setState({
        currentDate: new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
      });
    }, 1000);

    const endpoints0 = [
      `${apiUrl}/college/test/?formCode=1000`,
      `${apiUrl}/college/test/?formCode=2000`,
      `${apiUrl}/college/test/?formCode=3000`,
    ];
    const endpoints01 = [
      `${apiUrl}/college/test/?formCode=1000`,
      `${apiUrl}/college/test/?formCode=2000`,
      `${apiUrl}/college/test/?formCode=3000`,
    ];

    const endpoints1 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=PATNA`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=PATNA`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=PATNA`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=PATNA`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=PATNA`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=PATNA`,
    ];
    const endpoints2 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=MOTIHARI`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=MOTIHARI`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=MOTIHARI`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=MOTIHARI`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=MOTIHARI`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=MOTIHARI`,
    ];

    const endpoints3 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=KATIHAR`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=KATIHAR`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=KATIHAR`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=KATIHAR`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=KATIHAR`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=KATIHAR`,
    ];

    const endpoints4 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=MUZAFFARPUR`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=MUZAFFARPUR`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=MUZAFFARPUR`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=MUZAFFARPUR`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=MUZAFFARPUR`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=MUZAFFARPUR`,
    ];
    const endpoints5 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=Munger`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=Munger`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=Munger`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=Munger`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=Munger`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=Munger`,
    ];
    const endpoints6 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=NALANDA`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=NALANDA`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=NALANDA`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=NALANDA`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=NALANDA`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=NALANDA`,
    ];
    const endpoints7 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=ROHTAS`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=ROHTAS`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=ROHTAS`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=ROHTAS`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=ROHTAS`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=ROHTAS`,
    ];
    const endpoints8 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=SUPAUL`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=SUPAUL`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=SUPAUL`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=SUPAUL`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=SUPAUL`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=SUPAUL`,
    ];

    endpoints0.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`overall${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });
    endpoints01.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`data${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints1.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`patnadata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints2.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`motiharidata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints3.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`katihardata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints4.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`muzzdata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints5.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`mungerdata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints6.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`nalandadata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints7.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`rohtasdata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints8.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`supauldata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  render() {
    const { data1 } = this.state;
    const { data2 } = this.state;
    const { data3 } = this.state;

    let threeDMap = [];
    for (let i = 0; i < 8; i++) {
      let layer = [];
      for (let j = 0; j < 3; j++) {
        let row = [];
        for (let k = 0; k < 2; k++) {
          row.push(0);
        }
        layer.push(row);
      }
      threeDMap.push(layer);
    }

    if (
      data1 &&
      data1.length > 1 &&
      data2 &&
      data2.length > 1 &&
      data3 &&
      data3.length > 1
    ) {
      for (let i = 0; i < 8; i++) {
        let layer = [];
        for (let j = 0; j < 3; j++) {
          let row = [];
          if (j === 0) {
            row.push(
              Math.ceil(
                (data1[0][i].completed.tech / data1[0][i].completed.tech_tot) *
                  100
              )
            );
            row.push(
              Math.ceil(
                (data1[0][i].completed.wks / data1[0][i].completed.wks_tot) *
                  100
              )
            );
          } else if (j === 1) {
            row.push(
              Math.ceil(
                (data2[0][i].completed.tech / data2[0][i].completed.tech_tot) *
                  100
              )
            );
            row.push(
              Math.ceil(
                (data2[0][i].completed.wks / data2[0][i].completed.wks_tot) *
                  100
              )
            );
          } else {
            row.push(
              Math.ceil(
                (data3[0][i].completed.tech / data3[0][i].completed.tech_tot) *
                  100
              )
            );
            row.push(
              Math.ceil(
                (data3[0][i].completed.wks / data3[0][i].completed.wks_tot) *
                  100
              )
            );
          }
          layer.push(row);
        }
        threeDMap.push(layer);
      }
    }

    const { overall1 } = this.state;
    const { overall2 } = this.state;
    const { overall3 } = this.state;

    let civilTechCompleted = 0;
    let civilWorkshopCompleted = 0;

    let delTechCompleted = 0;
    let delWorkshopCompleted = 0;

    let insTechCompleted = 0;
    let insWorkshopCompleted = 0;

    if (
      overall1 &&
      overall1.length > 1 &&
      overall2 &&
      overall2.length > 1 &&
      overall3 &&
      overall3.length > 1
    ) {
      civilTechCompleted = (overall1[1].tech_actual / 9).toFixed(2);
      civilWorkshopCompleted = ((overall1[1].wks_actual / 48) * 5).toFixed(2);
      delTechCompleted = (overall2[1].tech_actual / 9).toFixed(2);
      delWorkshopCompleted = ((overall2[1].wks_actual / 51) * 5).toFixed(2);
      insTechCompleted = (overall3[1].tech_actual / 9).toFixed(2);
      insWorkshopCompleted = ((overall3[1].wks_actual / 51) * 5).toFixed(2);
    }

    const { patnadata1 } = this.state;
    const { patnadata2 } = this.state;
    const { patnadata3 } = this.state;
    const { patnadata4 } = this.state;
    const { patnadata5 } = this.state;
    const { patnadata6 } = this.state;

    const { motiharidata1 } = this.state;
    const { motiharidata2 } = this.state;
    const { motiharidata3 } = this.state;
    const { motiharidata4 } = this.state;
    const { motiharidata5 } = this.state;
    const { motiharidata6 } = this.state;

    const { katihardata1 } = this.state;
    const { katihardata2 } = this.state;
    const { katihardata3 } = this.state;
    const { katihardata4 } = this.state;
    const { katihardata5 } = this.state;
    const { katihardata6 } = this.state;

    const { muzzdata1 } = this.state;
    const { muzzdata2 } = this.state;
    const { muzzdata3 } = this.state;
    const { muzzdata4 } = this.state;
    const { muzzdata5 } = this.state;
    const { muzzdata6 } = this.state;

    const { mungerdata1 } = this.state;
    const { mungerdata2 } = this.state;
    const { mungerdata3 } = this.state;
    const { mungerdata4 } = this.state;
    const { mungerdata5 } = this.state;
    const { mungerdata6 } = this.state;

    const { nalandadata1 } = this.state;
    const { nalandadata2 } = this.state;
    const { nalandadata3 } = this.state;
    const { nalandadata4 } = this.state;
    const { nalandadata5 } = this.state;
    const { nalandadata6 } = this.state;

    const { rohtasdata1 } = this.state;
    const { rohtasdata2 } = this.state;
    const { rohtasdata3 } = this.state;
    const { rohtasdata4 } = this.state;
    const { rohtasdata5 } = this.state;
    const { rohtasdata6 } = this.state;

    const { supauldata1 } = this.state;
    const { supauldata2 } = this.state;
    const { supauldata3 } = this.state;
    const { supauldata4 } = this.state;
    const { supauldata5 } = this.state;
    const { supauldata6 } = this.state;

    const cellContentsCivilTechHead = [
      "Basic Infra",
      "Flooring",
      "False Ceiling",
      "Internal Painting",
      "Windows",
      "Doors",
      "Aluminium Partition",
      "AC",
      "MCB",
      "Networking",
      "LT Pannel",
      "Electric Supply",
      "UPS",
      "External Painting",
      "Cleaning",
    ];
    const cellContentsCivilTech = [
      "Basic_Infra",
      "Flooring",
      "False_Ceiling",
      "Internal_Painting",
      "Windows",
      "Doors",
      "Aluminium_Partition",
      "AC",
      "MCB",
      "Networking",
      "LT_Pannel",
      "Electric_Supply",
      "UPS",
      "External_Painting",
      "Cleaning",
    ];
    const cellContentsDelTechHead = [
      "Furniture",
      "Server Rack",
      "Workstations and Monitors",
      "Server",
      "Distance Learning Classroom",
      "IOT Kit",
      "IOT Desktops",
      "3D Printer Tech1",
      "3D Printer Tech2",
      "TechTools Product Design1",
      "TechTools Product Design-2",
      "TechTools Product Verification-1",
      "TechTools Product Verification-2",
      "TechTools Advance Manufacturing",
      "E-Learning Platform",
    ];
    const cellContentsDelTech = [
      "Furniture",
      "Server_Rack",
      "Workstations_and_Monitors",
      "Server",
      "Distance_Learning_Classroom",
      "IOT_Kit",
      "IOT_Desktops",
      "D3_Printer_Tech1",
      "D3_Printer_Tech2",
      "Tech_Tools_Product_Design1",
      "Tech_Tools_Product_Design2",
      "Tech_Tools_Product_Verification1",
      "Tech_Tools_Product_Verification2",
      "Tech_Tools_Advance_Manufacturing1",
      "E_Learning_Platform",
    ];
    const cellContentsCivilWksHead = [
      "Basic Infra",
      "Flooring",
      "Internal Painting",
      "Windows",
      "Shutter",
      "Aluminium Partition",
      "AC",
      "MCB",
      "Networking",
      "LT Pannel",
      "Electric Supply",
      "UPS",
      "DG Set",
      "External Painting",
      "Cleaning",
      "Floor Painting",
    ];
    const cellContentsCivilWks = [
      "Basic_Infra",
      "Flooring",
      "Internal_Painting",
      "Windows",
      "Shutter",
      "Aluminium_Partition",
      "AC",
      "MCB",
      "Networking",
      "LT_Pannel",
      "Electric_Supply",
      "UPS",
      "DG_Set",
      "External_Painting",
      "Cleaning",
      "Floor_Painting",
    ];
    const cellContentsDelWksHead = [
      "Laser Cutter",
      "PaintBooth",
      "Car Lift",
      "Industrial Process Control Unit",
      "VR Welding & Painting",
      "Auto MRO Cut Sections",
      "Battery Electrical Vehicle",
      "IO Engine Vehicle",
      "EV Kit",
      "Industrial Robotics Setup",
      "VFD Machine",
      "Plumbing Kit",
      "CNC Machine",
      "VMC Machine",
      "Tools & Meters",
      "Advance Machining Simulators",
    ];

    const cellContentsDelWks = [
      "Laser_Cutter",
      "PaintBooth",
      "Car_Lift",
      "Industrial_Process_Control_Unit",
      "VR_Welding_and_Painting",
      "Auto_MRO_Cut_Sections",
      "Battery_Electrical_Vehicle",
      "IO_Engine_Vehicle",
      "EV_Kit",
      "Industrial_Robotics_Setup",
      "VFD_Machine",
      "Plumbing_Kit",
      "CNC_Machine",
      "VMC_Machine",
      "Tools_and_Meters",
      "Advance_Machining_Simulators",
    ];

    function renderIcon(val) {
      let color;
      if (val === -1) {
        color = "grey";
        return <Icon color={color} name="square outline" />;
      } else if (val === 0) {
        color = "yellow";
        return <Icon color={color} name="hourglass half"  />;
      } else if (val === 1) {
        color = "green";
        return <Icon color={color} name="check circle" />;
      }
    }

    return (
      <div className="full-container">
        <div className="onepage">
          <div className="firstpagebox">
            <h1 className="heading-one">Overall Report: ( Date: {this.state.currentDate} )</h1>
            <div className="overall-box">
              <Table bordered>
                <thead>
                  <tr>
                    <td className="grey-color">Execution Activity</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Overall Civil Readiness %</td>
                  </tr>
                  <tr>
                    <td>Overall Delivery Readiness %</td>
                  </tr>
                  <tr>
                    <td>Overall Installation Readiness %</td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <td className="yellow-color" >TECHLAB</td>
                    <td className="blue-color" >WORKSHOP</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{civilTechCompleted} %</td>
                    <td> {civilWorkshopCompleted} %</td>
                  </tr>
                  <tr>
                    <td>{delTechCompleted} %</td>
                    <td>{delWorkshopCompleted} %</td>
                  </tr>
                  <tr>
                    <td>{insTechCompleted} %</td>
                    <td>{insWorkshopCompleted} %</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="cluster-charts">
              <Container>
                <Row>
                  <Col className="colls">
                    <ChildComponent
                      data={threeDMap}
                      cnum={threeDMap.length === 16 ? 8 : 0}
                    />
                  </Col>
                  <Col className="colls">
                    <ChildComponent
                      data={threeDMap}
                      cnum={threeDMap.length === 16 ? 9 : 0}
                    />
                  </Col>
                  <Col className="colls">
                    <ChildComponent
                      data={threeDMap}
                      cnum={threeDMap.length === 16 ? 10 : 0}
                    />
                  </Col>
                  <Col className="colls">
                    <ChildComponent
                      data={threeDMap}
                      cnum={threeDMap.length === 16 ? 11 : 0}
                    />
                  </Col>
                  <Col className="colls">
                    <ChildComponent
                      data={threeDMap}
                      cnum={threeDMap.length === 16 ? 12 : 0}
                    />
                  </Col>
                  <Col className="colls">
                    <ChildComponent
                      data={threeDMap}
                      cnum={threeDMap.length === 16 ? 13 : 0}
                    />
                  </Col>
                  <Col className="colls">
                    <ChildComponent
                      data={threeDMap}
                      cnum={threeDMap.length === 16 ? 14 : 0}
                    />
                  </Col>
                  <Col className="colls">
                    <ChildComponent
                      data={threeDMap}
                      cnum={threeDMap.length === 16 ? 15 : 0}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
            <Row className="clusterwise-chart-container">
              <Col className="bcc">
                <Barchart2 fid={1001} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={1002} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={2001} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={2002} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={3001} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={3002} />
              </Col>
            </Row>
          </div>
        </div>
        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: PATNA)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {patnadata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                      
                       {renderIcon(data[content])}
             
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {patnadata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {patnadata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* patna workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: PATNA)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {patnadata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {patnadata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {patnadata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster: katihar */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: KATIHAR)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {katihardata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {katihardata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {katihardata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* katihar workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: KATIHAR)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {katihardata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {katihardata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {katihardata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster: motihari */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: MOTIHARI)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {motiharidata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {motiharidata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {motiharidata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* motihari workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: MOTIHARI)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {motiharidata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {motiharidata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {motiharidata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* muzaffarpur */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: MUZAFFARPUR)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {muzzdata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {muzzdata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {muzzdata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* muzz workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: MUZAFFARPUR)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {muzzdata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {muzzdata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {muzzdata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster munger */}
        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: MUNGER)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {mungerdata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {mungerdata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {mungerdata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* muzz workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: MUNGER)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {mungerdata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {mungerdata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {mungerdata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster nalanda */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: NALANDA)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {nalandadata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {nalandadata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {nalandadata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* nalanda workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: NALANDA)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {nalandadata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {nalandadata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {nalandadata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster rohtas */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: ROHTAS)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {rohtasdata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {rohtasdata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {rohtasdata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* rohtas workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: ROHTAS)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {rohtasdata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {rohtasdata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {rohtasdata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster supaul */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: SUPAUL)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {supauldata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {supauldata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {supauldata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* rohtas workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: SUPAUL)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {supauldata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {supauldata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {supauldata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default DataComponent;
