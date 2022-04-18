import React, { useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

function Navigation() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const closeSidebar = () => {
    setToggle(false);
  };
  
  return (
    <>
      <Nav toggleSidebar={handleToggle} />
      <Sidebar isOpen={toggle} closeSidebar={closeSidebar} />
    </>
  );
}

export default Navigation;
