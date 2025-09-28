import React from 'react'
import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import MyDiv from './accountsTable.style'

export default function AccountsTable() {
  return (
    <MyDiv>
        <TableContainer mt={5} className='table-container'>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th className='font_family font_dark text_bold text_md'>Account ID</Th>
                        <Th className='font_family font_dark text_bold text_md'>Customer Name</Th>
                        <Th className='font_family font_dark text_bold text_md'>Loans</Th>
                        <Th className='font_family font_dark text_bold text_md'>Outstanding</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>CUST-001</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Ravi Kumar</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>0</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>₹ 0</Td>
                    </Tr>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>CUST-002</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Divyansh Garg</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>0</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>₹ 0</Td>
                    </Tr>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>CUST-003</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Meera Sharma</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>0</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>₹ 0</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </MyDiv>
  )
}