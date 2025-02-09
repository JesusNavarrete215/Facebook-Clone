import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  PeopleOutline,
  VideoLibrary,
} from "@mui/icons-material";
import Storefront from "@mui/icons-material/Storefront";

import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospital} title="Covid-19 Information Center" />

      <SidebarRow Icon={EmojiFlags} title="Page" />
      <SidebarRow Icon={PeopleOutline} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
