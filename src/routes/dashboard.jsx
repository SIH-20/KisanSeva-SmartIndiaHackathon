import TableList from "../views/TableList/TableList.jsx";
import Requests from "../views/requests/requests.jsx";
import Maps from "../views/Maps/Maps.jsx";
import UserPage from "../components/UI/Modals/Modal.jsx";
import Analytics from "../views/analyse/analyse.jsx";
import Predictions from "../views/predictions";
var dashRoutes = [
  
  { path: "/maps", name: "maps", icon: "location_map-big", component: Maps },
  // {
  //   path:"/analysis",
  //   name:"Analyse",
  //   icon:"business_chart-pie-36",
  //   component:Analytics
  // },
  {
    path:"/predictions",
    name:"Predictions",
    icon:"media-2_sound-wave",
    component:Predictions
  },
  {
    path:"/farmer-feedback",
    name:"Feedback",
    icon:"ui-2_like",
    component:TableList
  },
  {
    path:"/requests",
    name:"Requests",
    icon:"ui-1_email-85",
    component:Requests
  },
  {
    path:"/user/:id",
    name:"user",
    icon:"ui-2_like",
    component:UserPage
  },
  {
    path:"/blocks",
    name:"Blocks",
    icon:"ui-2_settings-90",
    component:Blocks
  },
  { redirect: true, path: "/", pathTo: "/maps", name: "Dashboard" }
];
export default dashRoutes;
