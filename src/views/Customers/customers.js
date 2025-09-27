import React from 'react'
import { Box, Flex, Grid, GridItem, Heading, Input } from '@chakra-ui/react'
import MyDiv from './customers.style'
import { NavBar } from '../../components'
import { CustomerTable } from './components'

const Customers = (props) => {

  return (
    <MyDiv>
      <Grid className="grid_container grid_gap_sm" alignItems="center">
        <GridItem colSpan={9}>
          <Heading as="h1" className="text_bold font_family text_4xl font_dark">Customers</Heading>
        </GridItem>
        <GridItem colSpan={3}>
          <NavBar />
        </GridItem>
      </Grid>
      <Box mt={6}>
        <Flex justifyContent='space-between' alignItems='center'>
          <Heading as="h1" className="text_bold font_family text_xxl font_dark">Recent Customers</Heading>
          <Input type="text" size="md" name="search_customer" placeholder="Search Customer"
            className="input-box font_dark text_regular font_family text_lg"
          />
        </Flex>
        <CustomerTable />
      </Box>
    </MyDiv>
  )
}

export default Customers
