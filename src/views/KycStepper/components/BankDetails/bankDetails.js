import React, { useState } from 'react'
import { Box, Checkbox, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react'
import MyDiv from './bankDetails.style'
import { CustomButton, CustomToast } from '../../../../components'

const BankDetails = (props) => {

    const { addToast } = CustomToast()
    const [bankAccounts, setBankAccounts] = useState([
        {
            id: 1,
            bankName: '',
            branch: '',
            ifsc: '',
            accountNumber: '',
            isPrimary: true
        }
    ])

    const handleAddBank = () => {
        const newBank = {
            id: Date.now(),
            bankName: '',
            branch: '',
            ifsc: '',
            accountNumber: '',
            isPrimary: false
        }
        setBankAccounts([...bankAccounts, newBank])
    }

    const handleRemoveBank = (id) => {
        const removedBank = bankAccounts.find(bank => bank.id === id)
        const updatedBanks = bankAccounts.filter(bank => bank.id !== id)
        if (removedBank.isPrimary && updatedBanks.length > 0) {
            updatedBanks[0].isPrimary = true
        }
        setBankAccounts(updatedBanks)
    }

    const handleInputChange = (id, field, value) => {
        setBankAccounts(bankAccounts.map(bank => 
            bank.id === id ? { ...bank, [field]: value } : bank
        ))
    }

    const handlePrimaryChange = (id) => {
        setBankAccounts(bankAccounts.map(bank => ({
            ...bank,
            isPrimary: bank.id === id
        })))
    }

    const handleNext = () => {
        const isValid = bankAccounts.every(bank => 
            bank.bankName && bank.branch && bank.ifsc && bank.accountNumber
        )
        if (!isValid) {
            addToast({ message: 'Please fill all bank details ', status: 'error' });
            return
        }
        props.onClick(bankAccounts)
    }

    return (
        <MyDiv>
            {bankAccounts.map((bank, index) => (
                <Box key={bank.id} className='card-item' mt={index === 0 ? 8 : 6}>
                    <Grid className="grid_container" columnGap={10} rowGap={6}>
                        <GridItem colSpan={6}>
                            <Box>
                                <Text mb={1} className="text_medium font_family text_lg font_dark">
                                    Bank Name
                                </Text>
                                <Input 
                                    type="text" 
                                    size="md" 
                                    placeholder="Enter Bank Name"
                                    value={bank.bankName}
                                    onChange={(e) => handleInputChange(bank.id, 'bankName', e.target.value)}
                                    className="input-box font_dark text_regular font_family text_lg"
                                />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <Box>
                                <Text mb={1} className="text_medium font_family text_lg font_dark">
                                    Branch
                                </Text>
                                <Input 
                                    type="text" 
                                    size="md" 
                                    placeholder="Enter Branch"
                                    value={bank.branch}
                                    onChange={(e) => handleInputChange(bank.id, 'branch', e.target.value)}
                                    className="input-box font_dark text_regular font_family text_lg"
                                />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <Box>
                                <Text mb={1} className="text_medium font_family text_lg font_dark">
                                    IFSC
                                </Text>
                                <Input 
                                    type="text" 
                                    size="md" 
                                    placeholder="Enter IFSC"
                                    value={bank.ifsc}
                                    onChange={(e) => handleInputChange(bank.id, 'ifsc', e.target.value)}
                                    className="input-box font_dark text_regular font_family text_lg"
                                />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <Box>
                                <Text mb={1} className="text_medium font_family text_lg font_dark">
                                    Account Number
                                </Text>
                                <Input 
                                    type="text" 
                                    size="md" 
                                    placeholder="Enter Account Number"
                                    value={bank.accountNumber}
                                    onChange={(e) => handleInputChange(bank.id, 'accountNumber', e.target.value)}
                                    className="input-box font_dark text_regular font_family text_lg"
                                />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <Box className='checkbox_item'>
                                <Checkbox 
                                    isChecked={bank.isPrimary}
                                    onChange={() => handlePrimaryChange(bank.id)}
                                >
                                    Primary Account
                                </Checkbox>
                            </Box>
                        </GridItem>
                    </Grid>
                    {bankAccounts.length > 1 && (
                        <Flex mt={0} justifyContent='end'>
                            <CustomButton 
                                type="button" 
                                title="Remove Bank" 
                                onClick={() => handleRemoveBank(bank.id)}
                                className="btn_red text_lg text_medium font_family" 
                            />
                        </Flex>
                    )}
                </Box>
            ))}
            <Box mt={6}>
                <CustomButton 
                    type="button" 
                    title="Add Bank" 
                    onClick={handleAddBank}
                    className="btn_green text_lg text_medium font_family" 
                />
            </Box>
            <Flex mt={8} mb={8} justifyContent='end'>
                <CustomButton 
                    type="submit" 
                    title="Submit KYC" 
                    onClick={handleNext} 
                    className="btn_theme text_lg text_medium font_family w-100" 
                />
            </Flex>
        </MyDiv>
    )
}

export default BankDetails