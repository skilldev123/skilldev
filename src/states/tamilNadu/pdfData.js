import "./pdf.css";
import Table from "react-bootstrap/Table";
import React from "react";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Barchart2 from "./barChart2";

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

      chennaidata1: [],
      chennaidata2: [],
      chennaidata3: [],
      chennaidata4: [],
      chennaidata5: [],
      chennaidata6: [],
      cuddaloredata1: [],
      cuddaloredata2: [],
      cuddaloredata3: [],
      cuddaloredata4: [],
      cuddaloredata5: [],
      cuddaloredata6: [],
      tirudata1: [],
      tirudata2: [],
      tirudata3: [],
      tirudata4: [],
      tirudata5: [],
      tirudata6: [],
      velloredata1: [],
      velloredata2: [],
      velloredata3: [],
      velloredata4: [],
      velloredata5: [],
      velloredata6: [],
      erodedata1: [],
      erodedata2: [],
      erodedata3: [],
      erodedata4: [],
      erodedata5: [],
      erodedata6: [],
      maduraidata1: [],
      maduraidata2: [],
      maduraidata3: [],
      maduraidata4: [],
      maduraidata5: [],
      maduraidata6: [],
      salemdata1: [],
      salemdata2: [],
      salemdata3: [],
      salemdata4: [],
      salemdata5: [],
      salemdata6: [],
      nilgiridata1: [],
      nilgiridata2: [],
      nilgiridata3: [],
      nilgiridata4: [],
      nilgiridata5: [],
      nilgiridata6: [],
      thenidata1: [],
      thenidata2: [],
      thenidata3: [],
      thenidata4: [],
      thenidata5: [],
      thenidata6: [],

      nagadata1: [],
      nagadata2: [],
      nagadata3: [],
      nagadata4: [],
      nagadata5: [],
      nagadata6: [],
      
      thanjadata1: [],
      thanjadata2: [],
      thanjadata3: [],
      thanjadata4: [],
      thanjadata5: [],
      thanjadata6: [],

      kandata1: [],
      kandata2: [],
      kandata3: [],
      kandata4: [],
      kandata5: [],
      kandata6: [],

      ramanathdata1: [],
      ramanathdata2: [],
      ramanathdata3: [],
      ramanathdata4: [],
      ramanathdata5: [],
      ramanathdata6: [],

      tirunelvidata1: [],
      tirunelvidata2: [],
      tirunelvidata3: [],
      tirunelvidata4: [],
      tirunelvidata5: [],
      tirunelvidata6: [],
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
      `${apiUrl}/college/test/?formCode=4000`,
      `${apiUrl}/college/test/?formCode=5000`,
      `${apiUrl}/college/test/?formCode=6000`,
    ];
 

    const endpoints1 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=CHENNAI`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=CHENNAI`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=CHENNAI`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=CHENNAI`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=CHENNAI`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=CHENNAI`,
    ];
    const endpoints2 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=CUDDALORE`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=CUDDALORE`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=CUDDALORE`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=CUDDALORE`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=CUDDALORE`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=CUDDALORE`,
    ];

    const endpoints3 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=TIRUVANNAMALAI`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=TIRUVANNAMALAI`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=TIRUVANNAMALAI`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=TIRUVANNAMALAI`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=TIRUVANNAMALAI`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=TIRUVANNAMALAI`,
    ];

    const endpoints4 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=VELLORE`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=VELLORE`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=VELLORE`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=VELLORE`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=VELLORE`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=VELLORE`,
    ];
    const endpoints5 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=ERODE`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=ERODE`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=ERODE`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=ERODE`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=ERODE`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=ERODE`,
    ];
    const endpoints6 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=MADURAI`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=MADURAI`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=MADURAI`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=MADURAI`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=MADURAI`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=MADURAI`,
    ];
    const endpoints7 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=SALEM`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=SALEM`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=SALEM`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=SALEM`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=SALEM`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=SALEM`,
    ];
    const endpoints8 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=THE NILGIRIS`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=THE NILGIRIS`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=THE NILGIRIS`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=THE NILGIRIS`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=THE NILGIRIS`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=THE NILGIRIS`,
    ];

    const endpoints9 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=THENI`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=THENI`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=THENI`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=THENI`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=THENI`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=THENI`,
    ];

    const endpoints10 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=NAGAPATTINAM`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=NAGAPATTINAM`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=NAGAPATTINAM`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=NAGAPATTINAM`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=NAGAPATTINAM`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=NAGAPATTINAM`,
    ];

    const endpoints11 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=THANJAVUR`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=THANJAVUR`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=THANJAVUR`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=THANJAVUR`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=THANJAVUR`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=THANJAVUR`,
    ];

    const endpoints12 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=KANNIYAKUMARI`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=KANNIYAKUMARI`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=KANNIYAKUMARI`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=KANNIYAKUMARI`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=KANNIYAKUMARI`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=KANNIYAKUMARI`,
    ];

    const endpoints13 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=RAMANATHAPURAM`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=RAMANATHAPURAM`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=RAMANATHAPURAM`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=RAMANATHAPURAM`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=RAMANATHAPURAM`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=RAMANATHAPURAM`,
    ];
    const endpoints14 = [
      `${apiUrl}/college/getCluster/?form_Id=4001&cluster=TIRUNELVELI`,
      `${apiUrl}/college/getCluster/?form_Id=5001&cluster=TIRUNELVELI`,
      `${apiUrl}/college/getCluster/?form_Id=6001&cluster=TIRUNELVELI`,
      `${apiUrl}/college/getCluster/?form_Id=4002&cluster=TIRUNELVELI`,
      `${apiUrl}/college/getCluster/?form_Id=5002&cluster=TIRUNELVELI`,
      `${apiUrl}/college/getCluster/?form_Id=6002&cluster=TIRUNELVELI`,
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
    

    endpoints1.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`chennaidata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints2.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`cuddaloredata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints3.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`tirudata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints4.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`velloredata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints5.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`erodedata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints6.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`maduraidata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints7.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`salemdata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints8.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`nilgiridata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints9.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`thenidata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints10.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`nagadata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints11.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`thanjadata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints12.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`kandata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints13.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`ramanathdata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints14.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`tirunelvidata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

  }

  render() {
    

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

    const { chennaidata1 } = this.state;
    const { chennaidata2 } = this.state;
    const { chennaidata3 } = this.state;
    const { chennaidata4 } = this.state;
    const { chennaidata5 } = this.state;
    const { chennaidata6 } = this.state;

    const { cuddaloredata1 } = this.state;
    const { cuddaloredata2 } = this.state;
    const { cuddaloredata3 } = this.state;
    const { cuddaloredata4 } = this.state;
    const { cuddaloredata5 } = this.state;
    const { cuddaloredata6 } = this.state;

    const { tirudata1 } = this.state;
    const { tirudata2 } = this.state;
    const { tirudata3 } = this.state;
    const { tirudata4 } = this.state;
    const { tirudata5 } = this.state;
    const { tirudata6 } = this.state;

    const { velloredata1 } = this.state;
    const { velloredata2 } = this.state;
    const { velloredata3 } = this.state;
    const { velloredata4 } = this.state;
    const { velloredata5 } = this.state;
    const { velloredata6 } = this.state;

    const { erodedata1 } = this.state;
    const { erodedata2 } = this.state;
    const { erodedata3 } = this.state;
    const { erodedata4 } = this.state;
    const { erodedata5 } = this.state;
    const { erodedata6 } = this.state;

    const { maduraidata1 } = this.state;
    const { maduraidata2 } = this.state;
    const { maduraidata3 } = this.state;
    const { maduraidata4 } = this.state;
    const { maduraidata5 } = this.state;
    const { maduraidata6 } = this.state;

    const { salemdata1 } = this.state;
    const { salemdata2 } = this.state;
    const { salemdata3 } = this.state;
    const { salemdata4 } = this.state;
    const { salemdata5 } = this.state;
    const { salemdata6 } = this.state;

    const { nilgiridata1 } = this.state;
    const { nilgiridata2 } = this.state;
    const { nilgiridata3 } = this.state;
    const { nilgiridata4 } = this.state;
    const { nilgiridata5 } = this.state;
    const { nilgiridata6 } = this.state;

    const { thenidata1 } = this.state;
    const { thenidata2 } = this.state;
    const { thenidata3 } = this.state;
    const { thenidata4 } = this.state;
    const { thenidata5 } = this.state;
    const { thenidata6 } = this.state;

    const { nagadata1 } = this.state;
    const { nagadata2 } = this.state;
    const { nagadata3 } = this.state;
    const { nagadata4 } = this.state;
    const { nagadata5 } = this.state;
    const { nagadata6 } = this.state;

    const { thanjadata1 } = this.state;
    const { thanjadata2 } = this.state;
    const { thanjadata3 } = this.state;
    const { thanjadata4 } = this.state;
    const { thanjadata5 } = this.state;
    const { thanjadata6 } = this.state;

    const { kandata1 } = this.state;
    const { kandata2 } = this.state;
    const { kandata3 } = this.state;
    const { kandata4 } = this.state;
    const { kandata5 } = this.state;
    const { kandata6 } = this.state;

    const { ramanathdata1 } = this.state;
    const { ramanathdata2 } = this.state;
    const { ramanathdata3 } = this.state;
    const { ramanathdata4 } = this.state;
    const { ramanathdata5 } = this.state;
    const { ramanathdata6 } = this.state;

    const { tirunelvidata1 } = this.state;
    const { tirunelvidata2 } = this.state;
    const { tirunelvidata3 } = this.state;
    const { tirunelvidata4 } = this.state;
    const { tirunelvidata5 } = this.state;
    const { tirunelvidata6 } = this.state;

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
           
            <Row className="clusterwise-chart-container">
              <Col className="bcc">
                <Barchart2 fid={4001} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={4002} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={5001} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={5002} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={6001} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={6002} />
              </Col>
            </Row>
          </div>
        </div>
        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Chennai)</h3>
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
              {chennaidata1.map((data) => {
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
              {chennaidata2.map((data) => {
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
              {chennaidata3.map((data) => {
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

        {/* chennai workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Chennai)</h3>
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
              {chennaidata4.map((data) => {
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
              {chennaidata5.map((data) => {
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
              {chennaidata6.map((data) => {
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

        {/* cluster: cuddalore */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Cuddalore)</h3>
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
              {cuddaloredata1.map((data) => {
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
              {cuddaloredata2.map((data) => {
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
              {cuddaloredata3.map((data) => {
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

        {/* cuddalore workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Cuddalore)</h3>
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
              {cuddaloredata4.map((data) => {
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
              {cuddaloredata5.map((data) => {
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
              {cuddaloredata6.map((data) => {
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

        {/* cluster: tiru */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Tiruvannamalai)</h3>
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
              {tirudata1.map((data) => {
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
              {tirudata2.map((data) => {
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
              {tirudata3.map((data) => {
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

        {/* tiru workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Tiruvannamalai)</h3>
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
              {tirudata4.map((data) => {
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
              {tirudata5.map((data) => {
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
              {tirudata6.map((data) => {
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
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Vellore)</h3>
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
              {velloredata1.map((data) => {
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
              {velloredata2.map((data) => {
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
              {velloredata3.map((data) => {
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

        {/* vellore workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Vellore)</h3>
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
              {velloredata4.map((data) => {
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
              {velloredata5.map((data) => {
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
              {velloredata6.map((data) => {
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

        {/* cluster erode */}
        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Erode)</h3>
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
              {erodedata1.map((data) => {
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
              {erodedata2.map((data) => {
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
              {erodedata3.map((data) => {
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

        {/* vellore workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Erode)</h3>
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
              {erodedata4.map((data) => {
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
              {erodedata5.map((data) => {
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
              {erodedata6.map((data) => {
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

        {/* cluster madurai */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Madurai)</h3>
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
              {maduraidata1.map((data) => {
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
              {maduraidata2.map((data) => {
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
              {maduraidata3.map((data) => {
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

        {/* madurai workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Madurai)</h3>
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
              {maduraidata4.map((data) => {
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
              {maduraidata5.map((data) => {
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
              {maduraidata6.map((data) => {
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

        {/* cluster salem */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Salem)</h3>
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
              {salemdata1.map((data) => {
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
              {salemdata2.map((data) => {
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
              {salemdata3.map((data) => {
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

        {/* salem workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Salem)</h3>
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
              {salemdata4.map((data) => {
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
              {salemdata5.map((data) => {
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
              {salemdata6.map((data) => {
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

        {/* cluster nilgiri */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: The Nilgiris)</h3>
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
              {nilgiridata1.map((data) => {
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
              {nilgiridata2.map((data) => {
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
              {nilgiridata3.map((data) => {
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

        {/* salem workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: The Nilgiris)</h3>
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
              {nilgiridata4.map((data) => {
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
              {nilgiridata5.map((data) => {
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
              {nilgiridata6.map((data) => {
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



        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Theni)</h3>
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
              {thenidata1.map((data) => {
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
              {thenidata2.map((data) => {
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
              {thenidata3.map((data) => {
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

        {/* salem workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Theni)</h3>
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
              {thenidata4.map((data) => {
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
              {thenidata5.map((data) => {
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
              {thenidata6.map((data) => {
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


        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Nagapattinam)</h3>
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
              {nagadata1.map((data) => {
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
              {nagadata2.map((data) => {
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
              {nagadata3.map((data) => {
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

        {/* salem workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Nagapattinam)</h3>
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
              {nagadata4.map((data) => {
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
              {nagadata5.map((data) => {
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
              {nagadata6.map((data) => {
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




        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Thanjavur)</h3>
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
              {thanjadata1.map((data) => {
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
              {thanjadata2.map((data) => {
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
              {thanjadata3.map((data) => {
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

        {/* salem workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Thanjavur)</h3>
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
              {thanjadata4.map((data) => {
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
              {thanjadata5.map((data) => {
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
              {thanjadata6.map((data) => {
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

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Kanniyakumari)</h3>
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
              {kandata1.map((data) => {
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
              {kandata2.map((data) => {
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
              {kandata3.map((data) => {
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

        {/* salem workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Kanniyakumari)</h3>
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
              {kandata4.map((data) => {
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
              {kandata5.map((data) => {
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
              {kandata6.map((data) => {
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

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Ramanathpuram)</h3>
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
              {ramanathdata1.map((data) => {
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
              {ramanathdata2.map((data) => {
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
              {ramanathdata3.map((data) => {
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

        {/* salem workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Ramanathpuram)</h3>
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
              {ramanathdata4.map((data) => {
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
              {ramanathdata5.map((data) => {
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
              {ramanathdata6.map((data) => {
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

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: Tirunelvi)</h3>
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
              {tirunelvidata1.map((data) => {
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
              {tirunelvidata2.map((data) => {
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
              {tirunelvidata3.map((data) => {
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

        {/* salem workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Tirunelvi)</h3>
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
              {tirunelvidata4.map((data) => {
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
              {tirunelvidata5.map((data) => {
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
              {tirunelvidata6.map((data) => {
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
