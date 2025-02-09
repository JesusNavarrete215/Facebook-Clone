import Feed from "./Feed";
import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from "./StateProvider";
function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    //BEM naming convention
    //convention
    <div className="app">
      {!user ? (
      <Login />
      ) : ( 
        <>
        <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
       <Widgets />
      </div>
      </>

        
      )}

      
    </div>
  );
}

export default App;
