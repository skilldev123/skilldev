import ChildComponent from "./child";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Chart() {
  const jwt = localStorage.getItem("jwt");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
    // const apiUrl1 = `${apiUrl}/college/test/?formCode=1000`;
    // const apiUrl2 = `${apiUrl}/college/test/?formCode=2000`;
    // const apiUrl3 = `${apiUrl}/college/test/?formCode=3000`;
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
              (data1[0][i].completed.wks / data1[0][i].completed.wks_tot) * 100
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
              (data2[0][i].completed.wks / data2[0][i].completed.wks_tot) * 100
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
              (data3[0][i].completed.wks / data3[0][i].completed.wks_tot) * 100
            )
          );
        }
        layer.push(row);
      }
      threeDMap.push(layer);
    }
    // console.log(threeDMap);
  }
  return (
    <div>
      <Container>
        <Row>
          <Col className="colls">
            <div className="topcont">
              <Table striped bordered hover className="childtable">
                <thead>
                  <tr>
                    <th className="tb">
                      Cluster Wise Status
                      <div className="inner">(total 8 cluster)</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Civil %</td>
                  </tr>
                  <tr>
                    <td>Delivery %</td>
                  </tr>
                  <tr>
                    <td>Installation %</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
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
  );
}
