import TextTruncate from "../truncate";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Table } from "semantic-ui-react";



export default function MyComponent(props) {
  const fId = props.formId ;
  const jwt = localStorage.getItem("jwt");
  const state = localStorage.getItem("state");
  let ClustName = (props.clust)?props.clust:(state==="Bihar")? "PATNA": "CHENNAI";
  const [data, setData] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
    // const apiUrl = `${apiUrl}/college/getCluster/?form_Id=${fId}&cluster=${ClustName}`;
    const headers = {
      Authorization:
        `Bearer ${jwt}`,
    };
    axios
      .get(`${apiUrl}/college/getCluster/?form_Id=${fId}&cluster=${ClustName}`, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ClustName,jwt,apiUrl,fId]);

  // rendering Icon
  function renderIcon(val) {
    let color;
    if (val === -1) {
      color = "grey";
      return <Icon color={color} name="square outline" size="large" />;
    } else if (val === 0) {
      color = "yellow";
      return <Icon color={color} name="check circle" size="large" />;
    } else if (val === 1) {
      color = "green";
      return <Icon color={color} name="check circle" size="large" />;
    }
  }

  const texts = [
    "Laser Cutter",
    "PaintBooth",
    "Car Lift",
    "Industrial Process Control Unit",
    "VR Welding & Painting",
    "Auto MRO Cut Sections",
    "Battery Electrical Vehicle",
    "IO Engine Vehicle",
    "EV Kit (Electronic Vehicle Kit)",
    "Industrial Robotics Setup",
    "VFD Machine",
    "Plumbing Kit",
    "CNC Machine (Computer Numerical Control)",
    "VMC Machine (Vertical Machining Center)",
    "Tools & Meters",
    "Advance Machining Simulators",
  ];
  return (
    <div className="ttop">
      <div>
          <h2 className="formheader3">TTL Installation status</h2>
          <div className="legend">Yet to start: <Icon color= "grey" name="square outline" size="large" />  Work in progress: <Icon color="yellow" name="check circle" size="large" />  Completed: <Icon color="green" name="check circle" size="large" /></div>

      </div>

 
    <Table className="ti" celled collapsing striped>
    <Table.Header>
          <Table.Row>
            <Table.HeaderCell id="base-workshop"  rowSpan="3" textAlign="center"> ITI Name</Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" rowSpan="3" textAlign="center"> Cluster</Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" rowSpan="3" textAlign="center">District</Table.HeaderCell>
            <Table.HeaderCell id="workshop-heading" textAlign="center" colSpan="16">WORKSHOP ( INSTALLATION )</Table.HeaderCell>
          </Table.Row>

          
          <Table.Row>
            {texts.map((text) => (
              <Table.HeaderCell key={text} id="base-workshop" className="th">
                <TextTruncate text={text} limit={15} />
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

      <Table.Body>
        {data.map((data) => {
          return (
            <Table.Row>
            <Table.Cell collapsing>{data.ITI_Name}</Table.Cell>
            <Table.Cell collapsing>{data.Cluster}</Table.Cell>
            <Table.Cell collapsing>{data.District}</Table.Cell>

            {/* cells */}

            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Laser_Cutter)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.PaintBooth)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Car_Lift)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Industrial_Process_Control_Unit)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.VR_Welding_and_Painting)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Auto_MRO_Cut_Sections)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Battery_Electrical_Vehicle)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.IO_Engine_Vehicle)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.EV_Kit)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Industrial_Robotics_Setup)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.VFD_Machine)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Plumbing_Kit)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.CNC_Machine)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.VMC_Machine)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Tools_and_Meters)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Advance_Machining_Simulators)}
            </Table.Cell>
          </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
    </div>
  );
}