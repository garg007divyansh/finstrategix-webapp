import React from 'react'
import { Box, Flex, Grid, GridItem, Heading, Input } from '@chakra-ui/react'
import { CustomButton, NavBar } from '../../components'
import MyDiv from './loanApplications.style'
import { LoanApplicationsTable } from './components'
import { useNavigate } from 'react-router-dom'
import * as routesNames from '../../constants/routes'

const LoanApplications = (props) => {

  const navigate = useNavigate()

  const handleApplyLoan = () => {
    navigate(routesNames.APPLYLOAN)
  }

  return (
    <MyDiv>
      <Grid className="grid_container grid_gap_sm" alignItems="center">
        <GridItem colSpan={9}>
          <Heading as="h1" className="text_bold font_family text_4xl font_dark">Loan Applications</Heading>
        </GridItem>
        <GridItem colSpan={3}>
          <NavBar />
        </GridItem>
      </Grid>
      <Box mt={6}>
        <Flex justifyContent='space-between' alignItems='center'>
          <Heading as="h1" className="text_bold font_family text_xxl font_dark">All Loan Applicationss</Heading>
          <CustomButton size="md" type="submit" title="Apply New Loan" className="btn_theme text_lg text_medium font_family w-100" onClick={handleApplyLoan} />
        </Flex>
        <LoanApplicationsTable />
      </Box>
    </MyDiv>
  )
}

export default LoanApplications
