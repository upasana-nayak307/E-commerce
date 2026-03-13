import AnnouncementBar from "./Announcement";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;