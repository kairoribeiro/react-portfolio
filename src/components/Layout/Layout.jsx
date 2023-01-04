import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar'
import './Layout.scss'

const Layout = () => {
    return ( 
        <div className='App'>
        <SideBar />
        <div className='page'>
            <Outlet />
        </div>
        </div>
    );
}

export default Layout;