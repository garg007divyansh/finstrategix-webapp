import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import MyDiv from './noData.style'

export default function NoData(props) {

  return (
    <MyDiv>
      <Box className='no-data-box text-center'>
        <Heading as="h4" className='font_poppins font_input text_semibold text_lg'>{props.title}</Heading>
      </Box>
    </MyDiv>
  )
}
