import '../styles/globals.css'
import useAutenticacion from "../hooks/useAutenticacion";
import UserContext from "../context/UserContext";
//import "react-table/react-table.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React from 'react';



const MyApp = (props) => {
  const { Component, pageProps } = props;

  let usuario = useAutenticacion();
  return (
    <UserContext.Provider
      value={{
        usuario,
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
