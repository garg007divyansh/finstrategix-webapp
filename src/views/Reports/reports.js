import React from 'react'
import { Box, Flex, Grid, GridItem, Heading, Input } from '@chakra-ui/react'
import { NavBar } from '../../components'
import MyDiv from './reports.style'

const Reports = (props) => {

  return (
    <MyDiv>
      <Grid className="grid_container grid_gap_sm" alignItems="center">
        <GridItem colSpan={9}>
          <Heading as="h1" className="text_bold font_family text_4xl font_dark">Reports</Heading>
        </GridItem>
        <GridItem colSpan={3}>
          <NavBar />
        </GridItem>
      </Grid>
    </MyDiv>
  )
}

export default Reports
