import TextTruncate from "../truncate";
// import TextTruncate from "../../";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Table } from "semantic-ui-react";




export default function MyComponent(props) {

  const jwt = localStorage.getItem("jwt");
  const state = localStorage.getItem("state");
  console.log(state);
  let ClustName = props.clust ? props.clust : (state==="Bihar")? "PATNA": "CHENNAI";
  const fId = props.formId ;
  const [data, setData] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
  
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    axios
      .get(`${apiUrl}/college/getCluster/?form_Id=${fId}&cluster=${ClustName}`, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ClustName, jwt, apiUrl, fId]);

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
    'Basic Infra',
    'Flooring',
    'False Ceiling',
    'Internal Painting',
    'Windows',
    'Doors',
    'Aluminium Partition',
    'Air Conditioner',
    'Miniature Circuit Breaker (MCB)',
    'Networking',
    'LT Pannel',
    'Electric Supply',
    'Uninterruptible Power Supply (UPS)',
    'External Painting',
    'Cleaning'
  ];

 

  return (
    <div className="ttop">
      <div>
      <h2 className="formheader">CIVIL STATUS</h2>
        <div className="legend">
          Yet to start: <Icon color="grey" name="square outline" size="large" />{" "}
          Work in progress:{" "}
          <Icon color="yellow" name="check circle" size="large" /> Completed:{" "}
          <Icon color="green" name="check circle" size="large" />
        </div>
      </div>

      <Table className="tc" celled collapsing striped>
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

            <Table.HeaderCell
              id="teclab-heading"
              textAlign="center"
              colSpan="15"
            >
              TECHNOLOGY LAB ( CIVIL )
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row>
          {texts.map((text, index) => (
            <Table.HeaderCell key={index} id = "base-techlab"className="th">
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
                  {renderIcon(data.Basic_Infra)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Flooring)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.False_Ceiling)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Internal_Painting)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Windows)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Doors)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Aluminium_Partition)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.AC)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.MCB)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Networking)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.LT_Pannel)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Electric_Supply)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.UPS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.External_Painting)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Cleaning)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
