import React, { useEffect, useContext } from "react";
import "./App.css";
import Routing from "./Routing";
import { auth } from "./Utils/firebase";
import { Type } from "./Utils/action.type";
import { DataContext } from "./components/DataProvider/DataProvider";

function App() {
  const { state, dispatch } = useContext(DataContext);
  const { user } = state;
  // console.log(user);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;

// import React, { useEffect, useContext } from "react";
// import "./App.css";
// import Routing from "./Routing";
// import { auth } from "./Utils/firebase";
// import { Type } from "./Utils/action.type";
// import { DataContext } from "./components/DataProvider/DataProvider";

// function App() {
//   const { state, dispatch } = useContext(DataContext);
//   const { user } = state;

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       console.log("Auth State Changed:", authUser);
//       dispatch({
//         type: Type.SET_USER,
//         user: authUser || null, // Ensures null when user logs out
//       });
//     });

//     return () => unsubscribe(); // Cleanup on unmount
//   }, [dispatch]);

//   return <Routing />;
// }

// export default App;
