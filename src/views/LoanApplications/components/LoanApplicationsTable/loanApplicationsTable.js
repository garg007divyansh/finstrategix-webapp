import React from 'react'
import { Flex, Select, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import MyDiv from './loanApplicationsTable.style'
import { CustomButton } from '../../../../components'

export default function LoanApplicationsTable() {
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
                        <Th className='font_family font_dark text_bold text_md'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>CUST-001</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Ravi Kumar</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Business Loan</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>₹ 500,000</Td>
                        <Td className='font_light font_family text_medium text_md col-space'>
                            <Text className='pending status-label'>Pending</Text>
                        </Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>
                            <Select size={'sm'} className='select-box font_dark text_regular font_family text_md w-100' name="assigned_to" placeholder="Select">
                                <option value="admin">admin</option>
                                <option value="admin">admin 1</option>
                                <option value="admin">admin 2</option>
                            </Select>
                        </Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>
                            <Flex columnGap={2}>
                                <CustomButton size="sm" type="submit" title="Approve" className="btn_green text_lg text_medium font_family w-100" />
                                <CustomButton size="sm" type="submit" title="Reject" className="btn_red text_lg text_medium font_family w-100" />
                                <CustomButton size="sm" type="submit" title="Mark Funded" className="btn_theme text_lg text_medium font_family w-100" />
                            </Flex>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>CUST-001</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Ravi Kumar</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Business Loan</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>₹ 500,000</Td>
                        <Td className='font_light font_family text_medium text_md col-space'>
                            <Text className='rejected status-label'>Rejected</Text>
                        </Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>
                            <Select size={'sm'} className='select-box font_dark text_regular font_family text_md w-100' name="assigned_to" placeholder="Select">
                                <option value="admin">admin</option>
                                <option value="admin">admin 1</option>
                                <option value="admin">admin 2</option>
                            </Select>
                        </Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>
                            <Flex columnGap={2}>
                                <CustomButton size="sm" type="submit" title="Approve" className="btn_green text_lg text_medium font_family w-100" />
                                <CustomButton size="sm" type="submit" title="Reject" className="btn_red text_lg text_medium font_family w-100" />
                                <CustomButton size="sm" type="submit" title="Mark Funded" className="btn_theme text_lg text_medium font_family w-100" />
                            </Flex>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td className='font_dark font_family text_medium text_md col-space'>CUST-001</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Ravi Kumar</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>Business Loan</Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>₹ 500,000</Td>
                        <Td className='font_light font_family text_medium text_md col-space'>
                            <Text className='approved status-label'>Completed</Text>
                        </Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>
                            <Select size={'sm'} className='select-box font_dark text_regular font_family text_md w-100' name="assigned_to" placeholder="Select">
                                <option value="admin">admin</option>
                                <option value="admin">admin 1</option>
                                <option value="admin">admin 2</option>
                            </Select>
                        </Td>
                        <Td className='font_dark font_family text_medium text_md col-space'>
                            <Flex columnGap={2}>
                                <CustomButton size="sm" type="submit" title="Approve" className="btn_green text_lg text_medium font_family w-100" />
                                <CustomButton size="sm" type="submit" title="Reject" className="btn_red text_lg text_medium font_family w-100" />
                                <CustomButton size="sm" type="submit" title="Mark Funded" className="btn_theme text_lg text_medium font_family w-100" />
                            </Flex>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </MyDiv>
  )
}