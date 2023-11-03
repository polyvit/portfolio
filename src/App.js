import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home/Home";
import SidebarLeft from "./components/SidebarLeft/SidebarLeft";
import SidebarRight from "./components/SidebarRight/SidebarRight";
import { loadData } from "./store/data-slice";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <div className="app">
      {status === "success" && (
        <>
          <SidebarLeft />
          <Home />
          <SidebarRight />
        </>
      )}
    </div>
  );
}

export default App;
