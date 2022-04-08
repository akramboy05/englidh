import React from "react";
import "./Admin.css";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { sidebar_data } from "../../static/staticData";
import { useRouteMatch } from "react-router-dom";

function Admin() {
  const { path } = useRouteMatch();
  console.log(path);

  // const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="admin">
      <Sidebar />
      <Switch>
        {sidebar_data.map((route,index) => (
          <Route key={index} path={`${path}/${route.route}`}>{route.component}</Route>
        ))}
      </Switch>
    </div>
  );
}

export default Admin;
