import React, { useRef, useState } from 'react'
import { Box, Flex, Grid, GridItem, Heading, Input, Select, Text } from '@chakra-ui/react'
import { CustomButton, CustomToast, NavBar } from '../../components'
import MyDiv from './applyLoan.style'

const ApplyLoan = (props) => {

    const { addToast } = CustomToast()
    const bankRef = useRef()
    const salaryRef = useRef()
    const gstRef = useRef()
    const businessRef = useRef()
    const [bankStatement, setBankStatement] = useState(null)
    const [salarySlip, setSalarySlip] = useState(null)
    const [gst, setGst] = useState(null)
    const [businessDoc, setBusinessDoc] = useState(null)

    const showOpenFileDialog = (type) => {
        if (type === 'bank_statement') {
            bankRef?.current?.click()
            return
        }
        if (type === 'salary_slip') {
            salaryRef.current?.click()
            return
        }
        if (type === 'gst') {
            gstRef.current?.click()
            return
        }
        if (type === 'business') {
            businessRef.current?.click()
            return
        }
    }

    const onChangeFile = (e, type) => {
        if (type === 'bank_statement') {
            setBankStatement(e.target.files[0])
            if (e.target.files[0].type !== 'application/pdf') {
                addToast({ message: 'Bank Statement must be a file of type: pdf. ', status: 'error' });
                return
            }
        }
        if (type === 'salary_slip') {
            setSalarySlip(e.target.files[0])
            if (e.target.files[0].type !== 'application/pdf') {
                addToast({ message: 'Salary Slip must be a file of type: pdf. ', status: 'error' });
                return
            }
        }
        if (type === 'gst') {
            setGst(e.target.files[0])
            if (e.target.files[0].type !== 'application/pdf') {
                addToast({ message: 'Gst must be a file of type: pdf. ', status: 'error' });
                return
            }
        }
        if (type === 'business') {
            setBusinessDoc(e.target.files[0])
            if (e.target.files[0].type !== 'application/pdf') {
                addToast({ message: 'Business Documents must be a file of type: pdf. ', status: 'error' });
                return
            }
        }
    }

    return (
        <MyDiv>
            <Grid className="grid_container grid_gap_sm" alignItems="center">
                <GridItem colSpan={9}>
                    <Heading as="h1" className="text_bold font_family text_4xl font_dark">Apply Loan</Heading>
                </GridItem>
                <GridItem colSpan={3}>
                    <NavBar />
                </GridItem>
            </Grid>
            <Grid className="grid_container grid_gap_lg" mt={8}>
                <GridItem colSpan={6}>
                    <Heading as="h1" className="text_bold font_family text_xl font_dark">Loan Details</Heading>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Customer</Text>
                        <Select className='input-box font_dark text_regular font_family text_lg' name="assigned_to" placeholder="Select Customer">
                            <option value="admin">admin</option>
                            <option value="admin">admin 1</option>
                            <option value="admin">admin 2</option>
                        </Select>
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Loan Product</Text>
                        <Select className='input-box font_dark text_regular font_family text_lg' name="assigned_to" placeholder="Select Loan Product">
                            <option value="admin">admin</option>
                            <option value="admin">admin 1</option>
                            <option value="admin">admin 2</option>
                        </Select>
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Loan Amount (₹)</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter Loan Amount (₹)"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Net Monthly Income (₹)</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter Net Monthly Income (₹)"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Existing EMI (₹)</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter Existing EMI (₹)"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Nature of Job</Text>
                        <Select className='input-box font_dark text_regular font_family text_lg' name="assigned_to" placeholder="Select Nature of Job">
                            <option value="admin">admin</option>
                            <option value="admin">admin 1</option>
                            <option value="admin">admin 2</option>
                        </Select>
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Sector</Text>
                        <Select className='input-box font_dark text_regular font_family text_lg' name="assigned_to" placeholder="Select Sector">
                            <option value="admin">admin</option>
                            <option value="admin">admin 1</option>
                            <option value="admin">admin 2</option>
                        </Select>
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Education</Text>
                        <Input type="text" size="md" name="search_customer" placeholder="Enter Loan Amount (₹)"
                            className="input-box font_dark text_regular font_family text_lg"
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">House Ownership</Text>
                        <Select className='input-box font_dark text_regular font_family text_lg' name="assigned_to" placeholder="Select House Ownership">
                            <option value="admin">admin</option>
                            <option value="admin">admin 1</option>
                            <option value="admin">admin 2</option>
                        </Select>
                    </Box>
                </GridItem>
                <GridItem colSpan={6}>
                    <Heading as="h1" className="text_bold font_family text_xl font_dark">Upload Documents</Heading>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Bank Statement (required for salaried)</Text>
                        <Flex alignItems={'center'} columnGap={5} className="upload-box">
                            <CustomButton size="sm" type="submit" title="Browse" className="btn_theme text_lg text_medium font_family w-100"
                                onClick={() => showOpenFileDialog('bank_statement')}
                            />
                            <Text mb={1} className="text_medium font_family text_lg font_dark">{bankStatement?.name}</Text>
                        </Flex>
                        <Input
                            size="md"
                            name="upload"
                            type="file"
                            accept=".pdf"
                            onChange={(e) => onChangeFile(e, 'bank_statement')}
                            className="d-none"
                            ref={bankRef}
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Salary Slip</Text>
                        <Flex alignItems={'center'} columnGap={5} className="upload-box">
                            <CustomButton size="sm" type="submit" title="Browse" className="btn_theme text_lg text_medium font_family w-100"
                                onClick={() => showOpenFileDialog('salary_slip')}
                            />
                            <Text mb={1} className="text_medium font_family text_lg font_dark">{salarySlip?.name}</Text>
                        </Flex>
                        <Input
                            size="md"
                            name="upload"
                            type="file"
                            accept=".pdf"
                            onChange={(e) => onChangeFile(e, 'salary_slip')}
                            className="d-none"
                            ref={salaryRef}
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">GST (if business)</Text>
                        <Flex alignItems={'center'} columnGap={5} className="upload-box">
                            <CustomButton size="sm" type="submit" title="Browse" className="btn_theme text_lg text_medium font_family w-100"
                                onClick={() => showOpenFileDialog('gst')}
                            />
                            <Text mb={1} className="text_medium font_family text_lg font_dark">{gst?.name}</Text>
                        </Flex>
                        <Input
                            size="md"
                            name="upload"
                            type="file"
                            accept=".pdf"
                            onChange={(e) => onChangeFile(e, 'gst')}
                            className="d-none"
                            ref={gstRef}
                        />
                    </Box>
                    <Box mt={4}>
                        <Text mb={1} className="text_medium font_family text_lg font_dark">Business Documents</Text>
                        <Flex alignItems={'center'} columnGap={5} className="upload-box">
                            <CustomButton size="sm" type="submit" title="Browse" className="btn_theme text_lg text_medium font_family w-100"
                                onClick={() => showOpenFileDialog('business')}
                            />
                            <Text mb={1} className="text_medium font_family text_lg font_dark">{businessDoc?.name}</Text>
                        </Flex>
                        <Input
                            size="md"
                            name="upload"
                            type="file"
                            accept=".pdf"
                            onChange={(e) => onChangeFile(e, 'business')}
                            className="d-none"
                            ref={businessRef}
                        />
                    </Box>
                </GridItem>
            </Grid>
            <Flex mt={8} mb={8} justifyContent='end'>
                <CustomButton type="submit" title="Submit Application" className="btn_theme text_lg text_medium font_family w-100"
                />
            </Flex>
        </MyDiv>
    )
}

export default ApplyLoan
