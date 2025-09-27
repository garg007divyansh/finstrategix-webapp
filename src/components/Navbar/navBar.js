import { Flex, Menu, MenuButton, Button, Avatar, Heading, MenuList, MenuDivider, MenuItem, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routesNames from '../../constants/routes'
import ArrowDownIcon from '../../assets/images/arrow-down.svg'
import MyDiv from './navBar.style'

const NavBar = (props) => {

  return (
    <MyDiv>
      <Menu className="my">
        <Flex className="profile_menu">
          <MenuButton as={Button} leftIcon={<Avatar size='sm' name={'Admin Kumar'} />} rightIcon={<Image src={ArrowDownIcon} />}>
            <Heading as="h1" className="text_semibold text_lg font_family font_dark">Admin Kumar</Heading>
          </MenuButton>
        </Flex>
        <MenuList className="dropdown_list">
          <MenuItem><NavLink className="text_medium text_lg font_family font_dark" to={routesNames.PROFILE}>Profile</NavLink></MenuItem>
          <MenuDivider mt={0} mb={0} className="divider" />
          <MenuItem className="text_medium text_lg font_family font_dark logout_user">Log out</MenuItem>
        </MenuList>
      </Menu>
    </MyDiv>
  )
}

export default NavBar
