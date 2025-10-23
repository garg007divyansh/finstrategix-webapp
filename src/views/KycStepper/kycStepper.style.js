import styled from 'styled-components'

const MyDiv = styled.div`
.steps_box{
	margin-top: 30px;
	// padding: 0px 60px;
}
.steps_align{
	align-items: center;
	justify-content: space-between;
	border: 1px solid #EAECF0;
    border-radius: 10px;
    // padding: 15px 20px;
}
.step_label{
    padding: 20px;
	width: 33%;
	border-right: 1px solid #EAECF0;
	margin-inline-start: 0!important;
}
.step_label:last-child{
	border-right: 0;
}
.step_label .tab_heading{
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
}
.step_label .tab_heading.default{
	color: #101828;
}
.step_label .tab_heading.visited{
	background: linear-gradient(100deg, #B91F33, #69121D);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.step_label .tab_heading.completed{
	color: #16B364;
}
.step_label .tab_heading span{
	width: 32px;
	height: 32px;
	text-align: center;
	line-height: 32px;
	border-radius: 50%;
	display: inline-block;
	margin-right: 10px;
}
.step_label .tab_heading.default span{
	border: 1px solid #EAECF0;
	color: #667085;
}
.step_label .tab_heading.visited span{
	border: 1px solid #B91F33;
}
.step_label .tab_heading.completed span{
	border: 1px solid #16B364;
}
.step_label .tab_heading svg{
	width: 32px;
	height: 32px;
	text-align: center;
	line-height: 32px;
	border-radius: 50%;
	display: inline-block;
	margin-right: 10px;
}
`
export default MyDiv
