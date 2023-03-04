import React, { useState, useEffect } from "react";
import axios from "axios";

const LastChanges = () => {
  const jwt = localStorage.getItem("jwt");
  const [data, setData] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${apiUrl}/college/lastChanges`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      setData(result.data.tmp_changes);
    };
    fetchData();
  }, [apiUrl, jwt]);
  const sortedChanges = data.sort((a, b) => b.changeId - a.changeId);


  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const dateParts = formattedDate.split(",");
    const finalday = dateParts[0].trim().split(" ");

    return `${finalday[1].trim()} ${finalday[0].trim()}, ${dateParts[1].trim()}`;
  }

  function helper(str) {
    if (str === "yts") {
      return "YET TO START";
    } else if (str === "wip") {
      return "WORK IN PROGRESS";
    } else if (str === "cpl") {
      return "COMPLETED";
    } else return "NaN";
  }
  function helper2(str) {
    let s = str.split("_");
    if (s.length > 1) return `${s[0].trim()} ${s[1].trim()}`;
    if (s.length > 2) return `${s[0].trim()} ${s[1].trim()} ${s[2].trim()}`;
    if (s.length > 3)
      return `${s[0].trim()} ${s[1].trim()} ${s[2].trim()} ${s[3].trim()}`;
    if (s.length > 4)
      return `${s[0].trim()} ${s[1].trim()} ${s[2].trim()} ${s[3].trim()} ${s[4].trim()}`;
    else return str;
  }

  return (
    <div
      className="update-box-style"
      style={{ width: "15vw", height: "150px", overflow: "auto" }}
    >
      {sortedChanges.map((change) => (
        <div key={change._id}>
          {Object.keys(change.changes).map((key) => (
            <div key={key}>
              {/* eslint-disable-next-line   */}
              <marquee width="100%" direction="left" scrollamount="3">
                <div className="intext">
                  Updated {helper2(key)} to{" "}
                  <span className="color-changer" style={{color: change.changes[key][2] === "cpl" ? "green" : change.changes[key][2] === "wip" ? "orange" : "grey"}}>"{helper(change.changes[key][2])}"</span> of college:{" "}
                  {change.collegeName}
                </div>
              </marquee>
              <div className="des">
                -{change.userName}, Dated: {formatDate(change.dateUpdate)}
              </div>
              <hr className="hrr"></hr>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LastChanges;
