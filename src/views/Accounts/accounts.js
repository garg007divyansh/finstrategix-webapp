import React from 'react'
import { Box, Flex, Grid, GridItem, Heading, Input } from '@chakra-ui/react'
import { NavBar } from '../../components'
import { AccountsTable } from './components'
import MyDiv from './accounts.style'

const Accounts = (props) => {

  return (
    <MyDiv>
      <Grid className="grid_container grid_gap_sm" alignItems="center">
        <GridItem colSpan={9}>
          <Heading as="h1" className="text_bold font_family text_4xl font_dark">Accounts</Heading>
        </GridItem>
        <GridItem colSpan={3}>
          <NavBar />
        </GridItem>
      </Grid>
      <Box mt={6}>
        <AccountsTable />
      </Box>
    </MyDiv>
  )
}

export default Accounts
