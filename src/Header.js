import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';
import { Avatar } from '@mui/material';


function Header(){
const [{user}, dispatch] = useStateValue();

return <div className="header">

<div className='header_left'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo%292019%29.svg.png' alt=""/>

    <div className='header_input'>
        <SearchIcon/>
        <input placeholder='Search Facebook' type='text'/>
    </div>
</div>

<div className='header_center'>
    <div className='header_option header_option-active'>
        <HomeIcon fontSize='large'/>
    </div>
    <div className='header_option'>
        <FlagIcon fontSize='large'/>
    </div>
    <div className='header_option'>
        <SubscriptionsIcon fontSize='large'/>
    </div>
    <div className='header_option'>
        <StorefrontIcon fontSize='large'/>
    </div>
    <div className='header_option'>
        <SupervisedUserCircleIcon fontSize='large'/>
    </div>
</div>
<div className='header_right'>
    <div className='header_info'>
        <Avatar src={user.photoURL} />
        <h4>{user.displayName}</h4>
    </div>

    <IconButton>
        <AddIcon/>
    </IconButton>
    <IconButton>
        <ForumIcon/>
    </IconButton>
    <IconButton>
        <NotificationsActiveOutlinedIcon/>
    </IconButton>
    <IconButton>
        <ExpandMoreIcon/>
    </IconButton>


</div>
</div>    
}

export default Header