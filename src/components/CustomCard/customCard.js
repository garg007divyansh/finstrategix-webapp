import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import MyDiv from './customCard.style'

export default function CustomCard(props) {
    return (
        <MyDiv>
            <Box className={`${props.className} card-box`}>
                <Heading as="h2" className='text_semibold font_family text_lg'>{props.title}</Heading>
                <Heading as="h3" mt={2} className='text_semibold font_family text_lg'>{props.value}</Heading>
            </Box>
        </MyDiv>
    )
}
