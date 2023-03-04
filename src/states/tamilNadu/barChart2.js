import axios from "axios";
import { useEffect, useState } from "react";
import { LabelList, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";



export default function Clus(props) {
  const jwt = localStorage.getItem("jwt");
  let form_Id = props.fid ? props.fid : 4001;
  const [data, setData] = useState({});
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
    // const apiUrl = `${apiUrl}/college/dataDashboard/?form_Id=${form_Id}`;
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    axios
      .get(`${apiUrl}/college/dataDashboard/?form_Id=${form_Id}`, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [form_Id, jwt, apiUrl]);

  const dataa = [
    { name: "Total", Total: data.tot },
    { name: "WIP", WIP: data.wip },
    { name: "CPL", CPL: data.cpl },
    { name: "YTS", YTS: data.yts },
  ];

  function getname(fid) {
    if (fid === 4001) return "Technology-lab Civil";
    else if (fid === 4002) return "Workshop Civil";
    else if (fid === 5001) return "Technology-lab Delivery";
    else if (fid === 5002) return "Workshop Delivery";
    else if (fid === 6001) return "Technology-lab Installation";
    else return "Workshop Installation";
  }

  return (
    <>
      <div className="boxes-container">
        <BarChart className="bcc" width={200} height={160} data={dataa}>
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 80]} />
          <Tooltip />

          <Bar
            isAnimationActive={false}
            dataKey="Total"
            stackId="a"
            fill="#4472c4"
          >
            <LabelList className="labellist" dataKey="Total" position="top" />
          </Bar>
          <Bar
            isAnimationActive={false}
            dataKey="WIP"
            stackId="a"
            fill="#ffd966"
          >
            <LabelList dataKey="WIP" position="top" />
          </Bar>
          <Bar
            isAnimationActive={false}
            dataKey="CPL"
            stackId="a"
            fill="#70ad47"
          >
            <LabelList dataKey="CPL" position="top" />
          </Bar>
          <Bar
            isAnimationActive={false}
            dataKey="YTS"
            stackId="a"
            fill="#ff0000"
          >
            <LabelList dataKey="YTS" position="top" />
          </Bar>
        </BarChart>
        <h1 className="stats">{getname(props.fid)} Status</h1>
      </div>
    </>
  );
}
