import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MMHeader from './components/MMHeader';
import MVFooter from './components/MVFooter';
import Restaurant from './pages/Restaurant';
import LogRegGuest from './pages/LogRegGuest';
import Register from './pages/Register';
import SelectTable from './pages/SelectTable';
import Login from './pages/Login';
import { tabsel_load, redirect_if_logged_in, get_profile, change_details } from './helpers/loaderfunctions';
import UpdateAccount from './pages/UpdateAccount';
import LoggedSelect from './pages/LoggedSelect';
import UpdateDetails from './pages/UpdateDetails';
import DeleteAccount from './pages/DeleteAccount';

function App() {
  const [mode, setMode] = React.useState('');

  function Layout() {
    return (
      <>
        <MMHeader mode={mode} />
        <Outlet />
        <MVFooter />
      </>
    )
  }

  const router = createBrowserRouter([{
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Restaurant />
      }, {
        path: "/customerselect",
        element: <LogRegGuest />,
        loader: redirect_if_logged_in
      }, {
        path: "/tableselect",
        element: <SelectTable />,
        loader: tabsel_load
      }, {
        path: "/register",
        element: <Register />
      }, {
        path: "/login",
        element: <Login />
      }, {
        path: "/updateaccount",
        element: <UpdateAccount />,
        loader: get_profile
      }, {
        path: "/loggedselect",
        element: <LoggedSelect />
      }, {
        path: "/changedetails",
        element: <UpdateDetails />,
        loader: get_profile,
        action: async ({ request }) => {
          return await change_details(request);
        }
      }, {
        path: "/deleteaccount",
        element: <DeleteAccount />,
      }
    ]
  }]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;