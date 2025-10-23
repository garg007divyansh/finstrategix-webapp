import React, { useRef, useState } from 'react'
import { Box, Flex, Grid, GridItem, Heading, Input, Select, Text, Textarea } from '@chakra-ui/react'
import MyDiv from './businessDetails.style'
import { CustomButton, CustomToast } from '../../../../components'

const BusinessDetails = (props) => {

    const { addToast } = CustomToast()
    const moaRef = useRef()
    const aoaRef = useRef()
    const registrationRef = useRef()
    const [moaDoc, setMoaDoc] = useState(null)
    const [aoaDoc, setAoaDoc] = useState(null)
    const [registration, setRegistration] = useState(null)
    const [directorsData, setDirectorsData] = useState([
        {
            id: 1,
            directorName: '',
            directorMobile: '',
            directorEmail: '',
            din: '',
            directorPAN: ''
        }
    ])

    const showOpenFileDialog = (type) => {
        if (type === 'moa') {
            moaRef?.current?.click()
            return
        }
        if (type === 'aoa') {
            aoaRef.current?.click()
            return
        }
        if (type === 'registration') {
            registrationRef.current?.click()
            return
        }
    }

    const onChangeFile = (e, type) => {
        if (type === 'moa') {
            setMoaDoc(e.target.files[0])
            if (e.target.files[0].type !== 'application/pdf') {
                addToast({ message: 'MOA must be a file of type: pdf. ', status: 'error' });
                return
            }
        }
        if (type === 'aoa') {
            setAoaDoc(e.target.files[0])
            if (e.target.files[0].type !== 'application/pdf') {
                addToast({ message: 'AOA must be a file of type: pdf. ', status: 'error' });
                return
            }
        }
        if (type === 'registration') {
            setRegistration(e.target.files[0])
            if (e.target.files[0].type !== 'application/pdf') {
                addToast({ message: 'Business Registration must be a file of type: pdf. ', status: 'error' });
                return
            }
        }
    }

    const handleAddDirector = () => {
        const newDirector = {
            id: Date.now(),
            directorName: '',
            directorMobile: '',
            directorEmail: '',
            din: '',
            directorPAN: ''
        }
        setDirectorsData([...directorsData, newDirector])
    }

    const handleRemoveDirector = (id) => {
        const removedDirector = directorsData.find(ele => ele.id === id)
        const updatedDirectors = directorsData.filter(ele => ele.id !== id)
        if (removedDirector.isPrimary && updatedDirectors.length > 0) {
            updatedDirectors[0].isPrimary = true
        }
        setDirectorsData(updatedDirectors)
    }

    const handleInputChange = (id, field, value) => {
        setDirectorsData(directorsData.map(item => 
            item.id === id ? { ...item, [field]: value } : item
        ))
    }

    const handleNext = () => {
        props.onClick()
    }

    return (
        <MyDiv>
            <Grid className="grid_container grid_gap_lg" mt={8}>
                <GridItem colSpan={6}>
                    <Box>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Company Name</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter Company Name"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Company PAN</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter Company PAN"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">GST</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter GST"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Business Address</Text>
                        <Textarea type="text" size="md" name="search_customer" placeholder="Enter Business Address"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                </GridItem>
                <GridItem colSpan={6}>
                    <Box>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">MOA</Text>
                        <Flex alignItems={'center'} columnGap={5} className="upload-box">
                            <CustomButton size="sm" type="submit" title="Browse" className="btn_theme text_lg text_medium font_family w-100"
                                onClick={() => showOpenFileDialog('moa')}
                            />
                            <Text mb={1} className="text_medium font_family text_lg font_dark">{moaDoc?.name}</Text>
                        </Flex>
                        <Input
                            size="md"
                            name="upload"
                            type="file"
                            accept=".pdf"
                            onChange={(e) => onChangeFile(e, 'moa')}
                            className="d-none"
                            ref={moaRef}
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">AOA</Text>
                        <Flex alignItems={'center'} columnGap={5} className="upload-box">
                            <CustomButton size="sm" type="submit" title="Browse" className="btn_theme text_lg text_medium font_family w-100"
                                onClick={() => showOpenFileDialog('aoa')}
                            />
                            <Text mb={1} className="text_medium font_family text_lg font_dark">{aoaDoc?.name}</Text>
                        </Flex>
                        <Input
                            size="md"
                            name="upload"
                            type="file"
                            accept=".pdf"
                            onChange={(e) => onChangeFile(e, 'aoa')}
                            className="d-none"
                            ref={aoaRef}
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Business Registration Certificate</Text>
                        <Flex alignItems={'center'} columnGap={5} className="upload-box">
                            <CustomButton size="sm" type="submit" title="Browse" className="btn_theme text_lg text_medium font_family w-100"
                                onClick={() => showOpenFileDialog('registration')}
                            />
                            <Text mb={1} className="text_medium font_family text_lg font_dark">{registration?.name}</Text>
                        </Flex>
                        <Input
                            size="md"
                            name="upload"
                            type="file"
                            accept=".pdf"
                            onChange={(e) => onChangeFile(e, 'registration')}
                            className="d-none"
                            ref={registrationRef}
                        />
                    </Box>
                </GridItem>
            </Grid>
            <Heading mt={8} as="h1" className="text_bold font_family text_xl font_dark">Director(s)</Heading>
            {directorsData.map((item, index) => (
                <Box key={item.id} className='card-item' mt={index === 0 ? 4 : 6}>
                    <Grid className="grid_container" columnGap={10} rowGap={6}>
                        <GridItem colSpan={6}>
                            <Box>
                                <Text mb={1} className="text_medium font_family text_lg font_dark">
                                    Director Name
                                </Text>
                                <Input
                                    type="text"
                                    size="md"
                                    placeholder="Enter Director Name"
                                    value={item.directorName}
                                    onChange={(e) => handleInputChange(item.id, 'directorName', e.target.value)}
                                    className="input-box font_dark text_regular font_family text_lg"
                                />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <Box>
                                <Text mb={1} className="text_medium font_family text_lg font_dark">
                                    Mobile
                                </Text>
                                <Input
                                    type="text"
                                    size="md"
                                    placeholder="Enter Mobile"
                                    value={item.directorMobile}
                                    onChange={(e) => handleInputChange(item.id, 'directorMobile', e.target.value)}
                                    className="input-box font_dark text_regular font_family text_lg"
                                />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <Box>
                                <Text mb={1} className="text_medium font_family text_lg font_dark">
                                    Email
                                </Text>
                                <Input
                                    type="text"
                                    size="md"
                                    placeholder="Enter Email"
                                    value={item.directorEmail}
                                    onChange={(e) => handleInputChange(item.id, 'directorEmail', e.target.value)}
                                    className="input-box font_dark text_regular font_family text_lg"
                                />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <Box>
                                <Text mb={1} className="text_medium font_family text_lg font_dark">
                                    DIN
                                </Text>
                                <Input
                                    type="text"
                                    size="md"
                                    placeholder="Enter DIN"
                                    value={item.din}
                                    onChange={(e) => handleInputChange(item.id, 'din', e.target.value)}
                                    className="input-box font_dark text_regular font_family text_lg"
                                />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <Box>
                                <Text mb={1} className="text_medium font_family text_lg font_dark">
                                    PAN
                                </Text>
                                <Input
                                    type="text"
                                    size="md"
                                    placeholder="Enter PAN"
                                    value={item.directorPAN}
                                    onChange={(e) => handleInputChange(item.id, 'directorPAN', e.target.value)}
                                    className="input-box font_dark text_regular font_family text_lg"
                                />
                            </Box>
                        </GridItem>
                    </Grid>
                    {directorsData.length > 1 && (
                        <Flex mt={4} justifyContent='end'>
                            <CustomButton
                                type="button"
                                title="Remove Director"
                                onClick={() => handleRemoveDirector(item.id)}
                                className="btn_red text_lg text_medium font_family"
                            />
                        </Flex>
                    )}
                </Box>
            ))}
            <Box mt={6}>
                <CustomButton
                    type="button"
                    title="Add Director"
                    onClick={handleAddDirector}
                    className="btn_green text_lg text_medium font_family"
                />
            </Box>
            <Flex mt={8} mb={8} justifyContent='end'>
                <CustomButton type="submit" title="Next" onClick={handleNext} className="btn_theme text_lg text_medium font_family w-100" />
            </Flex>
        </MyDiv>
    )
}

export default BusinessDetails
