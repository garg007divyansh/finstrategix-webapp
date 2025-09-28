import React from 'react'
import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import MyDiv from './settingsTable.style'

export default function SettingsTable() {
  return (
    <MyDiv>
        <TableContainer mt={5} className='table-container'>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th className='font_family font_dark text_bold text_md'>Partner ID</Th>
                        <Th className='font_family font_dark text_bold text_md'>Name</Th>
                        <Th className='font_family font_dark text_bold text_md'>Contact</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>Acc-001</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Ravi Kumar</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>0</Td>
                    </Tr>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>Acc-002</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Divyansh Garg</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>partner1@lender.com</Td>
                    </Tr>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>Acc-003</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Meera Sharma</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>partner2@lender.com</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </MyDiv>
  )
}