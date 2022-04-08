import React from "react";
import "./Analytics.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
// import { t } from "i18next";

function Analytics() {
  const [times, setTimes] = useState();
  const [allTimes, setAllTimes] = useState();

  useEffect(() => {
    axios
      .get(`https://desolate-dawn-81730.herokuapp.com/create/schools/all`)
      .then((filesData) => setTimes(filesData.data))
      .catch((error) => console.log("error from server",error));
      setAllTimes(times?.map((i) => i.date.slice(8, 10)));
  }, [times]);

  const data = [
    {
      name: "1-Hafta",
      uv: allTimes?.length,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2-Hafta",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "3-Hafta",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "4-Hafta",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];

  return (
    <div className="analytics">

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8E65FD" fill="#999" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Analytics;
