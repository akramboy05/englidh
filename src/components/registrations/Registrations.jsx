import React, { useEffect, useState } from "react";
import "./Registrations.css";
import axios from "axios";
function Registrations() {
  const [admins, setAdmins] = useState();
  useEffect(() => {
    axios
      .get(`https://desolate-dawn-81730.herokuapp.com/admin/admins`)
      .then((admin) => setAdmins(admin.data))
      .catch((error) => console.log(error));
  }, [admins]);
  return (
    <div className="registrations">
      <table>
        <caption>Admins</caption>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Date</th>
        </tr>
        {admins?.map((admin) => (
          <tr>
            <td>{admin?.username}</td>
            <td>{admin?.email}</td>
            <td>{admin?.date.slice(0, 10)} {admin?.date.slice(11,16)}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Registrations;
