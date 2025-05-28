import styled from 'styled-components'

const MyDiv = styled.div`
.parent_grid{
  display: grid;
  grid-template-columns: 250px 1fr;
  transition: 0.5s;
  background-color: #F1F9FF;
}
.children_grid{
  padding: 15px 30px;
  // background-color: #F1F9FF;
}
`
export default MyDiv
