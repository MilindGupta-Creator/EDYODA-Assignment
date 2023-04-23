import React from 'react';
import SideMenu from './SideMenu';
import RightMenu from './RightMenu';

const Body = () => {
  return (
    <div style={{display:"flex"}} className='bodycontainer'>
        <SideMenu/>
        <RightMenu/>
    </div>
  )
}

export default Body