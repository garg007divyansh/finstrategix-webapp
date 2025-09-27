import React from 'react'
import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import MyDiv from './kycTable.style'

export default function KycTable() {
  return (
    <MyDiv>
        <TableContainer mt={5} className='table-container'>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th className='font_family font_dark text_bold text_md'>Customer ID</Th>
                        <Th className='font_family font_dark text_bold text_md'>Name</Th>
                        <Th className='font_family font_dark text_bold text_md'>Mobile</Th>
                        <Th className='font_family font_dark text_bold text_md'>KYC</Th>
                        <Th className='font_family font_dark text_bold text_md'>Sourced By</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>CUST-001</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Ravi Kumar</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>9876543210</Td>
                        <Td className='font_light font_family text_medium text_md col-space'>
                            <Text className='pending status-label'>Pending</Text>
                        </Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>admin</Td>
                    </Tr>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>CUST-002</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Divyansh Garg</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>9123456780</Td>
                        <Td className='font_light font_family text_medium text_md col-space'>
                            <Text className='rejected status-label'>Rejected</Text>
                        </Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>admin</Td>
                    </Tr>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>CUST-003</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Meera Sharma</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>9123456780</Td>
                        <Td className='font_light font_family text_medium text_md col-space'>
                            <Text className='approved status-label'>Completed</Text>
                        </Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>partner_1</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </MyDiv>
  )
}