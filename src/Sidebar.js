import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* twitter icon */}
            <TwitterIcon />

            {/* sidebar option */}
            <SidebarOption active Icon={HomeIcon} text='Home' />
            <SidebarOption Icon={SearchIcon} text='Explore' />
            <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
            <SidebarOption Icon={MessageIcon} text='Messages' />
            <SidebarOption Icon={BookmarkIcon} text='Bookmark' />
            <SidebarOption Icon={ListAltIcon} text='Lists' />
            <SidebarOption Icon={MoreHorizIcon} text='More' />

            {/* button -> tweet */}
            <button variant='outlined' className='sidebar__tweet'> TWEET </button>
        </div>
    );
}

export default Sidebar;