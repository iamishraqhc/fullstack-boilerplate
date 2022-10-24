import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FetchData.css";

const FetchData = ({ query }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(`http://localhost:5000/${query}`);
    // console.log(res.data)
    setData(res.data);
  };

  return (
    <div className="fetchList">
      <h3>Random Data</h3>
      <ul>
        {data.map((single) => (
          <li key={single.id}>
            {single.firstName} {single.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
