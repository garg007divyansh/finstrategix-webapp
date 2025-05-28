import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import {Sidebar} from '../../components'
import MyDiv from './default.style'

const AppLayout = (props) => {

  return (
    <MyDiv>
      <Grid className='parent_grid'>
        <GridItem className="sidebar_grid">
          <Sidebar />
        </GridItem>
        <GridItem bg="white" className="children_grid">
          {props.children}
        </GridItem>
      </Grid>
    </MyDiv>
  )
}

export default AppLayout
