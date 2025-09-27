import React from 'react'
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import MyDiv from './dashboard.style'
import { CustomCard, NavBar } from '../../components'
import { LoanApplicationTable, PortfolioCard } from './components'

const Dashboard = (props) => {

  return (
    <MyDiv>
      <Grid className="grid_container grid_gap_sm" alignItems="center">
        <GridItem colSpan={9}>
          <Heading as="h1" className="text_bold font_family text_4xl font_dark">Dashboard</Heading>
        </GridItem>
        <GridItem colSpan={3}>
          <NavBar />
        </GridItem>
      </Grid>
      <Grid className="grid_container grid_gap_sm" alignItems="center" mt={8}>
        <GridItem colSpan={3}>
          <CustomCard className="cardOne" title="Total Customers" value="2" label="All time" />
        </GridItem>
        <GridItem colSpan={3}>
          <CustomCard className="cardTwo" title="Partners" value="10" label="Active lenders / aggregators" />
        </GridItem>
        <GridItem colSpan={3}>
          <CustomCard className="cardThree" title="Active Loans" value="10" label="Open / disbursed" />
        </GridItem>
        <GridItem colSpan={3}>
          <CustomCard className="cardFour" title="Portfolio Size" value="₹ 500,000" label="Outstanding principal" />
        </GridItem>
      </Grid>
      <Box mt={10}>
        <Heading as="h1" className="text_bold font_family text_xxl font_dark">Recent Loan Applications</Heading>
        <LoanApplicationTable />
      </Box>
    </MyDiv>
  )
}

export default Dashboard
