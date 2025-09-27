import React from 'react'
import { Box, Flex, Grid, GridItem, Heading, Input } from '@chakra-ui/react'
import { CustomButton, NavBar } from '../../components'
import MyDiv from './kyc.style'
import { KycTable } from './components'

const Kyc = (props) => {

  return (
    <MyDiv>
      <Grid className="grid_container grid_gap_sm" alignItems="center">
        <GridItem colSpan={9}>
          <Heading as="h1" className="text_bold font_family text_4xl font_dark">KYC Registration</Heading>
        </GridItem>
        <GridItem colSpan={3}>
          <NavBar />
        </GridItem>
      </Grid>
      <Box mt={6}>
        <Flex justifyContent='space-between' alignItems='center'>
          <Heading as="h1" className="text_bold font_family text_xxl font_dark">All KYC Registrations</Heading>
          <CustomButton size="md" type="submit" title="Add New Registration" className="btn_theme text_lg text_medium font_family w-100" />
        </Flex>
        <KycTable />
      </Box>
    </MyDiv>
  )
}

export default Kyc
