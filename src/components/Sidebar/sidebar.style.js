import styled from 'styled-components'

const MyDiv = styled.div`
.sidebar_wrapper{
    background-color: #F1F9FF;
    height: 100%;
    position: fixed;
    width: 250px;
    // overflow: hidden;
    z-index: 1;
    display: block;
    transition: 0.5s;
    overflow-y: scroll;
    padding: 20px 10px;
}
.app_logo{
	width: 180px;
}
.menu_item{
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding: 10px 15px;
    cursor: pointer;
    color: #000!important;
}
.active_menu_item{
    background-color: #4E75FF;
    border-radius: 6px;
    transition: 0.2s;
}
.active_menu_item{
    color: #fff!important;
}
`
export default MyDiv
