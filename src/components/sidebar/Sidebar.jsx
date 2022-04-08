import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { sidebar_data,sidebar_links  } from "../../static/staticData";
import { useRouteMatch } from "react-router-dom";
// import { ImStarFull } from "react-icons/im";

function Sidebar({ openSidebar, setOpenSidebar }) {
  const { url } = useRouteMatch();
 
  
  return (
    <div className={"sidebar"}>
      <h1 className="sidebar_logo">
        <NavLink to="/">
          {/* <ImStarFull /> */}
          <i>DOKS.UZ</i>
        </NavLink>
        {/* <HiArrowSmLeft
          className="close"
          onClick={() => setOpenSidebar(!openSidebar)}
        /> */}
      </h1>
      <hr className="line" />
      <ul className="collection__sidebar">
        {sidebar_links.map((itemlink, index) => (
          <li key={index} className="collection__item">
            <NavLink className="sidebar__link" activeClassName="active__item" to={`${url}/${itemlink.link}`}>
              <p>
                {itemlink?.icon} {itemlink?.title}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
