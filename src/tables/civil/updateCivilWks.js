import TextTruncate from "../truncate";
import React from "react";
import { Icon, Table, Dropdown } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";



export default function UpdateForm(props) {
  const fId = props.formId ;
  const jwt = localStorage.getItem("jwt");
  const state = localStorage.getItem("state");
  let ClustName = props.clust ? props.clust : (state==="Bihar")? "PATNA": "CHENNAI";
  const options = [
    { key: "option1", text: "Yet to Start", value: -1 },
    { key: "option2", text: "Work in Progress", value: 0 },
    { key: "option3", text: "Completed", value: 1 },
  ];

  const [APIData, setAPIData] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
    // Fetch prefilled data from the backend
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    axios
      .get(
        `${apiUrl}/college/getCluster/?form_Id=${fId}&cluster=${ClustName}`,
        { headers }
      )
      .then((response) => {
        setAPIData(response.data);
      });
  }, [ClustName, jwt,apiUrl,fId]);
  const setData = (data) => {
    let {
      customId,
      ITI_Name,
      Cluster,
      Basic_Infra,
      Flooring,
      Internal_Painting,
      Windows,
      Shutter,
      Aluminium_Partition,
      AC,
      MCB,
      Networking,
      LT_Pannel,
      Electric_Supply,
      UPS,
      DG_Set,
      External_Painting,
      Cleaning,
      Floor_Painting,
    } = data;
    localStorage.setItem("ID", customId);
    localStorage.setItem("ITI_Name", ITI_Name);
    localStorage.setItem("Cluster", Cluster);
    localStorage.setItem("Basic_Infra", Basic_Infra);
    localStorage.setItem("Flooring", Flooring);
    localStorage.setItem("Internal_Painting", Internal_Painting);
    localStorage.setItem("Windows", Windows);
    localStorage.setItem("Shutter", Shutter);
    localStorage.setItem("Aluminium_Partition", Aluminium_Partition);
    localStorage.setItem("AC", AC);
    localStorage.setItem("MCB", MCB);
    localStorage.setItem("Networking", Networking);
    localStorage.setItem("LT_Pannel", LT_Pannel);
    localStorage.setItem("Electric_Supply", Electric_Supply);
    localStorage.setItem("UPS", UPS);
    localStorage.setItem("DG_Set", DG_Set);
    localStorage.setItem("External_Painting", External_Painting);
    localStorage.setItem("Cleaning", Cleaning);
    localStorage.setItem("Floor_Painting", Floor_Painting);
  };

  // Handle form submission
  const temp = 1;
  if (temp === 2) setData();
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

  function handleChange(customId, value, val) {
    setAPIData((prevData) =>
      prevData.map((item) => {
        if (item.customId === customId) {
          item[val] = value;
        }
        return item;
      })
    );
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    };
    // const apiUrl =
    //   process.env.NODE_ENV === "production"
    //     ? process.env.REACT_APP_API_URL_PROD
    //     : process.env.REACT_APP_API_URL_DEV;
    axios
      .patch(
        `${apiUrl}/college/update_tmp/?id=${customId}&form_Id=${fId}`,
        {
          [val]: value,
        },
        { headers }
      )
      .then((res) => {
        console.log("updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <Table className="tc" celled collapsing>
        <Table.Header color="orange">
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
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell collapsing>{data.ITI_Name}</Table.Cell>
                <Table.Cell collapsing>{data.Cluster}</Table.Cell>
                <Table.Cell collapsing>{data.District}</Table.Cell>

                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Basic_Infra}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Basic_Infra");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Basic_Infra to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Basic_Infra to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Basic_Infra marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.Basic_Infra)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Flooring}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Flooring");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Flooring to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Flooring to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Flooring marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.Flooring)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Internal_Painting}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Internal_Painting");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Internal Painting to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Internal Painting to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Internal Painting marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.Internal_Painting)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Windows}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Windows");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Windows to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Windows to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Windows marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.Windows)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Shutter}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Shutter");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Shutter to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Shutter to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Shutter marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.Shutter)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Aluminium_Partition}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(
                          data.customId,
                          value,
                          "Aluminium_Partition"
                        );
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Aluminium_Partition to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Aluminium_Partition to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Aluminium_Partition marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.Aluminium_Partition)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.AC}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "AC");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s AC to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s AC to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s AC marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.AC)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.MCB}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "MCB");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s MCB to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s MCB to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s MCB marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.MCB)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Networking}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Networking");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Networking to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Networking to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Networking marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.Networking)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.LT_Pannel}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "LT_Pannel");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s LT_Pannel to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s LT_Pannel to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s LT_Pannel marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.LT_Pannel)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Electric_Supply}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Electric_Supply");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Electric_Supply to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Electric_Supply to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Electric_Supply marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.Electric_Supply)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.UPS}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "UPS");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s UPS to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s UPS to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s UPS marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.UPS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.DG_Set}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "DG_Set");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s DG_Set to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s DG_Set to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s DG_Set marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.DG_Set)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.External_Painting}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "External_Painting");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s External_Painting to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s External_Painting to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s IExternal_Painting marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.External_Painting)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Cleaning}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Cleaning");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Cleaning to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Cleaning to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Cleaning marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.Cleaning)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Floor_Painting}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Floor_Painting");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Floor_Painting to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Floor_Painting to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Floor_Painting marked Completed`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          default:
                            break;
                        }
                      }
                    }}
                  />
                  {renderIcon(data.Floor_Painting)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <NotificationContainer className="notification-container" />
    </div>
  );
}
