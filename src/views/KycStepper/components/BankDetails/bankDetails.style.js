import styled from 'styled-components'

const MyDiv = styled.div`
.card-item{
    box-shadow: 0px 1px 4px 0px #00000026;
    padding: 20px;
    border-radius: 8px;
}
.input-box{
    border-radius: 6px!important;
    border: 0.5px solid #98A2B3!important;
    height: 44px!important;
    background: #F8FAFC!important;
    // width: auto;
}
.input-box:focus{
    box-shadow: none;
}
.upload-box{
    border-radius: 6px!important;
    border: 0.5px solid #98A2B3!important;
    height: 44px!important;
    background: #F8FAFC!important;
    padding: 0px 6px;
}
.checkbox_item{
	padding-bottom: 10px;
	color: #000;
	font-weight: 400;
	font-family: "Urbanist", sans-serif!important;
}
.checkbox_item .chakra-checkbox .chakra-checkbox__label{
	font-size: 16px;
    font-weight: 500;
}
`
export default MyDiv
