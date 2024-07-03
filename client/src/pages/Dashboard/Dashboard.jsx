import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../../components/Dashboard/DashSidebar";
import DashProfile from "../../components/Dashboard/DashProfile";
import DashPosts from "../../components/Dashboard/DashPosts";
import DashUsers from "../../components/Dashboard/DashUsers";
import DashComments from "../../components/Dashboard/DashComments";
import Dash from "../../components/Dashboard/Dash";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen pt-[62px] flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* dashboard sidebar */}
        <DashSidebar />
      </div>
      <div className="md:w-[calc(100vw-14rem)] overflow-x-hidden">
        {/* contents */}
        {tab === "profile" && <DashProfile />}
        {/* posts */}
        {tab === "posts" && <DashPosts />}
        {/* users */}
        {tab === "users" && <DashUsers />}
        {/* Comments */}
        {tab === "comments" && <DashComments />}
        {/* Dash*/}
        {tab === "dash" && <Dash />}
      </div>
    </div>
  );
};

export default Dashboard;
