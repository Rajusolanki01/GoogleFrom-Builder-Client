import React, { useEffect } from "react";
import { axiosClient } from "../../utils/axiosClient";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";


function Home() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axiosClient.get("/home/data");
  };

  return (
    <>
      <NavBar />

      <div className="">
        <Outlet />
      </div>
    </>
  );
}

export default Home;
