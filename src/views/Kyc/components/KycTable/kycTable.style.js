import styled from 'styled-components'

const MyDiv = styled.div`
.table-container{
    box-shadow: 0px 1px 4px 0px #00000026;
    border-radius: 6px;
}
.status-label{
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
    width: min-content;
}
.pending {
    background: #FF9500;
}
.approved{
    background: #186D30;
}
.rejected{
    background: #FF3B30;
}
.col-space{
    padding: 0.5rem 1.5rem;
}    
`
export default MyDiv