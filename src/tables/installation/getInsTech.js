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
    "Furniture",
    "Server Rack",
    "Workstations and Monitors",
    "Server",
    "Distance Learning Classroom",
    "IOT Kit",
    "IOT Desktops",
    "3D Printer Technology-1",
    "3D Printer Technology-2",
    "Tech Tools Product Design 1",
    "Tech Tools Product Design 2",
    "Tech Tools Product Verification 1",
    "Tech Tools Product Verification 2",
    "Tech Tools Advance Manufacturing",
    "E-Learning Platform",
  ];

  return (
    <div className="ttop ">
      <div>
          <h2 className="formheader3">TTL Installation status</h2>
          <div className="legend">Yet to start: <Icon color= "grey" name="square outline" size="large" />  Work in progress: <Icon color="yellow" name="check circle" size="large" />  Completed: <Icon color="green" name="check circle" size="large" /></div>

      </div>

 
    <Table className="ti" celled collapsing striped>
    <Table.Header>
          <Table.Row>
            <Table.HeaderCell id="base-techlab" rowSpan="3" textAlign="center">
              ITI Name
            </Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" rowSpan="3" textAlign="center">
              Cluster
            </Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" rowSpan="3" textAlign="center">
              District
            </Table.HeaderCell>

            <Table.HeaderCell  id="teclab-heading" textAlign="center" colSpan="15">
              TECHNOLOGY LAB ( INSTALLATION )
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row>
            {texts.map((text, index) => ( 
              <Table.HeaderCell key={index} id="base-techlab" className="th">
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
              {renderIcon(data.Furniture)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Server_Rack)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Workstations_and_Monitors)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Server)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Distance_Learning_Classroom)}
            </Table.Cell>
      
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.IOT_Kit)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.IOT_Desktops)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.D3_Printer_Tech1)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.D3_Printer_Tech2)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Tech_Tools_Product_Design1)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Tech_Tools_Product_Design2)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Tech_Tools_Product_Verification1)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Tech_Tools_Product_Verification2)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.Tech_Tools_Advance_Manufacturing1)}
            </Table.Cell>
            <Table.Cell className="ttt" textAlign="center" selectable>
              {renderIcon(data.E_Learning_Platform)}
            </Table.Cell>
        
          </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
    </div>
  );
}