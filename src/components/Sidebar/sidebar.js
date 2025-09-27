import React, { useEffect, useState } from 'react'
import { Box, Image, Stack } from '@chakra-ui/react'
import DashboardIcon from '../../assets/images/home.svg';
import DashboardWhiteIcon from '../../assets/images/home-white.svg';
import * as routesNames from '../../constants/routes'
import { Link, useLocation } from 'react-router-dom'
import AppLogo from '../../assets/images/logo-dark.svg'
import MyDiv from './sidebar.style';

const menus = [
  {
    id: 1,
    menuName: 'Dashboard',
    link: routesNames.DASHBOARD,
    menuIcon: DashboardIcon,
    menuIconActive: DashboardWhiteIcon,
  },
  {
    id: 2,
    menuName: 'KYC',
    link: routesNames.KYC,
    menuIcon: DashboardIcon,
    menuIconActive: DashboardWhiteIcon,
  },
  {
    id: 3,
    menuName: 'Customers',
    link: routesNames.CUSTOMERS,
    menuIcon: DashboardIcon,
    menuIconActive: DashboardWhiteIcon,
  },
]

export default function Sidebar() {

  const location = useLocation();
  const [menuId, setMenuId] = useState(null)

  useEffect(() => {
    const menuItem = menus.find((item) => item.link === location.pathname);
    if (menuItem) {
      setMenuId(menuItem.id);
    }
  }, [location.pathname]);

  const handleMenu = (item) => {
    setMenuId(item)
  }

  return (
    <MyDiv>
      <Box className='sidebar_wrapper'>
        <Link to={routesNames.DASHBOARD}>
          <Image src={AppLogo} alt='logo' className='app_logo' />
        </Link>
        <Stack mt={10}>
          {menus?.map((item) => {
            return (
              <Link key={item.id} to={item.link} onClick={() => handleMenu(item.id)}
                className={`menu_item text_medium text_lg font_family ${item.id === menuId ? 'active_menu_item' : ''}`} >
                <Image src={item.id === menuId ? item.menuIconActive : item.menuIcon} />
                {item.menuName}
              </Link>
            )
          })}
        </Stack>
      </Box>
    </MyDiv>
  )
}
