import TextTruncate from "../truncate";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Table } from "semantic-ui-react";


export default function MyComponent(props) {
  const fId = props.formId ;
  const jwt = localStorage.getItem("jwt");
  const state = localStorage.getItem("state");
  let ClustName = props.clust ? props.clust : (state==="Bihar")? "PATNA": "CHENNAI";
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
      .get(
        `${apiUrl}/college/getCluster/?form_Id=${fId}&cluster=${ClustName}`,
        { headers }
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ClustName, jwt, apiUrl,fId]);

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
    "Basic Infra",
    "Flooring",
    "Internal Painting",
    "Windows",
    "Shutter",
    "Aluminium Partition",
    "Air Conditioner (AC)",
    'Miniature Circuit Breaker (MCB)',
    "Networking",
    "Low Tension Panels (LT Panels)",
    "Electric Supply",
    'Uninterruptible Power Supply (UPS)',
    "Diesel Generator Set (DG Set)",
    "External Painting",
    "Cleaning",
    "Floor Painting",
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
      <Table className="tc" celled structured collapsing color="orange" striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell id="base-workshop" rowSpan="3" textAlign="center">
              ITI Name
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" rowSpan="3" textAlign="center">
              Cluster
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" rowSpan="3" textAlign="center">
              District
            </Table.HeaderCell>

            <Table.HeaderCell
              id="workshop-heading"
              textAlign="center"
              colSpan="16"
            >
              WORKSHOP ( CIVIL )
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row>
            {texts.map((text) => (
              <Table.HeaderCell id="base-workshop" className="th" key={text}>
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
                  {renderIcon(data.Internal_Painting)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Windows)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Shutter)}
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
                  {renderIcon(data.DG_Set)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.External_Painting)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Cleaning)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Floor_Painting)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
