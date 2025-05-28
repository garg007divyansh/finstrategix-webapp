import React from 'react'
import MyDiv from './portfolioCard.style'
import { Box, Flex, Heading, IconButton, Image } from '@chakra-ui/react'
import { Doughnut } from 'react-chartjs-2'
import GoIcon from '../../../../assets/images/angle-right-white.svg'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioCard(props) {
  return (
    <MyDiv>
        <Box className='chart_box bg_shadow'>
            <Flex alignItems='center' justifyContent='space-between'>
                <Heading as="h2" className="text_bold font_family text_xl font_dark">My Portfolio</Heading>
                <IconButton className='btn_blue'>
                    <Image src={GoIcon} />
                </IconButton>
            </Flex>
            <Box className='chart_box_inner' mt={3} >
                <Doughnut data={props.data} options={props.options} width={240}/>
            </Box>
        </Box>
    </MyDiv>
  )
}
