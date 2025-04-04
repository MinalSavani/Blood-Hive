import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

import NewVolunteer from "./pages/NewVolunteer";

import Admin from "./pages/Admin";
import "./App.css";
import Donars from "./pages/Donars";
import Prospects from "./pages/Propsects";
import Menu from "./components/Menu";
import ProspectAdd from "./pages/ProspectAdd";
import Volunteer from "./pages/Volunteer";
import NewDonar from "./pages/NewDonar";
import Register from "./pages/Register";
import EditDonor from "./pages/EditDonar";
import BloodBank from "./pages/BloodBank"; 
import VolunteerReg from "./pages/VolunteerReg"; 
import ContactUs from "./components/Services/ContactUs";
import Featured from "./components/Featured";
import AdminBloodRequests from "./pages/AdminBloodRequest";
import  BloodRequest from "./pages/BloodRequest";

function App() {
  const Layout = () => {
    return (
      <div className="flex">
        <div>
          <Menu />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/bloodbank",  // ✅ Route should go to the BloodBank page, not BloodBankSearch
      element: <BloodBank />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
    path:"/contactus",
    element:<ContactUs/>
    },
    {
    path:"/featured",
    element:<Featured/>
    },

    {
      path:"/volunteer",
      element:<VolunteerReg/>
    },

    {
      path:"/bloodreq",
      element:<BloodRequest/>
    },
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <AdminBloodRequests />,
        },
        {
          path: "/admin/donars",
          element: <Donars />,
        },
        {
        path:"/admin/volunteers",
        element:<Volunteer/>},
        {
          path: "/admin/prospects",
          element: <Prospects />,
        },
        {
          path: "/admin/prospect/:id",
          element: <ProspectAdd />,
        },
        {
          path: "/admin/newvolunteer",
          element: <NewVolunteer />, 
        },
        {
          path: "/admin/newdonar",
          element: <NewDonar />,
        },
       
        {
          path: "/admin/donars/:id/edit",
          element: <EditDonor />,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;