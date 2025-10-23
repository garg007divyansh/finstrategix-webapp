import React, { useRef, useState } from 'react'
import { Box, Flex, Grid, GridItem, Heading, Input, Select, Text, Textarea } from '@chakra-ui/react'
import MyDiv from './personalDetails.style'
import { CustomButton, CustomToast } from '../../../../components'

const PersonalDetails = (props) => {

    const { addToast } = CustomToast()

    const handleNext = () => {
        props.onClick()
    }

    return (
        <MyDiv>
            <Grid className="grid_container grid_gap_lg" mt={8}>
                <GridItem colSpan={6}>
                    <Box>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">PAN Number</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter PAN Number"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Aadhar Number</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter Aadhar Number"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Full Name</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter Full Name"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Date of Birth</Text>
                        <Input type="date" size="md" name="search_customer"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                </GridItem>
                <GridItem colSpan={6}>
                    <Box>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Mobile Number</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter Mobile Number"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Email</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter Email"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Address</Text>
                        <Textarea type="text" size="md" name="search_customer" placeholder="Enter Address"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                </GridItem>
            </Grid>
            <Flex mt={8} mb={8} justifyContent='end'>
                <CustomButton type="submit" title="Next" onClick={handleNext} className="btn_theme text_lg text_medium font_family w-100" />
            </Flex>
        </MyDiv>
    )
}

export default PersonalDetails
