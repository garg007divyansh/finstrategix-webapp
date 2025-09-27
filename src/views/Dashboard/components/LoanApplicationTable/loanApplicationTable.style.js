import styled from 'styled-components'

const MyDiv = styled.div`
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
`
export default MyDiv