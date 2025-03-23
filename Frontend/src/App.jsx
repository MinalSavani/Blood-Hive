import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import "./App.css";
import Donars from "./pages/Donars";
import Prospects from "./pages/Propsects";
import Menu from "./components/Menu";
import ProspectAdd from "./pages/ProspectAdd";
import Donaradd from "./pages/Donaradd";
import NewDonar from "./pages/NewDonar";
import Register from "./pages/Register";
import EditDonor from "./pages/EditDonar";
import BloodBank from "./pages/BloodBank";  // ✅ Import BloodBank Page

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
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/admin/donars",
          element: <Donars />,
        },
        {
          path: "/admin/prospects",
          element: <Prospects />,
        },
        {
          path: "/admin/prospect/:id",
          element: <ProspectAdd />,
        },
        {
          path: "/admin/newdonar",
          element: <NewDonar />,
        },
        {
          path: "/admin/donars/:id",
          element: <Donaradd />,
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
