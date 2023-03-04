import TextTruncate from "../truncate";
import React from "react";
import { Icon, Table, Dropdown } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
// import "../stylesheets/del.css";

// import { Link } from "react-router-dom";
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
  }, [ClustName, jwt, apiUrl,fId]);
  const setData = (data) => {
    let {
      customId,
      ITI_Name,
      Cluster,
      Laser_Cutter,
      PaintBooth,
      Car_Lift,
      Industrial_Process_Control_Unit,
      VR_Welding_and_Painting,
      Auto_MRO_Cut_Sections,
      Battery_Electrical_Vehicle,
      IO_Engine_Vehicle,
      EV_Kit,
      Industrial_Robotics_Setup,
      VFD_Machine,
      Plumbing_Kit,
      CNC_Machine,
      VMC_Machine,
      Tools_and_Meters,
      Advance_Machining_Simulators,
    } = data;
    localStorage.setItem("ID", customId);
    localStorage.setItem("ITI_Name", ITI_Name);
    localStorage.setItem("Cluster", Cluster);
    localStorage.setItem("Laser_Cutter", Laser_Cutter);
    localStorage.setItem("PaintBooth", PaintBooth);
    localStorage.setItem("Car_Lift", Car_Lift);
    localStorage.setItem(
      "Industrial_Process_Control_Unit",
      Industrial_Process_Control_Unit
    );
    localStorage.setItem("VR_Welding_and_Painting", VR_Welding_and_Painting);
    localStorage.setItem("Auto_MRO_Cut_Sections", Auto_MRO_Cut_Sections);
    localStorage.setItem(
      "Battery_Electrical_Vehicle",
      Battery_Electrical_Vehicle
    );
    localStorage.setItem("IO_Engine_Vehicle", IO_Engine_Vehicle);
    localStorage.setItem("EV_Kit", EV_Kit);
    localStorage.setItem(
      "Industrial_Robotics_Setup",
      Industrial_Robotics_Setup
    );
    localStorage.setItem("VFD_Machine", VFD_Machine);
    localStorage.setItem("Plumbing_Kit", Plumbing_Kit);
    localStorage.setItem("CNC_Machine", CNC_Machine);
    localStorage.setItem("VMC_Machine", VMC_Machine);
    localStorage.setItem("Tools_and_Meters", Tools_and_Meters);
    localStorage.setItem(
      "Advance_Machining_Simulators",
      Advance_Machining_Simulators
    );

    // console.log(data);
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
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
    "Advance Machining Simulators"
  ];


  return (
    <div className="ttop">
      <div>
        <h2 className="formheader1">TTL Delivery Status</h2>
        <div className="legend">
          Yet to start: <Icon color="grey" name="square outline" size="large" />{" "}
          Work in progress:{" "}
          <Icon color="yellow" name="check circle" size="large" /> Completed:{" "}
          <Icon color="green" name="check circle" size="large" />
        </div>
      </div>
      <Table celled collapsing className="td">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell id="base-workshop" rowSpan="3" textAlign="center">
              {" "}
              ITI Name
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" rowSpan="3" textAlign="center">
              {" "}
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
              WORKSHOP ( DELIVERY )
            </Table.HeaderCell>
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
                    value={data.Laser_Cutter}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Laser_Cutter");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Laser_Cutter to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Laser_Cutter to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Laser_Cutter marked Completed`,
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
                  {renderIcon(data.Laser_Cutter)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.PaintBooth}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "PaintBooth");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s PaintBooth to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s PaintBooth to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s PaintBooth marked Completed`,
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
                  {renderIcon(data.PaintBooth)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Car_Lift}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Car_Lift");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Car_Lift to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Car_Lift to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Car_Lift marked Completed`,
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
                  {renderIcon(data.Car_Lift)}
                </Table.Cell>

                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Industrial_Process_Control_Unit}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(
                          data.customId,
                          value,
                          "Industrial_Process_Control_Unit"
                        );
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Industrial_Process_Control_Unit to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Industrial_Process_Control_Unit to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Industrial_Process_Control_Unit marked Completed`,
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
                  {renderIcon(data.Industrial_Process_Control_Unit)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.VR_Welding_and_Painting}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(
                          data.customId,
                          value,
                          "VR_Welding_and_Painting"
                        );
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s VR_Welding_and_Painting to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s VR_Welding_and_Painting to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s VR_Welding_and_Painting marked Completed`,
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
                  {renderIcon(data.VR_Welding_and_Painting)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Auto_MRO_Cut_Sections}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(
                          data.customId,
                          value,
                          "Auto_MRO_Cut_Sections"
                        );
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Auto_MRO_Cut_Sections to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Auto_MRO_Cut_Sections to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Auto_MRO_Cut_Sections marked Completed`,
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
                  {renderIcon(data.Auto_MRO_Cut_Sections)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Battery_Electrical_Vehicle}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(
                          data.customId,
                          value,
                          "Battery_Electrical_Vehicle"
                        );
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Battery_Electrical_Vehicle to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Battery_Electrical_Vehicle to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Battery_Electrical_Vehicle marked Completed`,
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
                  {renderIcon(data.Battery_Electrical_Vehicle)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.IO_Engine_Vehicle}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "IO_Engine_Vehicle");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s IO_Engine_Vehicle to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s IO_Engine_Vehicle to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s IO_Engine_Vehicle marked Completed`,
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
                  {renderIcon(data.IO_Engine_Vehicle)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.EV_Kit}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "EV_Kit");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s EV_Kit to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s EV_Kit to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s EV_Kit marked Completed`,
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
                  {renderIcon(data.EV_Kit)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Industrial_Robotics_Setup}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(
                          data.customId,
                          value,
                          "Industrial_Robotics_Setup"
                        );
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Industrial_Robotics_Setup to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Industrial_Robotics_Setup to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Industrial_Robotics_Setup marked Completed`,
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
                  {renderIcon(data.Industrial_Robotics_Setup)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.VFD_Machine}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "VFD_Machine");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s VFD_Machine to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s VFD_Machine to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s VFD_Machine marked Completed`,
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
                  {renderIcon(data.VFD_Machine)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Plumbing_Kit}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Plumbing_Kit");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Plumbing_Kit to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Plumbing_Kit to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Plumbing_Kit marked Completed`,
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
                  {renderIcon(data.Plumbing_Kit)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.CNC_Machine}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "CNC_Machine");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s CNC_Machine to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s CNC_Machine to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s CNC_Machine marked Completed`,
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
                  {renderIcon(data.CNC_Machine)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.VMC_Machine}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "VMC_Machine");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s VMC_Machine to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s VMC_Machine to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s VMC_Machine marked Completed`,
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
                  {renderIcon(data.VMC_Machine)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Tools_and_Meters}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Tools_and_Meters");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Tools_and_Meters to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Tools_and_Meters to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Tools_and_Meters marked Completed`,
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
                  {renderIcon(data.Tools_and_Meters)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Advance_Machining_Simulators}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(
                          data.customId,
                          value,
                          "Advance_Machining_Simulators"
                        );
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Advance_Machining_Simulators to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Advance_Machining_Simulators to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Advance_Machining_Simulators marked Completed`,
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
                  {renderIcon(data.Advance_Machining_Simulators)}
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
