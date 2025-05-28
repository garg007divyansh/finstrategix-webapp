import styled from 'styled-components'

const MyDiv = styled.div`
.chart_box{
	background-color: #fff;
	border-radius: 8px;
	padding: 12px 10px;
}
.chart_box_inner{
	position: relative;
    height: 300px !important;
}
.chart_box_inner canvas{
	position: relative;
	z-index: 1;
    margin: auto;
    height: 100% !important;
}
.bg_shadow{
	box-shadow: 0px 1px 4px rgba(0,0,0,0.15);
}
.btn_blue{
    background-color: #4E75FF!important;
    border-radius: 4px;
    color: #fff!important;
    border: 1px solid #4E75FF;
}
`
export default MyDiv
