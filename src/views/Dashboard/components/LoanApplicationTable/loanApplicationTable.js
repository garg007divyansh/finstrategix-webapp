import React from 'react'
import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import MyDiv from './loanApplicationTable.style'

export default function LoanApplicationTable() {
  return (
    <MyDiv>
        <TableContainer mt={5} className='table-container'>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th className='font_family font_dark text_bold text_md'>Loan ID</Th>
                        <Th className='font_family font_dark text_bold text_md'>Customer Name</Th>
                        <Th className='font_family font_dark text_bold text_md'>Product</Th>
                        <Th className='font_family font_dark text_bold text_md'>Amount</Th>
                        <Th className='font_family font_dark text_bold text_md'>Status</Th>
                        <Th className='font_family font_dark text_bold text_md'>Assigned To</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td className='font_dark font_family text_book text_md'>LN-2025-001</Td>
                        <Td className='font_dark font_family text_book text_md'>Divyansh Garg</Td>
                        <Td className='font_dark font_family text_book text_md'>Business Loan</Td>
                        <Td className='font_dark font_family text_book text_md'>₹500,000</Td>
                        <Td className='font_light font_family text_book text_md'>
                            <Text className='pending status-label'>Pending</Text>
                        </Td>
                        <Td className='font_dark font_family text_book text_md'>N/A</Td>
                    </Tr>
                    <Tr>
                        <Td className='font_dark font_family text_book text_md'>LN-2025-001</Td>
                        <Td className='font_dark font_family text_book text_md'>Divyansh Garg</Td>
                        <Td className='font_dark font_family text_book text_md'>Business Loan</Td>
                        <Td className='font_dark font_family text_book text_md'>₹500,000</Td>
                        <Td className='font_light font_family text_book text_md'>
                            <Text className='rejected status-label'>Rejected</Text>
                        </Td>
                        <Td className='font_dark font_family text_book text_md'>N/A</Td>
                    </Tr>
                    <Tr>
                        <Td className='font_dark font_family text_book text_md'>LN-2025-001</Td>
                        <Td className='font_dark font_family text_book text_md'>Divyansh Garg</Td>
                        <Td className='font_dark font_family text_book text_md'>Business Loan</Td>
                        <Td className='font_dark font_family text_book text_md'>₹500,000</Td>
                        <Td className='font_light font_family text_book text_md'>
                            <Text className='approved status-label'>Approved</Text>
                        </Td>
                        <Td className='font_dark font_family text_book text_md'>N/A</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </MyDiv>
  )
}