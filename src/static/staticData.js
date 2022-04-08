import Analytics from "../components/analytics/Analytics";
import FileCreator from "../components/fileCreator/FileCreator";
import AllFiles from "../components/allFiles/AllFiles";
import Registrations from "../components/registrations/Registrations";
import {
    AiOutlineLineChart,
    AiOutlineFileAdd,
    AiOutlineFileSync,
    AiOutlineSafety,
  } from "react-icons/ai";

export const sidebar_links = [
    {
      id: 0,
      title: "Analytics",
      link: "analytics",
      icon: <AiOutlineLineChart />,
    },
    {
      id: 1,
      title: "File Creator",
      link: "new",
      icon: <AiOutlineFileAdd />,
    },
    {
      id: 2,
      title: "All files",
      link: "allfiles",
      icon: <AiOutlineFileSync />,
    },
    {
      id: 3,
      title: "Admin",
      link: "admins",
      icon: <AiOutlineSafety />,
    },
  ];
  
  export const sidebar_data = [
    {
      id: 0,
      component: <Analytics />,
      route: "analytics",
    },
  
    {
      id: 1,
      component: <FileCreator />,
      route: "new",
    },
  
    {
      id: 2,
      component: <AllFiles />,
      route: "allfiles",
    },
  
    {
      id: 3,
      component: <Registrations />,
      route: "admins",
    },
  ];

